import React from "react";
import "../styles/Header.css";

//Icons
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from "@mui/icons-material/Apps";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  };

  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r4.png"
          alt=""
        />
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input placeholder="Search in emails" type="text" />
        <IconButton>
          <TuneOutlinedIcon className="header-inputCaret" />
        </IconButton>
      </div>
      <div className="header-right">
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
};

export default Header;
