import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Home() {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={sidebarState? 'home': 'home closed'}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
