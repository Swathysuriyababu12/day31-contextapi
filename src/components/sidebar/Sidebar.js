import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Link } from "react-router-dom";

import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"> SB Admin</span>
        </Link>
        <hr />
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <hr />
          <p className="title">CRUD OPERATIONS(click below)</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <Link to="/student">
              <span>Students</span>
            </Link>
          </li>
          <li>
            <StoreIcon className="icon" />
            <Link to="/teacher">
              <span>Teachers</span>
            </Link>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Others</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
