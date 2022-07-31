import Router from 'next/router';
import React, { useState } from 'react'
import {BASE_URL} from '../../utils/exportedDefinitions';

const Register = () => {

  const [ message, setMessage ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ username, setUsername ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
 
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

const createUser = async(e: React.FormEvent) => {
  e.preventDefault();

  const user = {
    email,
    username,
    password
  }
  
  const response = await fetch(
    BASE_URL + "api/users/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  );

  const data = await response.json();
  setMessage(data.message);
  
  if(data.message === "Successfully Created a new user...") return Router.push("/login");
}

 return (
    <form className="flex flex-col space-y-5 mt-10 items-center">
        <label className="text-center">{message}</label>
        <label className="w-[80vw] text-left md:w-[50vw]">Email</label>
        <input className="border border-gray-300 w-[80vw] p-2 rounded sm:w-[50vw]" onChange={emailHandler} type="email" />

        <label className="w-[80vw] text-left md:w-[50vw]">Username</label>
        <input className="border border-gray-300 w-[80vw] p-2 rounded sm:w-[50vw]" onChange={usernameHandler} type="username" />

        <label className="w-[80vw] text-left md:w-[50vw]">Password</label>
        <input className="border border-gray-300 w-[80vw] p-2 rounded sm:w-[50vw]" onChange={passwordHandler} type="password" />
    
   
        <button 
        className="p-2 bg-white border border-blue-500 text-blue-500 text-white rounded w-[90vw] sm:w-[50vw]" 
          onClick={(e: React.FormEvent) => createUser(e)}>
          Register
        </button>
    </form>
  )
}

export default Register;
