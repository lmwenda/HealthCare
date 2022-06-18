import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {}
} 

const prisma = new PrismaClient();

export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data> ) { 
  if(req.method === "DELETE"){
    const { id } = req.query;
    const session = prisma.sessions.delete({
      where: {
        id: Number(id)
      }
    })

    res.json({ message: "Deleted Workout Session...", payload: session })
  }
}
