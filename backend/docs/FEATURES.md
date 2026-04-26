### FEATURES ###

## [2026-04-26] OTP Authentication & User Management

### Summary
Custom email-based user registration with a 6-digit OTP verification flow and JWT session management.

### Scope
* Included:
  - Custom `User` model using `email`.
  - OTP generation and email delivery.
  - JWT generation upon OTP verification or login.
  - Profile retrieval and logout logic.
* Excluded:
  - Password reset flow.
  - Social login (OAuth).

### Components
* Backend:
  - Models: `User`, `OTP`
  - APIs: `RegisterRequestOTPView`, `VerifyOTPView`, `LoginView`, `UserProfileView`
  - Services: `django.core.mail.send_mail`, `rest_framework_simplejwt`
* Frontend:
  - Pages/Components: `AuthContext.js`, `app/auth/landingPage.js`, `app/(tabs)/home/profile.js`
* Realtime/Async (if any):
  - None (OTP emails are currently sent synchronously).

### Usage (Happy Path)
 1. User enters email and password on the registration screen.
 2. Backend creates an inactive user and sends a 6-digit OTP to the email.
 3. User enters the OTP.
 4. Backend verifies OTP, activates the account, and returns Access/Refresh tokens.
 5. User is routed to the Home tab.

### Edge Cases
 - User requests OTP but already has an active account (handled: returns 400 error).
 - User requests OTP but already has an *inactive* account (handled: updates password and resends OTP).
 - OTP expires after 5 minutes.

### Dependencies
 - `djangorestframework-simplejwt`
 - `@react-native-async-storage/async-storage`
 - `axios`

### Status
* complete

### Notes
 - JWT refresh interceptor is set up in `api.js`.

---

## [2026-04-26] Movie & Cinema Booking Core

### Summary
Browsing categorized movies, viewing schedules, and booking specific seats.

### Scope
* Included:
  - Categorized movie fetching (Now Showing, Popular, Coming Soon).
  -  Booking creation mapped to the authenticated user.
  -  JSON-based seat selection.
* Excluded:
  -  Payment gateway processing.
  -  Interactive seat-map UI on the frontend.

### Components
* Backend:
  -  Models: `Movie`, `Cinema`, `MovieSchedule`, `Booking`
  -  APIs: List/Create and Detail views for all models.
  -  Services: Queryset optimization using `select_related`.
* Frontend:
  - Pages/Components: `app/(tabs)/home/index.js`, `app/(tabs)/home/bookings.js`
* Realtime/Async (if any):
  - None.

### Usage (Happy Path)
 1. User browses Home screen and selects a movie.
 2. User chooses a cinema schedule and selects seats.
 3. User confirms booking.
 4. Booking is saved and appears in the "My Tickets" tab.

### Edge Cases
 - User tries to fetch bookings they do not own (handled: `get_queryset` strictly filters by `request.user`).

### Dependencies
 - None.

### Status
 - in-progress

### Notes
- Booking currently lacks concurrency locks due to SQLite usage.