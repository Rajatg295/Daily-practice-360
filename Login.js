import React, { useState } from "react";
import axios from 'axios';

const Login=()=>{
    const [name, setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

const handlesubmit=(e)=>{
    e.preventDefault();
    try{
        axios.post("http://localhost:5000/data", {name, email,password})
        console.log(name, email,password)
    }
catch(err){
    console.log(err,"data not sent");
}

    console.log(name,email,password);
}
    
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>name
                <input type="text"
                value={name}
                onChange={(e)=> {setName(e.target.value)}}
                required
                placeholder="enter the name"
                name="name"
                /></label>

                <label>email
                <input type="email" 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    placeholder="enter the email"
                    email="email"
                />
                </label>
                <label>
                password
                <input type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
                name="password"
                placeholder="enter the password"
                 />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;