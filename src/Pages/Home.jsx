import React from 'react';
import Banner from '../components/Banner';
import Feature from '../components/Feature';


const Home = () => {
    return (
      <>
        <section>
        <Banner/>
        {/* Feature Section */}
        <Feature/>
        </section>
      </>
    );
};

export default Home;