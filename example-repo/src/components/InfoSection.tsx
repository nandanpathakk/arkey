import { Button } from "../elements/Button";
import { Link } from "react-router-dom";

export const InfoSection = ({ tag, description, subHeading }:any) => {
    return (
        <div className="flex flex-col items-center text-center font-[inter] py-12 px-4">
            <div className="text-gray-600 text-md md:text-lg pb-6">{subHeading}</div>
            <div className="text-3xl md:text-4xl lg:text-5xl pb-8 font-[barlow] font-semibold">{tag}</div>
            <div className="w-full max-w-2xl md:max-w-4xl text-lg md:text-xl text-gray-800 pb-8">{description}</div>
            <Link to={"/login"}>
            <Button buttonName={"Get Started"} />
            </Link>
        </div>
    );
};
