import React, { useEffect, useState, useRef } from "react";
import { FaYoutube } from "react-icons/fa6";
import "./Chats.css";
import Chatlist from "./Chatlist";
import Textinput from "./Textinput";
import Logins from "./Logins";
import socketIOClient from "socket.io-client";

function Chats() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [chats, setChats] = useState([]);

  // 🔥 Create socket only once
  const socketRef = useRef(null);
  useEffect(() => {
    socketRef.current = socketIOClient("http://localhost:3001");

    socketRef.current.on("chat", (incomingChat) => {
      setChats((prev) => [...prev, incomingChat]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // 🔥 Send message to server
  const sendToSocket = (chat) => {
    socketRef.current.emit("chat", chat);
  };

  // 🔥 Add message locally + send to server
  const addMessage = (chat) => {
    const newChat = {
      ...chat,
      user: localStorage.getItem("user"),
      avatar: localStorage.getItem("avatar"),
    };

    setChats((prev) => [...prev, newChat]);
    sendToSocket(newChat);
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="div3">
            <h4>username: {user}</h4>
            <p>
              <FaYoutube /> code with Tayim
            </p>
            <p>
              <strong>Logout</strong>
            </p>
          </div>
          <Chatlist chats={chats} />
          <Textinput addMessage={addMessage} />
        </div>
      ) : (
        <Logins setUser={setUser} />
      )}
    </div>
  );
}

export default Chats;
