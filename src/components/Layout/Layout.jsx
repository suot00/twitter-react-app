import React from "react";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widget from "../Widget/Widget";
const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default Layout;
