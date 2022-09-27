import React from "react";
import Section from "./Section";
import EmailRow from "./EmailRow";
import "../styles/EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList-settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList-sections">
        <Section
          Icon={InboxOutlinedIcon}
          title="Primary"
          color="#0b57d0"
          selected
        />
        <Section
          Icon={LocalOfferOutlinedIcon}
          title="Promotions"
          color="#0b57d0"
        />
        <Section Icon={GroupOutlinedIcon} title="Social" color="#0b57d0" />
      </div>

      <div className="emailList-list">
        <EmailRow
          title="LinkedIn"
          subject="React Jobs in Africa"
          description="Here are list of jobs available in your location Here are list of jobs available in your location Here are list of jobs available in your location"
          time='10pm'
        />
        <EmailRow
          title="LinkedIn"
          subject="React Jobs in Europe"
          description="Here are list of jobs available in your location Here are list of jobs available in your location Here are list of jobs available in your location"
          time='10pm'
        />
      </div>
    </div>
  );
};

export default EmailList;
