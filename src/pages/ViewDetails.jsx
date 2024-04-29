/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const viewspot = useLoaderData();
    const { spotname, countryname, image, location, description, cost, traveltime, season, totalvisitors} = viewspot
    return (
        <div className="container mx-auto my-10 flex justify-center">
            <section>
                <div className="dark:bg-violet-600">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="lg:text-5xl text-xl font-bold font-Montserrat leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{spotname}</h1>
                        <h4 className="lg:text-2xl text-[20px] font-bold font-Montserrat leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">{countryname}</h4>
                        <p className="mt-6 mb-8  font-Montserrat text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{description}</p>
                        
                    </div>
                </div>
                <img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
                <div className="container mx-auto my-4 flex flex-col justify-center items-center text-center font-Montserrat">
                <p className="mt-6 mb-8  font-Montserrat text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">Location: {location}</p>
                <ul className="list-disc">
                    <li >
                     Cost : ${cost}
                    </li>
                    <li>
                       Total Visitors Per Year: {totalvisitors}
                    </li>
                    <li>
                       Seasonality: {season}
                    </li>
                    <li>
                      Travel Time:  {traveltime}
                    </li>
                </ul>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;