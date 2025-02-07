import React,{useState} from "react";
import axios from 'axios';


export default function RandomUser() {
    const [user,setUser] =useState('')
    const fetchUserData = ()=>
    {
        axios.get('https://randomuser.me/api/').then((response)=>{setUser(response.data.results[0])}).catch((error)=>{
            console.log(error)
        })
    }
        
  return (
    <div>RandomUser
    {user ?(<div>
            <h1>expale</h1>     
            <img src={user.picture.large} alt="user img"/>
        </div>):(<p>click button</p>)}
        <button onClick={fetchUserData}>Get user </button>
        </div>
  )
}
