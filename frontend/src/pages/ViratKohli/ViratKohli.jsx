import React from 'react';
import { Header, Posts, SideNav } from '../../components';
import "./ViratKohli.css";
const ViratKohli = () => {
  return (
    <div id='page-container'>
        <SideNav/>
        <div id='main-container'>
            <Header/>
            <Posts/>
        </div>
    </div>
  )
}

export default ViratKohli