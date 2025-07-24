import React, { useEffect, useState } from 'react';
import './cssfile/DashboardPage.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) {
      setUserName(user.name);
    }
  }, []);

  return (
    <div className="dashboard-wrapper">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Cardify</h2>
        <nav className="nav">
          <Link to="/">Dashboard</Link>
          <Link to="/create">Create Card</Link>
          <Link to="/view">View Cards</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="dashboard-header">
          <h1>Welcome, <span>{userName}</span></h1>
          <p className="subheading">Manage your digital cards easily and quickly.</p>
        </header>

        <section className="quick-actions">
          <Link to="/create" className="action-btn">➕ Create New Card</Link>
          <Link to="/view" className="action-btn">📇 View Your Cards</Link>
        </section>

        <section className="dashboard-cards">
          <div className="card">
            <h3>Total Cards</h3>
            <p>12</p>
          </div>
          <div className="card">
            <h3>Last Updated</h3>
            <p>July 17, 2025</p>
          </div>
          <div className="card">
            <h3>Shared Cards</h3>
            <p>7</p>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Created a new card: "Business Card - Shop"</li>
            <li>Edited card: "My Portfolio Card"</li>
            <li>Shared card to WhatsApp</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
