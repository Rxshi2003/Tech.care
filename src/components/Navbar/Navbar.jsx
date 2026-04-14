import React from 'react';
import './Navbar.css';
import { Home, Users, Calendar, MessageCircle, CreditCard, MoreVertical, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2V16H2V30H16V16H30V2H16Z" fill="#01F0D0" />
        </svg>
        <span className="logo-text">Tech.Care</span>
      </div>
      
      <ul className="navbar-menu">
        <li className="menu-item"><Home size={18} /> <span>Overview</span></li>
        <li className="menu-item active"><Users size={18} /> <span>Patients</span></li>
        <li className="menu-item"><Calendar size={18} /> <span>Schedule</span></li>
        <li className="menu-item"><MessageCircle size={18} /> <span>Message</span></li>
        <li className="menu-item"><CreditCard size={18} /> <span>Transactions</span></li>
      </ul>

      <div className="navbar-profile">
        <div className="profile-info">
          <img src="https://fedskillstest.ct.digital/4.png" alt="Dr. Jose Simmons" className="profile-img" />
          <div className="profile-text">
            <span className="profile-name">Dr. Jose Simmons</span>
            <span className="profile-role">General Practitioner</span>
          </div>
        </div>
        <div className="profile-actions">
          <Settings size={20} className="action-icon" />
          <MoreVertical size={20} className="action-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
