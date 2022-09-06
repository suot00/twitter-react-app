import React from "react";
import "./Widget.css";

import { Search } from "@material-ui/icons";
const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__input">
        <Search className="widget__SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget__widgetContainer">
        <h2>Trends for you</h2>
      </div>
    </div>
  );
};

export default Widget;
