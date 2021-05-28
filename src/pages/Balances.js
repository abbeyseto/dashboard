import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Balances() {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'balances': 'balances closed'}>
      <h1>Balances</h1>
    </div>
  );
}

export default Balances;
