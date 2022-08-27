import { PrismaClient, Session } from "@prisma/client";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import FadeInSection from "../../components/FadeInSection";
import Button from "../../components/Recycled/Button";
import { SessionComponent } from "../../components/Session";
import { TSession } from "../../utils/exportedDefinitions"

const prisma: PrismaClient = new PrismaClient();

export const getStaticProps: GetStaticProps = async(): Promise<{ props: { sessions: TSession[] }}> => {

    const publicSessions: TSession[] = await prisma.session.findMany({
        where: {
            isPublic: true
        },

        include: {
            sessionAuthor: true
        }
    })

    return {
        props: {
            sessions: publicSessions
        }
    }
}   

function Sessions (sessions: TSession[]) {
    const [ renderedSessions, setSetRenderedSessions ] = useState<Array<[]>>([]);

    const loadMore: Function = (): boolean => {
        return false;
    }

    useEffect(() => {
        console.log(sessions)
    })

    return (
        <motion.div 
        animate={{ x: [  -75, 0 ], 
        opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
        transition={{ ease: 'easeIn', duration: 0.5 }} 
        className="mt-5 flex flex-col justify-center text-center md:mt-20 overflow-y-hidden">
            
                {
                    sessions.sessions.map((session: TSession, key: React.Key) => (
                        <FadeInSection key={key}>
                            <SessionComponent {...session} />
                        </FadeInSection>
                    ))
                }

            <Button onClick={loadMore}>Load more</Button>

        
        </motion.div>
    );
}

export default Sessions;
