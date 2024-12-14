import { Dispatch, SetStateAction } from "react";
import ResetSvg from "@icons/reset.svg";

export const Reset = ({setWins, setLosses, setTies, setTotalGames, setUserPlayer, setComputerPlayer}: {setWins: Dispatch<SetStateAction<number>>, setLosses: Dispatch<SetStateAction<number>>, setTies: Dispatch<SetStateAction<number>>, setTotalGames: Dispatch<SetStateAction<number>>, setUserPlayer: Dispatch<SetStateAction<string>>, setComputerPlayer: Dispatch<SetStateAction<string>>}) => {
    return (
        <div className="flex justify-center mt-12">
                <button className="flex items-center gap-4 text-white text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-600 rounded-lg py-4 px-12 hover:scale-110 transition-transform duration-300" 
                onClick={() => {
                    setWins(0);
                    setLosses(0);
                    setTies(0);
                    setTotalGames(0);
                    setUserPlayer("");
                    setComputerPlayer("");
                }}>
                    <img src={ResetSvg} alt="Reset" className="h-10 filter invert"/>
                    Reset Scores
                    </button>
        </div>
    )
}