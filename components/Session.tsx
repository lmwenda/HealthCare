import { TSession } from "../utils/exportedDefinitions";

export const Session = (session: TSession) => {
  return(
    <div className="flex justify-center border border-gray-300 m-3 p-3 mx-auto bg-gray-300 text-white container max-w-3xl">
      <div className="block p-6 rounded-lg text-white max-w-sm">
        <div className="flex flex-col">
          <div className="flex flex-row space-x-3">
            <li className="text-gray-500">{session.sessionAuthorId}</li>
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{session.sessionAuthor.username}</h5>
          </div>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{session.workout}</h5>
        </div>
        <p className="text-gray-700 text-base mb-4">
          {session.workoutDescription}
        </p>

        <p className="text-gray-700 text-base">
          Sets: {session.sets}
        </p>

        <p className="text-gray-700 text-base">
          Reps: {session.reps}
        </p>

      </div>
    </div>
  );
}
