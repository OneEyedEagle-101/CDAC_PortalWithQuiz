import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import QuizIcon from "@mui/icons-material/Quiz";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotesIcon from "@mui/icons-material/Notes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const mainListItems = (
  <React.Fragment>
    <Link to="/Admin">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/Admin/FacultyList">
      <ListItemButton>
        <ListItemIcon>
          <AutoAwesomeMotionIcon />
        </ListItemIcon>
        <ListItemText primary="Faculty Records " />
      </ListItemButton>
    </Link>
    <Link to="/Admin/StudentList">
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Students Records" />
      </ListItemButton>
    </Link>
    <Link to="/Admin/ManageList">
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Records" />
      </ListItemButton>
    </Link>
    <ListItemButton
    // onClick={() => {
    //   sessionStorage.setItem("user", null);
    //   localStorage.setItem("user", null);
    // }}
    >
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);
