import Marquee from "react-fast-marquee";
import aologo from "@/public/ao-logo.png";
import Image from "next/image";

export const MarqueeSlider = () => {
    return (
        <div className="py-8">
            <Marquee>
                <div className="flex gap-16 items-center">
                    <Image className="w-48 md:w-60" src={aologo} alt="arweave-logo" />
                    <div className="text-3xl font-bold text-gray-800">ArKey</div>
                    <Image className="w-48 md:w-60" src={aologo} alt="arweave-logo" />
                    <div className="text-3xl font-bold text-gray-800">ArKey</div>
                    <Image className="w-48 md:w-60" src={aologo} alt="arweave-logo" />
                    <div className="text-3xl font-bold text-gray-800">ArKey</div>
                </div>
            </Marquee>
        </div>
    );
};
