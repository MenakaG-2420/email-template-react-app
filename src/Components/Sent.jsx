import React, { useEffect, useState } from "react";
import EmailPreview from "./EmailPreview";
import moment from 'moment'

export default function Sent() {
  const Messages = JSON.parse(localStorage.getItem("sentList")) || [];
  const [selectedEmail, setSelectedEmail] = useState(null);
  useEffect(() => {
    document.title = "Sent  | John Doe";
  }, []);
  return (
    <div className="container">
      <div className="content">
        {selectedEmail !== null ? (
          <EmailPreview
            email={selectedEmail}
            setSelectedEmail={setSelectedEmail}
          />
        ) : (
          <div className="email-list">
            {Messages?.length !== 0 ? (
              <>
                {Messages?.map((email, index) => (
                  <div
                    key={index}
                    className="email-item"
                    onClick={() => setSelectedEmail(email)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="email-subject">{email.subject}</div>
                      <div className="email-sender">{email.sender}</div>
                      <div className="email-sender">{moment(email.date).format("DD-MM-YY HH:MM")}</div>
                    </div>
                    <div className="email-sender">
                      {email.body && email.body?.length > 200
                        ? email.body?.substring(0, 200) + "..."
                        : email.body}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h3>Nothing in Sent</h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
