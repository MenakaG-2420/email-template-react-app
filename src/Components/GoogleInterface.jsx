import React, { useEffect, useState } from "react";
import EmailList from "./EmailList";
import EmailPreview from "./EmailPreview";

const GmailInterface = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  useEffect(() => {
    document.title = "Email | John Doe";
  }, []);

  return (
    <>
      <div className="container">
        <div className="content">
          {selectedEmail == null ? (
            <EmailList onSelectEmail={setSelectedEmail} />
          ) : (
            <EmailPreview email={selectedEmail} setSelectedEmail={setSelectedEmail}/>
          )}
        </div>
      </div>
    </>
  );
};

export default GmailInterface;
