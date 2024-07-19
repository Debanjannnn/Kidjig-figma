import React from 'react';
import { Link } from 'react-router-dom';

export const Appbar: React.FC = () => {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: 'linear-gradient(90deg, rgba(0,0,0,1) 14%, rgba(8,8,78,0.96) 59%, rgba(0,0,0,1) 92%)',
                }}
            />
            <div className="container mx-auto flex items-center justify-between px-6 font-outfit">
                <div className="flex items-center">
                    <img src="./logo.png" className='w-[83px]' alt="Logo" />
                </div>
                <ul className="flex space-x-5">
                    <li className='text-[19px]'>
                        <Link to="/home" className="text-white hover:text-gray-400">Home</Link>
                    </li>
                    <li className='text-[19px]'>
                        <Link to="#about" className="text-white hover:text-gray-400">About</Link>
                    </li>
                    <li className='text-[19px]'>
                        <Link to="#services" className="text-white hover:text-gray-400">Services</Link>
                    </li>
                    <li className='text-[19px]'>
                        <Link to="#process" className="text-white hover:text-gray-400">Process</Link>
                    </li>
                    <li className='text-[19px]'>
                        <Link to="#work" className="text-white hover:text-gray-400">Work</Link>
                    </li>
                    <li className='text-[19px]'>
                        <Link to="#pricing" className="text-white hover:text-gray-400">Pricing</Link>
                    </li>
                    <li className='text-[19px]'>
                        <Link to="#faqs" className="text-white hover:text-gray-400">FAQs</Link>
                    </li>
                </ul>
                <div>
                    <Link to="#contact" className="bg-transparent border-[1px] border-[#6881FF] text-white py-3 px-4 rounded-xl text-[16px] font-bold">
                        Book a call
                    </Link>
                </div>
            </div>
        </div>
    );
}
