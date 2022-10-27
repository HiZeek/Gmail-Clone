import React, { useState } from "react";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

// STYLE
import "../styles/Sidebar.css";

// MATERIAL UI
import { Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

const Sidebar = (props) => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  const displayShowMoreDropdown = () => {
    setShowMore(true);
  };

  const hideShowMoreDropdown = () => {
    setShowMore(false);
  };

  return (
    <div className={`sidebar ${props.reduceSidebar && 'reduce-sidebar sidebar-display'}`}>
      <Button
        startIcon={<EditOutlinedIcon fontSize="large" />}
        className="sidebar-compose-mobile"
        onClick={() => dispatch(openSendMessage())}
      >
      </Button>
      <Button
        startIcon={<EditOutlinedIcon fontSize="large" />}
        className={`sidebar-compose ${props.reduceSidebar && 'reduce-sidebar-compose'}`}
        onClick={() => dispatch(openSendMessage())}
      >
        {props.reduceSidebar ? '' : 'Compose'}
      </Button>
      <SidebarOption
        Icon={InboxOutlinedIcon}
        title="Inbox"
        number={props.emailLength}
        selected={true}
      />
      <SidebarOption
        Icon={StarBorderOutlinedIcon}
        title="Starred"
        number={54}
      />
      <SidebarOption
        Icon={AccessTimeOutlinedIcon}
        title="Snoozed"
        number={54}
      />
      <SidebarOption Icon={SendOutlinedIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteOutlinedIcon} title="Draft" number={54} />
      {!showMore && (
        <SidebarOption
          Icon={KeyboardArrowDownOutlinedIcon}
          title="More"
          onClick={displayShowMoreDropdown}
        />
      )}
      {showMore && (
        <div>
          <SidebarOption
            Icon={KeyboardArrowUpOutlinedIcon}
            title="Less"
            onClick={hideShowMoreDropdown}
          />
          <SidebarOption Icon={LabelImportantOutlinedIcon} title="Important" />
          <SidebarOption Icon={ChatOutlinedIcon} title="Chat" />
          <SidebarOption Icon={ScheduleSendOutlinedIcon} title="Scheduled" />
          <SidebarOption Icon={EmailOutlinedIcon} title="All Mail" />
          <SidebarOption Icon={ReportGmailerrorredOutlinedIcon} title="Spam" />
          <SidebarOption Icon={DeleteOutlinedIcon} title="Bin" />
        </div>
      )}

      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
