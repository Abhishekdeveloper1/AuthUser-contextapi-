// // import logo from './logo.svg';
// // import './App.css';
// // import Regsiter from './component/user/register';
// // import Login from './component/user/login';
// // import {AuthTokenContext} from './component/user/AuthTokenContext';
// // import Dashboard from './component/user/dahboard';
// // import { useState } from 'react';
// // function App() {
// //   const [token, setToken] = useState(null); // State for managing the token
// // alert(token);
// //   return (
// //     <AuthTokenContext.Provider value={{token,setToken}}>
// //          {/* {!token ? <Login /> : <Dashboard />} */}
// //          <Login />
// //          <Dashboard />
// //     {/* // <Regsiter></Regsiter> */}
   
// //     </AuthTokenContext.Provider>
// //   );
// // }

// // export default App;
// import logo from './logo.svg';
// import './App.css';
// import Register from './component/user/register';
// import Login from './component/user/login';
// import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
// import { AuthTokenContext } from './component/user/AuthTokenContext';
// import Dashboard from './component/user/dahboard';
// import { useState } from 'react';

// function App() {
//   const [token, setToken] = useState(null); // State for managing the token
//   console.log("Current Token in App:", token);

//   // Log or alert the token value, if you need to debug
//   // console.log(token); // For debugging purposes
//   // alert(token); // Consider removing this line during production

//   return (
//     <AuthTokenContext.Provider value={{ token, setToken }}>

//     <BrowserRouter>
//           <Routes>

//     <Route path="/" element={<Login />} />
//     <Route path="/dashboard" element={<Dashboard />} />

      
//     </Routes>

//     </BrowserRouter>
//     </AuthTokenContext.Provider>

//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthTokenContext } from "./component/user/AuthTokenContext";
import Login from "./component/user/login";
import Dashboard from './component/user/dahboard';
function App() {
  const [token, setToken] = useState(null); // State for managing the token
  console.log("Current Token in App:", token); // Logs the current token value

  return (
    <AuthTokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthTokenContext.Provider>
  );
}

export default App;
