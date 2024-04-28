/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../firebaseprovider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";



const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading)
    {
         
        return <div className="flex justify-center items-center container my-10 w-1/2 h-1/2 text-center font-bold ">
            <span className="loading loading-dots loading-lg "></span>
        </div>

         
    }
    if(!user)

    {
        return <Navigate to = '/login' state ={location?.pathname || '/'}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default Privateroute;