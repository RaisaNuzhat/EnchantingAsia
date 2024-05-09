import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import Banner from "../components/Banner";
import Travel from "../components/Travel";
import TravelTipsSection from "../components/TravelTips";


const Home = () => {
    const spots = useLoaderData();

    return (
        <div className="mx-auto container my-10 flex flex-col justify-center items-center">
            <Banner/>
            <div className="my-3">
            <h3 className="text-center text-2xl font-Montserrat font-semibold">Tourist Spots</h3>
             <div className="grid  lg:grid-cols-2  grid-cols-1 gap-4 ">
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
            <div className="mx-auto my-3 ">
            <TravelTipsSection/>
            </div>
            
           
            
        </div>
    );
};

export default Home;