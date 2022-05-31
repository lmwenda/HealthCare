import Router from 'next/router';
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Register = () => {

  const [ message, setMessage ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
 
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);


  const registerUser = async(e: React.FormEvent) => {
    e.preventDefault();

    if(email && password !== ""){
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if(user){
        setMessage("Successfully Created an Account...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        return Router.push("/login");
      }
      else{
        setMessage("An Account with that email already exists..."); 
        await new Promise(resolve => setTimeout(resolve, 2000));
        setMessage("");
      }
    }
    if(email && password === ""){
      setMessage("Invalid Password...")
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage("");
    }
    if(!email.includes("@")){
      setMessage("Invalid Email Address...");
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage("");
    }
  }
  return (
    <form className="flex flex-col space-y-5 mt-10 items-center">
        <label className="text-center">{message}</label>
        <label className="w-[80vw] text-left md:w-[50vw]">Email</label>
        <input className="border border-gray-300 w-[80vw] p-2 rounded sm:w-[50vw]" onChange={emailHandler} type="email" />

        <label className="w-[80vw] text-left md:w-[50vw]">Password</label>
        <input className="border border-gray-300 w-[80vw] p-2 rounded sm:w-[50vw]" onChange={passwordHandler} type="password" />
    
   
        <button 
        className="p-2 bg-white border border-blue-500 text-blue-500 text-white rounded w-[90vw] sm:w-[50vw]" 
        onClick={registerUser}>
          Register
        </button>
    </form>
  )
}

export default Register;