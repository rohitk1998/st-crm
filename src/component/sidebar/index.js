import React from "react";
import "./index.css"
import GridIcon from "../../images/Grid.svg"
import UserIcon from "../../images/User.svg"
import MailIcon from "../../images/Mail.svg"
import CartIcon from "../../images/Cart.svg";
import TaskIcon from "../../images/Tasks.svg";
import SettingIcon from "../../images/Settings.svg";

export default function Sidebar(){
    return(
            <div className="layout-sidebar">
             <div className="sidebar-navitems">
                <div className="navitem-container">
                <div className="nav-item">
                <img src={GridIcon} className="item" />
              </div>
                <div className="nav-item">
                <img src={UserIcon} className="item" />
              </div>
              <div className="nav-item">
                <img src={MailIcon} className="item" />
              </div>
              <div className="nav-item">
                <img src={CartIcon} className="item" />
              </div>
              <div className="nav-item">
                <img src={TaskIcon} className="item" />
              </div>
              <div className="nav-item">
                <img src={SettingIcon} className="item" />
              </div>
                </div>
                </div>
              </div>
    )
}