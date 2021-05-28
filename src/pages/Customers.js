import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Customers() {
    const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'customers': 'customers closed'}>
      <h1>Customers</h1>
    </div>
  );
}

export default Customers;