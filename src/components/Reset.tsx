import { Dispatch, SetStateAction } from "react";
import ResetSvg from "@icons/reset.svg";
import { Score } from "../types/types";

export const Reset = ({setScore}: {setScore: Dispatch<SetStateAction<Score[]>>}) => {
    return (
        <div className="flex justify-center mt-12">
                <button className="flex items-center gap-4 text-white text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-600 rounded-lg py-4 px-12 hover:scale-110 transition-transform duration-300" 
                onClick={() => {
                    setScore([]);
                }}>
                    <img src={ResetSvg} alt="Reset" className="h-10 filter invert"/>
                    Reset Score
                    </button>
        </div>
    )
}