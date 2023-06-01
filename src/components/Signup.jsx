import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom'
import { Toast } from 'react-bootstrap';

export const SignupPage=()=> {

  // const [id,idchange] = useState("")
  const [fname,fnamechange] = useState("")
  const [uname,unamechange] = useState("")
  const [email,emailchange] = useState("")
  const [pass,passchange] = useState("")

const navigate = useNavigate()

const handlesubmit=(e)=>{
  e.preventDefault()
  let regobj = {fname,uname,email,pass};
  console.log(regobj);
  regobj.cart=[]

  fetch('http://localhost:3000/users',{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(regobj)
  }).then((res)=>{
    console.log(res);
    alert("Registration successfull")
    navigate('/login')
  }).catch((err)=>{
    console.log(er);
    alert("Failed :" +err.message)
  })

}
  return (
    <div className={styles.signupContainer}>
      <form onSubmit={handlesubmit} className={styles.signupForm}>
        <h1>Sign Up</h1>
        <label htmlFor="fullname">Full Name</label>
        <input value={fname} onChange={e=>fnamechange(e.target.value)} type="text" id="fullname" placeholder="Enter your full name" required />
        <label htmlFor="username">Username</label>
        <input value={uname} onChange={e=>unamechange(e.target.value)} type="text" id="username" placeholder="Enter your username" required />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={e=>emailchange(e.target.value)} type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={e=>passchange(e.target.value)} type="password" id="password" placeholder="Enter your password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
