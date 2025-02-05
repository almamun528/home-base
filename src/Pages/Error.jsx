import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <section className="bg-red-100 flex items-center justify-center text-center h-screen">
        <main>
          <div>
            <h2 className="text-white font-bold text-5xl text-center">Error : 404</h2>
            <p className="text-white font-bold md:text-xl text-center my-4">
              Your search is not matching with our context
            </p>
            <Link to="/">
              <button className='btn'>Back to Home</button>
            </Link>
          </div>
        </main>
      </section>
    );
};

export default Error;