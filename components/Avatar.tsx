import { NextComponentType } from 'next'
import React, { useState } from 'react'
import { auth, app } from '../firebase'

const Avatar: NextComponentType<String> = () => {
    return <div className="flex flex-col justify-center items-center">

        <img className="h-44 w-44 hover:opacity-75" 
        src={"https://www.cascadeblindsni.com/wp-content/uploads/2018/11/user-circle-solid.jpg"} 
        alt="" />

    </div>
}

export default Avatar;