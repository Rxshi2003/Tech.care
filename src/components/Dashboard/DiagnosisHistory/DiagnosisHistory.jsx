import React from 'react';
import './DiagnosisHistory.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DiagnosisHistory = ({ diagnosisHistory }) => {
  if (!diagnosisHistory || diagnosisHistory.length === 0) return null;

  const historyData = [...diagnosisHistory].slice(0, 6).reverse();

  const labels = historyData.map(h => `${h.month.slice(0,3)}, ${h.year}`);
  const systolicData = historyData.map(h => h.blood_pressure.systolic.value);
  const diastolicData = historyData.map(h => h.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        tension: 0.4,
        pointRadius: 6,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
        tension: 0.4,
        pointRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false 
      }
    },
    scales: {
      y: { min: 60, max: 180 }
    }
  };

  const latest = historyData[historyData.length - 1] || {};

  return (
    <div className="diagnosis-history">
      <h2>Diagnosis History</h2>
      <div className="chart-container">
        <div className="chart-header">
          <h3>Blood Pressure</h3>
          <span className="months-filter">Last 6 months ⌄</span>
        </div>
        <div className="chart-layout">
          <div className="chart-wrapper">
            <Line data={data} options={options} />
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-label">
                <span className="dot systolic-dot"></span> Systolic
              </div>
              <div className="legend-value">{latest.blood_pressure?.systolic.value}</div>
              <div className="legend-status">▲ {latest.blood_pressure?.systolic.levels}</div>
            </div>
            <div className="legend-divider"></div>
            <div className="legend-item">
              <div className="legend-label">
                <span className="dot diastolic-dot"></span> Diastolic
              </div>
              <div className="legend-value">{latest.blood_pressure?.diastolic.value}</div>
              <div className="legend-status">▼ {latest.blood_pressure?.diastolic.levels}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="vital-signs">
        <div className="vital-card resp-rate">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="vital-icon">
            <circle cx="48" cy="48" r="48" fill="white" />
            <path d="M48 20V40" stroke="#072635" strokeWidth="4" strokeLinecap="round"/>
            <path d="M44 42 C30 42 22 55 24 72 C25 80 40 80 42 72 V50" fill="#88D4F8" stroke="#072635" strokeWidth="4" />
            <path d="M52 42 C66 42 74 55 72 72 C71 80 56 80 54 72 V50" fill="#88D4F8" stroke="#072635" strokeWidth="4" />
          </svg>
          <div className="vital-title">Respiratory Rate</div>
          <div className="vital-value">{latest.respiratory_rate?.value} bpm</div>
          <div className="vital-status">{latest.respiratory_rate?.levels}</div>
        </div>
        <div className="vital-card temp">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="vital-icon">
            <circle cx="48" cy="48" r="48" fill="white" />
            <rect x="42" y="24" width="12" height="36" rx="6" fill="#F87E8B" stroke="#072635" strokeWidth="4" />
            <circle cx="48" cy="66" r="14" fill="#F87E8B" stroke="#072635" strokeWidth="4" />
            <path d="M58 30 H68 M58 38 H68 M58 46 H68 M58 54 H68 M60 34 H64 M60 42 H64 M60 50 H64" stroke="#072635" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="vital-title">Temperature</div>
          <div className="vital-value">{latest.temperature?.value}°F</div>
          <div className="vital-status">{latest.temperature?.levels}</div>
        </div>
        <div className="vital-card heart-rate">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="vital-icon">
            <circle cx="48" cy="48" r="48" fill="white" />
            <path d="M48 76 C48 76 20 54 20 38 C20 28 28 20 38 20 C43 20 48 24 48 24 C48 24 53 20 58 20 C68 20 76 28 76 38 C76 54 48 76 48 76 Z" fill="#F87E8B" stroke="#072635" strokeWidth="4" strokeLinejoin="round" />
            <path d="M26 48 H36 L42 32 L50 64 L56 48 H70" stroke="#072635" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <div className="vital-title">Heart Rate</div>
          <div className="vital-value">{latest.heart_rate?.value} bpm</div>
          <div className="vital-status">▼ {latest.heart_rate?.levels}</div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
