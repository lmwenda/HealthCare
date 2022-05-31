import { getIdToken } from 'firebase/auth';
import Router from 'next/router';
import React, { useState } from 'react'
import { auth } from '../firebase';

const Login = () => {

  const [ message, setMessage ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const loginUser = async(e: React.FormEvent) => {
    e.preventDefault();

    const user: any = await auth.signInWithEmailAndPassword(email, password);
    
    if(user){
      localStorage.setItem("token", JSON.stringify(await getIdToken(user.user)));
      Router.push("/");
    }
    if(!user) return setMessage("Incorrect Email or Password");
  }

  return (
    <form className="flex flex-col space-y-5 mt-10 items-center">
        
        <label className="text-center justify-center text-red">{message}</label>
        
        <label className="w-[80vw] text-left md:w-[50vw]">Email</label>
        <input className="border border-gray-300 w-[80vw] p-2 rounded sm:w-[50vw]" onChange={emailHandler} type="email" />

        <label className="w-[80vw] text-left md:w-[50vw]">Password</label>
        <input className="border border-gray-300 w-[80vw] p-2 rounded sm:w-[50vw]" type="password" onChange={passwordHandler} />
    
        <button onClick={loginUser} className="p-2 bg-white border border-blue-500 text-blue-500 text-white rounded w-[90vw] sm:w-[50vw]">
          Login
        </button>
    </form>
  )
}

export default Login;