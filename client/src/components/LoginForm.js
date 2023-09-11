// src/components/LoginForm.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { API_BASE_URL } from '../api';

function LoginForm() {
  const responseGoogle = (response) => {
    // Send the Google OAuth2 response to your Rails API for authentication
    fetch(`${API_BASE_URL}/auth/google_oauth2/callback`, {
      method: 'POST',
      body: JSON.stringify({ access_token: response.accessToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the authentication response from the API
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default LoginForm;
