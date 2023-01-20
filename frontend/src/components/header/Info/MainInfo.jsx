import React from "react";
import { InfoCount, InfoDetails, InfoFoorter } from "./InfoUtilsComponents";
import {memo} from "react";
const MainInfo = ({ user }) => {
  return (
    <>
      <InfoCount/>
      <InfoDetails user={user}/>
      <InfoFoorter/>
    </>
  );
};

export default MainInfo;


