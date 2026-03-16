/**
 * JobItem Constants
 * 
 * This file contains configuration and labels for the JobItem component:
 * - Social media sharing settings (colors, URLs)
 * - UI labels for sharing buttons
 * - Job information field labels
 */

/**
 * Social media platform configurations
 * 
 * Each platform includes:
 * - COLOR: Brand color for the share button
 * - HOVER_COLOR: Darker shade for hover state
 * - SHARE_URL: Base URL for the sharing API
 */
export const SOCIAL_MEDIA = {
  WHATSAPP: {
    COLOR: '#25D366',
    HOVER_COLOR: '#20BD5A',
    SHARE_URL: 'https://wa.me/',
  },
  FACEBOOK: {
    COLOR: '#1877F2',
    HOVER_COLOR: '#145DBF',
    SHARE_URL: 'https://www.facebook.com/sharer/sharer.php',
  },
} as const;

/**
 * Labels for social media share buttons (Hebrew)
 */
export const SHARE_LABELS = {
  WHATSAPP: 'שתף בוואטסאפ',
  FACEBOOK: 'שתף בפייסבוק',
} as const;

/**
 * Labels for job information fields (Hebrew)
 * 
 * Used to display job metadata in a consistent format
 */
export const JOB_LABELS = {
  FIELD: 'תחום:',
  AREA: 'אזור:',
  DEADLINE: 'תאריך אחרון להגשה:',
  FULL_DESCRIPTION: 'תיאור מלא:',
} as const;
