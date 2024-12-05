import React, { useState } from 'react';
import axios from 'axios';
import './backend.css';

const BackendOutputPage = () => {
  const [pincode, setPincode] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const fetchPostalDetails = async () => {
    setError('');
    setResults([]);

    if (!pincode) {
      setError('Please enter a valid PIN code.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/api/postal/${pincode}`);
      const { status, postOffices, message } = response.data;

      if (status === 'Success') {
        setResults(postOffices);
      } else {
        setError(message || 'No records found.');
      }
    } catch (err) {
      setError('An error occurred while fetching data. Please try again.');
    }
  };

  return (
    <div className="output-page">
      <h1>Postal Information Lookup</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter PIN Code"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="input-box"
        />
        <button onClick={fetchPostalDetails} className="search-button">
          Search
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {results.length > 0 && (
        <div className="results-container">
          <h2>Post Offices:</h2>
          <ul>
            {results.map((office, index) => (
              <li key={index} className="result-item">
                <strong>Name:</strong> {office.Name} <br />
                <strong>State:</strong> {office.State}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BackendOutputPage;
