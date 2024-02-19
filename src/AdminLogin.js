import React, { useContext } from 'react'
import "./AdminLogin.css"
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext.js"

function AdminLogin() {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type: "LOGIN", payload:user})
    setError(false)
    navigate("/AdminDashboard")
  })
  .catch((error) => {
    setError(true)
  });

  }
  return (
    <div className='AdminLogin'>
      <div className="loginForm">
      <h2> SIGN IN TO DASHBOARD</h2>
      <form onSubmit={handleLogin}>
        <label>
          <input type="email" placeholder='email'onChange={e => setEmail(e.target.value)}/>
        </label>
        <br />
        <label>
          <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
        </label> <br />
        <button type='submit'>Login</button> <br />
        {error && <span style={{color:"red"}}>Wrong email or password!</span>}
      </form>
      </div>
      
    </div>
  )
}

export default AdminLogin