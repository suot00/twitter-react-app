import React, { useEffect, useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOption from "../SidebarOption/SidebarOption";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);
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
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Message" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button className="sidebar__tweet" variant="outlined">
        Tweet
      </Button>

      <div className="sidebar__account">
        {loginData.length === 0 ? "Error" : <h3>{loginData[0].name}</h3>}
        <Button onClick={handleClick}>Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
