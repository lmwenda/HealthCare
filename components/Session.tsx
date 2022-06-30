import { Sessions } from "@prisma/client";
import Link from "next/link";

export const Session = (session: Sessions) => {
  return(
    <div className="relative mx-auto max-w-8xl border border-gray-200 rounded justify-center cursor-pointer">
      <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
          <div className="flex flex-col justify-between flex-1">
            <div className="flex-1">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                  <p> { session.isPublic } </p>
                  <span aria-hidden="true"> · </span>
                  <span> { session.sessionAuthorId } </span>
                </div>
              <a href="" className="block mt-2 space-y-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">{session.workout}</h3>
                <p className="text-lg font-normal text-gray-500">{session.workoutDescription}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


