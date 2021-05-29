import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header/header";

function AboutUS() {
  const { sidebarState } = useContext(AppContext);
  return (
    <div className={"container"}>
      <div className={sidebarState ? "aboutus" : "aboutus closed"}>
        <Header heading="AboutUS" />
      </div>
    </div>
  );
}

export default AboutUS;
