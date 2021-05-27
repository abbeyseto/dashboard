import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "../assets/images/logo.png";
import AppContext from "../context/AppContext";

function Navbar() {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  const { mobileState, setIsMobile } = useContext(AppContext);
  const changeSidebarState = () => setIsSidebarOpened(!sidebarState);

  return (
    <>
      <IconContext.Provider value={{ color: "#A6ABB2" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={changeSidebarState} />
          </Link>
        </div>
        <nav className={sidebarState ? "nav-menu active" : "nav-menu"}>
          <ul
            className="nav-menu-items"
            onClick={sidebarState && mobileState ?  changeSidebarState: null}
          >
            {sidebarState && mobileState && (
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
            )}
            <img src={logo} className={"logo"} />
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
