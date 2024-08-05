import React from 'react';
import ContactMenu from '../components/ContactMenu';
import Chat from '../components/ChatDashboard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ContactMenu />
      <Chat />
    </div>
  );
};

export default Dashboard;
