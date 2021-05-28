import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Analytics() {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'analytics': 'analytics closed'}>
      <h1>Analytics</h1>
    </div>
  );
}

export default Analytics;
