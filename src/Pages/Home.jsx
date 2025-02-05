import React from 'react';
import Banner from '../components/Banner';
import Feature from '../components/Feature';
import Country from '../components/Country';
import BoxItem from '../components/BoxItem';


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
        <BoxItem/>
      </>
    );
};

export default Home;