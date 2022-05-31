import Link from 'next/link';
import React from 'react'
import { auth } from '../../firebase';

const index = () => {

  React.useEffect(() => {
    auth.currentUser?.sendEmailVerification();
  }, [])

  return (
      <div className="flex flex-col mx-auto justify-center items-center space-y-10">
            <h1 className="text-gray-500 text-bold pt-96 text-5xl text-center">The Verification Email has been sent to {auth.currentUser?.email}</h1>
            <h3>Check your Spam folder</h3>
            <Link href={`/settings/${auth.currentUser?.uid}`}>
              <a className="p-3 border border-gray-400 rounded">
                Go Back
              </a>
            </Link>
      </div>
  )
}

export default index;