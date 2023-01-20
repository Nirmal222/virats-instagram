import React from "react";
import { Header, Posts, SideNav } from "../../components";
import {BottomNav, TopBar} from "./UtilityComponents";
import "./ViratKohli.css";
const ViratKohli = () => {
  return (
    <div>
      <TopBar/>
      <div id="page-container">
        <SideNav />
        <div id="main-container">
          <Header />
          <Posts />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ViratKohli;
