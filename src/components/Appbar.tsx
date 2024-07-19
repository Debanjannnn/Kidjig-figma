import React from 'react';
import { Link } from 'react-router-dom';

export const Appbar: React.FC = () => {
    return (
        <div className="relative bg-transparent">
            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: 'linear-gradient(90deg, rgba(0,0,0,1) 29%, rgba(7,11,61,0.9719537473192402) 59%, rgba(0,0,0,1) 97%)',
                }}
            />
            <div className="container mx-auto flex items-center justify-center space-x-[120px] font-outfit">
                <div className="text-white mr-[140px]">
                    <img src="./logo.png" className='w-[83px]' alt="Logo" />
                </div>
                <ul className="flex space-x-6 w-[456px] h-[30px]">
                    <li className='w-[61px] h-[30px] text-[19px]'>
                        <Link to="/home" className="text-white">Home</Link>
                    </li>
                    <li className='w-[61px] h-[30px] text-[19px]'>
                        <Link to="#about" className="text-white">About</Link>
                    </li>
                    <li className='w-[61px] h-[30px] text-[19px]'>
                        <Link to="#services" className="text-white hover:text-gray-400">Services</Link>
                    </li>
                    <li className='w-[61px] h-[30px] text-[19px]'>
                        <Link to="#process" className="text-white">Process</Link>
                    </li>
                    <li className='w-[61px] h-[30px] text-[19px]'>
                        <Link to="#work" className="text-white">Work</Link>
                    </li>
                    <li className='w-[61px] h-[30px] text-[19px]'>
                        <Link to="#pricing" className="text-white">Pricing</Link>
                    </li>
                    <li className='w-[61px] h-[30px] text-[19px]'>
                        <Link to="#faqs" className="text-white">FAQs</Link>
                    </li>
                </ul>
                <div className=''>
                    <Link to="#contact" className="bg-transparent border-[1px] border-[#6881FF] text-white py-3 px-4 rounded-xl w-[134px] h-[53px] text-[16px] font-bold ">
                        Book a call
                    </Link>
                </div>
            </div>
        </div>
    );
}
