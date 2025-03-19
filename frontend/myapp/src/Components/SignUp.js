import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp=()=>
{
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')

   const navigate= useNavigate()
   useEffect(()=>
   {
       const auth= localStorage.getItem('users')
       if(auth)
       {
           navigate('/')
       }

   })
    let collectData=async()=>
    {
        const result= await fetch('http://localhost:5600/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers: { 'Content-Type': 'application/json' },
        })
        let result1=await  result.json() 
        console.log(result1)

        if(result1)
        {
            localStorage.setItem("users",JSON.stringify(result1))
            navigate('/')
        }
    }
    return <>
    <div className='register'>
        <h2>Register</h2>
        <input onChange={(e)=>{setname(e.target.value)}} value={name} className='inputbox' type="text"  placeholder="Enter name"></input>
        <input onChange={(e)=>{setemail(e.target.value)}} value={email}  className='inputbox' type="text" placeholder="Enter Email"></input>
        <input onChange={(e)=>{setpassword(e.target.value)}} value={password} className='inputbox' type="password" placeholder="Enter Password"></input>
        <button onClick={collectData} type='button' className='appButton'> Sign Up</button>
    </div>
    </>
}
export default SignUp;