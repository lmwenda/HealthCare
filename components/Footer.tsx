import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-500">
        <div
        className="container flex flex-col-reverse justify-between px-6 py-10 mt-32 mx-auto space-y-8 md:flex-row md:space-y-0"
        >
            <div
                className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
            >
                <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2022, All Rights Reserved
                </div>
                <div className="flex items-center space-x-3">
                    <p className="text-white text-bold text-3xl">Healthcare</p>
                </div>
            </div>
            <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                <Link href="/" className="hover:text-brightRed">Home</Link>
                <Link href="/blogs" className="hover:text-brightRed">Blogs</Link>
                <Link href="/pricing" className="hover:text-brightRed">Pricing</Link>
                <Link href="/contact" className="hover:text-brightRed">Contact</Link>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                <Link href="/login" className="hover:text-brightRed">Login</Link>
                <Link href="/register" className="hover:text-brightRed">Register</Link>
                <Link href="#" className="hover:text-brightRed">Privacy Policy</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;