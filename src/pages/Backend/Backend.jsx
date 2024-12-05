import React, { useState } from 'react';
import axios from 'axios';
import './backend.css';

const BackendOutputPage = () => {
  const [pincode, setPincode] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const fetchPostalDetails = async () => {
    setError('');
    setResults(null);

    try {
      const response = await axios.get('https://api.postalpincode.in/pincode/${pincode}');
      setResults(response.data.postOffices);
    } catch (err) {
      setError(err.response?.data?.message || 'An unexpected error occurred.');
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

      {results && (
        <div className="results-container">
          <h2>Results:</h2>
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
