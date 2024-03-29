# Scheduler

Scheduler is a React application for managing appointments. It allows users to view, book, edit, and cancel appointments for different days.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Set up the database by following the instructions in the `scheduler-api` repository's README.md file.
5. Start the development server using `npm start`.

## Features

- View appointments for different days.
- Book an appointment by selecting an available time slot and entering student information.
- Edit an existing appointment by selecting the appointment and making changes.
- Cancel an appointment to free up the time slot for others.
- See the number of available appointment spots for each day.

## Technologies Used

- React
- Axios
- PostgreSQL
- Node.js
- Express
- WebSocket
- Classnames
- @testing-library/react-hooks

## Screenshots

Editing an interview

![Edit](edit.png)

Deleting an interview

![Delete](delete.png)

## Important!
- The [SchedulerAPI] (https://github.com/lighthouse-labs/scheduler-api) used to interact with a static database is not included in this file. Follow the instruction on SchedulerAPI.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please create a new issue or submit a pull request.