import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../NavBar/Navbar.css";
import { IconContext } from "react-icons";
import logo from "../../assets/images/logo.svg";
import AppContext from "../../context/AppContext";

function Navbar(props) {
  const { sidebarState, setIsSidebarOpened } = useContext(AppContext);
  const { mobileState, setIsMobile } = useContext(AppContext);
  const changeSidebarState = () => setIsSidebarOpened(!sidebarState);
  const [selected, setSelected] = useState("Dashboard");
  console.log(props, window.location.pathname);
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
            onClick={sidebarState && mobileState ? changeSidebarState : null}
          >
            {sidebarState && mobileState && (
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
            )}
            <img src={logo} className={"logo"} />
            <div className={"menu-subheading"}>Main pages</div>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.cName}
                  onClick={() => setSelected(item.title)}
                >
                  <Link
                    to={item.path}
                    className={
                      window.location.pathname === item.path ? "selected" : null
                    }
                  >
                    <img src={item.icon} alt={item.title} />
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
