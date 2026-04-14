import React from 'react';
import './LabResults.css';
import { Download } from 'lucide-react';

const LabResults = ({ labResults }) => {
  if (!labResults || labResults.length === 0) return null;

  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <ul className="lab-list">
        {labResults.map((result, index) => (
          <li key={index} className="lab-item">
            <span className="lab-name">{result}</span>
            <Download size={20} className="download-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
