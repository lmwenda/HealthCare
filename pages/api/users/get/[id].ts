import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
  payload: {}
}

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "GET"){
        const { id } = req.query;
        const user = await prisma.user.findUnique({
            where: {
              id: String(id)
            },

            include: {
              sessions: true
            }
        })

        res.json({ message: "Retrieved your account details...", payload: user })
    }
}
