import React, { useEffect, useState } from 'react'
import {Button, TextField, Typography } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from '../axiosInterceptor'

const Addblog = () => {
  const [form, setForm] = useState({
    Title: '',
    Description: '',
    ImageURL: ''
  });

  const navigate = useNavigate();
  const location=useLocation();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (location.state != null) {
      axiosInstance
        .put('http://localhost:3000/blog/update/'+location.state.val._id, form)
        .then((res) => {
          alert(res.data.message);
          navigate('/blogs');
        })
        .catch((error) => {
          alert('Error updating blog: ' + error.message);
        });
    } else {
      axiosInstance
        .post('http://localhost:3000/blog/add', form)
        .then((res) => {
          alert(res.data.message);
          navigate('/blogs');
        })
        .catch((error) => {
          alert('Error adding blog: ' + error.message);
        });
    }
  };
  useEffect(() => {
    if (location.state) {
      setForm({
        Title: location.state.val.Title,
        Description: location.state.val.Description,
        ImageURL: location.state.val.ImageURL,
      });
    } else {
      setForm({
        Title: '',
        Description: '',
        ImageURL: '',
      });
    }
  }, []);
    
  

  return (
    <div>
        <div style={{marginLeft:'40%',marginTop:'15%'}}>
        <Typography variant='h4'> Add Blog</Typography><br></br>
        <div>
        <TextField name="Title" placeholder='Title' value={form.Title} onChange={handleChange}></TextField>
        </div><br></br>
        <div>
        <TextField name="Description" placeholder='Description' value={form.Description} onChange={handleChange}></TextField>
        </div><br></br>
        <div>
        <TextField name="ImageURL" placeholder='ImageURL' value={form.ImageURL} onChange={handleChange}></TextField></div><br></br>
        
        <Button color='primary' variant='contained' onClick={handleSubmit}>Add Blog</Button>
        <div>
            <Link to={'/blogs'}></Link>
        </div>


  

    </div>
    </div>
  )
}

export default Addblog