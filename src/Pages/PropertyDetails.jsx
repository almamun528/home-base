import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const [property, setProperty] = useState([]);
  const propertyDetails = useParams();
  const idNumber = propertyDetails.id;
  const propertyIdNumber = parseInt(idNumber);
  
  useEffect(() => {
    fetch("/property.json")
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

 const proper = property.find((item) => item.PropertyID == propertyIdNumber)
console.log(proper);
  return (
    <>
      <section>
        <h1 className="text-center text-4xl">Property Details Page</h1>
        <p>Property ID: {proper && proper?.PropertyID}</p>
      </section>
    </>
  );
};

export default PropertyDetails;
