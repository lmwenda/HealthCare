import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../../components/Contact';

const index = () => {
  return (
    <motion.div 
    animate={{ x: [  -75, 0 ], 
    opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
    transition={{ ease: 'easeIn', duration: 0.5 }} 
    className="flex flex-col justify-center text-center md:mt-20">
      <div className="relative container flex flex-col items-center justify-center w-[85vw] space-y-10 mx-auto mt-10 md:w-auto md:flex-row md:space-x-20 md:mt-0">
          <Contact />
          <div className="flex flex-col space-y-5 flex-1">
            <h1 className="text-3xl text-gray-500">Customer Service</h1>
            <h1 className="text-gray-500 text-lg">
              A Customer Service Representative works with clients who have complaints,
              orders, or require information about products/services purchased from the organization.
              They also provide solutions that fit those individualized situations and prioritize the 
              customers' needs at each step of the process.
            </h1>

            <h1 className="text-gray-500 text-lg">
              I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk,
              vanilla extract, and a thick pot on slow heat.
              I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips. 
              It's better with both kinds. 
            </h1>

            <a className="text-blue-500 underline" href="https://discord.gg/">Visit our Discord for help!</a>

            <Link href="/login">
              <a className="text-blue-500 underline">
                Haven't Joined HealthCare yet? Join us!
              </a>
            </Link>

          </div>
      </div>
    </motion.div>
  )
}

export default index;