### DECISIONS ###

## [2026-04-26] Backend Database Selection

### Context
 - The project requires a database capable of handling standard relational data (users, movies, cinemas) while also needing to store flexible, variable-length data structures like movie cast lists and booked seat arrays.

### Decision
 - Use SQLite as the primary database for the current development phase, utilizing Django's `JSONField` for unstructured data.

### Alternatives Considered
 - Option A (PostgreSQL) — why not chosen: While the standard stack for production, it requires more setup overhead for the current early local development phase. 
 - Option B (NoSQL / MongoDB) — why not chosen: The majority of the application data (Users, Bookings, Cinemas) is highly relational, making a purely NoSQL approach inappropriate.

### Rationale
 - SQLite is built-in, requires zero configuration, and since Django 3.1+, natively supports `JSONField`. This allows the team to move quickly on building the core features (movies, schedules, bookings) without worrying about database infrastructure just yet.

### Consequences
* Positive:
  - Zero-config setup for new developers.
  - Rapid prototyping of the `Booking.seats` and `Movie.casts` features.
* Negative:
  - SQLite does not support row-level locking (`select_for_update()`), leading to potential concurrency issues during booking.

### Impact
 - Affected modules: `apps.bookings.views`, `apps.movies.models`
 - Migration/changes required: A transition to PostgreSQL will be required before production deployment to safely handle concurrent ticket purchases.

### Status
 - accepted 

### References
 - N/A

---

## [2026-04-26] Mobile UI Styling Strategy

### Context
- The React Native mobile application needs a performant and maintainable way to style components without adding unnecessary external dependencies or build-step complexities.

### Decision
- Use React Native's native `StyleSheet` API and avoid utility-based styling libraries like TailwindCSS.

### Alternatives Considered
 - Option A (TailwindCSS / NativeWind) — why not chosen: Adds an extra compilation step and dependency overhead to the Expo project, which is currently unneeded.
 - Option B (Styled Components) — why not chosen: Can introduce runtime performance overhead in React Native compared to statically compiled native stylesheets.

### Rationale
- Sticking strictly to React Native's `StyleSheet` ensures maximum performance, adheres to standard React Native conventions, and keeps the bundle size and configuration complexity low. A central `colors.js` file handles theme consistency.

### Consequences
* Positive:
  - Zero extra configuration for styling.
  - Predictable performance.
* Negative:
  - Styles are more verbose to write compared to utility classes.

### Impact
 - Affected modules: Entire React Native frontend (`app/` and `src/components/`).
 - Migration/changes required: None.

### Status
 - accepted

### References
 - N/A