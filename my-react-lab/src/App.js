import React from 'react';
import UserInfo from './Components/userinfo.js'; // Component to display user information cards
import Statistics from './Components/statistics.js'; // Component for stats and progress bar
import Messages from './Components/messages.js'; // Component to display messages
import './App.css';

// Main App component
function App() {
  // User data for user cards
  const user1 = {
    name: "Zahida Rashid",
    email: <a href="mailto:zahida.786@gmail.com">zahida.786@gmail.com</a>, // mailto for email links
    role: "Software Developer",
    imageUrl: "Screenshot 2024-12-04 111953.png", // Placeholder for image
  };

  const user2 = {
    name: "Hamza Asad",
    email: <a href="mailto:hamzaaasad@gmail.com">hamzaaasad@gmail.com</a>, // mailto for email links
    role: "Product Manager",
    imageUrl: "Screenshot 2024-12-04 125356.png", // Placeholder for image
  };

  // Statistics data
  const stats = {
    totalUsers: 1000,
    activeUsers: 250,
    newSignups: 50,
    activePercentage: ((250 / 1000) * 100).toFixed(2), // Calculate active user percentage dynamically
  };

  // Messages data
  const messagesData = {
    message1: "Welcome back! Your tasks are ready to be tackled.",
    message2: "Kudos! Your team achieved a new efficiency record this week",
    message3: "Reminder: Team meeting at 3 PM in Conference Room A",
  };

  // Render the application layout
  return (
    <div className="app-container">
      {/* User information cards */}
      <div className="user-cards">
        <UserInfo user={user1} />
        <UserInfo user={user2} />
      </div>

      {/* Statistics and messages section in a horizontal layout */}
      <div className="statistics-messages-container">
        <Statistics stats={stats} />
        <Messages messages={messagesData} />
      </div>
    </div>
  );
}

export default App;
