import React from 'react';
import { Link } from "react-router-dom";

export const HeroSection = () => {
    const backgroundImageUrl = "https://s3-alpha-sig.figma.com/img/734f/2851/757355040aa84c8180bf8a118508ec5d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npYRNpCM8oDFwPRiO6l~FbN1zG1lEJbkoYyqEMMF-YQhLEPWCeA~ccnpkAhhEHsY~x8I6q1AGF8OC-G8d53tmvcNv-l20MlCF8xh8~t7WPoissIzuWVn-KSxkF~nkA0XsvQ3lm1UFBDROoSc~zTPqgaDxWakVc27toYzWDgypXn0XvnnWO4t8pb1QfONvpg9Ec0-mSkeTKaYvRdzFfpi10X-datkpYE5pFNeIz6sy-XMSQ19krLJIX-ACuU~lUhi1KwKXGIioxv40pMTTOvI8Oxkrh0vhlQVKv7hyRyJU43AUDYs1q--ySdsumolIBFpX8bxDdUBsoWjK4WBFeb9wQ__";

    return (
        <div className="relative w-full h-screen ">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >       <img src="./Ellipse1.png" alt="" className='absolute pl-[770px]' />
                <img src="./Ellipse1.png" alt="" className='absolute pl-[190px] ' />
                <div className="flex flex-col ml-[279px] w-[778px] pt-[210px] h-[249px] text-white font-outfit mb-[400px]">
                    <div className="text-[56px] mb-[10px]">
                        Empowering <span>Lives</span> Through Innovative <span className='font-bold underline decoration-[#6881FF]'> AI</span> Technologies.
                    </div>
                    <div className="text-[22px] mb-[15px] text-[#C0C2CC]">
                        Finding new horizons for visionaries to accelerate their innovation and progress.
                    </div>
                    <div className="flex space-x-4">
                        <div className="bg-[#6A35FF]  text-white py-3 pl-8 rounded-xl font-[700] w-[239px] h-[53px] text-[18px] ">
                            Explore Our Service
                        </div>
                        <div className="bg-transparent border-[1px] py-3 pl-7 border-[#6881FF] text-white px-4 rounded-xl font-[600] w-[155px] h-[53px] text-[18px]  ">
                            Learn more
                        </div>
                    </div>
                    <div className="absolute mt-[330px]">
                        <span className="block text-[24px] font-[400] bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C] bg-clip-text text-transparent mt-[60px]">
                            From Ideas to Software Solutions <span>💡✨</span>From Ideas to Software Solutions <span>🌟✨</span> From Ideas to
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};
