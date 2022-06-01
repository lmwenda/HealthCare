import React from 'react';
import Image from 'next/image';
import image from "../public/nurse-with-syringe.jpg";
import image2 from "../public/african-american-female-doctor-operating-room-putting-drugs-through-iv-surgery-concepts.jpg";
import image3 from "../public/female-doctor-with-presenting-hand-gesture.jpg";

const Blog = () => {
  return (
    <div className="">
        <div className="flex flex-wrap space-y-3 mx-auto md:flex-nowrap p-12">

            <a href="">
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" height={0} width={0} src={image} />
                <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Should you take a Syringe?</span>
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                </div>
            </div>
            </a>

            <a href="">
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image2} height={0} width={0} />
                <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Underpaid Black Nurses</span>
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                </div>
            </div>
            </a>

            <a href="">
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <Image className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image3} height={0} width={0} />
                <div className="px-6 py-8">
                    <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                    <span className="">Should you go to the doctors?</span>
                    </h4>
                    <p className="mt-4 text-base font-normal text-gray-500 leading-relax">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                </div>
            </div>
            </a>

        </div>
    </div>
  );
}

export default Blog;