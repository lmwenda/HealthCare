import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  message: string,
  payload: []
}

const prisma = new PrismaClient();

/* 
 model Sessions {
  id Int @default(autoincrement()) @id
  workout String @db.VarChar(50)
  workoutDescription String @db.VarChar(1000)
  sets Int
  reps Int
  sessionAuthor User @relation(fields: [sessionAuthorId], references: [id])
  sessionAuthorId Int @unique
}
*/

export default async function handler ( req: NextApiRequest, res: NextApiResponse ) {
  if(req.method === "POST") {
    const { workout, workoutDescription, sets, reps, isPublic, sessionAuthorId } = req.body;
    const session = await prisma.sessions.create({
      data: {
        workout: workout,
        workoutDescription: workoutDescription,
        sets: sets,
        reps: reps,
        isPublic: isPublic,
        sessionAuthorId: sessionAuthorId
      }
    });

    res.json({ message: "Successfully Created a new Workout Session...", payload: session })
  }
}
