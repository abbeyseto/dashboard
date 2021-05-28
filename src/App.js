import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Balances from "./pages/Balances";
import Customers from "./pages/Customers";
import AppContext from "./context/AppContext";
import useWindowSize from "./components/Hooks/useWindowSize.js";
import Analytics from "./pages/Analytics";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    console.log(size.width);
    size.width < 500 ? setIsMobile(true) : setIsMobile(false);
    size.width > 500 && setIsSidebarOpened(true);
  }, [size]);

  return (
    <AppContext.Provider
      value={{
        mobileState: isMobile,
        sidebarState: isSidebarOpened,
        setIsMobile: setIsMobile,
        setIsSidebarOpened: setIsSidebarOpened,
      }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/balances" component={Balances} />
          <Route path="/customers" component={Customers} />
          <Route path="/analytics" component={Analytics} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
