import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import { useState } from "react";
function Regsiter()
{
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [errorMessage, setErrorMessage] = useState("");
    // const [name, setName] = useState(""); // State to store the name input

// const handlusername=(event)=>{
// setname(event.target.value);
// }
const myDisplay = (data) => {
    console.log("Response from server:", data);
};
const registerUser=(e)=>{
    e.preventDefault();
if(!name || !email || !password)
{
    setErrorMessage('complete your form');
    return;
}
else
{
fetch("http://127.0.0.1:8000/api/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({name:name,email:email,password:password,c_password:password})
})
.then((response) => {
    if (!response.ok) {
      throw new Error("Failed to register. Please try again.");
    }
    console.log(response);
    return response.text();
  })
  .then((data) => myDisplay(data))
  .catch((error) => {
    console.error("Error:", error);
    setErrorMessage(error.message);
  });
}
}
// return;

    return(
        <>
        <form>
        <div class="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter user name" onChange={(e)=>setname(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={registerUser} class="btn btn-primary">Submit</button>
</form>
{errorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          {errorMessage}
        </div>
      )}
        </>
    )
}
export default Regsiter;