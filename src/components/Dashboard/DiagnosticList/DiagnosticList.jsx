import React from 'react';
import './DiagnosticList.css';

const DiagnosticList = ({ diagnosticList }) => {
  if (!diagnosticList) return null;

  return (
    <div className="diagnostic-list">
      <h2>Diagnostic List</h2>
      <div className="table-container">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
