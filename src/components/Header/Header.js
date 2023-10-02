import React, { useState } from "react";
import "./Header.css";
import { BiArrowBack } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import av from "../../Utills/Images/av.jpg";
const Header = ({ selectMenu, headerStyle }) => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div>
      <div className="navbar" style={headerStyle}>
        <div className="header-left">
          <BiArrowBack className="header_back_icon" />
          <h2 className="header_menu">{selectMenu}</h2>
        </div>
        <div className="header-right">
          <div className="search_item">
            {openSearch ? <input type="text" className="search_input" /> : ""}
            <label onClick={handleSearch}>
              <CiSearch className="search_icon" />
            </label>
          </div>
          <IoIosNotificationsOutline className="notification_icon" />
          <div className="avatar">
            <img src={av} alt="User Avatar" />
          </div>
          <div className="user-name">Vipin Singh</div>
          <div className="user-name">viprock</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
