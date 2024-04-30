/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const MyTable = ({ item }) => {
    console.log(item)
    //const { spotname, countryname,  cost} = viewspot
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">

                <div className="overflow-x-auto">
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
                        {/*  */}
                        <tbody className="border-b  dark:bg-gray-50 dark:border-gray-300">
                            <tr>
 
                                <td className="px-3 py-2 w-1/5 text-xl font-medium dark:text-gray-600">
                                    <p className="text-center">{item.spotname}</p>
                                </td>
                                <td className="px-3 py-2  w-1/5 text-xl font-medium dark:text-gray-600">

                                    <p className="text-center">{item.countryname}</p>
                                </td>
                                <td className="px-3 py-2 w-1/5 text-xl font-medium dark:text-gray-600">
                                    <p className="text-center">{item.cost}</p>
                                </td>


                                <td className="px-3 py-2 w-1/5 text-xl font-medium dark:text-gray-600">
                                    <Link to='/update' className="btn  bg-[#79c2d0] text-xl font-medium text-white">Update</Link>

                                </td>

                                <td className="px-3 py-2 w-1/5 text-xl font-medium dark:text-gray-600">
                                    <button className="btn  bg-[#79c2d0] text-xl font-medium text-white">Delete</button> 

                                </td>

                            </tr>

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTable;