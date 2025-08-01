# Student Table React App

A responsive and accessible React application that displays a sortable table of student data, including roll number, name, class, section, and marks. The app features intuitive UI/UX design with smooth animations and mobile-friendly layout.

## Features

- List of 50 students with detailed info
- Sortable table columns (Roll No, Name, Class, Section, Marks) with hover and focus styles
- Editable and deletable actions for each student (UI only, no backend logic included)
- Responsive design: table adapts to mobile screens with an accessible layout
- Smooth hover animations on rows and action buttons
- Visually hidden classes for accessibility support
- Fully styled with CSS gradients, shadows, and transitions

## Technologies Used

- React (functional components with Hooks)
- CSS for styling and responsive design
- JSX for templating

## Installation

1. Clone the repository:


2. Install dependencies:


3. Start the development server:


4. Open `http://localhost:3000` in your browser to view the app.

## Usage

- Click column headers to sort the table by that column (functionality to be implemented).
- Use the Edit and Delete buttons for each student row (currently for UI demonstration).
- On smaller screens, the table switches to a stacked layout for better readability.

## Folder Structure

/
├── src/
│ ├── App.jsx # Main React component containing student table
│ ├── App.css # CSS styles for the table and UI
│ └── main.jsx # Entry point for React DOM rendering
└── public/
└── index.html # Static HTML template

## Accessibility

- Uses `.visually-hidden` class for screen reader support
- Focus styles on interactive elements for keyboard navigation
- Semantic HTML table structure

## Customization

- Modify the `students` state array in `App.jsx` to change or add student records.
- Extend sorting and editing functionalities by adding respective handlers and state management.

## License

This project is open source and free to use.

---

Feel free to customize this README further to fit any additional functionality or deployment information you may want to include.
