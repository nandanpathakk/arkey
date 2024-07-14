import Image from "next/image";
export const Card = ({ image, tag, description }: any) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 p-4 md:pr-20">
            <div className="h-36 w-36">
                <Image src={image} alt="display-image" />
            </div>
            <div className="text-center md:text-left">
                <div className="font-medium pb-5 text-xl md:text-2xl font-[barlow]">{tag}</div>
                <div className="text-md md:text-xl text-gray-600 w-[28rem] md:w-96 font-[inter]">{description}</div>
            </div>
        </div>
    );
};
