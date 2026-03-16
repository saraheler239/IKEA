/**
 * JobsList Constants
 * 
 * This file contains all constant values used in the JobsList component:
 * - UI labels and messages (Hebrew)
 * - Filter keys for query parameters
 */

/**
 * User-facing labels and messages in Hebrew
 * 
 * Used throughout the JobsList component for consistent messaging:
 * - Page title
 * - Filter placeholders and options
 * - Button labels
 * - Results counter text
 * - Empty state message
 */
export const LABELS = {
  PAGE_TITLE: 'לוח משרות',
  SEARCH_PLACEHOLDER: 'חיפוש חופשי...',
  ALL_STORES: 'כל החנויות',
  ALL_FIELDS: 'כל התחומים',
  SEARCH_BUTTON: 'חיפוש',
  CLEAR_BUTTON: 'נקה הגדרות',
  RESULTS_COUNT: 'נמצאו',
  RESULTS_SUFFIX: 'משרות',
  NO_RESULTS: 'לא נמצאו משרות העונות על החיפוש.',
} as const;

/**
 * Filter keys for URL query parameters and state management
 * 
 * Use these constants for consistent filter identification
 * across URL params, state, and localStorage.
 */
export const FILTER_KEYS = {
  BRANCH: 'branch',
  PROFESSION: 'profession',
  SEARCH: 'search',
} as const;
