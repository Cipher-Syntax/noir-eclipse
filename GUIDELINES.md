### GUIDELINES ###

## 1. Purpose

This document defines the **operational contract** between developers and AI tools.
It ensures consistency, prevents regressions, and enforces architectural discipline across all projects.

---

## 2. Core Principles

* **Consistency over cleverness**
* **Explicit over implicit**
* **Extend, don’t rewrite**
* **Single source of truth**
* **Separation of concerns is mandatory**
* **Performance is a feature, not an afterthought**

---

## 3. AI Operating Rules (CRITICAL)

AI must:

1. Read this file before generating any output
2. Follow existing patterns in the codebase
3. Never introduce new architecture without justification
4. Never refactor beyond the requested scope
5. Ask for clarification if requirements are ambiguous
6. Prefer minimal, surgical changes over large rewrites
7. Preserve backward compatibility unless explicitly told otherwise

---

## 4. Project Structure (Generic)

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
    ├── FEATURES.md
    ├── DECISIONS.md
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

## 5. Documentation System (Persistent Memory Layer)

AI must treat `/docs` as **long-term memory**.

### Required Files:

* `/docs/features.md` → implemented features
* `/docs/decisions.md` → architectural decisions
* `/docs/todos.md` → pending work
* `/docs/bugs.md` → known issues

### Rules:

* Any new feature → update `features.md`
* Any major decision → update `decisions.md`
* Any bug → log in `bugs.md`

---

## 6. Architecture Rules

### General

* Follow layered architecture:

  * Presentation layer
  * Application/Service layer
  * Data access layer
* No business logic in controllers/views
* Use services/use-cases for logic

### Backend

* Use clear module boundaries
* Avoid circular dependencies
* Optimize queries (no N+1 issues)

### Frontend

* Components must be reusable and isolated
* State management must be predictable
* Avoid tightly coupled UI logic

---

## 7. Coding Standards

### General

* Use meaningful variable and function names
* Avoid magic numbers
* Write self-documenting code
* Add comments only for non-obvious logic

### Error Handling

* Never silently fail
* Always return structured errors
* Log critical failures

### Performance

* Avoid unnecessary loops and queries
* Cache where appropriate
* Use lazy loading when possible

---

## 8. API Design Rules

* Use consistent naming conventions
* Use REST or clearly defined patterns
* Always validate input
* Return structured JSON responses:

```json
{
"success": true,
"data": {},
"error": null
}
```

---

## 9. Database Rules

* Normalize unless denormalization is justified
* Index frequently queried fields
* Use transactions for critical operations
* Never run unsafe migrations in production

---

## 10. Version Control Rules

* One feature per branch
* Use meaningful commit messages:

```
feat: add ride acceptance logic
fix: resolve websocket disconnect issue
refactor: optimize query performance
```

---

## 11. Testing Rules

* Test business logic, not just endpoints
* Cover edge cases
* Avoid redundant tests
* Ensure reproducibility

---

## 12. Security Rules

* Validate all inputs
* Sanitize user data
* Protect against common vulnerabilities:

  * SQL Injection
  * XSS
  * CSRF
* Never expose secrets in code

---

## 13. Realtime / Async Systems (Optional)

* Use event-driven patterns when needed
* Avoid polling when WebSockets/events are available
* Ensure idempotency in async operations

---

## 14. Scalability Guidelines

* Design for horizontal scaling
* Avoid shared mutable state
* Use queues for heavy workloads

---

## 15. Logging & Monitoring

* Log important actions and errors
* Avoid excessive logging
* Use structured logs

---

## 16. How to Add Features (Strict Workflow)

1. Define requirement
2. Check existing architecture
3. Update `/docs/decisions.md` if needed
4. Implement backend logic
5. Implement frontend integration
6. Add tests
7. Update `/docs/features.md`

---

## 17. Constraints Handling

* Respect existing system limitations
* Do not override constraints without approval
* Document any workaround

---

## 18. Anti-Patterns (DO NOT DO)

* Mixing business logic in controllers/views
* Large unstructured components
* Direct DB access from UI
* Hardcoding values that should be configurable
* Ignoring existing architecture

---

## 19. AI Response Format Rules

When generating code:

* Include imports
* Comment non-obvious logic
* Highlight risks using:

⚠️ Watch out:

* If uncertain about something:

  * Mark with [uncertain]
  * Suggest verifying documentation

---

## 20. Extensibility Clause

This file is **global and reusable**.

Project-specific rules must be added in:
```
/docs/project-rules.md
```

AI must:

* Apply global rules first
* Then apply project-specific overrides

---

## 21. Final Directive

If any instruction conflicts:

1. Follow project-specific rules
2. Otherwise follow this file
3. If still unclear → ASK before proceeding

---
