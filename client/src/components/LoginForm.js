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

// src/components/LoginForm.js

// import React, { useState } from 'react';
// import { GoogleLogin } from 'react-google-login';
// import { API_BASE_URL } from '../api';

// function LoginForm() {
//   const [error, setError] = useState(null);

//   const responseGoogle = (response) => {
//     setError(null); // Clear any previous errors

//     fetch(`${API_BASE_URL}/auth/google_oauth2/callback`, {
//       method: 'POST',
//       body: JSON.stringify({ access_token: response.accessToken }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Authentication failed');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Handle the successful authentication response
//         // Redirect or display user profile here
//       })
//       .catch((error) => {
//         setError(error.message); // Display the error message
//       });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <div className="error">{error}</div>}
//       <GoogleLogin
//         clientId="YOUR_GOOGLE_CLIENT_ID"
//         buttonText="Login with Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
//     </div>
//   );
// }

// export default LoginForm;
