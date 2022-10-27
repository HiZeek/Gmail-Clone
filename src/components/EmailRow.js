import React from "react";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../features/mailSlice";
import { useDispatch } from "react-redux";

// STYLE
import "../styles/EmailRow.css";

// MATERIAL UI
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description">- {description}</span>
        </h4>
      </div>
      <div className="emailRow-container">
        <h3 className="emailRow-title-mobile">{title}</h3>
        <div className="emailRow-message-mobile">
          <h4>
            {subject}{" "}
            <span className="emailRow-description-mobile">- {description}</span>
          </h4>
        </div>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
};

export default EmailRow;
