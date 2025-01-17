import react from "react";
import { useState } from "react";
import { createContext,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {AuthTokenContext} from "./AuthTokenContext";
// export const authtoken=createContext();
// const {setToken}=createContext(AuthTokenContext);//token setter
function Login()
{
// const [token,setToken]=useState('');
const [email,setemail]=useState('');
const [password,setpassword]=useState('');

const [errorMessage,setErrorMessage]=useState('');
const { setToken } = useContext(AuthTokenContext); // Access context to set the token


const loginUSer=(e)=>{
    
    e.preventDefault();
if(!email || !password)
{
    setErrorMessage('Complete your login form');
    return;
}
fetch("http://127.0.0.1:8000/api/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password })
  })
  .then((response) => {
    console.log("Response Status:", response.status);
    if (!response.ok) {
      setErrorMessage(`Login failed. Status: ${response.status}`);
      return response.text(); // Capture raw response text if not OK
    }
    return response.text();  // Get raw response text
  })
  .then((text) => {
    console.log("Raw Response Text:", text);  // Log raw response to see what the server returned
    if (text) {
      // alert(text);
      setToken(text); // Directly set the JWT string as the token
      window.location.href = "/dashboard";
      console.log("Received Token:", text);  // Log the token
    } else {
      setErrorMessage('No token received');
    }
  })
  .catch((error) => {
    console.error("Error:", error);
    setErrorMessage(error.message);
  });
  
}

    return(
        <>
        <form>
     
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
  </div>
  {/* <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" onClick={loginUSer} class="btn btn-primary">Submit</button>
</form>
{errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
        </>
    )
}
export default Login;