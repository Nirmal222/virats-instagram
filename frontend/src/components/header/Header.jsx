import React, { useState, useEffect } from "react";
import { getUser } from "../../utils";
import "./Header.css";
import { Info, Profile } from "./";
import MainInfo from "./Info/MainInfo";
const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);
  return (
    <>
      <div id="header-container">
        <Profile />
        <Info user={user} />
      </div>
      <div id="smallInfo">
        <div id="sdetails">
          <p>
            <span>{user.name}</span> <br /> <span>Carpediem!</span> <br />{" "}
            <span>one8.com</span>
          </p>
        </div>
        <p id="sinfo-foot">
          Followed by milkuri_pranay, kunapavankalyan, tinopatel_ + 52 more
        </p>
      </div>
    </>
  );
};


export default Header;
