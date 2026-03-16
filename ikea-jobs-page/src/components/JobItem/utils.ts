/**
 * Generates a shareable URL for a job posting based on the job ID
 * 
 * The URL includes a query parameter that allows direct linking to a specific job.
 * When users click the link, they'll be taken to the jobs page with this job pre-selected.
 * 
 * @param {number} jobId - The unique identifier of the job
 * @returns {string} Complete URL with job ID query parameter
 * 
 * @example
 * ```typescript
 * const url = generateJobUrl(12345);
 * // Returns: "https://example.com?job=12345"
 * ```
 */
export const generateJobUrl = (jobId: number): string => {
  return `${window.location.origin}?job=${jobId}`;
};

/**
 * Generates WhatsApp share URL with pre-filled text
 * 
 * Creates a WhatsApp Web/App URL that opens with pre-populated text.
 * The text is URL-encoded to ensure special characters are handled correctly.
 * 
 * @param {string} text - The text to share (typically job description + URL)
 * @returns {string} WhatsApp share URL with encoded text
 * 
 * @example
 * ```typescript
 * const url = generateWhatsAppShareUrl("משרה מעולה!\nhttps://example.com/job/123");
 * // Opens WhatsApp with the text pre-filled
 * ```
 */
export const generateWhatsAppShareUrl = (text: string): string => {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
};

/**
 * Generates Facebook share URL for a given URL
 * 
 * Creates a Facebook sharer URL that opens the sharing dialog with the specified URL.
 * The URL is encoded to ensure proper handling of special characters.
 * 
 * @param {string} url - The URL to share on Facebook
 * @returns {string} Facebook sharer URL with encoded target URL
 * 
 * @example
 * ```typescript
 * const fbUrl = generateFacebookShareUrl("https://example.com/job/123");
 * // Opens Facebook share dialog for the specified URL
 * ```
 */
export const generateFacebookShareUrl = (url: string): string => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
};

/**
 * Opens a URL in a new browser tab with security best practices
 * 
 * Uses window.open with 'noopener' and 'noreferrer' flags to prevent:
 * - The new page from accessing window.opener (security risk)
 * - Sending referrer information to the target page (privacy)
 * 
 * @param {string} url - The URL to open in a new tab
 * 
 * @example
 * ```typescript
 * openInNewTab("https://wa.me/?text=Hello");
 * // Opens WhatsApp in a new secure tab
 * ```
 */
export const openInNewTab = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
