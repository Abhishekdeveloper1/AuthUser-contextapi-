// import react from "react";
// import { useContext } from "react";
// import {AuthTokenContext} from "./AuthTokenContext";
// function Dashboard()
// {
//     const { token } = useContext(AuthTokenContext); // Correctly access token

//     return (
//         <div>
//           <h2>Dashboard</h2>
//           {token ? (
//             <p>You are logged in. Your token is: {token}</p>
//           ) : (
//             <p>Please log in to access the dashboard.</p>
//           )}
//         </div>
//       );
// }
// export default Dashboard;

import React, { useContext } from "react";
import { AuthTokenContext } from "./AuthTokenContext";

function Dashboard() {
  const { token } = useContext(AuthTokenContext); // Access token from context

  console.log("Token in Dashboard:", token); // Debug log

  return (
    <div>
      <h2>Dashboard</h2>
      {token ? (
        <p>You are logged in. Your token is: {token}</p>
      ) : (
        <p>You are not logged in. Please log in first.</p>
      )}
    </div>
  );
}

export default Dashboard;
