import React from 'react';
import '../TopBar.css';
import flora from "../imag/flora.png";
const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar__welcome">
        <h2>Bienvenue Mr/Mme Doe !</h2>
      </div>
      <div className="topbar__search">
        <input type="text" placeholder="Rechercher..."  />
      </div>
      <div className="topbar__icons">
        <i className="fas fa-bell"></i>
        <div className="user-icon">
          <img src={flora} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
