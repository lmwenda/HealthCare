import React, { useEffect } from "react"; 
import jwt from "jsonwebtoken";
import { GetServerSideProps, GetStaticProps } from "next";
import { BASE_URL } from "../../../utils/exportedDefinitions";
import { Session } from "../../../components/Session";

export const getServerSideProps: GetServerSideProps = async(context) => {
  const token: any = context.params?.id;
  const id = jwt.decode(token);

  const response = fetch(
    BASE_URL + `api/sessions/get/user/${id}`, { 
      method: "GET",
    }
  );

  return {
    props: {
      sessions: [ response ]
    }
  }
}

const Sessions = ({ sessions }: any) => {

  useEffect(() => {
    console.log(sessions);
  });

  return(
    <div className="relative container grid grid-rows-4 gap-4 justify-center items-center">
      {/* <div className="pb-4 border-b border-gray-600">
        <h3 className="text-xl font-semibold leading-6 text-gray-800">Workout Sessions</h3>
          </div> */}

      {
        sessions.map((session: any) => (
            <Session session={session} /> 
        ))
      }

    </div>
  );
}

export default Sessions;
