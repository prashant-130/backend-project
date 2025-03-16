import React from 'react';
import { useState } from 'react';
const SignUp=()=>
{
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')

    let collectData=()=>
    {
        console.log(name,email,password)
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