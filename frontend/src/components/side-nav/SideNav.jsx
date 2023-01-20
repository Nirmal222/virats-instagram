import React from "react";
import { FontInsta, Instagram, More } from "../../utils/icons";
import Menu from "./Menu/Menu";
import {memo} from "react"
import "./SideNav.css";
const SideNav = () => {
  return (
    <>
      <div id="sidenav-container">
        <div className="nav-logo">
          <FontInsta/>
          <Instagram />
          <Menu />
        </div>
        <div id="nav-footer">
          <More /> <p>More</p>
        </div>
      </div>
    </>
  );
};

export default memo(SideNav);
