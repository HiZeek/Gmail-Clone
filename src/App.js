import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import "./App.css";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/Login";

// FIREBASE
import { auth, db } from "./components/firebase";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const [reduceSidebar, setReduceSidebar] = useState(false);
  const [emails, setEmails] = useState([]);
  const [emailLength, setEmailLength] = useState("");

  useEffect(() => {
    // VERSION 8
    // db.collection("emails")
    //   .orderBy("timestamp", "desc")
    // .onSnapshot((snapshot) =>
    //   setEmails(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   )
    // );

    // VERSION 9
    const fetchData = async () => {
      const emailRef = collection(db, "email");
      const q = query(emailRef, orderBy("timestamp", "desc"));
      onSnapshot(q, (snapshot) => {
        let emailList = [];
        snapshot.docs.forEach((doc) => {
          emailList.push({
            id: doc.id,
            data: doc.data(),
          });
          setEmails(emailList);
        });
        setEmailLength(emailList.length);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  const sidebarHandler = () => {
    setReduceSidebar(!reduceSidebar);
    console.log('worked');
  };

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header onReduce={sidebarHandler} />
          <div className="app-body">
            <Sidebar reduceSidebar={reduceSidebar} emailLength={emailLength} />
            <Routes>
              <Route path="/" element={<EmailList emails={emails} />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
