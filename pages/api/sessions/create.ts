import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma: PrismaClient = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse )
{
  if(req.method === "POST") {
    const { workoutName, workoutDescription, sets, reps, isPublic, sessionAuthorId } = req.body;

    const session = await prisma.session.create({
        data:{
            workout: workoutName,
            workoutDescription,
            sets,
            reps,
            isPublic,
            authorId: sessionAuthorId
        }
    })
    res.json({ message: "Successfully Created a new session...", payload: session })
  }
}
