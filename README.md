# IKEA Jobs Portal - מערכת ניהול משרות

מערכת מלאה לניהול משרות פנויות עבור IKEA, כוללת אתר תצוגה ושרת backend לשליחת מועמדויות.

## 📋 תוכן עניינים

- [סקירה כללית](#סקירה-כללית)
- [מבנה הפרויקט](#מבנה-הפרויקט)
- [דרישות מקדימות](#דרישות-מקדימות)
- [התקנה והרצה](#התקנה-והרצה)
- [תיעוד טכני](#תיעוד-טכני)

## 🎯 סקירה כללית

המערכת מורכבת משני חלקים עיקריים:

### 1. **Frontend (ikea-jobs-page)** - אתר לקוח
אתר React המציג משרות פנויות ומאפשר למועמדים להגיש מועמדות.

**טכנולוגיות:**
- React 19 + TypeScript
- Material-UI (MUI) לעיצוב
- React Hook Form + Zod לניהול טפסים
- DOMPurify להגנת XSS
- localStorage לשמירת נתוני משתמש

**פיצ'רים עיקריים:**
- ✅ תצוגת משרות פנויות עם סינון וחיפוש
- ✅ טופס הגשת מועמדות עם ולידציה מתקדמת
- ✅ שיתוף משרות ברשתות חברתיות (WhatsApp, Facebook)
- ✅ שמירת פרטי משתמש ב-localStorage למילוי אוטומטי
- ✅ עיצוב רספונסיבי ונגיש (ARIA)

### 2. **Backend (ikea-jobs-server)** - שרת Node.js
שרת Express המטפל בשליחת מועמדויות דרך ActiveTrail.

**טכנולוגיות:**
- Node.js + Express
- node-fetch לשליחת בקשות HTTP
- dotenv לניהול משתני סביבה
- CORS לתמיכה בבקשות cross-origin

**פיצ'רים עיקריים:**
- ✅ קבלת מועמדויות מה-Frontend
- ✅ שליחת מיילים דרך ActiveTrail API
- ✅ שליחת מייל למועמד (אישור קבלה)
- ✅ שליחת מייל למגייס (פרטי המועמד)

---

## 📁 מבנה הפרויקט

```
ikea/
├── ikea-jobs-page/          # Frontend - React Application
│   ├── public/
│   │   ├── data/
│   │   │   └── adam_all_orders_json.json  # נתוני משרות
│   │   └── index.html
│   ├── src/
│   │   ├── components/      # קומפוננטות React
│   │   │   ├── ApplicationForm/  # טופס הגשת מועמדות
│   │   │   ├── JobItem/          # פריט משרה בודד
│   │   │   └── JobsList/         # רשימת משרות + סינון
│   │   ├── services/        # שירותים (API calls)
│   │   ├── types.ts         # TypeScript interfaces
│   │   └── App.tsx          # קומפוננטה ראשית
│   └── package.json
│
└── ikea-jobs-server/        # Backend - Node.js Server
    ├── src/
    │   ├── controllers/     # בקרים (logic layer)
    │   ├── routes/          # נתיבי API
    │   ├── services/        # שירותים (ActiveTrail)
    │   └── index.js         # נקודת כניסה
    ├── uploads/             # קבצי קורות חיים (זמני)
    ├── .env                 # משתני סביבה
    └── package.json
```

---

## 🔧 דרישות מקדימות

לפני שמתחילים, ודא שמותקן:

- **Node.js** גרסה 16 או גבוהה יותר
- **npm** (מגיע עם Node.js)
- **Git** (אופציונלי, לניהול גרסאות)

---

## 🚀 התקנה והרצה

### שלב 1: הורדת הפרויקט

```bash
# אם הפרויקט ב-Git
git clone <repository-url>
cd ikea

# אם הפרויקט כבר קיים במחשב
cd /Users/saraheler/Desktop/ikea
```

### שלב 2: התקנת תלויות

#### Frontend:
```bash
cd ikea-jobs-page
npm install
```

#### Backend:
```bash
cd ../ikea-jobs-server
npm install
```

### שלב 3: הגדרת משתני סביבה (Backend)

צור/ערוך את הקובץ `.env` בתיקיית `ikea-jobs-server`:

```env
PORT=3001
ACTIVE_TRAIL_TOKEN=your_token_here
RECIPIENT_EMAIL=your_email@example.com
USER_PROFILE_ID=39331
```

⚠️ **חשוב:** הערכים האמיתיים נמצאים אצל מנהל הפרויקט.

### שלב 4: הרצת הפרויקט

פתח **2 טרמינלים נפרדים**:

#### טרמינל 1 - הרצת Backend:
```bash
cd ikea-jobs-server
node src/index.js
```

✅ אמור להופיע: `Server running on port 3001`

#### טרמינל 2 - הרצת Frontend:
```bash
cd ikea-jobs-page
npm start
```

✅ הדפדפן ייפתח אוטומטית ב-`http://localhost:3000`

---

## 📚 תיעוד טכני

### Frontend
👉 [תיעוד Frontend מפורט](./ikea-jobs-page/README.md)

### Backend
👉 [תיעוד Backend מפורט](./ikea-jobs-server/README.md)

---

## 🔐 אבטחה

- ✅ הגנת XSS עם DOMPurify
- ✅ Validation מלא עם Zod
- ✅ Sanitization של קלט משתמש
- ✅ CORS מוגדר נכון
- ✅ משתני סביבה לא נשמרים ב-Git

