import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import CurrentDate from "../components/CurrentDate/date";

function Analytics() {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'analytics': 'analytics closed'}>
      <div className={"header"}>
      <p >Analytics</p>
        <CurrentDate/>
        </div>
    </div>
  );
}

export default Analytics;
