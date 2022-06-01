import Link from 'next/link';
import Router from 'next/router';
import React from 'react'
import Avatar from '../../components/Avatar'
import { auth } from '../../firebase'

const index = () => {

    const logout = () => {
        auth.signOut();
        Router.push("/login")
    }
    
    return (
        <div className="relative container flex flex-col justify-center items-center mx-auto mt-10 md:mt-14">
            <Avatar />
            {
                auth.currentUser?.emailVerified ? null : <Link className="pt-5 text-blue-500" href="/verify">Verify Email</Link>
            }


            <h3 className="text-3xl pt-10">Hello {auth.currentUser?.email}</h3>
            
            <input 
            type="text" 
            className="p-3 mt-10 rounded border border-gray-400"
            placeholder={`Display Name: ${ auth.currentUser?.displayName ? auth.currentUser.displayName : "" }`} 
            />

            <div className="flex flex-row mt-3 justify-left space-x-3">
                <button className="p-3 rounded bg-blue-500 text-white">Save Changes</button>
                <button onClick={logout} className="p-3 rounded bg-blue-500 text-white">Logout</button>
            </div>

        </div>
    )
}

export default index