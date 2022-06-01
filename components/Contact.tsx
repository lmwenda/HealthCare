import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="mt-5 flex flex-col justify-center text-center flex-1 md:mt-20">
      <div className="relative flex flex-col">
          <h1 className="text-4xl text-left">Contact us</h1>
          <h1 className="text-lg text-gray-500 pt-3 text-left">
            Confused? Got any questions? Don&apos;t worry you can just contact us with the form below!
          </h1>

          <form className="flex flex-col space-y-5 mt-5">
            <input className="p-3 border border-blue-500 rounded placeholder:text-blue-500" type="text" placeholder="Username:" />
            <input className="p-3 border border-blue-500 rounded placeholder:text-blue-500" type="email" placeholder="Email:" />
            <textarea className="p-3 border border-blue-500 rounded placeholder:text-blue-500" placeholder="Message:" />
            <button className="p-3 bg-blue-500 rounded text-white w-32">Send</button>
          </form>
      </div>
    </div>
  )
}

export default Contact;