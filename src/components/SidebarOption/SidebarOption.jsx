import { Icon } from "@material-ui/core";
import "./SidebarOption.css";
import React from "react";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
