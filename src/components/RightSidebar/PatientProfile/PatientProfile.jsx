import React from 'react';
import './PatientProfile.css';
import { Calendar, Phone, ShieldAlert, Shield } from 'lucide-react';

const PatientProfile = ({ activePatient }) => {
  if (!activePatient) return null;

  return (
    <div className="patient-profile">
      <div className="profile-header">
        <img src={activePatient.profile_picture} alt={activePatient.name} className="large-avatar" />
        <h2>{activePatient.name}</h2>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <div className="icon-wrapper"><Calendar size={18} /></div>
          <div className="detail-text">
            <span className="detail-label">Date Of Birth</span>
            <span className="detail-value">{activePatient.date_of_birth}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="icon-wrapper"><span className="gender-icon">{activePatient.gender === 'Female' ? '♀' : '♂'}</span></div>
          <div className="detail-text">
            <span className="detail-label">Gender</span>
            <span className="detail-value">{activePatient.gender}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="icon-wrapper"><Phone size={18} /></div>
          <div className="detail-text">
            <span className="detail-label">Contact Info.</span>
            <span className="detail-value">{activePatient.phone_number}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="icon-wrapper"><ShieldAlert size={18} /></div>
          <div className="detail-text">
            <span className="detail-label">Emergency Contacts</span>
            <span className="detail-value">{activePatient.emergency_contact}</span>
          </div>
        </div>

        <div className="detail-item">
          <div className="icon-wrapper"><Shield size={18} /></div>
          <div className="detail-text">
            <span className="detail-label">Insurance Provider</span>
            <span className="detail-value">{activePatient.insurance_type}</span>
          </div>
        </div>
      </div>

      <button className="show-all-btn">Show All Information</button>
    </div>
  );
};

export default PatientProfile;
