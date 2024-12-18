import  Paper  from "@icons/paper.svg";
import  Rock  from "@icons/rock.svg";
import  Scissors  from "@icons/scissors.svg";
import {Dispatch, SetStateAction} from "react"
import { Score } from "../types/types";
import { calculateResults } from "../utils/calculate";

export const GameControls = ({setScore}: {setScore: Dispatch<SetStateAction<Score[]>>}) => {
    
    return (
        <div className="flex justify-center gap-6">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300"
            onClick={() => {
                const game = calculateResults({userPlayer: "Paper"});
                setScore(prev => [
                        ...prev,
                        game
                    ]);
            }}>
                <img src={Paper} alt="Paper" className="h-1/2 justify-self-center filter invert" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300"
            onClick={() => {
                const game = calculateResults({userPlayer: "Rock"});
                setScore(prev => [
                        ...prev,
                        game                    ]);
            }}>
                <img src={Rock} alt="Rock" className="h-1/2 justify-self-center filter invert"/>
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300" 
            onClick={() => {    
                const game = calculateResults({userPlayer: "Scissors"});
                setScore(prev => [
                        ...prev,
                        game
                    ]);
            }}>
                <img src={Scissors} alt="Scissors" className="h-1/2 justify-self-center filter invert"/>
            </button>
        </div>
    )
}