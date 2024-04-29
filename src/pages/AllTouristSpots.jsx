
import {  useLoaderData } from "react-router-dom";
import ViewCard from "../components/ViewCard";
const AllTouristSpots = () => {
    const all = useLoaderData();
    
    return (
        <div>
             <div className="grid  grid-cols-2 gap-4 ">
             {
                all.map(all => <ViewCard
                 key={all._id}
                all ={all}>
                </ViewCard>)
            }
             </div>
        </div>
    );
};

export default AllTouristSpots;