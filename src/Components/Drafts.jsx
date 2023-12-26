import React, { useEffect } from "react";

export default function Drafts() {
  useEffect(() => {
    document.title = "Drafts  | John Doe";
  }, []);
  return (
    <div className="container">
      <div className="content">
        <h3>Nothing in Drafts</h3>
      </div>
    </div>
  );
}
