# React Admin Dashboard

This is a simple admin dashboard built using **React**. It includes a login page, a dashboard layout with sidebar and header, a users table with search and pagination, a settings page with dark mode toggle, and edit functionality with toast notifications.

---

## Features

- **Login Page**
  - Simple mock authentication
  - Logout button
- **Dashboard Layout**
  - Sidebar with navigation (Dashboard, Users, Settings)
  - Header
  - Main content area
  - Responsive design using flexbox
- **Users Page**
  - Fetches user data from API (JSONPlaceholder)
  - Search users by name or email
  - Pagination (5 users per page)
  - Edit user info through a modal
  - Toast notifications for actions
- **Settings Page**
  - Dark mode toggle
  - Notification preferences
- **Styling**
  - Clean and simple design
  - Hover effects on table rows
  - Dark and light mode support

---

## How to Run the Project


### Clone the repository

```bash
git clone https://github.com/DhruvSangwan/react-admin/

```

### Install dependencies
```
cd react-admin
npm install
```
### Start the Development Server 
```
npm run dev 
```
## Mock Credentials:
Email: admin@example.com 
Password: admin123

## How the Project Was Built

- Set up using **Vite** for fast bundling and hot reload
- Functional **React components** with hooks (`useState`, `useEffect`)
- Flexbox layout for responsive dashboard (sidebar + main content)
- Local state management for:
  - Users list
  - Edit modal
  - Search and pagination
  - Dark mode and settings
- Toast notifications for user feedback
- Components structure:
  - `Dashboard.jsx` → Main layout
  - `Sidebar.jsx` & `Header.jsx` → Navigation and header
  - `Users.jsx` → Users table, search, pagination, edit modal
  - `Settings.jsx` → Dark mode and preferences
  - `Login.jsx` → Authentication
