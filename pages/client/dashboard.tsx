import React from 'react'; 
import CreateSession from '../../components/CreateSession';

const Dashboard = () => {
  return (
    <div className="relative container mt-10 mx-auto">
      <div className="mx-3 flex flex-col space-y-3 md:flex-row md:space-x-5 md:mx-auto md:space-y-0">
  
      </div>

      <div className="flex flex-col space-y-3 md:mt-10 md:flex-row space-x-10 md:mx-auto md-space-y-0">
        <CreateSession /> 
      </div>
    </div>
  )
}

export default Dashboard;
