/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ViewCard = ({all}) => {
    const { spotname,image,cost,traveltime,season,totalvisitors,_id } = all
    return (
        <div>
            <div className="flex justify-center my-10 mx-auto container">
            <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  font-Montserrat lg:text-2xl text-xl font-bold">{spotname}</h2>
                    <p className="lg:text-[20px] text-[16px] font-Montserrat font-medium">Average Cost : {cost} $</p>
                    <p className="lg:text-[20px] text-[16px] font-Montserrat font-medium">Total Visitors :{totalvisitors}</p>
                    <p className="lg:text-[20px] text-[16px] font-Montserrat font-medium">Travel Time :{traveltime}</p>
                    <p className="lg:text-[20px] text-[16px] font-Montserrat font-medium">Seasonality :{season}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewdetails/${_id}`} className="btn  bg-[#79c2d0] lg:text-xl  text-[14px] font-medium text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ViewCard;