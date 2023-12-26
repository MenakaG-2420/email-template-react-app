import React from "react";

const Header = () => {

  return (
    <div className="header">
      <div className="header-logo">
        <img src="/img/gmail_logo.png" />
        <a href="/" className="logo">
          Gmail
        </a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-icon" title="More">
        <img src="/img/settings.png" />
      </div>
      <div className="user-info">
        <span className="user-name">John Doe</span>
        <img
          src="https://toppng.com/public/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
          alt="User Avatar"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default Header;
