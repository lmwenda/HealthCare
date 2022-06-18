import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {}
}

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

const prisma = new PrismaClient();

export default async function handler ( req: NextApiRequest, res: NextApiResponse ) {
  if(req.method === "PUT"){
    const { id, workout, workoutDescription, sets, reps, isPublic } = req.body;
    const session = prisma.sessions.update({
      where: {
        id: Number(id)
      },

      data: {
        workout: workout,
        workoutDescription: workoutDescription,
        sets: sets,
        reps: reps,
        isPublic: isPublic
      }
    })

    res.json({ message: "Update Workout Session...", payload: session})
  }
}
