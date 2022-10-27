import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

// FIREBASE
import { auth } from "./firebase";

// STYLE
import "../styles/Header.css";

//MATERIAL UI
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Header = (props) => {
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
        <IconButton onClick={props.onReduce}>
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
        <IconButton className="header-icon-mobile">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton className="header-icon-mobile">
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton className="header-icon-mobile">
          <AppsIcon />
        </IconButton>
        <Avatar className="avatar" onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
};

export default Header;
