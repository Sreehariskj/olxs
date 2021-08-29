import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
  const handleSubmit=()=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  
  return (
    <div>
  
      <div className="loginParentDiv">
      <div onClick={()=>{
         history.push('/')
       }} className="closeButton">
        <i class="fa fa-times fa-2x" aria-hidden="true"></i> </div> 
        <img width="200px" height="200px" src={Logo} alt="olxLogo"></img>
        <div>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>
             setEmail(e.target.value)
            }
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>
             setPassword(e.target.value)
            }
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Login</button>
        </div>
       {/* form*/}
       <h6 onClick={()=>
        history.push('/signup')
        }>Signup</h6> 
      </div> 
    </div>
  );
}

export default Login;
