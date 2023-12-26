import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const clear = () => {
    setTo("");
    setSubject("");
    setMessage("");
    navigate("/");
  };

  useEffect(() => {
    document.title = "Compose  | John Doe";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    let array = JSON.parse(localStorage.getItem("sentList")) || [];

    let newItem = {
      id: Math.random(),
      subject: subject,
      sender: to,
      date: new Date(),
      body: message,
    };

    array = [...array, newItem];
    localStorage.setItem("sentList", JSON.stringify(array));
    navigate("/sent");
  };

  return (
    <div className="compose-container">
      <h3>Compose Email</h3>
      <form className="compose-form" onSubmit={handleSubmit}>
        <label className="compose-label">From:</label>
        <input type="text" className="compose-input" value="xyz@gmail.com" />
        <label className="compose-label">To:</label>
        <input
          type="text"
          className="compose-input"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />

        <label className="compose-label">Subject:</label>
        <input
          type="text"
          className="compose-input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label className="compose-label">Message:</label>
        <textarea
          className="compose-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <button type="submit" className="compose-button">
            Send
          </button>
          <button onClick={clear} className="compose-cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
