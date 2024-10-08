import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../firebaseprovider/FirebaseProvider";
import { useEffect,useState } from "react";



const NavBar = () => {

    const { logOut, user } = useContext(AuthContext);
    const [theme,setTheme] = useState('light')
    useEffect( ()=>
    {
        localStorage.setItem('theme',theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    const handleToggle = (e) =>{
       
        if(e.target.checked)
        {
            setTheme('dark')
        }
        else 
        {
            setTheme('light')
        }
    }
    console.log(theme)
    return (
        <div>
            <div className="navbar bg-[#5585b5]">
                <div className="lg:flex-1">
                    <a className="btn btn-ghost  text-white lg:text-2xl  font-Montserrat lg:font-semibold font-normal   text-[14px]">EnchantingAsia</a>
                </div>
                {/* routes */}
                <div className="lg:flex-1 lg:gap-4 justify-evenly gap-2 ">
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#bbe4e9] lg:font-bold text-[10px]  font-normal font-Montserrat lg:text-xl ' : 'text-white text-[10px] lg:text-xl font-Montserrat lg:font-bold font-normal'}>Home</NavLink>
                    <NavLink to='/alltouristspot' className={({ isActive }) => isActive ? 'text-[#bbe4e9] text-[10px] font-Montserrat font-normal lg:font-bold lg:text-xl ' : 'text-white lg:text-xl  text-[10px] font-Montserrat  lg:font-bold font-normal'}>All Tourists Spot</NavLink>
                    <NavLink to='/addspot' className={({ isActive }) => isActive ? 'text-[#bbe4e9] text-[10px]  font-Montserrat lg:font-bold font-normal lg:text-xl ' : 'text-white lg:text-xl  text-[10px] font-Montserrat lg:font-bold font-normal'}>Add Spot</NavLink>
                    <NavLink to='/mylist' className={({ isActive }) => isActive ? 'text-[#bbe4e9]  text-[10px] font-Montserrat lg:font-bold font-normal lg:text-xl ' : 'text-white lg:text-xl  text-[10px] font-Montserrat lg:font-bold font-normal'}>My List</NavLink>
                {/* routes */}
                    {/* theme */}

                    <label className="cursor-pointer grid place-items-center ">
                        <input onChange={handleToggle} type="checkbox" value="synthwave" className="sm:w-14 md:w-14 toggle theme-controller bg-[#79c2d0] row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {/* theme */}
                   
                    
                    {/* user */}
                    <div className="flex items-center justify-evenly">
                        {user?  (
                            <div className="flex items-center justify-evenly gap-4">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 sm:w-8 md:w-8 rounded-full">
                                            <img alt="image" src={user?.photoURL || "https://i.ibb.co/sVJ3S81/cat-551554-1280.jpg"} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user?.displayName || "username"}

                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <button onClick={logOut} className="btn bg-[#79c2d0] font-Montserrat font-normal lg:font-medium text-[12px] text-white border-none">Log Out</button>
                            </div>
                        ) : (
                           <div className="flex gap-3 justify-evenly ">
                             <Link to='/login' className=" md:w-1/2 rounded-xl lg:btn sm:w-1/2 lg:bg-[#79c2d0] p-3 bg-[#79c2d0]  lg:text-white  text-white font-Montserrat text-[10px]  font-normal lg:font-medium border-none sm:p-2 md:p-2">Log In</Link>
                             <Link to='/register' className=" md:w-1/2 sm:w-1/2 rounded-xl lg:btn lg:bg-[#79c2d0]  p-3 lg:text-white text-white bg-[#79c2d0] font-Montserrat text-[10px]  font-normal lg:font-medium border-none sm:p-2 md:p-2">Register</Link>
                           </div>
                        )}
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default NavBar;
