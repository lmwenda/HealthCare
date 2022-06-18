import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import ValidateUser from '../../../utils/AuthenticateUser';

type Data = {
  message: string,
  payload: {}
}

const prisma = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse )
{
  if(req.method === "POST") {
    const { email, username, password } = req.body;
    const { error } = ValidateUser(req.body);
    if(error) return res.status(400).json({ message: error.details[0].message, payload: {} });

    const _user = await prisma.user.findUnique(
      {
        where:
        {
          email: email,
        }
      }
   );
    if (_user) return res.status(400).json({ message: "Email already used...", payload: {} })

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
        data:{
          email: email,
          username: username,
          password: hashedPassword
        }
    })
    res.json({ message: "Successfully Created a new user...", payload: { user }})
  }
}
