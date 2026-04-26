### TODOS ###

## User Authentication

### [ ] Unified Login & Register Feature (Single AuthForm) (Priority: medium)

* Description:
  Implement a single authentication page that handles both login and registration using one form. The form will switch between "login" and "register" modes and send a unified request to the backend authentication endpoint.

* Acceptance Criteria:
  - User can switch between Login and Register mode without leaving the page
  - Login authenticates existing users and starts a session
  - Register creates a new user account successfully
  - Backend returns consistent JSON response for both flows
  - Form displays validation errors clearly (e.g., invalid credentials, username taken)
  - After success, user is redirected to the homepage/dashboard
  - Session is maintained after refresh (user stays logged in)

* Dependencies:
  - Authentication endpoint: `POST /api/auth/`
  - Django User model setup
  - Django session authentication enabled
  - CSRF handling for frontend requests

* Estimate:
  - 1 day

* Owner:
  - Cipher