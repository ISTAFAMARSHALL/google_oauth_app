// src/components/UserProfile.js
// import React, { useEffect, useState } from 'react';
// import { API_BASE_URL } from '../api';

// function UserProfile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user information from your Rails API
//     fetch(`${API_BASE_URL}/auth/validate_token`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'access-token': 'YOUR_ACCESS_TOKEN', // Include the user's access token here
//         'client': 'YOUR_CLIENT_ID', // Include the user's client ID here
//         'expiry': 'YOUR_EXPIRY', // Include the user's expiry here
//         'uid': 'USER_UID', // Include the user's UID here
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setUser(data.data);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       {user && (
//         <div>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           {/* Add more user information here */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserProfile;

// src/components/UserProfile.js

import React, { useEffect, useState } from 'react';
// import { API_BASE_URL } from '../api';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user information from your Rails API
    fetch(`${""}/auth/validate_token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access-token': 'YOUR_ACCESS_TOKEN', // Include the user's access token here
        'client': 'YOUR_CLIENT_ID', // Include the user's client ID here
        'expiry': 'YOUR_EXPIRY', // Include the user's expiry here
        'uid': 'USER_UID', // Include the user's UID here
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data);
      });
  }, []);

  const handleLogout = () => {
    // Implement logout logic here (clear user session, etc.)
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user information here */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
