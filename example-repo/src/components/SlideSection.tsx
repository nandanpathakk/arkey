import { useState } from 'react';
import main from "../assets/main.png"
import customize from "../assets/customize.png"
import secure from "../assets/secure.png"

export const SlideSection = () => {
    const [selected, setSelected] = useState(1);

    const handleClick = (index:any) => {
        setSelected(index);
    };

    const images = [main, customize, secure];
    const content = [
        {
            title: "Seamless Integration for Developers",
            description: "Empower your projects with MPC wallet capabilities, bringing the ease of web2 to web3 environments    "
        },
        {
            title: "Simplified Customization for Developers",
            description: "Enhance your projects with customizable components, streamlining development for seamless integration"
        },
        {
            title: "Next-Generation Security Solutions",
            description: "Enhance digital asset protection with advanced security innovations, ensuring peace of mind in today's digital landscape"
        }   
    ];

    return (
        <div>
            <div className="flex justify-around items-center">
                <div className="">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className={`p-10 cursor-pointer ${selected === index ? 'border-l-4' : ''}`}
                            onClick={() => handleClick(index)}
                            style={{ borderColor: selected === index ? 'black' : 'transparent' }}
                        >
                            <div className="text-xl pb-5 font-[barlow]">{item.title}</div>
                            <div className="text-lg w-[28rem] text-gray-500 font-[inter]">{item.description}</div>
                        </div>
                    ))}
                </div>
                <div className='hidden md:flex'>
                    {selected !== null && (
                        <img className='w-[40rem]' src={images[selected]} alt="Selected" />
                    )}
                </div>
            </div>
        </div>
    );
};
