import { Dispatch, SetStateAction } from "react";
import ResetSvg from "@icons/reset.svg";
import { PlayerType, Score } from "../types/types";

type Props = {
    defaultScore: Score,
    defaultUserPlayer: PlayerType,
    defaultComputerPlayer: PlayerType,
    setScore: Dispatch<SetStateAction<Score>>,
    setUserPlayer: Dispatch<SetStateAction<PlayerType>>,
    setComputerPlayer: Dispatch<SetStateAction<PlayerType>>,
    setResultMessage: Dispatch<SetStateAction<string>>
}

export const Reset = ({ defaultScore, defaultUserPlayer, defaultComputerPlayer, setScore,  setUserPlayer, setComputerPlayer, setResultMessage}: Props) => {
    return (
        <div className="flex justify-center mt-12">
                <button className="flex items-center gap-4 text-white text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-600 rounded-lg py-4 px-12 hover:scale-110 transition-transform duration-300" 
                onClick={() => {
                    setResultMessage("Let`s Play!");
                    setScore(defaultScore);
                    setUserPlayer(defaultUserPlayer);
                    setComputerPlayer(defaultComputerPlayer);
                }}>
                    <img src={ResetSvg} alt="Reset" className="h-10 filter invert"/>
                    Reset Score
                    </button>
        </div>
    )
}