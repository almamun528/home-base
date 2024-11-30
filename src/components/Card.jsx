import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Card = () => {
  const loadProperty = useLoaderData();
  return (
    <section className="my-4 w-10/12 mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
      {loadProperty &&
        loadProperty.map((property, index) => (
          <section
            className="border-2  border-gray-300 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-200"
            key={index}
          >
            <picture className="flex items-center justify-center">
              <img
                className="h-44 w-full object-cover rounded-lg shadow-md"
                src={property.featureImage || "https://via.placeholder.com/150"}
                alt={property?.Overview?.PropertyType || "Property Image"}
              />
            </picture>
            <div className="space-y-3 mt-4">
              <h2 className="text-lg font-semibold text-gray-800 ">
                Property Type :{" "}
                {property?.Overview?.PropertyType ||
                  "Property Type Not Available"}
              </h2>
              <p className="text-gray-600">
                Category: {property?.Category || "N/A"}
              </p>
              <div className="text-left grid grid-cols-2 gap-2 text-sm text-gray-700">
                <p>Bedrooms: {property?.Overview?.Bedrooms || "N/A"}</p>
                <p>Bathrooms: {property?.Overview?.Bathrooms || "N/A"}</p>
                <p>Garage: {property?.Overview?.Garage || "N/A"}</p>
                <p>Square Feet: {property?.Overview?.SquareFeet || "N/A"}</p>
                <p>Year Built: {property?.Overview?.YearBuilt || "N/A"}</p>
              </div>
              <Link to={`/propertyDetails/${property.PropertyID}`}>
                <button className="border-none mt-3 btn-primary btn bg-[#1F4529] text-gray-300 hover:bg-[#47663B] ">
                  View Details
                </button>
              </Link>
            </div>
          </section>
        ))}
    </section>
  );
};

export default Card;
