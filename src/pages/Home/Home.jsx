import React from 'react';
import Banner from '../../Componenet/Home/Banner';
import OurServices from '../../Componenet/Home/OurServices';
import FeatureCards from '../../Componenet/Home/FetureCards';
import BeMarcent from '../../Componenet/Home/BeMarcent';
import ClientLogos from '../../Componenet/Home/ClientLogos';

const Home = () => {
    return (
        <div className='' >
            <Banner/>
            <OurServices></OurServices>
            <ClientLogos/>
            <div className="border-t-2 border-dashed border-gray-300 my-8"></div>
              <FeatureCards/>
              <BeMarcent/>
        </div>
    );
};

export default Home;