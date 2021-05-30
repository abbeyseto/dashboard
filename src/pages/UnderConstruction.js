import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header/header";
import NotAvailable from "../components/NotAvailable";


function UnderConstruction(props) {
  const { sidebarState } = useContext(AppContext);
  return (
    <div className={"container"}>
      <div className={sidebarState ? "constuction" : "constuction closed"}>
        <Header heading={props.heading} />
        <NotAvailable />
      </div>
    </div>
  );
}

export default UnderConstruction;
