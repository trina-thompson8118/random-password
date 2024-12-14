# Random Password Generator

A **Random Password Generator** built using **React**, **Next.js**, **Tailwind CSS**, and **Material-UI Icons**. This application allows users to generate strong, secure passwords with customizable options for length and character composition. The app is mobile-friendly and includes toast notifications for enhanced user experience.

## Features

- Generate secure passwords of customizable length (8–32 characters).
- Include/exclude character types (uppercase, lowercase, numbers, special characters).
- Copy the generated password to the clipboard with a single click.
- Refresh to generate a new password.
- Responsive design optimized for mobile and desktop.
- Toast notifications for clipboard actions.

## Technologies Used

- **React**: For building the user interface.
- **Next.js**: Framework for server-side rendering and optimized builds.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Material-UI Icons**: Icons for user interactions (refresh and copy actions).
- **React-Toastify**: Toast notifications for user feedback.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/random-password-generator.git
   cd random-password-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to `http://localhost:3000` in your browser.

## Usage

1. **Adjust Password Settings:**
   - Use the slider to set the password length.
   - Check/uncheck the character types to include (uppercase, lowercase, numbers, special characters).

2. **Generate a Password:**
   - The password is automatically generated as settings are adjusted.
   - Click the refresh icon to generate a new password.

3. **Copy the Password:**
   - Click the copy icon to copy the generated password to your clipboard.
   - A toast notification will confirm the action.

## Components

### `PasswordGenerator.tsx`
Handles the logic for:
- Generating passwords.
- Managing state for settings (slider value, checkboxes).
- Clipboard interactions and toast notifications.

### `Tailwind CSS`
Utility classes for:
- Responsive layout (`flex`, `grid`, `justify-center`, `items-center`).
- Styling inputs, buttons, and icons.

### `ToastContainer`
Provides user feedback for actions like copying passwords.

## Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

3. Deploy the project to your preferred hosting service (e.g., Vercel, Netlify).

## Future Enhancements

- Add dark mode for better usability.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI Icons](https://mui.com/components/icons/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/)

---

Happy coding! 🎉
