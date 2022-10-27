import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

// FIREBASE
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

// STYLE
import "../styles/SendMail.css";

// MATERIAL UI
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@mui/material";

const SendMail = () => {
  const [sendingMessage, setSendingMessage] = useState(false);
  const [sentMessage, setSentMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);
    // FIREBASE VERSION 8
    // db.collection('emails').add({
    //   recipients: formData.recipients,
    //   subject: formData.subject,
    //   message: formData.message,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    // FIREBASE VERSION 9
    try {
      setSendingMessage(true);
      setSentMessage("sending...");
      const emailData = await addDoc(collection(db, "email"), {
        recipients: formData.recipients,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      console.log(emailData.length);
      setSentMessage("sent");
      setSendingMessage(false);
      console.log("db: ", emailData.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    dispatch(closeSendMessage());
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
          type="email"
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
      {sendingMessage ? (
        <div className="sending-message">
          <p className="sending-message-text">{sentMessage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default SendMail;
