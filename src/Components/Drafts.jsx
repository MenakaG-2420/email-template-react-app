import React, { useEffect } from "react";

export default function Drafts() {
  useEffect(() => {
    document.title = "Drafts  | John Doe";
  }, []);
  return (
    <div className="container">
      <div className="content">
        <h3>No Draft messages Available</h3>
      </div>
    </div>
  );
}
