import React, { ChangeEventHandler } from "react";
import jwt from "jsonwebtoken";
import type { NextComponentType } from "next"; 
import { BASE_URL } from "../utils/exportedDefinitions";


/* 
   model Sessions { 
   id Int @default(autoincrement()) 
   @id workout String @db.VarChar(50) 
   workoutDescription String @db.VarChar(1000)
   sets Int
   reps Int
   isPublic Boolean
   sessionAuthor User @relation(fields: [sessionAuthorId], references: [id])
   sessionAuthorId Int @unique
  }

*/

const CreateSession: NextComponentType = () => {

    const [ workoutName, setWorkoutName ] = React.useState<string>("");
    const [ workoutDescription, setWorkoutDescription ] = React.useState<string>("");
    const [ reps, setReps ] = React.useState<number>(0);
    const [ sets, setSets ] = React.useState<number>(0);
    const [ userID, setUserId ] = React.useState<number | null>(null);
    const [ isPublic, setIsPublic ] = React.useState<boolean>(false);

    const workoutNameHandler: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => setWorkoutName(e.target.value);
    
    const workoutDescriptionHandler: ChangeEventHandler<HTMLTextAreaElement> = (e: React.ChangeEvent<HTMLTextAreaElement>) => setWorkoutDescription(e.target.value);

    const repsHandler: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => setReps(Number(e.target.value));

    const setsHandler: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => setSets(Number(e.target.value));

    const isPublicHandler: ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => setIsPublic((): boolean => {
      if(e.target.value === "on") return true
      if(e.target.value !== "on") return false

      return false
    });

    React.useEffect(() => {
      const token: any = localStorage.getItem("htc-token");
      const userId: any = jwt.decode(token);

      setUserId(Number(userId._id));
    })

    const createSession = async(e: React.FormEvent<Element>): Promise<void> => {
      e.preventDefault();
  
      const body = {
        workout: workoutName,
        workoutDescription,
        sets,
        reps,
        isPublic,
        sessionAuthorId: userID
      }

      const response = await fetch(BASE_URL + "/api/sessions/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })

      const data = await response.json();
      console.log(data);
      
    }

    return(
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                           Create a new Workout Session 
                        </span>
                    </div>
                </div>
            <div className="mt-6">
                <div className="w-full space-y-6">
                    <div className="w-full">
                        <div className=" relative ">
                            <input type="text" id="search-form-price" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name of Workout" onChange={workoutNameHandler} />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <textarea id="search-form-location" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Workout Description" onChange={workoutDescriptionHandler} />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                  <input type="text" id="search-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Sets" onChange={setsHandler} />
                                    </div>

                            </div>

                            <div className="w-full">

                                <div className=" relative ">
                                  <input type="text" id="search-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Reps" onChange={repsHandler} />
                                </div>
                            </div>

                            <div className="w-full">
                              <div className="relative flex flex-row space-x-3">
                                <label>Public Workout Session</label>
                                <input type="checkbox" onChange={isPublicHandler}/> 
                              </div> 

                              </div>

                                <div>
                                    <span className="block w-full rounded-md shadow-sm">
                                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={createSession}>
                                        Create Session
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                        <p className="text-xs leading-5 text-gray-500">
                          This data is for your workout session 
                        </p>
                    </div>
        </div>
    )
}

export default CreateSession;
