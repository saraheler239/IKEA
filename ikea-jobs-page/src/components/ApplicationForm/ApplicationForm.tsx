import React, { useMemo } from 'react';
import { FormProvider } from 'react-hook-form';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Job } from '../../types';
import { useApplicationForm } from './useApplicationForm';
import { FILE_CONFIG } from './constants';
import {
  FormContainer,
  FormTitle,
  FormRow,
  FieldWrapper,
  StyledInput,
  FileLabel,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from './ApplicationForm.styles';

/**
 * Props for ApplicationForm component
 */
interface ApplicationFormProps {
  /** Job object containing job details */
  job: Job;
}

/**
 * ApplicationForm Component
 * 
 * Renders a form for job application submission with validation,
 * XSS protection, and localStorage support for saving user data.
 * 
 * Features:
 * - Full form validation with Zod
 * - XSS protection with DOMPurify
 * - Auto-save user details to localStorage
 * - File upload support (optional CV)
 * - Accessible with ARIA labels
 * 
 * @component
 * @example
 * ```tsx
 * <ApplicationForm job={jobData} />
 * ```
 */
const ApplicationForm: React.FC<ApplicationFormProps> = ({ job }) => {
  const { methods, isSubmitting, success, error, onSubmit } = useApplicationForm(job);
  const { register, handleSubmit, watch, formState: { errors } } = methods;
  
  const cvFile = watch('cvFile');
  const fileName = useMemo(
    () => cvFile?.[0]?.name || FILE_CONFIG.PLACEHOLDER,
    [cvFile]
  );

  if (success) {
    return (
      <SuccessMessage>
        <h3>✅ תודה רבה!</h3>
        <p>
          המועמדות שלך נשלחה בהצלחה.
          <br />
          ניצור איתך קשר בהקדם.
        </p>
      </SuccessMessage>
    );
  }

  return (
    <FormContainer>
      <FormTitle>הגשת מועמדות</FormTitle>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormRow>
            <FieldWrapper error={!!errors.fullName}>
              <label htmlFor="fullName">שם מלא *</label>
              <StyledInput
                id="fullName"
                {...register('fullName')}
                placeholder="הזן שם מלא"
                error={!!errors.fullName}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <span id="fullName-error" className="error" role="alert">
                  {errors.fullName.message}
                </span>
              )}
            </FieldWrapper>

            <FieldWrapper error={!!errors.phone}>
              <label htmlFor="phone">נייד *</label>
              <StyledInput
                id="phone"
                {...register('phone')}
                placeholder="050-1234567"
                error={!!errors.phone}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="error" role="alert">
                  {errors.phone.message}
                </span>
              )}
            </FieldWrapper>
            <FieldWrapper error={!!errors.email}>
              <label htmlFor="email">אימייל *</label>
              <StyledInput
                id="email"
                type="email"
                {...register('email')}
                placeholder="email@example.com"
                error={!!errors.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="error" role="alert">
                  {errors.email.message}
                </span>
              )}
            </FieldWrapper>

            <FieldWrapper error={!!errors.cvFile}>
              <label htmlFor="cvFile">קורות חיים (אופציונלי)</label>
              <FileLabel htmlFor="cvFile">
                <AttachFileIcon style={{ transform: 'rotate(45deg)' }} />
                <span>{fileName}</span>
                <input
                  id="cvFile"
                  type="file"
                  accept={FILE_CONFIG.ACCEPTED_TYPES}
                  {...register('cvFile')}
                  style={{ display: 'none' }}
                  aria-describedby={errors.cvFile ? 'cvFile-error' : undefined}
                />
              </FileLabel>
              {errors.cvFile && (
                <span id="cvFile-error" className="error" role="alert">
                  {errors.cvFile.message as string}
                </span>
              )}
            </FieldWrapper>
          </FormRow>

          {error && (
            <ErrorMessage role="alert" aria-live="polite">
              {error}
            </ErrorMessage>
          )}

          <FormRow>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'שולח...' : 'שלח'}
            </SubmitButton>
          </FormRow>
        </form>
      </FormProvider>
    </FormContainer>
  );
};

export default React.memo(ApplicationForm);
