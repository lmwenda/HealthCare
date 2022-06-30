import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import React from 'react'
import { Session } from '../../../components/Session';
import { BASE_URL } from '../../../utils/exportedDefinitions';

type Sessions = {
    id: number;
    workout: string;
    workoutDescription: string;
    sets: number;
    reps: number;
    isPublic: boolean;
    sessionAuthorId: number;
}

type ComponentSessions = {
    sessions: {
        message: string,
        payload: { 
            sessions: Sessions[]
        }
    }
}

export const getStaticProps: GetStaticProps = async() => {
    const getSessions =  await fetch(BASE_URL + "/api/sessions/get/all", { method: "GET" });
    const sessions = await getSessions.json();


    return {
        props: {
            sessions
        }
    }
}

const all = (sessions: ComponentSessions) => {

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

export default all;