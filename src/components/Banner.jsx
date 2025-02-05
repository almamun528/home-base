import React from "react";
import banner from "../assets/Banner-1.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className="md:text-5xl text-2xl md:my-5 my-2 font-bold text-center">
          Welcome to Our Website
        </h1>
        <p className="text-center font-semibold">
          Our target is to provide you best home, with your budget
        </p>

        <Link className="flex items-center justify-center mt-2"
         to="/card">
          <button className="border-white px-10 mt-3 shadow-2xl   btn-primary btn bg-[#1F4529] text-gray-300 hover:bg-[#47663B] hover:border-none ">
            Property
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Banner;
