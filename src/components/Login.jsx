import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = ()=> {

  const[uname,unameupdate]=useState("")
  const[pass,passupdate]=useState("")

const ProceedLogin=(e)=>{
e.preventDefault()

fetch('http://localhost:3000/users?uname='+uname).then((res)=>{
  return res.json();
  // console.log(res);
}).then((resp)=>{
  // console.log(resp);
  resp.map((data)=>{
    
    if(data.pass == pass){
      console.log(data.pass==pass);
      localStorage.setItem("login",data.id)
      navigate('/')
      alert("successfull!!")
    }
  })
}).catch((err)=>{
  toast.error('Login failed due to' +err.message)
})

}


    const navigate = useNavigate()
  return (
    <div className='login'>
        <form onSubmit={ProceedLogin}>
            <h1>LOGIN PAGE</h1> <br />
            <label htmlFor="">username</label><br /><br />
            <input value={uname} onChange={e=>unameupdate(e.target.value)} type="text" placeholder='enter your username' required/><br /><br />
            <label htmlFor="">password</label><br /><br />
            <input value={pass} onChange={e=>passupdate(e.target.value)} type="password" placeholder='enetr your password' required/><br /><br />
            <button type='submit'>Submit</button> <br />
            <h5>not a user?</h5>
            <Link to={'/signup'}>Signup here</Link>
        </form>
    </div>
  )
}

export default Login