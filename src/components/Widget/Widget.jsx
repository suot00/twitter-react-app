import React from "react";
import "./Widget.css";

import SearchIcon from "@mui/icons-material/Search";
const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchIcon className="widget__SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget__widgetContainer">
        <h2>Trends for you</h2>
      </div>
    </div>
  );
};

export default Widget;
