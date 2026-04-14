import React from 'react';
import './Sidebar.css';
import { Search, MoreHorizontal } from 'lucide-react';

const Sidebar = ({ patients, activePatient, onSelectPatient }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Patients</h2>
        <Search size={20} className="search-icon" />
      </div>
      <div className="patient-list">
        {patients.map((patient, index) => {
          const isActive = activePatient && activePatient.name === patient.name;
          return (
            <div 
              key={index} 
              className={`patient-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectPatient(patient)}
            >
              <div className="patient-info">
                <img src={patient.profile_picture} alt={patient.name} className="patient-avatar" />
                <div className="patient-details">
                  <span className="patient-name">{patient.name}</span>
                  <span className="patient-demographics">{patient.gender}, {patient.age}</span>
                </div>
              </div>
              <MoreHorizontal size={20} className="more-icon" />
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
