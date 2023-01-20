import React from "react";
import {
  Home,
  Search,
  Explore,
  Reels,
  Messages,
  Notifications,
  Create,
} from "../../../utils/icons";
import "../SideNav.css";
const Menu = () => {
  return (
    <div id="menu-container">
      <span>
        <Home /> <p>Home</p>
      </span>
      <span>
        <Search /> <p>Search</p>
      </span>
      <span>
        <Explore /> <p>Explore</p>
      </span>
      <span>
        <Reels /> <p>Reels</p>
      </span>
      <span>
        <Messages /> <p>Messages</p>
      </span>
      <span>
        <Notifications /> <p>Notifications</p>
      </span>
      <span>
        <Create /> <p>Create</p>
      </span>
      <span>
        <p>Virat Kohli</p>
      </span>
    </div>
  );
};

export default Menu;
