import  Paper  from "@icons/paper.svg";
import  Rock  from "@icons/rock.svg";
import  Scissors  from "@icons/scissors.svg";
import {Dispatch, SetStateAction} from "react"
import { Score, PlayerType } from "../types/types";
import { calculateResults } from "../utils/calculate";

type  Props = {
    setUserPlayer: Dispatch<SetStateAction<PlayerType>>,
    setComputerPlayer: Dispatch<SetStateAction<PlayerType>>,
    setScore: Dispatch<SetStateAction<Score>>,
    setResultMessage: Dispatch<SetStateAction<string>>
}

export const GameControls = ({setUserPlayer, setComputerPlayer, setScore, setResultMessage}: Props) => {
    
    return (
        <div className="flex justify-center gap-6">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300"
            onClick={() => {
                setUserPlayer({choice: "Paper", svg: Paper});
                calculateResults({userPlayer: "Paper", setComputerPlayer, setScore, setResultMessage});
            }}>
                <img src={Paper} alt="Paper" className="h-1/2 justify-self-center filter invert" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300"
            onClick={() => {
                setUserPlayer({choice: "Rock", svg: Rock});
                calculateResults({userPlayer:"Rock", setComputerPlayer, setScore, setResultMessage});
            }}>
                <img src={Rock} alt="Rock" className="h-1/2 justify-self-center filter invert"/>
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300" 
            onClick={() => {    
                setUserPlayer({choice: "Scissors", svg: Scissors});
                calculateResults({userPlayer: "Scissors", setComputerPlayer, setScore,setResultMessage});
            }}>
                <img src={Scissors} alt="Scissors" className="h-1/2 justify-self-center filter invert"/>
            </button>
        </div>
    )
}