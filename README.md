# Ticketier

A ticket management platform for my Frontend stage 2 task for HNG 13.

## Task details

- Implement a functional ticket management platform with mock authentication and functional dashboard.
- Implement in 3 technologies (React, Twig, Vue)
- Auth with route protection.

## Features

- Dashboard to display ticket data and summary
- CRUD ticket with status (in_progress, open, closed) with appropriate color tagging.
- Mock Authentication with Local storage

## Pages

- Auth pages /auth/signup, /auth/login
- Home page (/)
- Dashboard (/dashboard)
- Dashboard Overview (/dashboard/overview)
- Dashboard settings (/dashboard/settings)
- Tickets (/tickets)
- Ticket details (/tickets/$ticket_id)
- Create new ticket (/tickets/new)
- Edit ticket (/tickets/edit/ticket_id)

### Run locally

```bash
git clone https://github.com/Moluno-xiii/ticket_app_react_ts
cd ticket_app_react_ts
pnpm install
pnpm dev
```
