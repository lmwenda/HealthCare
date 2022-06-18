export const BASE_URL = "http://localhost:3000/"; // ONCE PUSHING TO PRODUCTION CHANGE BASEURL TO THE PRODUCTION URL;


export interface ISession{
  workout: string,
  workoutDescription: string, 
  sets: number,
  reps: number,
  isPublic: boolean,
  sessionAuthor: any
}
