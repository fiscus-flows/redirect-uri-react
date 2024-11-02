import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../AuthRedirectHandler.css';

const AuthRedirectHandler = () => {
  const location = useLocation();
  const [title, setTitle] = useState('Finishing up...');
  const [statusMessage, setStatusMessage] = useState('Connecting securely...');
  const [errorMessage, setErrorMessage] = useState('');
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      const queryParams = new URLSearchParams(location.search);
      const params = Object.fromEntries(queryParams.entries());

      fetch('https://n33eykj5o1.execute-api.us-east-1.amazonaws.com/prod/exchange/user-org-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            setErrorMessage('There was an issue. Please try again later and close this window.');
            setTitle('Error');
            setStatusMessage('');
          } else {
            setTitle('All Set!');
            setStatusMessage('You’re all set! Please close this window.');
          }
        })
        .catch(() => {
          setErrorMessage('An error occurred. Please close this window and try again later.');
          setTitle('Error');
          setStatusMessage('');
        });
    }
  }, [location.search]);

  return (
    <div className="auth-handler">
      <div className="auth-content">
        <h2>{title}</h2>
        <p className="status">{errorMessage || statusMessage}</p>
      </div>
    </div>
  );
};

export default AuthRedirectHandler;
