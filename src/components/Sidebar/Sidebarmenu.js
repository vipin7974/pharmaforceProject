import React, { useState } from "react";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { MdOutlineEqualizer } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsCheck2Square, BsDatabase } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import "./Sidebarmenu.css";
import Header from "../Header/Header";
import { CiSettings } from "react-icons/ci";
import { BiArrowBack, BiArrowFromLeft } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Sidebarmenu = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [selectMenu, setSelectedMenu] = useState("Dashboard");
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const headerStyle = {
    left: menuCollapse ? "80px" : "250px",
  };
  const handleMenuSelect = (e) => {
    setSelectedMenu(e);
  };
  return (
    <div className="mainheader">
      <div id="header">
        <Sidebar collapsed={menuCollapse}>
          <div className="logotext">
            <p>{menuCollapse ? "Logo" : "PharmaForceIQ"}</p>
          </div>
          <Menu iconShape="square">
            <MenuItem
              className={selectMenu === "Dashboard" ? "active" : ""}
              active={true}
              icon={<MdOutlineEqualizer />}
              onClick={() => handleMenuSelect("Dashboard")}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              className={selectMenu === "Champaigns" ? "active" : ""}
              icon={<HiOutlineRocketLaunch />}
              onClick={() => handleMenuSelect("Champaigns")}
            >
              Champaigns
            </MenuItem>
            <MenuItem
              className={selectMenu === "Queries" ? "active" : ""}
              icon={<BsCheck2Square />}
              onClick={() => handleMenuSelect("Queries")}
            >
              Queries
            </MenuItem>
            <MenuItem
              className={selectMenu === "Physicians" ? "active" : ""}
              icon={<SlPeople />}
              onClick={() => handleMenuSelect("Physicians")}
            >
              Physians
            </MenuItem>
            <MenuItem
              className={selectMenu === "Data Source" ? "active" : ""}
              icon={<BsDatabase />}
              onClick={() => handleMenuSelect("Data Source")}
            >
              Data Source
            </MenuItem>
            <MenuItem
              className={selectMenu === "Affinity Hub" ? "active" : ""}
              icon={<FiPieChart />}
              onClick={() => handleMenuSelect("Affinity Hub")}
            >
              Affinity Hub
            </MenuItem>
          </Menu>
          <Menu className="setting_menu">
            <MenuItem
              className={selectMenu === "Setting" ? "active" : ""}
              icon={<CiSettings />}
              onClick={() => handleMenuSelect("Setting")}
            >
              Setting
            </MenuItem>
          </Menu>
          <Menu className="collapse_icon">
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
            </div>
          </Menu>
        </Sidebar>
      </div>
      <Header selectMenu={selectMenu} headerStyle={headerStyle} />
    </div>
  );
};

export default Sidebarmenu;
