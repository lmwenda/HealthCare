import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {
    session: {}
  }
}

const prisma = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  if(req.method === "GET"){ 
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

    res.json({ message: "Retrieved this user's workout session's...", payload: { session: { session }}})
  }
}
