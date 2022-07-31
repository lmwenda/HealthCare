import React from 'react'
import { motion } from 'framer-motion';
import Register from '../../components/Forms/Register';
import { NextPage } from 'next';

const index: NextPage = () => {
  return (
    <motion.div 
    animate={{ x: [  -75, 0 ], 
    opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
    transition={{ ease: 'easeIn', duration: 0.5 }} 
    className="mt-5 flex flex-col justify-center text-center md:mt-20">
       <h1 className="text-4xl">Become a Member</h1>
       <p className="text-gray-500 text-2xl pt-5">Open an account and get your Healthcare in seconds...</p>
       <Register />
    </motion.div>
  )
}

export default index;