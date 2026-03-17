import { Job } from '../types';

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  cvFile?: File;
}

interface SendApplicationResult {
  success: boolean;
  error?: any;
}

export const sendJobApplicationEmail = async (
  job: Job,
  applicationData: ApplicationData
): Promise<SendApplicationResult> => {
  try {
    const formData = new FormData();
    formData.append('job', JSON.stringify(job));
    formData.append('fullName', applicationData.fullName);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    
    if (applicationData.cvFile) {
      formData.append('cvFile', applicationData.cvFile);
    }

    const response = await fetch('http://localhost:3002/api/send-application', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData };
    }

    return { success: true };
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, error: 'שגיאת רשת - אנא נסה שוב' };
  }
};
