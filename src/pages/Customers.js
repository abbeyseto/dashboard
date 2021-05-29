import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header/header";
function Customers() {
  const { sidebarState } = useContext(AppContext);
  return (
    <div className={"container"}>
      <div className={sidebarState ? "customers" : "customers closed"}>
        <Header heading={"Customers"} />
      </div>
    </div>
  );
}

export default Customers;
