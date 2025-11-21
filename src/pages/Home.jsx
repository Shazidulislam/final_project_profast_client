import React from 'react';
import Banner from '../Componenet/Home/Banner';
import OurServices from '../Componenet/Home/OurServices';
import ClientLogos from '../Componenet/Home/ClientLogos';
import FeatureCards from '../Componenet/Home/FetureCards';

const Home = () => {
    return (
        <div className='' >
            <Banner/>
            <OurServices></OurServices>
            <ClientLogos/>
            <div className="border-t-2 border-dashed border-gray-300 my-8"></div>
              <FeatureCards/>
        </div>
    );
};

export default Home;