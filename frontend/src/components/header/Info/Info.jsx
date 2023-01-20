import React from "react";
import "../Header.css";
import MainInfo from "./MainInfo";
import { NameFollowers } from "./InfoUtilsComponents";
const Info = ({ user }) => {
  return (
    <div id="info-container">
      <NameFollowers user={user}/>
      <MainInfo user={user} />
    </div>
  );
};

export default Info;
