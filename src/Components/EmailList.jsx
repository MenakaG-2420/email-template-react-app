import React, { useEffect } from "react";

const EmailList = ({ onSelectEmail }) => {
  const emails = [
    {
      id: 1,
      subject: "Meeting Tomorrow",
      sender: "john.doe@example.com",
      date: "2023-01-10T08:30:00Z",
      body: "Hello team, we have a meeting scheduled for tomorrow at 10 AM. Please be prepared.",
    },
    {
      id: 2,
      subject: "Project Update",
      sender: "jane.smith@example.com",
      date: "2023-01-11T14:45:00Z",
      body: "Hi everyone, here's the latest update on our ongoing project. Please review and provide feedback.",
    },
    {
      id: 3,
      subject: "Invitation: Company Event",
      sender: "events@example.com",
      date: "2023-01-15T18:00:00Z",
      body: "You're invited to our company's annual event. Join us for an evening of celebration and networking.",
    },
    {
      id: 4,
      subject: "Important Announcement",
      sender: "ceo@example.com",
      date: "2023-01-20T12:00:00Z",
      body: "Dear Employees,We have important updates coming soon. Please review the attached document for details on upcoming changes. We value your understanding and cooperation during this transition. Stay tuned for additional information sessions.",
    },
    {
      id: 5,
      subject: "Weekend Getaway",
      sender: "traveldeals@example.com",
      date: "2023-01-25T09:00:00Z",
      body: "Plan your weekend getaway with our exclusive travel deals. Book now and save!",
    },
  ];

  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails));
  }, [emails]);
  

  return (
    <div className="email-list">
      {emails?.map((email, index) => (
        <div
          key={index}
          className="email-item"
          onClick={() => onSelectEmail(email)}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="email-subject">{email.subject}</div>
            <div className="email-sender">{email.sender}</div>
          </div>
          <div className="email-sender">
            {email.body && email.body?.length > 200
              ? email.body?.substring(0, 200) + "..."
              : email.body}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
