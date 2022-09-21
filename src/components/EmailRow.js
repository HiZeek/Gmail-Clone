import React from "react";
import { useNavigate } from 'react-router-dom'; 
import "../styles/EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const EmailRow = ({ id, title, subject, description, time }) => {

  const history = useNavigate();

  return (
    <div onClick={() => history('/mail')} className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject} <span className="emailRow-description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
};

export default EmailRow;
