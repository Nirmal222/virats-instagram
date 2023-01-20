import React from "react";
import { memo } from 'react'
import { Home, Search, Explore, Reels, Messages, Notifications, Create } from "../../utils/icons";
import { MdArrowBackIosNew } from "react-icons/md"
import "./ViratKohli.css"
const BottomNav = memo(() => {
    return (
        <div id="bottomnav-container">
            <span>
                <Home />
            </span>
            <span>
                <Explore />
            </span>
            <span>
                <Reels />
            </span>
            <span>
                <Messages />
            </span>
            <span>
                <Notifications />
            </span>
            <span>
                <Create />
            </span>
        </div>
    );
});


const TopBar = memo(() => {
    return (
        <div id='topbar'>
            <div><MdArrowBackIosNew /></div>
            <div> <p>Leanne Graham</p> </div>
        </div>
    )
})


export { BottomNav, TopBar };
