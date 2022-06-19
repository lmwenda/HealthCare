import React from 'react'
import Login from '../../components/Login';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import withAuth from '../../components/PrivateRoute';

const index: NextPage = () => {
  return (
    <motion.div 
    animate={{ x: [  -75, 0 ], 
    opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
    transition={{ ease: 'easeIn', duration: 0.5 }} 
    className="mt-5 flex flex-col justify-center text-center md:mt-20">
       <h1 className="text-4xl">Login to HealthCare</h1>
       <p className="text-gray-500 text-2xl pt-5">Sign in to gain all your perks and improve your Healthcare!</p>
       <Login />
    </motion.div>
  )
}

export default withAuth(index);
