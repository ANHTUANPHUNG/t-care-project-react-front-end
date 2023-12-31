import React, { useState } from "react";
import "./ContainerViewUser.css";
import LogoProject from "../../logoProject/LogoProject";
import { FavoriteBorder } from "@mui/icons-material";
import { CreditScore } from "@mui/icons-material";
import { ListAlt } from "@mui/icons-material";
import { PersonAddAlt } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";


export function ContainerViewUser() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div>
        <div className="view-user-header">
          <LogoProject />
          <div className="view-user-header-select">
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <Home className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Home</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <FavoriteBorder className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Favorites</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <PersonAddAlt className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Favorites</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <ListAlt className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Cart</div>
              </div>
            </NavLink>
            <NavLink className="view-user-header-select-nav">
              <div className="view-user-header-select-nav-block">
                <CreditScore className="view-user-header-select-nav-block-icon" />
                <div className="view-user-header-select-nav-block-title">Contract</div>
              </div>
            </NavLink>
            <div className="view-user-header-select-profile" >
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar>H</Avatar>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <NavLink style={{textDecoration:'none', color:'orangered'}} to={"/user/profile"}>
                  <MenuItem >Profile</MenuItem>
                </NavLink>
                <NavLink style={{textDecoration:'none' , color:'#212529'}} to={"/"}>
                <MenuItem >Logout</MenuItem>
                </NavLink>
              </Menu>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 step-view-user"></div>
        </div>
      </div>
    </>
  );
}
