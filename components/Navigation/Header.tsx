import { motion } from 'framer-motion';
import { NextComponentType } from 'next';
import Link from 'next/link';
import { MouseEventHandler, useEffect, useState } from 'react';

/*
 * Settings/Dashboard Page
 *  - Workout Sessions
 *  - Orders
 *  - Create Session
 * Sessions
 *  - Public Workout Sessions from other Users
 *  - Blogs - Maybe Come Soon
*/

export const Header: NextComponentType = () => {
  const [ active, setActive ] = useState<boolean>(false);
  const [ token, setToken ] = useState<any>(null);
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    setActive(!active);
  };

  useEffect((): void => {
    const _token: any = localStorage.getItem("htc-token");
    if(_token){
      setToken(_token);
    }
    console.log(token);
  }, [])

  return (
    <>
      <nav className='flex items-center flex-wrap p-3 mx-auto '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-blace tracking-wide'>
              HealthCare
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-5 rounded lg:hidden text-black ml-auto hover:text-black outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <motion.div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-500'>
                Home
              </a>
            </Link>
            <Link href='/pricing'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-500'>
               Pricing
              </a>
            </Link>

            <Link href='/contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-blue-500'>
                Contact
              </a>
            </Link>

            {
                token ? (
                  <>
                    <Link href='/sessions'>
                      <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue-500 items-center justify-center'>
                        Sessions
                      </a>
                    </Link>

                    <Link href={`/:id/dashboard`}>
                      <a className='lg:inline-flex lg:w-auto w-full text-center px-3 py-2 bg-blue-500 rounded text-white items-center justify-center'>
                        Dashboard
                      </a>
                    </Link>

                  </>
                    ) : (
                <>
                  <Link href='/login'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue-500 items-center justify-center'>
                      Get Started
                    </a>
                  </Link>

                  <Link href='/register'>
                    <a className='lg:inline-flex lg:w-auto w-full text-center px-3 py-2 bg-blue-500 rounded text-white items-center justify-center'>
                      Become a Member
                    </a>
                  </Link>
                </>
              )
            }
          </div>
        </motion.div>
      </nav>
    </>
  );
};
