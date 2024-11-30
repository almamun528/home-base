import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LuBedSingle } from "react-icons/lu";
import { FaBath, FaRegSquare } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

const PropertyDetails = () => {
    const navigate = useNavigate()
  const [property, setProperty] = useState([]);
  const propertyDetails = useParams();
  const idNumber = propertyDetails.id;
  const propertyIdNumber = parseInt(idNumber);

  useEffect(() => {
    fetch("/property.json")
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

  const proper = property.find((item) => item.PropertyID == propertyIdNumber);

  const handleForm = e=>{
    e.preventDefault()
  
  }
  return (
    <>
      <section className="">
        <section className="py-4">
          <main className="w-10/12 mx-auto">
            <picture className="relative">
              <img
                className="w-full md:h-[600px] object-cover "
                src={proper?.featureImage}
                alt=""
              />
              <div className="absolute bg-[#00000053]  h-[100%] w-[100%] top-0 bottom-0 p-3">
                <div className="absolute bottom-5 left-5 md:space-y-3 h-fit bg-[#00000092] p-2 md:p-3 rounded">
                  <p className="flex items-center gap-2 text-white text-lg md:text-3xl md:gap-4">
                    Bedrooms: <LuBedSingle /> {proper?.Overview?.Bedrooms}{" "}
                  </p>
                  <p className="flex items-center gap-2 text-white text-lg md:text-3xl md:gap-4">
                    Bathrooms:<FaBath></FaBath> {proper?.Overview?.Bathrooms}{" "}
                  </p>
                  <p className="flex items-center gap-2 text-white text-lg md:text-3xl md:gap-4">
                    Garage: <GiHomeGarage /> {proper?.Overview?.Garage}{" "}
                  </p>
                  <p className="flex items-center gap-2 text-white text-lg md:text-3xl md:gap-4">
                    SquareFeet: <FaRegSquare></FaRegSquare>
                    {proper?.Overview?.SquareFeet}{" "}
                  </p>
                  <p className="flex items-center gap-2 text-white text-lg md:text-3xl md:gap-4">
                    YearBuilt: <SlCalender /> {proper?.Overview?.YearBuilt}{" "}
                  </p>
                </div>
              </div>
            </picture>
        
            <p className="md:my-4 mt-6">
              <b>Description</b> : {proper?.Description}
            </p>
              <br />
            <p className="text-3xl w-fit">
              This property is for :{" "}
              <span className="font-bold text-[#47663B]">
                {proper?.Category}
              </span>
              <div className="divider divider-success "></div>
            </p>

            <br />
            {/* Address */}
            <section className="md:grid md:grid-cols-4 border-2 rounded p-3 ">
              <div className="left space-y-2 md:space-y-3 ">
                <h2 className="text-lg md:text-xl md:font-bold font-semibold">
                  Address
                </h2>
                <p className="text-gray-500">
                  <b>Street : </b> {proper?.Address?.Street}{" "}
                </p>
                <p className="text-gray-500">
                  <b>City : </b> {proper?.Address?.City}{" "}
                </p>
                <p className="text-gray-500">
                  <b>StateCounty : </b> {proper?.Address?.StateCounty}{" "}
                </p>
                <p className="text-gray-500">
                  <b>Zip Postal Code : </b> {proper?.Address?.ZipPostalCode}{" "}
                </p>
                <p className="text-gray-500">
                  <b>Area : </b> {proper?.Address?.Street}{" "}
                </p>
                <p className="text-gray-500">
                  <b>Country : </b> {proper?.Address?.Country}{" "}
                </p>

                <button
                  onClick={() => navigate(-1)}
                  className="border-none btn-primary btn bg-[#1F4529] text-gray-300 hover:bg-[#47663B] "
                >
                  All Properties
                </button>
              </div>
              {/* Features */}
              <div className="right Features space-y-2 md:space-y-3">
                <h2 className="text-lg md:text-xl md:font-bold font-semibold mt-4 md:mt-0">
                  Features
                </h2>
                <p className="text-gray-500 flex flex-col space-y-2">
                  {proper &&
                    proper?.Features.map((item, index) => (
                      <span key={index} className="text-gray-500">
                        {" "}
                        ✔️ {item}{" "}
                      </span>
                    ))}
                </p>
              </div>
              {/* Agents */}
              <div className="agent space-y-2 md:space-y-3">
                <h2 className="text-lg md:text-xl md:font-bold font-semibold mt-4 md:mt-0">
                  Agent
                </h2>
                <img
                  className="h-36 w-36 rounded-full border-2 border-solidborder-[#47663B]"
                  src={proper?.Agent?.Image}
                  alt=""
                />
                <p className="text-gray-500">
                  <b>Name : </b> {proper?.Agent?.Name}
                </p>
                <p className="text-gray-500">
                  <b>Email : </b> {proper?.Agent?.Email}
                </p>
                <p className="text-gray-500">
                  <b>Company : </b> {proper?.Agent?.Company}
                </p>
                <p className="text-gray-500">
                  <b>Role : </b> {proper?.Agent?.Role}
                </p>
                <p className="text-gray-500">
                  <b>Mobile : </b> {proper?.Agent?.Mobile}
                </p>
                <Link
                  to="/agents"
                  className="border-none btn-primary btn bg-[#1F4529] text-gray-300 hover:bg-[#47663B] "
                >
                  All Agent
                </Link>
              </div>
              <div className="Form mt-10 md:mt-0">
                <h2 className="text-lg md:text-xl md:font-bold font-semibold mt-4 md:mt-0">
                  Send Mail To {proper?.Agent?.Name}{" "}
                </h2>

                <div className="divider divider-success"></div>
                <br />
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleForm} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Type your email"
                        name="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        className="input input-bordered"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone Number</span>
                      </label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Your Phone Number"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Write Message</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Message"
                        name="message"
                        className="input input-bordered pt-5 pb-20"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="border-none btn-primary btn bg-[#1F4529] text-gray-300 hover:bg-[#47663B] ">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </main>
        </section>
      </section>
    </>
  );
};

export default PropertyDetails;
