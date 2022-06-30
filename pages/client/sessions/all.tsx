import { Sessions } from '@prisma/client';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import { Session } from '../../../components/Session';
import { BASE_URL } from '../../../utils/exportedDefinitions';

type ComponentSessions = {
    sessions: {
        message: string,
        payload: { 
            sessions: Sessions[]
        }
    }
}

export const getStaticProps: GetStaticProps = async() => {
    const getSessions: Response =  await fetch(BASE_URL + "/api/sessions/get/all");
    const sessions = await getSessions.json();


    return {
        props: {
            sessions
        }
    }
}

const All = (sessions: ComponentSessions) => {

    useEffect((): void => {
        console.log(sessions);
    })

    return (

        <motion.div 
        animate={{ x: [  -75, 0 ], 
        opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
        transition={{ ease: 'easeIn', duration: 0.5 }} 
        className="mt-5 flex mx-[1vw] flex-col justify-center text-center md:mt-20">
            <h1 className='text-2xl'>Public Sessions</h1>
            <p className='text-3xl text-gray-500'>{sessions.sessions.message}</p>

            <div className="flex mx-5 justify-center items-center space-y-10 flex-col md:flex-row md:mt-14 md:space-x-10">
                {
                    sessions.sessions.payload.sessions.map((session: Sessions, key: React.Key) => (
                        <Session key={key} { ...session } />
                    ))
                }
            </div>
        </motion.div>
    );
}

export default All;