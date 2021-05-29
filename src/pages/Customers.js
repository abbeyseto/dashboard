import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import CurrentDate from "../components/CurrentDate/date";

function Customers() {
    const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'customers': 'customers closed'}>
      <div className={"header"}>
      <p >Customers</p>
        <CurrentDate/>
        </div>
    </div>
  );
}

export default Customers;