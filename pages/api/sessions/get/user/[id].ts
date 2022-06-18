import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {}
}

const prisma = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "POST"){
    const { id } = req.query;
    const session = await prisma.sessions.findUnique(
      { 
        where: {
          sessionAuthorId: Number(id)
        },

        include: {
          sessionAuthor: true
        }
      }
    )

    res.json({ message: "Retrieved this user's workout session's...", payload: session })
  }
}
