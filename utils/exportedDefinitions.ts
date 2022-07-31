export const BASE_URL = "https://new-healthcare.vercel.app/"; // "https://new-healthcare.vercel.app/"; // ONCE PUSHING TO PRODUCTION CHANGE BASEURL TO THE PRODUCTION URL;

export type TSession = {
  id: number;
  workout: string;
  workoutDescription: string;
  sets: number;
  reps: number;
  isPublic: boolean;
  sessionAuthorId: number;
  sessionAuthor: {
    email: string;
    id: number;
    username: string;
  }
}
