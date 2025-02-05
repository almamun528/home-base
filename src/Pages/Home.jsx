import React from 'react';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import Country from '../components/Country';


const Home = () => {
    return (
      <>
        <section>
        <Banner/>
        {/* Feature Section */}
        <Feature/>
        {/* Country Image */}
        <Country/>
        </section>
      </>
    );
};

export default Home;