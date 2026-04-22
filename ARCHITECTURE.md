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
│   ├── users/
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
│   ├── bookings/
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
    └── ARCHITECTURE.md
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
│   │
│   ├── booking/
│   │   ├── pages/
│   │   │   └── BookingPage.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── BookingCard.jsx
│   │   │   └── BookingForm.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useBookings.js
│   │   │
│   │   └── services/
│   │       └── bookingService.js
│
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
├── _layout.tsx
├── index.tsx
│
├── auth/
│   ├── login.tsx
│   └── register.tsx
│
├── bookings/
│   ├── index.tsx
│   └── details.tsx
│
└── (tabs)/
    ├── home.tsx
    └── profile.tsx


src/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   └── AuthForm.tsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   │
│   │   └── services/
│   │       └── authService.ts
│   │
│   ├── bookings/
│   │   ├── components/
│   │   │   └── BookingCard.tsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useBookings.ts
│   │   │
│   │   └── services/
│   │       └── bookingService.ts
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   │
│   └── common/
│       └── Loader.tsx
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
