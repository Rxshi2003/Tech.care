import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import DiagnosisHistory from './components/Dashboard/DiagnosisHistory/DiagnosisHistory';
import DiagnosticList from './components/Dashboard/DiagnosticList/DiagnosticList';
import PatientProfile from './components/RightSidebar/PatientProfile/PatientProfile';
import LabResults from './components/RightSidebar/LabResults/LabResults';
import { fetchPatients } from './services/api';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [activePatient, setActivePatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
        const jessica = data.find(p => p.name === "Jessica Taylor") || data[0];
        setActivePatient(jessica);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="loading">Loading Tech.Care Dashboard...</div>;

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <div className="sidebar-container">
          <Sidebar 
            patients={patients} 
            activePatient={activePatient} 
            onSelectPatient={setActivePatient} 
          />
        </div>
        <div className="dashboard-container">
          <DiagnosisHistory diagnosisHistory={activePatient?.diagnosis_history} />
          <DiagnosticList diagnosticList={activePatient?.diagnostic_list} />
        </div>
        <div className="right-sidebar-container">
          <PatientProfile activePatient={activePatient} />
          <LabResults labResults={activePatient?.lab_results} />
        </div>
      </main>
    </div>
  );
}

export default App;
