import React, { useState } from 'react';
const EmailPreview = ({ email }) => {
    const [showFullBody, setShowFullBody] = useState(false);

    const handleToggleBody = () => {
      setShowFullBody(!showFullBody);
    };
  if (!email) {
    return <div className="email-preview">Select an email to preview</div>;
  }

  return (
    <div className="email-preview">
      <div className="email-subject">{email.subject}</div>
      <div className="email-sender">{`From: ${email.sender}`}</div>
      <div className="email-body">
      {showFullBody ? email.body : email.body?.slice(0, 200)}
        {email.body?.length > 200 && (
          <span className="view-more" onClick={handleToggleBody}>
          <a>  {showFullBody ? 'View Less' : 'View More'}</a>
          </span>
        )}
        </div>
    </div>
  );
};

export default EmailPreview;
