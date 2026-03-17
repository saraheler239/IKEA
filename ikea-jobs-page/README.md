# IKEA Jobs Page - Frontend

אתר React מודרני לתצוגת משרות פנויות והגשת מועמדויות עבור IKEA.

---

## 🚀 התחלה מהירה

### התקנה
```bash
npm install
```

### הרצה במצב פיתוח
```bash
npm start
```
✅ הדפדפן ייפתח אוטומטית ב-`http://localhost:3000`

### בניה לייצור
```bash
npm run build
```

---

## 🎯 פיצ'רים עיקריים

✅ **תצוגת משרות** - רשימה דינמית של משרות פנויות  
✅ **סינון וחיפוש** - לפי חנות, תחום וטקסט חופשי  
✅ **שיתוף ברשתות** - WhatsApp ו-Facebook  
✅ **טופס מועמדות** - עם validation מלא והגנת XSS  
✅ **העלאת קבצים** - תמיכה ב-CV (PDF/DOC/DOCX)  
✅ **שמירת נתונים** - localStorage למילוי אוטומטי  
✅ **נגישות מלאה** - ARIA labels ותמיכה במקלדת  
✅ **רספונסיבי** - עובד בכל המכשירים  

---

## 🛠️ טכנולוגיות

- **React 19** + TypeScript
- **Material-UI (MUI)** - עיצוב
- **React Hook Form** + **Zod** - ניהול טפסים
- **DOMPurify** - הגנת XSS
- **localStorage** - שמירת נתונים

---

## � שירותי מייל - שתי אפשרויות

המערכת תומכת בשני שירותי שליחת מייל לפי הצורך:

### 1️⃣ **ActiveTrail** (ברירת מחדל)
- 📍 **פורט**: 3001
- 📄 **קובץ**: `activeTrailService.ts`
- 📝 **פונקציה**: `sendJobApplication(job, data)`
- ⚡ **יתרון**: מהיר, ללא קבצים מצורפים
- 🔧 **שרת**: `ikea-jobs-server`

**להפעלה**:
```bash
cd ikea-jobs-server
node index.js
```

**שימוש בקוד**:
```typescript
import { sendJobApplication } from '../../services/activeTrailService';
const result = await sendJobApplication(job, data);
```

---

### 2️⃣ **Email Service (Nodemailer)** 
- 📍 **פורט**: 3002
- 📄 **קובץ**: `emailService.client.ts`
- 📝 **פונקציה**: `sendJobApplicationEmail(job, data)`
- ⚡ **יתרון**: תמיכה בהעלאת קבצי CV (PDF/DOC/DOCX)
- 🔧 **שרת**: `ikea-email-service`

**להפעלה**:
```bash
cd ikea-email-service
node index.js
```

**שימוש בקוד**:
```typescript
import { sendJobApplicationEmail } from '../../services/emailService.client';
const result = await sendJobApplicationEmail(job, data);
```

---

### 🔄 החלפה בין שירותים

ב-`useApplicationForm.ts` (שורה 5 + שורה 87):

**ActiveTrail** (ללא קבצים):
```typescript
import { sendJobApplication } from '../../services/activeTrailService';
// ...
const result = await sendJobApplication(job, data);
```

**Email Service** (עם קבצים):
```typescript
import { sendJobApplicationEmail } from '../../services/emailService.client';
// ...
const result = await sendJobApplicationEmail(job, data);
```

---

## �📁 מבנה התיקיות

```
src/
├── components/         # קומפוננטות React
│   ├── JobsList.tsx   # רשימת משרות + פילטרים
│   ├── JobItem.tsx    # כרטיס משרה בודדת
│   └── ApplicationForm/
│       ├── ApplicationForm.tsx
│       ├── useApplicationForm.ts  # 🔥 כאן מחליפים שירות
│       └── schema.ts
├── services/          # שירותי מייל
│   ├── activeTrailService.ts     # ActiveTrail (פורט 3001)
│   └── emailService.client.ts    # Nodemailer (פורט 3002)
├── data/             # JSON Files
│   └── adam_all_orders_json.json
└── config.ts         # קונפיגורציה
```

---

## 🔒 אבטחה

- ✅ **XSS Protection** - DOMPurify על כל קלט משתמש
- ✅ **Form Validation** - Zod schema validation
- ✅ **Encrypted Keys** - מפתחות מוצפנים ב-Base64
- ✅ **File Upload Limits** - הגבלת גודל וסוג קבצים

---

## 📚 למידע נוסף

- [React Documentation](https://reactjs.org/)
- [Material-UI Docs](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
