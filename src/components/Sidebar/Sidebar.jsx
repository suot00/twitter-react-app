import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SidebarOption from "../SidebarOption/SidebarOption";

import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [loginData, setLoginData] = useState([]);
  const userInfo = () => {
    const getUser = localStorage.getItem("user_login");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);

      setLoginData(user);
    }
  };
  useEffect(() => {
    userInfo();
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("user_login");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={Grid3x3Icon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Message" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button className="sidebar__tweet" variant="outlined">
        Tweet
      </Button>

      <Button className="sidebar__account" style={{ display: "flex" }}>
        <Avatar />
        <div>
          {loginData.length === 0 ? "Error" : <h3>{loginData[0].name}</h3>}
          <p>@username</p>
        </div>
        <span onClick={handleClick}>Logout</span>
      </Button>
    </div>
  );
};

export default Sidebar;
