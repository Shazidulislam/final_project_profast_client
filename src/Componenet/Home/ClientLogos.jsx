import React from 'react';
import Marquee from 'react-fast-marquee';

// Example: Replace these with your actual logo imports
import Logo1 from '../../assets/brands/amazon.png';
import Logo2 from '../../assets/brands/amazon_vector.png';
import Logo3 from '../../assets/brands/casio.png';
import Logo4 from '../../assets/brands/moonstar.png';
import Logo5 from '../../assets/brands/randstad.png';
import Logo6 from '../../assets/brands/star.png';
import Logo7 from '../../assets/brands/start_people.png';


export default function ClientLogos() {
  const logos = [Logo1, Logo5, Logo3, Logo4, Logo2, Logo6, Logo7];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Successful Clients</h2>
        <Marquee gradient={false} speed={50} direction="left">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex items-center">
              <img src={logo} alt={`Client Logo ${index + 1}`} className=" object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}