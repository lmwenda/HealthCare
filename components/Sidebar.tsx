import Router from 'next/router';
import React, { FormEvent } from 'react'
import { auth } from '../firebase'

const Sidebar = () => {

    const logout = (e: FormEvent) => {
        e.preventDefault();

        auth.signOut();
        localStorage.removeItem("token");

        Router.push("/login");
        Router.reload();
    }
    
    return (
        <div className="relative bg-white dark:bg-gray-800">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-72 h-screen">
                    <div className="flex items-center justify-start mx-6 mt-10">
                        <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
                            HealthCare
                        </span>
                    </div>
                    <nav className="mt-10 px-6 ">
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg font-normal">
                                Dashboard
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </a>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-gray-600 dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-100 rounded-lg" href="#">
                            <span className="mx-4 text-lg font-normal">
                                Blogs
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </a>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg font-normal">
                                Sessions 
                            </span>
                        </a>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg font-normal">
                                COVID-19
                            </span>
                        </a>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                            <span className="mx-4 text-lg font-normal">
                                Settings
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </a>
                    </nav>
                    <div className="absolute bottom-0 my-10">
                        <a className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8" href="#">
                            <svg width="20" fill="currentColor" height="20" className="h-5 w-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                </path>
                            </svg>
                            <span onClick={logout} className="mx-4 font-medium">
                                Logout
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;