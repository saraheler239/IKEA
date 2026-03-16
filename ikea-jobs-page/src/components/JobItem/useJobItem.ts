import { useCallback, useMemo, useState } from 'react';
import { Job } from '../../types';
import {
  generateJobUrl,
  generateWhatsAppShareUrl,
  generateFacebookShareUrl,
  openInNewTab,
} from './utils';

/**
 * Return type for the useJobItem hook
 */
interface UseJobItemReturn {
  /** Whether the job details section is currently expanded */
  isOpen: boolean;
  /** Function to toggle the job details visibility */
  toggleOpen: () => void;
  /** The shareable URL for this specific job */
  jobUrl: string;
  /** Function to share the job on WhatsApp */
  shareOnWhatsApp: () => void;
  /** Function to share the job on Facebook */
  shareOnFacebook: () => void;
}

/**
 * Custom hook for managing JobItem component state and sharing functionality
 * 
 * This hook handles:
 * - Toggle state for expanding/collapsing job details
 * - Generation of shareable job URLs
 * - Social media sharing actions (WhatsApp & Facebook)
 * - Memoization of computed values for performance
 * 
 * @param {Job} job - The job object containing details to share
 * @returns {UseJobItemReturn} Object containing state and handlers
 * 
 * @example
 * ```tsx
 * const { isOpen, toggleOpen, shareOnWhatsApp, shareOnFacebook } = useJobItem(job);
 * 
 * // Use in component
 * <button onClick={toggleOpen}>הצג פרטים</button>
 * <button onClick={shareOnWhatsApp}>שתף בוואטסאפ</button>
 * ```
 */
export const useJobItem = (job: Job): UseJobItemReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const jobUrl = useMemo(() => generateJobUrl(job.order_id), [job.order_id]);

  const shareText = useMemo(() => {
    return `${job.description} - ${job.living_area1}\n${jobUrl}`;
  }, [job.description, job.living_area1, jobUrl]);

  const shareOnWhatsApp = useCallback(() => {
    const url = generateWhatsAppShareUrl(shareText);
    openInNewTab(url);
  }, [shareText]);

  const shareOnFacebook = useCallback(() => {
    const url = generateFacebookShareUrl(jobUrl);
    openInNewTab(url);
  }, [jobUrl]);

  return {
    isOpen,
    toggleOpen,
    jobUrl,
    shareOnWhatsApp,
    shareOnFacebook,
  };
};
