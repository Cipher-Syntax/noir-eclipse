# 📁 FULL STACK ARCHITECTURE (FINAL CLEAN VERSION)

---

## 🔧 BACKEND (Django + DRF)

```bash
backend/
│
├── manage.py
├── .env
├── requirements.txt
│
├── backend/
│   ├── __init__.py
│   ├── settings.py  
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── apps/
│   ├── __init__.py
│   │
│   ├── app_name/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── services.py
│   │   ├── selectors.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── tests/
│   │   └── migrations/
│   │
│   ├── app_name/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── services.py
│   │   ├── selectors.py
│   │   ├── tests/
│   │   └── migrations/
│   │
│   └── core/
│       ├── models.py
│       ├── permissions.py
│       ├── pagination.py
│       └── utils.py
│
├── common/
│   ├── exceptions.py
│   ├── middleware.py
│   └── constants.py
│
├── static/
├── media/
└── docs/       
    ├── PROJECT-SPECIFIC-RULES.md
    ├── DECISIONS.md
    ├── FEATURES.md
    ├── TODOS.md
    └── BUGS.md

```

## 🌐 WEB (React + Tailwind)

```bash
src/
│
├── app/
│   ├── App.jsx
│   ├── routes.jsx
│   └── providers.jsx
│
├── layouts/
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
│
├── features/
│   ├── auth/
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   │
│   │   ├── components/
│   │   │   └── AuthForm.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   └── services/
│   │       └── authService.js
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Modal.jsx
│   │
│   └── common/
│       ├── Navbar.jsx
│       ├── Sidebar.jsx
│       └── Loader.jsx
│
├── services/
│   └── api.js
│
├── hooks/
│   └── useDebounce.js
│
├── context/
│   └── AuthContext.jsx
│
├── utils/
│   ├── formatDate.js
│   └── currency.js
│
├── styles/
│   └── index.css
│
└── assets/
    ├── images/
    ├── icons/
    └── fonts/

```

## 📱 MOBILE APP (React Native + Expo)

```bash
app/
│
├── _layout.js
├── index.js
│
├── auth/
│   ├── login.js
│   └── register.js
│
├── bookings/
│   ├── index.js
│   └── details.js
│
└── (tabs)/
    ├── home.js
    └── profile.js


src/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   └── AuthForm.js
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   │
│   │   └── services/
│   │       └── authService.js
│   │
├── components/
│   ├── ui/
│   │   ├── Button.js
│   │   └── Input.js
│   │
│   └── common/
│       └── Loader.js
│
├── services/
│   └── api.ts
│
├── hooks/
│   └── useDebounce.ts
│
├── utils/
│   └── formatDate.ts
│
├── store/
│   └── authStore.ts
│
└── constants/
    └── config.ts

assets/
├── images/
├── icons/
└── fonts/

```
```bash
ARCHITECTURE.md
GUIDELINES.md

```