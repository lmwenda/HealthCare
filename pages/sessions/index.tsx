import { PrismaClient } from "@prisma/client";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import FadeInSection from "../../components/FadeInSection";
import Button from "../../components/Recycled/Button";
import { Session } from "../../components/Session";
import { TSession } from "../../utils/exportedDefinitions";

const prisma: PrismaClient = new PrismaClient();

type Sessions = {
    sessions: Array<TSession>
}

export const getStaticProps: GetStaticProps = async() => {

    const publicSessions: TSession[] = await prisma.sessions.findMany({
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

export default (sessions: Sessions) => {
    const [ renderedSessions, setSetRenderedSessions ] = useState<Array<[]>>([]);

    useEffect(() => {
        
    });

    const loadMore: Function = (): boolean => {
        return false;
    }

    return (
        <motion.div 
        animate={{ x: [  -75, 0 ], 
        opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
        transition={{ ease: 'easeIn', duration: 0.5 }} 
        className="mt-5 flex flex-col justify-center text-center md:mt-20 overflow-y-hidden">
            
                {
                    sessions.sessions.map((session: TSession, key: React.Key) => (
                        <FadeInSection>
                            <Session key={key} {...session} />
                        </FadeInSection>
                    ))
                }

            <Button onClick={loadMore}>Load more</Button>

        
        </motion.div>
    );
}