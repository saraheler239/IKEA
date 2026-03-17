# IKEA Email Service

שירות עצמאי לשליחת מיילים עם קבצים מצורפים - **ללא תלות ב-ActiveTrail**

## מה זה עושה?

✅ מקבל מועמדות למשרה מה-Frontend  
✅ שולח מייל אישור למועמד  
✅ שולח מייל מפורט לרכז גיוס עם קובץ CV מצורף  
✅ תומך ב-PDF, DOC, DOCX עד 5MB  

## התקנה

```bash
npm install
```

## הגדרת .env

ערוך את קובץ `.env` והזן את פרטי ה-SMTP שלך:

```env
PORT=3002
RECIPIENT_EMAIL=sarah@daatsolutions.co.il
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=sarah@daatsolutions.co.il
EMAIL_PASS=your-app-password
```

## הרצה

```bash
node index.js
```

השרת ירוץ על: `http://localhost:3002`

## API

### POST /api/send-application

**Headers:**  
`Content-Type: multipart/form-data`

**Body (Form Data):**
- `fullName` - שם מלא
- `email` - אימייל המועמד
- `phone` - טלפון
- `job` - אובייקט JSON של המשרה (stringified)
- `cvFile` - קובץ CV (אופציונלי)

**Response:**
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

## עדכון Frontend

שנה את ה-URL ב-`activeTrailService.ts`:

```typescript
const response = await fetch('http://localhost:3002/api/send-application', {
  method: 'POST',
  body: formData,
});
```

## מבנה הפרויקט

```
ikea-email-service/
├── index.js                    # שרת Express ראשי
├── routes.js                   # Routes + Multer
├── applicationController.js    # Logic של טיפול במועמדות
├── emailService.js            # שליחת מיילים עם Nodemailer
├── .env                       # הגדרות SMTP
├── package.json
└── README.md
```

---

**הכל עובד עצמאית! אין תלות ב-ActiveTrail כלל.** 🎉
