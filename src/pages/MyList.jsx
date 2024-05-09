/* eslint-disable react/jsx-key */

import MyTable from "../components/MyTable";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebaseprovider/FirebaseProvider";
const MyList = () => {
   
    const { user } = useContext(AuthContext)
    console.log(user)
    const [item,setItem] = useState([])
    useEffect(() => {
        fetch(`https://assignment-10-server-psi-rouge.vercel.app
/spot/${user?.email}`)
        .then( (res) => res.json())
        .then ((data)=>
    {
        console.log(data)
        setItem(data)
    })
    }, [user])

    return (
        <div className="my-10 mx-auto container flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-semibold leading-tight text-center font-Montserrat">My Travel Spots</h2>
            <table className="w-full p-6 text-xs text-center whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                         <thead>
                            <tr className="dark:bg-gray-300">
                                <th className=" px-3 py-2 w-1/5 text-xl font-medium">Spot Name</th>
                                <th className=" px-3 py-2 w-1/5 text-xl font-medium">Country Name</th>
                                <th className=" px-3 py-2 w-1/5 text-xl font-medium">Cost</th>
                                <th className=" px-3 py-2 w-1/5 text-xl font-medium">Update</th>
                                <th className=" px-3 py-2 w-1/5 text-xl font-medium">Delete</th>
                                
                               
                            </tr>
                        </thead> 
                        </table>
           
           <div className="container my-10 mx-auto">
           {
            
                item.map(item => <MyTable
                 key={item._id}
                item ={item}>
                </MyTable>)
            }
           </div>
        </div>
    );
};

export default MyList;