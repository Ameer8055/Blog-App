import {Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const[form,setForm]=useState({
    email:'',
    password:''
  })
  const  navigate=useNavigate();
  function capValue(){
    // console.log(form);
    axios.post('http://localhost:3000/user/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token)
      navigate('/blogs');}
      else{
        navigate('/');
      }
    }).catch((error)=>{
      alert('invalid login');
    })
  }

  return (
    <div style={{marginLeft:'40%',marginTop:'15%'}}>
        <Typography variant='h4'> BlogApp Login</Typography><br></br>
        <div>
        <TextField placeholder='email' name='email' onChange={(e)=>{

        
          setForm({...form,email:e.target.value})}}>
        </TextField>
        </div><br></br>
        <div>
        <TextField placeholder='password' name='password' onChange={(e)=>{
          
        
        setForm({...form,password:e.target.value})}}>
          </TextField></div><br></br>
        <Button color='primary' variant='contained' onClick={capValue}>Login</Button>
        <div>
            <Link to={'/signup'}>New user?Click here to SignUp</Link>
        </div>

    </div>
  )
}

export default Login