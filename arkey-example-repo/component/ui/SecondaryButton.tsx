"use client"
import { FaChevronRight } from "react-icons/fa";
export const SecondaryButton = ({buttonName}:any) => {
    return <div>
        <div className="font-[inter] cursor-pointer flex items-center gap-2 text-black">
            <div>{buttonName}</div>
            <FaChevronRight />
        </div>
    </div>
}