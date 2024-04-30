import Lottie from "lottie-react";
import error  from '../assets/error.json'
const ErrorPage = () => {
    return (
        <div className="container mx-auto my-3 flex flex-col justify-center">
            <h3 className="text-center font-Montserrat font-semibold my-10 "> ooppppppppppssssssssss</h3>
            <div className="w-1/3 mx-auto container">
            <Lottie animationData={error} loop={true} />
            </div>
        </div>
    );
};

export default ErrorPage;