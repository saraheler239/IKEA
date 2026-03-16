/**
 * Type Definitions for IKEA Jobs Application
 * 
 * This file contains all TypeScript interfaces and types used throughout the application.
 */

/**
 * Job interface representing a single job posting
 * 
 * This interface matches the structure of job data from the JSON file.
 * Field names are kept in their original format from the backend system.
 * 
 * @interface Job
 * 
 * @example
 * ```typescript
 * const job: Job = {
 *   order_id: 12345,
 *   order_snif: 100,
 *   description: "מנהל/ת סניף",
 *   name_snif: "IKEA תל אביב",
 *   profession_name: "ניהול",
 *   order_def_prof_name1: "ניהול",
 *   work_area: "מרכז",
 *   update_date: "2024-01-15",
 *   updateDate_ddmmyyyy: "15/01/2024",
 *   close_date: "2024-02-15",
 *   closeDate_ddmmyyy: "15/02/2024",
 *   notes: "<p>תיאור המשרה...</p>",
 *   notes_text: "תיאור המשרה...",
 *   email_rakaz: "recruiter@ikea.com",
 *   living_area1: "תל אביב",
 *   living_area2: null
 * };
 * ```
 */
export interface Job {
  /** מזהה ייחודי של המשרה - משמש לזיהוי ולינקים */
  order_id: number;
  
  /** מספר סניף - מזהה מספרי של החנות */
  order_snif: number;
  
  /** שם המשרה - כותרת קצרה  */
  description: string;
  
  /** שם הסניף / חנות  */
  name_snif: string;
  
  /** שם התחום הכללי  */
  profession_name: string;
  
  /** שם המשרה המלא עם קוד  */
  tat_profession_name?: string;
  
  /** שם התחום כפי שמופיע בסינון  */
  order_def_prof_name1: string;
  
  /** אזור עבודה גאוגרפי */
  work_area: string;
  
  /** תאריך עדכון בפורמט ISO למיון (YYYY-MM-DD) */
  update_date: string;
  
  /** תאריך עדכון לתצוגה למשתמש (DD/MM/YYYY) */
  updateDate_ddmmyyyy: string;
  
  /** תאריך סגירה בפורמט ISO (YYYY-MM-DD) */
  close_date: string;
  
  /** תאריך אחרון להגשה לתצוגה (DD/MM/YYYY) */
  closeDate_ddmmyyy: string;
  
  /** תיאור מלא של המשרה בפורמט HTML - מסוכן! צריך sanitization */
  notes: string;
  
  /** תיאור המשרה כטקסט נקי ללא HTML */
  notes_text: string;
  
  /** אימייל של רכז הגיוס */
  email_rakaz: string;
  
  /** אזור מגורים ראשי  */
  living_area1: string | null;
  
  /** אזור מגורים משני אופציונלי  */
  living_area2: string | null;
}
