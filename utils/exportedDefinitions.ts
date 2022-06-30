export const BASE_URL = "https://new-healthcare.vercel.app/"; // ONCE PUSHING TO PRODUCTION CHANGE BASEURL TO THE PRODUCTION URL;


export interface ISession{
  workout: string,
  workoutDescription: string, 
  sets: number,
  reps: number,
  isPublic: boolean,
  sessionAuthor: any
}
