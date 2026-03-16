import React from 'react';
import { Divider, Chip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DOMPurify from 'dompurify';
import { Job } from '../../types';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import { useJobItem } from './useJobItem';
import { SHARE_LABELS, JOB_LABELS } from './constants';
import { getDaysRemaining, formatDaysRemaining } from '../JobsList/utils';
import {
  JobCard,
  JobTitle,
  ShareButtonsContainer,
  WhatsAppButton,
  FacebookButton,
  JobDetails,
  JobInfo,
  JobDescription,
} from './JobItem.styles';

/**
 * Props for the JobItem component
 */
interface JobItemProps {
  /** The job object containing all job details to display */
  job: Job;
}

/**
 * JobItem Component - Displays a single job posting with sharing functionality
 * 
 * Features:
 * - Collapsible job details
 * - Social media sharing (WhatsApp & Facebook)
 * - XSS protection with DOMPurify for HTML content
 * - Integrated application form
 * - Optimized with React.memo to prevent unnecessary re-renders
 * 
 * @component
 * @example
 * ```tsx
 * <JobItem job={{
 *   order_id: 123,
 *   description: "מנהל/ת סניף",
 *   profession_name: "ניהול",
 *   living_area1: "תל אביב",
 *   closeDate_ddmmyyy: "31/12/2024",
 *   notes: "<p>תיאור המשרה...</p>"
 * }} />
 * ```
 */
const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const { isOpen, toggleOpen, shareOnWhatsApp, shareOnFacebook } = useJobItem(job);

  const sanitizedNotes = React.useMemo(
    () => DOMPurify.sanitize(job.notes),
    [job.notes]
  );

  const daysRemaining = React.useMemo(
    () => getDaysRemaining(job.close_date),
    [job.close_date]
  );

  return (
    <JobCard>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <JobTitle variant="h6" onClick={toggleOpen} style={{ flex: 1, cursor: 'pointer' }}>
          {job.description}
        </JobTitle>
        
        {daysRemaining >= 0 && daysRemaining <= 14 && (
          <Chip
            icon={<AccessTimeIcon />}
            label={formatDaysRemaining(daysRemaining)}
            color={daysRemaining <= 3 ? 'error' : daysRemaining <= 7 ? 'warning' : 'info'}
            size="small"
          />
        )}
      </div>

      <ShareButtonsContainer>
        <WhatsAppButton
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={shareOnWhatsApp}
          size="small"
          aria-label={`${SHARE_LABELS.WHATSAPP} - ${job.description}`}
        >
          {SHARE_LABELS.WHATSAPP}
        </WhatsAppButton>
        
        <FacebookButton
          variant="contained"
          startIcon={<FacebookIcon />}
          onClick={shareOnFacebook}
          size="small"
          aria-label={`${SHARE_LABELS.FACEBOOK} - ${job.description}`}
        >
          {SHARE_LABELS.FACEBOOK}
        </FacebookButton>
      </ShareButtonsContainer>

      <JobInfo>
        <strong>{JOB_LABELS.FIELD}</strong>
        {job.order_def_prof_name1 || job.profession_name}
      </JobInfo>

      <JobInfo>
        <strong>{JOB_LABELS.AREA}</strong>
        {job.living_area1}
        {job.living_area2 && `, ${job.living_area2}`}
      </JobInfo>

      <JobInfo>
        <strong>{JOB_LABELS.DEADLINE}</strong>
        {job.closeDate_ddmmyyy}
      </JobInfo>

      {isOpen && (
        <JobDetails>
          <JobTitle variant="h6">
            {JOB_LABELS.FULL_DESCRIPTION}
          </JobTitle>

          <JobDescription
            dangerouslySetInnerHTML={{ __html: sanitizedNotes }}
          />

          <Divider sx={{ my: 3 }} />
          
          <ApplicationForm job={job} />
        </JobDetails>
      )}
    </JobCard>
  );
};

export default React.memo(JobItem);
