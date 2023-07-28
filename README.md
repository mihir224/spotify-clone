# Spotify Clone using React.js

This project is a Spotify Clone built using React.js, closely resembling the original Spotify application in terms of design and functionality. It primarily focuses on the frontend implementation, but also includes user authentication using Firebase.

# Features
User Authentication: The application allows users to sign up and log in using their credentials through Firebase Authentication, ensuring a secure and personalized experience.

Song Playback: Users can browse and play songs just like in the original Spotify application. The playback controls include play, pause, skip, and previous, providing an immersive music listening experience.

Real-time Updates: The application features real-time updates, allowing users to see the changes the progress of the song.

# Technologies Used
React.js: This is solely a React based project, which I made after learning React to showcase my skills.

# How to Use
To run the project locally, follow these steps:

Clone the repository: Use git clone command to clone the repository to your local machine.

Install dependencies: Navigate to the project directory and run npm install to install all the required dependencies.

Set up Firebase: You'll need to create a Firebase project and obtain the Firebase configuration. Replace the configuration in the project files where Firebase is initialized.

Run the development server: Use the command npm start to start the development server. The application will be accessible at http://localhost:3000 by default.

# Known Issues
After skipping a song, the play button needs to be pressed again to update the song state. This behavior will be addressed in future updates.
