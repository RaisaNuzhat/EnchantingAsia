/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SpotCard = ({ spot }) => {
    const { image, location, description } = spot
    return (
        <div className="flex justify-center my-10 mx-auto container">
            <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  font-Montserrat lg:text-2xl text-xl font-bold">{location}</h2>
                    <p className="lg:text-[20px] text-[16px] font-Montserrat font-medium">{description}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;