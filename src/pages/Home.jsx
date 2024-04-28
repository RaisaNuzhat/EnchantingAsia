import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";


const Home = () => {
    const spots = useLoaderData();

    return (
        <div className="mx-auto container my-10 flex justify-center items-center">
            <div className="my-3">
            <h3 className="text-center text-2xl font-Montserrat font-semibold">Tourist Spots</h3>
             <div className="grid  grid-cols-1 gap-4 ">
             {
                spots.map(spot => <SpotCard
                 key={spot._id}
                spot ={spot}>
                </SpotCard>)
            }
             </div>
            </div>
            
        </div>
    );
};

export default Home;