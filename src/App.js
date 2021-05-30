import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Balances from "./pages/Balances";
import AppContext from "./context/AppContext";
import UnderConstruction from "./pages/UnderConstruction";
import useWindowSize from "./components/Hooks/useWindowSize.js";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    size.width < 600 ? setIsMobile(true) : setIsMobile(false);
    size.width > 600 && setIsSidebarOpened(true);
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
          <Route
            path="/customers"
            component={() => <UnderConstruction heading={`Customers`} />}
          />
          <Route
            path="/analytics"
            component={() => <UnderConstruction heading={`Analytics`} />}
          />
          <Route
            exact
            path="/settings"
            component={() => <UnderConstruction heading={`Settings`} />}
          />
          <Route
            path="/teams"
            component={() => <UnderConstruction heading={`Team`} />}
          />
          <Route
            path="/contacts"
            component={() => <UnderConstruction heading={`Contact`} />}
          />
          <Route
            exact
            path="/logout"
            component={() => <UnderConstruction heading={`Logout`} />}
          />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
