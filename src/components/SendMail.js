import React from "react";
import { useForm } from "react-hook-form";
import "../styles/SendMail.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <CloseOutlinedIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail-close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="recipients"
          placeholder="Recipients"
          type="text"
          {...register("recipients", { required: true })}
        />
        {errors.recipients && <p className="sendMail-error">To is Required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail-error">Subject is Required!</p>
        )}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail-message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail-error">Message is Required!</p>
        )}
        <div className="sendMail-options">
          <Button
            type="submit"
            className="sendMail-send"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
