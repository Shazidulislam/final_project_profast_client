import React from 'react';
import Banner from '../Componenet/Home/Banner';
import OurServices from '../Componenet/Home/OurServices';
import ClientLogos from '../Componenet/Home/ClientLogos';

const Home = () => {
    return (
        <div className='' >
            <Banner/>
            <OurServices></OurServices>
            <ClientLogos/>
            <div className="border-t-2 border-dashed border-gray-300 my-8"></div>

        </div>
    );
};

export default Home;