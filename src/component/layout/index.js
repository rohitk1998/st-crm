import React from "react";
import "./layout.css";
import Header from "../header/index";
import Sidebar from "../sidebar";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="layout-container">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="content-wrapper">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
