import { Score } from "../types/types";
import Paper from "@icons/paper.svg";
import Rock from "@icons/rock.svg";
import Scissors  from "@icons/scissors.svg";
import Player from "@icons/player.svg";
import Robot from "@icons/robot.svg";

const choiceToImg: Record<string, {choice: string, svg: string}> =  {
    Paper: {choice: "Paper", svg: Paper},
    Rock: {choice: "Rock", svg: Rock},        
    Scissors: {choice: "Scissors", svg: Scissors}
} 

export const GameResults = ({score}:{score: Score[]}) => {

    const lastScore = score[score.length - 1] || {};

    const { playerChoice, computerChoice, outcome} = lastScore;

    const resultMessage = outcome || "Let`s Play!";

    const userPlayerImg = choiceToImg[playerChoice] || {
        choice: "",
        svg: Player
    }

    const computerPlayerImg = choiceToImg[computerChoice] || {
        choice: "",
        svg: Robot
    }
   
    return (
        <>  
            <h2 className="text-center leading-normal text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold my-6">{resultMessage}</h2>
            <div className="flex justify-center gap-12">
                <div className="flex flex-col items-center">
                    <p className="text-center pb-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">You</p>
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 h-20 w-20 hover:scale-110 transition-transform duration-300"><img src={userPlayerImg.svg} alt={userPlayerImg.choice} className="h-1/2 filter invert" /></div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-center pb-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">Computer</p>
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 h-20 w-20 hover:scale-110 transition-transform duration-300"><img src={computerPlayerImg.svg} alt={computerPlayerImg.choice} className="h-1/2 filter invert scale-x-[-1]" /></div>
                </div>
            </div>
        </>
    )
}