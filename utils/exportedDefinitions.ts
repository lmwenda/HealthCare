import { Prisma } from "@prisma/client";

export const BASE_URL = "http://localhost:3000/"; // "https://new-healthcare.vercel.app/"; // ONCE PUSHING TO PRODUCTION CHANGE BASEURL TO THE PRODUCTION URL;

export type TSession = Prisma.SessionGetPayload<{ 
  include: { sessionAuthor: true }
}>