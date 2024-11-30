import React from 'react';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
      const links = (
        <>
          <p>
            <Link to="/"> Home </Link>
          </p>
          <p>
            <Link to="card"> Property </Link>
          </p>
          <p>
            <Link to="agents"> Agents </Link>
          </p>
        </>
      );
    return (
      <>
        <section className="my-10 border-b-2 border-green-950">
          <br /> <br />
          <main className="md:w-10/12 mx-auto grid md:grid-cols-12 gap-2">
            <div className="first md:col-span-5">
              <Link to="/home">
                <MdOutlineRealEstateAgent className="text-7xl text-[#47663B]" />
              </Link>
              <p className="mt-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident voluptas sequi officiis, porro at aspernatur
                recusandae repudiandae aperiam ea quas libero ratione incidunt
                reprehenderit numquam minima dolorem beatae? Excepturi quibusdam
                dignissimos aperiam saepe ipsa voluptatibus repudiandae quidem
                cumque voluptate hic.
              </p>
              <br />
              <ul className="flex items-center gap-3">
                <li className="text-2xl text-[#47663B] hover:text-[#1F4529]">
                  {" "}
                  <FaFacebook />{" "}
                </li>
                <li className="text-2xl text-[#47663B] hover:text-[#1F4529]">
                  {" "}
                  <FaYoutube />
                </li>
                <li className="text-2xl text-[#47663B] hover:text-[#1F4529]">
                  {" "}
                  <FaInstagram />
                </li>
                <li className="text-2xl text-[#47663B] hover:text-[#1F4529]">
                  {" "}
                  <FaLinkedin />
                </li>
                <li className="text-2xl text-[#47663B] hover:text-[#1F4529]">
                  {" "}
                  <FaTwitter />
                </li>
              </ul>
            </div>

            <div className="second md:col-span-4 ">
              <div className="md:flex md:flex-col items-center justify-start">
                <h1 className="font-bold  text-xl mt-7 md:mt-0">Quick Links</h1>
                <p className="underline mt-1 text-[#47663B] space-y-2 hover:text-[#1F4529]">
                  {" "}
                  {links}
                </p>
              </div>
            </div>

            <div className="third md:col-span-3">
              <h1 className="font-bold text-xl mt-7 md:mt-0 mb-3">
                News Latter
              </h1>
              <input
                type="email"
                placeholder="Type Email"
                className="input input-bordered input-success w-full"
              />
              <button className="btn mt-3 btn-block text-white bg-[#47663B] hover:bg-[#1F4529]">
                Submit
              </button>
            </div>
            {/* <div className="fourth"></div> */}
          </main>
          <br /> <br />
        </section>
        <footer className="footer footer-center text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              GitHub/almamun528
            </p>
          </aside>
        </footer>
      </>
    );
};

export default Footer;