import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import Banner from "../components/Banner";
import Travel from "../components/Travel";


const Home = () => {
    const spots = useLoaderData();

    return (
        <div className="mx-auto container my-10 flex flex-col justify-center items-center">
            <Banner/>
            <div className="my-3">
            <h3 className="text-center text-2xl font-Montserrat font-semibold">Tourist Spots</h3>
             <div className="grid  grid-cols-2 gap-4 ">
             {
                spots.map(spot => <SpotCard
                 key={spot._id}
                spot ={spot}>
                </SpotCard>)
            }
             </div>

            </div>
            
            <div className="w-1/3 ">
            <Travel/>
            </div>
           
            
        </div>
    );
};

export default Home;