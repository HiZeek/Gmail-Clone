import React from "react";
import "../styles/EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject} <span className="emailRow-description">{description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
};

export default EmailRow;
