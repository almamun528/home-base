import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenuOpen, MdOutlineRealEstateAgent } from "react-icons/md";
import { FaUser } from 'react-icons/fa';


const NavBar = () => {

  const links = (
    <>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='card'> Property </Link></li>
      <li><Link to='agents'> Agents </Link></li>
      <li><Link to='login'> Agents </Link></li>
    </>
  );

    return (
      <>
        <section className="w-full bg-base-100 sticky top-0 z-50 border-2 border-b-[#1F4529]">
          <main className="md:w-10/12 md:mx-auto">
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    {links}
                  </ul>
                </div>
                <Link to="/">
                  <MdOutlineRealEstateAgent className="text-7xl text-[#47663B]" />
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
              </div>
              <div className="navbar-end">
                <span className="p-3 border-2 border-green-700 border-solid rounded-full">
                  <FaUser className="text-3xl"></FaUser>
                </span>
              </div>
            </div>
          </main>
        </section>
      </>
    );
};

export default NavBar;