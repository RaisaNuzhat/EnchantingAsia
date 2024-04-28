import Swal from 'sweetalert2'

const AddSpot = () => {
    const handleAddSpot = (e) =>
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
        const name = form.name.value;
        const email = form.email.value;
        const newspot= {spotname,countryname,image,location,description,cost,traveltime,season,totalvisitors,name,email}
        console.log(newspot)
       //send data to server
       fetch('http://localhost:5000/spots',
       {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newspot)
       })

       .then( 
        res =>
         res.json()
       )
       .then(data=>
    {
        console.log(data)
        if(data.insertedId)
        {
            Swal.fire({
                title: 'Yayy!',
                text: 'Spot added successfully!',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        }
    })


    }
    return (
        <div className="my-10 mx-auto container">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col flex 1 w-full">
                  
                    <div className="card  w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleAddSpot} className="card-body w-full">
                            <div className="form-control font-Montserrat ">
                                <label className="label">
                                    <span className="label-text">Spot Name</span>
                                </label>
                                <input type="text"  name="spotname" placeholder="Spot Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text"  name="countryname" placeholder="Country Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text"  name="image" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text"  name="location" placeholder="Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text"  name="description" placeholder="Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <input type="text"  name="cost" placeholder="Average Cost In Dollars" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text"  name="traveltime" placeholder="Travel Time In Days" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <input type="text"  name="season" placeholder="Season" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <input type="text" name="totalvisitors" placeholder="Total Visitors" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Username" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#79c2d0] text-2xl font-medium text-white">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;