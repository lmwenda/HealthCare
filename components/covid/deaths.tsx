import type { NextComponentType } from "next";

const Deaths: NextComponentType = ({ deaths, deathsPerOneMillion }: any) => {
  return(
    <div className="md:p-8 p-6 bg-white shadow-xl rounded-lg flex justify-between dark:bg-gray-800 md:items-center md:flex-row flex-col gap-12">
        <div>
            <span className="text-bold text-gray-700 dark:text-gray-400 block">
                Total Deaths
            </span>
            <span className="text-yellow-500 text-4xl md:text-5xl mt-2 font-black block">
              {deaths} 
            </span>
        </div>
        <div className="self-end">
            <div className="md:text-right text-left md:block">
                <p className="text-xl md:mb-2 mb-0 dark:text-gray-100 flex items-center increase">
                    {deathsPerOneMillion}
                </p>
            </div>
            <p className="text-lg text-gray-600 md:text-right text-left dark:text-gray-400 md:block inline-block md:mb-0">
                Deaths Per One Million
            </p>
        </div>
    </div>
  );
}

export default Deaths;

