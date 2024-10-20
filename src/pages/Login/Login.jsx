import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../Firebase'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = async(event)=>{
    event.preventDefault()
    if(signState==="Sign In"){
      await login(email, password);
    }else{
      await signup(name,email,password);
    }
  }

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" value={name} onChange={()=>setName(e.target.value)} placeholder='Your name'/>:<></>}
          <input type="email" value={email} onChange={()=>setEmail(e.target.value)} placeholder='email'/>
          <input value={password} onChange={()=>setPassword(e.target.value)} type="password" placeholder='password' />
          <button onClick={userAuth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember-cont">
              <div className='remember'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>
              <p>Need help ?</p>
              </div>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
          <p> New to Netflix ? <span onClick={()=>{setSignState("Sign Up")}}>Sign up Now</span></p>
          :<p>Already have an account <span onClick={()=>{setSignState("Sign In")}}>Sign in Now</span></p>
}
        </div>
      </div>
      
    </div>
  )
}

export default Login
