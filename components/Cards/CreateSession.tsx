import { BASE_URL } from "../../utils/exportedDefinitions";
import Button from "../Recycled/Button";
import React, { ChangeEventHandler } from "react";
import jwt from "jsonwebtoken";

export default () => {

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

    const createSession: Function = async(e: React.ChangeEvent) => {
        e.preventDefault();
        
        const body = {
            workoutName,
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
        });

        const data = await response.json();

        console.log(data);

    }

    React.useEffect(() => {
        const token: any = localStorage.getItem("htc-token");
        const userId: any = jwt.decode(token);

        setUserId(Number(userId._id))
    })

    return(
        <div className="bg-gray-100 py-6 flex mx-auto rounded flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 shadow-lg rounded-3xl border border-gray-400 bg-white sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Create Workout</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                <div className="relative">
                                    <input id="email" onChange={workoutNameHandler} name="Workout Name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Workout Name" />
                                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Workout Name</label>
                                </div>

                                <div className="relative">
                                    <textarea id="password" onChange={workoutDescriptionHandler} name="Workout Description" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Workout Description" />
                                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Workout Description</label>
                                </div>

                                <div className="relative">
                                    <input id="password" onChange={setsHandler} name="Sets" type="number" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Sets" />
                                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Sets</label>
                                </div>

                                <div className="relative">
                                    <input id="password" onChange={repsHandler} name="Reps" type="number" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Reps" />
                                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Reps</label>
                                </div>

                                <div className="relative">
                                    <label>Public</label>
                                    <input id="password" onChange={isPublicHandler} name="Public" type="checkbox" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Public Workout" />
                                </div>

                                <div className="relative">
                                    <Button onClick={createSession}>Create</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}