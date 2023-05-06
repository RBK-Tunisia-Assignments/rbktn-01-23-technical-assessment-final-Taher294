import React, { useState } from "react";
import { password } from "../../../server/database-mysql/config";
import axios from 'axios';

const Delete = () =>{
    const[username,setusername]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
   
}

    const Deleteclient={
        username:username,
        email:email,
        password:password,
    }   
    axios.delete("http://localhost:3001/client",Deleteclient)
    
    return (
        <div>
             <input type="text" placeholder="username" onChange={e=>setName(e.target.value)}/>
       <input type="number" placeholder="password" onChange={e=>setpassword(e.target.value)}/>
       <button onClick={handledelete} >delete client</button>
        </div>
    )
