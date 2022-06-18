import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string
}

const prisma = new PrismaClient();

export default async function handler ( req: NextApiRequest, res: NextApiResponse ) { 
  if(req.method === "PUT"){
    const { id, username } = req.body;
    const updatedUser = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        username: username
      }
    })
  }
}
