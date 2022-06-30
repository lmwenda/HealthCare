import Image from "next/image";
import React from "react";
import image1 from "../../public/5290058.png";

const Success = () => {
  return(
    <div className="relative container flex flex-col justify-center space-y-5 items-center">
      <Image src={image1} height={100} width={100} alt="" /> 
      <h1 className="text-4xl text-gray-500">Payment Confirmed</h1>
      <p className="text-lg text-gray-500">Your Subscription Plan was successfully activated...</p>
    </div>
  );
}

export default Success;
