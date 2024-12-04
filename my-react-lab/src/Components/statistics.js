import React from 'react';
import '../style/statistics.css';
function Statistics({ stats }) {
  const { totalUsers, activeUsers, newSignups, activePercentage } = stats;
  return (
    <div className="stats-card">
      <h2 className="stats-heading">User Statistics</h2>
      <div className="stats-info">
        <p className="stats-item">Total Users: <span>{totalUsers}</span></p>
        <p className="stats-item">Active Users: <span>{activeUsers}</span></p>
        <p className="stats-item">New Signups: <span>{newSignups}</span></p>
        <p className="stats-item">Active Percentage: <span>{activePercentage}%</span></p>
        <div className="progress-bar-container">
        <label htmlFor="activeProgress" className="progress-label">Active Users Progress</label>
        <progress id="activeProgress" value={activePercentage} max={100}></progress>
        </div>
        </div>
      </div>
  );
}
export default Statistics;


