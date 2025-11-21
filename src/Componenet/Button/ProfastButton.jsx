import React from 'react';
import logo from "../../assets/potho/logo.png"
const ProfastButton = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt=""  className='mb-2'/>
            <p className='text-3xl -ml-2 font-[600] pt-3'>ProFast</p>
        </div>
    );
};

export default ProfastButton;