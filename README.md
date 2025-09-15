# Laravel & React Activity Application

## Overview
This is a full-stack **Activity Tracking Application** built with **Laravel** (backend) and **React** (frontend). It allows users to create, edit, view, and delete activities, providing a seamless and responsive interface. The project is designed with scalability and maintainability in mind.

---

## Features
- **User Authentication**: Register, login, and secure sessions
- **Activity Management**: Add, edit, delete, and view activities
- **Responsive UI**: Works smoothly on mobile and desktop
- **Interactive React Components**: Dynamic forms and live updates
- **Database Integration**: Activities are stored in a MySQL database
- **Clean Codebase**: Modular Laravel & React architecture
- **Extensible**: Easily add new features or integrate with APIs

---

## Technologies Used
- **Backend:** Laravel (PHP framework)
- **Frontend:** React
- **Styling:** CSS
- **Database:** MySQL
- **Authentication:** Laravel Breeze / Sanctum (if implemented)
- **Version Control:** Git & GitHub

---

## Project Structure
```
LaravelAndReactActivityApplication/
├── app/                   # Backend logic and models
├── bootstrap/
├── config/                # Laravel configuration files
├── database/              # Migrations, seeders, and factories
├── public/                # Public assets and entry point
├── resources/
│   ├── css/               # Styling files (e.g., home.css)
│   ├── js/                # React components
│   └── views/             # Blade templates (if used)
├── routes/                # API and web routes
├── storage/
├── tests/
└── README.md              # Project documentation
```

---

## Installation & Setup

### Backend (Laravel)
1. Clone the repository:
   ```bash
   git clone https://github.com/mrtozl000/LaravelAndReactActivityApplication.git
   ```
2. Navigate into the project folder:
   ```bash
   cd LaravelAndReactActivityApplication
   ```
3. Install PHP dependencies:
   ```bash
   composer install
   ```
4. Copy `.env.example` to `.env` and configure your database:
   ```bash
   cp .env.example .env
   ```
5. Generate the application key:
   ```bash
   php artisan key:generate
   ```
6. Run database migrations:
   ```bash
   php artisan migrate
   ```
7. Start the backend server:
   ```bash
   php artisan serve
   ```

### Frontend (React)
1. Navigate to the frontend folder (if separate):
   ```bash
   cd resources/js
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

---

## Usage
1. Open your browser at `http://127.0.0.1:8000`.
2. Register a new account or login.
3. Start creating, editing, and managing activities.
4. Changes are reflected in real-time in the database.

---

## Development Guidelines
- **Branching:** Use feature branches for new development.
- **Code Style:** Follow PSR-12 for PHP and standard ESLint rules for React.
- **Commit Messages:** Use clear, descriptive messages (e.g., `feat: add activity form validation`).
- **Pull Requests:** Always review before merging.

---

## Testing
- Backend tests can be run using:
  ```bash
  php artisan test
  ```
- Frontend tests (if implemented):
  ```bash
  npm test
  ```

---

## Contribution
Contributions are welcome! Steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push your branch and open a Pull Request

---

## Contact
For questions, issues, or feedback, contact:
- **Email:** mrtozl000@gmail.com
- **GitHub:** [https://github.com/mrtozl000](https://github.com/mrtozl000)

---

## Screenshots (Optional)
_Add relevant screenshots of your app here for visual reference._
