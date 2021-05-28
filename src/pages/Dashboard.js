import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Dashboard() {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'dashboard': 'dashboard closed'}>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
