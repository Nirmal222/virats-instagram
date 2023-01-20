import React from "react";
import "../Header.css";
import { MdVerified } from "react-icons/md";
import { Options, Suggestions } from "..";
import MainInfo from "./MainInfo";
const Info = ({ user }) => {
  return (
    <div id="info-container">
      <div id="name-followers">
        <span>
          <p>{user.name}</p>
          <i>
            {" "}
            <MdVerified />
          </i>
        </span>
        <span>
          <button>Follow</button>
          <button>Message</button>
          <button>
            <Suggestions />
          </button>
          <i>
            <Options />
          </i>
        </span>
      </div>
      <MainInfo user={user} />
    </div>
  );
};

export default Info;
