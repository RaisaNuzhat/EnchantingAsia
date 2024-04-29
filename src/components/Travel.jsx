import Lottie from "lottie-react";
import {Typewriter} from 'react-simple-typewriter';
import animation from '../assets/Animation - 1714391897803.json'
const Travel = () => {
    return (
        <div className="'flex justify-center container my-10 mx-auto">
            <h3 className="font-Montserrat font-semibold lg:text-2xl text-[20px] text-center my-4">
            <span>
        <Typewriter
          words={['Embark on a Journey Across Continents']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
                </h3>
            <p className="font-Montserrat font-medium my-4 text-center  text-[16px]">

                Discover new cultures, uncover hidden treasures, 
                and create unforgettable memories as you traverse continents from the comfort of your screen</p>
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default Travel;