
import  Paper  from "@icons/paper.svg";
import  Rock  from "@icons/rock.svg";
import  Scissors  from "@icons/scissors.svg";
import Robot from "@icons/robot.svg";
import Player from "@icons/player.svg";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Score } from "../types/types";

export const GameResults = ({userPlayer, computerPlayer, setScore}: {userPlayer: string, computerPlayer: string, setScore: Dispatch<SetStateAction<Score>>}) => {

    const [resultMessage, setResultMessage] = useState("Let`s Play!");
    const [playerSvg, setPlayerSvg] = useState(Player);
    const [computerSvg, setComputerSvg] = useState(Robot);


    useEffect(() => {
        if ((userPlayer === "Paper" && computerPlayer === "Rock") || (userPlayer === "Rock" && computerPlayer === "Scissors") || (userPlayer === "Scissors" && computerPlayer === "Paper")) {
            setScore(prev => ({...prev, wins: prev.wins + 1}));
            setResultMessage("You Win!");
        }
        if ((userPlayer === "Paper" && computerPlayer === "Scissors") || (userPlayer === "Rock" && computerPlayer === "Paper") || (userPlayer === "Scissors" && computerPlayer === "Rock")) {
            setScore(prev => ({...prev, losses: prev.losses + 1}))
            setResultMessage("You Lose!");
        }
        if (userPlayer === computerPlayer && userPlayer !== "") {
            setScore(prev => ({...prev, ties: prev.ties + 1}))
            setResultMessage("It's a Tie!");
        }
        if (userPlayer !== "" || computerPlayer !== "") {
            userPlayer === "Paper" ? setPlayerSvg(Paper) : userPlayer === "Rock" ? setPlayerSvg(Rock) : setPlayerSvg(Scissors);
            computerPlayer === "Paper" ? setComputerSvg(Paper) : computerPlayer === "Rock" ? setComputerSvg(Rock) : setComputerSvg(Scissors);
        }
        if (userPlayer === "" || computerPlayer === "") {
            setResultMessage("Let`s Play!");    
            setPlayerSvg(Player);
            setComputerSvg(Robot);
        }

    }, [userPlayer, computerPlayer]);
    
    return (
        <>  
            <h2 className="text-center leading-normal text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold my-6">{resultMessage}</h2>
            <div className="flex justify-center gap-12">
                <div className="flex flex-col items-center">
                    <p className="text-center pb-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">You</p>
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 h-20 w-20 hover:scale-110 transition-transform duration-300"><img src={playerSvg} alt={playerSvg} className="h-1/2 filter invert" /></div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-center pb-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">Computer</p>
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 h-20 w-20 hover:scale-110 transition-transform duration-300"><img src={computerSvg} alt={computerSvg} className="h-1/2 filter invert scale-x-[-1]" /></div>
                </div>
            </div>
        </>
    )
}