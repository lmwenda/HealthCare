import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {}
}

const prisma = new PrismaClient();

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "GET"){
    const { id } = req.query;
    const session = await prisma.sessions.findUnique({
        where: {
          id: Number(id)
        },

        include: {
          sessionAuthor: true
        }
    })

    res.json({ message: "Retrieved a Workout Session", payload: session })
  }
}
