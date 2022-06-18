import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {}
}

const prisma = new PrismaClient();

export default async function handler ( req: NextApiRequest, res: NextApiResponse ) {
  if(req.method === "GET"){
    const users = await prisma.user.findMany(
      {
          include: {
            sessions: true
          }
      }
    );
    res.json({ message: "Retrieving all users...", payload: users })
  }
}
