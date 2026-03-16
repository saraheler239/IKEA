import DOMPurify from 'dompurify';

/**
 * Sanitizes user input to prevent XSS attacks
 * 
 * Removes all HTML tags while keeping text content intact.
 * Uses DOMPurify library for secure sanitization.
 * 
 * @param value - Raw user input string
 * @returns Sanitized and trimmed string
 * 
 * @example
 * ```ts
 * sanitizeInput('<script>alert("xss")</script>Hello')
 * // Returns: "Hello"
 * ```
 */
export const sanitizeInput = (value: string): string => {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
  }).trim();
};

/**
 * Extracts error message from various error formats
 * 
 * Handles string errors, object errors with Message/message properties,
 * and falls back to default message if parsing fails.
 * 
 * @param error - Error object or string from API/exception
 * @param defaultMessage - Fallback message if parsing fails
 * @returns Human-readable error message
 * 
 * @example
 * ```ts
 * extractErrorMessage({ Message: "Server error" }, "Unknown error")
 * // Returns: "Server error"
 * 
 * extractErrorMessage("Connection failed", "Unknown error")
 * // Returns: "Connection failed"
 * ```
 */
export const extractErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error && typeof error === 'object') {
    const errObj = error as Record<string, any>;
    return errObj.Message || errObj.message || JSON.stringify(errObj);
  }
  
  return defaultMessage;
};
