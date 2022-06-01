import type { NextPage } from 'next'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import image from '../public/landing_page_image_1.svg';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import image2 from "../public/3792558.jpg";
import Link from 'next/link';
import FadeInSection from '../components/FadeInSection';
import dynamic from 'next/dynamic'
import introduction from "../public/people-connecting-jigsaw-pieces-head-together_53876-59847.webp";
import introduction2 from "../public/415.jpg";
import Blog from '../components/LandingBlogs';
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }); - not used anymore

const Home: NextPage = () => {
  return (
    <motion.section animate={{ x: [ -75, 0 ], opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} transition={{ ease: 'easeIn' }}>
      <div
        className='container flex flex-col-reverse items-center px-6 mx-auto mt-1 space-y-32 md:space-y-0 md:mt-20 md:flex-row'
      >
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1
                className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'
            >
              <Typewriter
                onInit={(typewriter: TypewriterClass) => {
                  typewriter.typeString(`Best HealthCare Service you'll find..`)
                    .pauseFor(2000)
                    .start();
                }}
              />
            </h1>

            <div> 
              <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. 
              </p>
            </div>    

            <div className='flex flex-row space-x-1 justify-center md:justify-start'>
                <motion.div
                animate={{ y: [ 0, -10, 0 ], opacity: 1 }}
                transition={{
                  delay: 1,
                  ease: 'easeInOut',
                  y: { type: 'bounce', stiffness: 15 },
                  default: { duration: 2 },
                }}
                className='mt-5 space-x-5'>
                  <Link href='/login'> 
                    <button className='bg-blue-500 text-white rounded px-6 p-3 hover:opacity-75'>Get Started</button>
                  </Link>

                  <Link href='/contact'>
                      <a className="text-blue-500">Talk to us</a>
                  </Link>
                </motion.div>
            </div>
          </div>

          <motion.div 
            className='md:w-1/2'
            animate={{ opacity: 1, y: [ 0, -50]}}
            transition={
              {
                delay: 1,
                y: { type: 'bounce', stiffness: 15 },
                default: { duration: 3, repeatType: 'loop', repeat: Infinity },
              }}
            >
              <Image className='absolute z-50 sm:w-auto md:w-9/12' height={0} width={0} src={image} alt='' />
          </motion.div>
      </div>


      <FadeInSection>
        <div className="relative container mt-14 flex items-center px-6 mx-auto space-y-10 justify-center flex-col">
            <h1 className='text-3xl text-center'>
                Our products is used by teams from around the world
            </h1>

            <div className='baseline flex flex-col space-y-10 items-center justify-center md:space-y-0 md:flex-row md:space-x-20'>
                <img src='
                https://assets.website-files.com/6085e38567384555aea9df90/60e2756704be844efefe70a5_Carded%20Black%20Logo.svg
                ' alt='' />

                <img src='
                https://assets.website-files.com/6085e38567384555aea9df90/60e27567d03c58ecd9f102dc_Emerald%20Black%20Logo.svg
                ' alt='' />

                <img src='
                https://assets.website-files.com/6085e38567384555aea9df90/60e275675067bd7021d81225_Etro%20Black%20Logo.svg
                ' alt='' />

                <img src='
                https://assets.website-files.com/6085e38567384555aea9df90/60e27567d03c58eddcf102db_Focusfox%20Black%20Logo.svg
                ' alt='' />

                <img src='
                https://assets.website-files.com/6085e38567384555aea9df90/60e275679137b9062facb23d_Optimer%20Black%20Logo.svg
                ' alt='' />
                
            </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="relative container mt-44 flex flex-col px-6 items-center mx-auto space-y-10 justify-center md:space-x-14 md:flex-row">
          <div className="flex-1 space-x-5">
            <div className="flex md:hidden">
              <Image className='absolute z-50 rounded-full sm:w-auto md:w-9/12' src={introduction2} height={0} width={0} />
            </div>
            <div className="hidden md:flex">
              <Image className='absolute z-50 rounded-full sm:w-auto md:w-9/12' src={introduction} height={0} width={0} />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl text-center text-gray-700 md:text-left">Introduction to Healthcare</h1>
            <h1 className="text-lg text-gray-600 text-center mt-5 md:text-left">
              Here is a short video explaining and introducing you to healthcare
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
            </h1>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="relative container mt-56 flex flex-col px-6 items-center mx-auto space-y-10 justify-center md:space-x-14 md:flex-row-reverse">
            <div className="flex-1">
              <Image 
              className='absolute rounded h-full zIndex-50 sm:w-auto md:w-9/12'
              src={image2} alt='' />
            </div>
            
            <div className="flex-1 flex flex-col space-y-5">
              <button className="p-5">
                <h1 className="text-3xl text-black text-center md:text-left">Our Mission</h1>
                <h1 className="text-lg text-gray-500 text-center mt-5 md:text-left">
                  Here is a short video explaining and introducing you to healthcare
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </h1>
              </button>

              <button className="p-5">
                <h1 className="text-3xl text-black text-center md:text-left">Who we are</h1>
                <h1 className="text-lg text-gray-500 text-center mt-5 md:text-left">
                  Here is a short video explaining and introducing you to healthcare
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </h1>
              </button>

              <button className="p-5 bg-blue-500 rounded">
                <h1 className="text-3xl text-white bold text-center md:text-left">Our Goal</h1>
                <h1 className="text-lg text-white bold text-center mt-5 md:text-left">
                  Here is a short video explaining and introducing you to healthcare
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </h1>
              </button>

            </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="relative container mt-56 flex flex-col px-6 items-center mx-auto space-y-10 justify-center md:space-x-14">
            <h1 className="flex-1 text-center text-4xl md:text-left">Follow the Lastest Guides and News</h1>
            
            <div className="flex-1 flex flex-row space-y-5">
              <Blog />

            </div>
        </div>
      </FadeInSection>

    </motion.section>
  )
}

export default Home
