"use client"
import { FaChevronRight } from "react-icons/fa";
export const Button = ({buttonName}:any) => {
    return <div>
        <div className="font-[inter] flex items-center gap-2 border py-1 px-4 rounded-lg bg-black text-white cursor-pointer">
            <div>{buttonName}</div>
            <FaChevronRight />
        </div>
    </div>
}