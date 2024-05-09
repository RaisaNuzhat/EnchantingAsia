import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";
const Update = () => {
    const updatespot = useLoaderData();
    const {spotname,countryname,image,location,description,cost,traveltime,season,totalvisitors,_id} = updatespot
    const handleUpdate = (e) =>
    {
        e.preventDefault()
        const form = e.target
        const spotname = form.spotname.value
        const countryname = form.countryname.value
        const image = form.image.value
        const location = form.location.value
        const description = form.description.value;
        const cost = form.cost.value;
        const traveltime = form.traveltime.value;
        const season = form.season.value;
        const totalvisitors = form.totalvisitors.value;
       
        const updatedspot= {spotname,countryname,image,location,description,cost,traveltime,season,totalvisitors}
        console.log(updatedspot)
       //send data to server
       fetch(`https://assignment-10-server-psi-rouge.vercel.app
/spot/${_id}`,
       {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedspot)
       })

       .then( 
        res =>
         res.json()
       )
       .then(data=>
    {
        console.log(data)
        if(data.modifiedCount>0)
        {
            Swal.fire({
                title: 'Yayy!',
                text: 'Spot Updated successfully!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })


    }
    return (
        <div className='mx-auto my-10 container flex flex-col justify-center'>
            <h5 className='text-center font-Montserrat lg:text-2xl text-[18px] my-6 lg:font-semibold font-medium'>Update Your Travel Spot</h5>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col flex 1 w-full">
                  
                    <div className="card  w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleUpdate} className="card-body w-full">
                            <div className="form-control font-Montserrat ">
                                <label className="label">
                                    <span className="label-text">Spot Name</span>
                                </label>
                                <input type="text"  name="spotname" defaultValue={spotname} placeholder="Spot Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text"  name="countryname" defaultValue={countryname}  placeholder="Country Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text"  name="image"  defaultValue={image}  placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text"  name="location" defaultValue={location}  placeholder="Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text"  name="description" defaultValue={description}  placeholder="Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <input type="text"  name="cost" defaultValue={cost}  placeholder="Average Cost In Dollars" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text"  name="traveltime" defaultValue={traveltime}  placeholder="Travel Time In Days" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <input type="text"  name="season" defaultValue={season}  placeholder="Season" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <input type="text" name="totalvisitors" defaultValue={totalvisitors}  placeholder="Total Visitors" className="input input-bordered" required />
                               
                            </div>
                           
                          
                            <div className="form-control mt-6">
                                <button className="btn bg-[#79c2d0] text-2xl font-medium text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;