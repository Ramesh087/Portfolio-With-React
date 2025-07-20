# Personal Portfolio Website

This is a modern, single-page personal portfolio website built with React, TypeScript, and Tailwind CSS. The site is fully responsive, features a dark/light mode, and dynamically fetches project information from  GitHub profile.

## ✨ Features

-   **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
-   **Dark/Light Mode**: A theme toggle for user preference, with settings saved in local storage.
-   **Smooth Scrolling**: Seamless navigation between sections using `react-scroll`.
-   **Dynamic Project Showcase**: Automatically fetches and displays pinned projects from GitHub using the GitHub API.
-   **Interactive Skills Section**: Visually represents skill proficiency with animated progress bars.
-   **Functional Contact Form**: An integrated contact form using EmailJS that sends messages directly to  inbox without a backend.
-   **Clean & Modern UI**: Styled with Tailwind CSS for a professional and polished look.

## 🚀 Live Demo

[**view the live version of the portfolio here.**]([https://portf0lio8.netlify.app/])

## 🛠️ Technologies Used

-   **Frontend**: React, TypeScript
-   **Styling**: Tailwind CSS
-   **API Communication**: Axios (for GitHub API)
-   **Navigation**: `react-scroll`
-   **Contact Form**: `emailjs-com`
-   **Build Tool**: Vite

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Ramesh087/Portfolio-With-React
cd Portfolio-With-React
```

### 2. Install Dependencies

Install the necessary `npm` packages.

```bash
npm install
```

### 3. Set Up Environment Variables

This project requires a few environment variables to function correctly. Create a file named `.env` in the root of your project and add the following variables.

```env
# Your personal GitHub access token (for fetching repos)
VITE_GITHUB_TOKEN=your_github_personal_access_token

# Your EmailJS service credentials
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**How to get these keys:**
* **GitHub Token**: Go to your GitHub settings > Developer settings > Personal access tokens > Generate new token. Give it `repo` scope.
* **EmailJS Keys**: Sign up at [EmailJS](https://www.emailjs.com/), create a service, create an email template, and find your keys in the account settings.

### 4. Run the Development Server

Once the dependencies are installed and the environment variables are set, you can start the development server.

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## 📖 Development Environment

This project uses [Vite](https://vitejs.dev/) to provide a minimal, fast, and modern development experience with Hot Module Replacement (HMR).

There are two official plugins available for integrating React with Vite:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

### Expanding the ESLint Configuration

For developing a production-ready application, it is recommended to update the ESLint configuration to enable type-aware linting rules for better code quality and error checking.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules.

Here is an example of an expanded `eslint.config.js`:

```javascript
// eslint.config.js
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import globals from 'globals';

export default tseslint.config([
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Base configs
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      // React-specific configs
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

## 📂 Project Structure

The project is organized into a `components`-based architecture to keep the code modular and maintainable.

```
/src
|-- /assets          # Images, SVGs, and other static assets
|-- /components      # Reusable React components
|   |-- About.tsx
|   |-- Contact.tsx
|   |-- Footer.tsx
|   |-- Header.tsx
|   |-- Hero.tsx
|   |-- ProjectCard.tsx
|   `-- Projects.tsx
|-- /pages           # Page-level components
|   `-- Home.tsx
|-- App.tsx          # Main application component
|-- main.tsx         # Entry point of the application
`-- index.css        # Global styles and Tailwind CSS imports
```

## 📬 Contact

If you have any questions, suggestions, or just want to connect, feel free to reach out!

-   **Email**: `rameshpotaliya87@gmail.com`
-   **LinkedIn**: [Ramesh Potaliya](https://www.linkedin.com/in/ramesh-potaliya-572166229)


---
*This README was generated with assistance from an AI.*
