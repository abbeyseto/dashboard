import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import AppContext from "./context/AppContext";
import useWindowSize from "./components/Hooks/useWindowSize.js";

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
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
