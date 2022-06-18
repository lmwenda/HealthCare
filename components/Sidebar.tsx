import Link from 'next/link';
import Router from 'next/router';
import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { auth } from '../firebase'

const Sidebar = () => {
    const token = localStorage.getItem("htc-token");
    const [active, setActive] = useState<boolean>(false);
  
    const handleClick = () => {
        setActive(!active);
    };
 
    
    const logout = async(e: FormEvent) => {
        e.preventDefault();

        auth.signOut();
        localStorage.removeItem("htc-token");

        Router.push("/login");
        await new Promise((resolve) => setTimeout(resolve, 100));
        Router.reload();
    }
    
    return (
        <div className="flex flex-col md:flex-row">
            <nav className='flex md:hidden items-center w-full flex-wrap p-3 mx-auto bg-slate-800 text-white '>
                <Link href='/'>
                <a className='inline-flex items-center p-2 mr-4 '>
                    <span className='text-xl text-white text-blace tracking-wide'>
                        HealthCare
                    </span>
                </a>
                </Link>
                <button
                className=' inline-flex p-5 rounded lg:hidden text-white ml-auto outline-none'
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
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto bg-slate-800`}
                >
                  <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <Link href={`/client/dashboard`}>
                      <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center'>
                        Dashboard
                      </a>
                    </Link>
                    <Link href='/client/blogs'>
                      <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center'>
                        Blogs
                      </a>
                    </Link>

                    <Link href={`/client/sessions/${token}`}>
                      <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center'>
                       Sessions
                      </a>
                    </Link>


                    <Link href='/client/subscriptions'>
                      <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center'>
                        Subscriptions
                      </a>
                    </Link>

                    <Link href={`/settings/${token}`}>
                      <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center'>
                        Settings
                      </a>
                    </Link>

                    <a onClick={logout} 
                    className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blue-500 items-center justify-center cursor-pointer'>
                        Logout
                    </a>
                </div>
                </motion.div>
            </nav>

            <div className="hidden md:flex relative bg-white dark:bg-blue-500">
                <div className="flex flex-col sm:flex-row sm:justify-around">
                    <div className="w-72 h-screen">
                        <div className="flex items-center justify-start mx-6 mt-10">
                            <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
                                HealthCare
                            </span>
                        </div>
                        <nav className="mt-10 px-6 ">
                          
                        <a className="hover:text-bold hover:bg-blue-400 flex items-center p-2 my-6 transition-colors text-white duration-200  
                            text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg  text-white font-normal">
                              <Link href={`/client/dashboard`}>                           
                                Dashboard
                              </Link>
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                          </a>



                          <a className="hover:text-bold hover:bg-blue-400 flex items-center p-2 my-6 transition-colors text-white duration-200  
                            text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg  text-white font-normal">
                              <Link href={`/client/blogs`}>                           
                                Blogs
                              </Link>
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                          </a>



                          <a className="hover:text-bold hover:bg-blue-400 flex items-center p-2 my-6 transition-colors text-white duration-200  
                            text-gray-600 dark:text-gray-400 rounded-lg " href="">
                            <span className="mx-4 text-lg  text-white font-normal">
                              <Link href={`/client/sessions/${token}`}>                           
                                Workout Sessions 
                              </Link>
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                          </a>




                          <a className="hover:text-bold hover:bg-blue-400 flex items-center p-2 my-6 transition-colors text-white duration-200  
                            text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg  text-white font-normal">
                              <Link href={`/client/subscriptions`}>                           
                                Subscriptions
                              </Link>
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                          </a>

                          <a className="hover:text-bold hover:bg-blue-400 flex items-center p-2 my-6 transition-colors text-white duration-200  
                            text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg  text-white font-normal">
                              <Link href={`/client/settings/${token}`}>                           
                                Settings
                              </Link>
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                          </a>
                        </nav>

                        <div className="absolute bottom-0 my-10">
                          <a className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 
                            flex items-center py-2 px-8" href="#">
                                <span onClick={logout} className="mx-4 font-medium">
                                    Logout
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
