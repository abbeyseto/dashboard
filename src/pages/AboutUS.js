import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import CurrentDate from "../components/CurrentDate/date";

function AboutUS() {
    const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'aboutus': 'aboutus closed'}>
      <div className={"header"}>
      <p >AboutUS</p>
        <CurrentDate/>
        </div>
    </div>
  );
}

export default AboutUS;