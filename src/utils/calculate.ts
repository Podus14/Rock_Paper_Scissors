import {Dispatch, SetStateAction} from "react"
import { Score } from "../types/types";

type Input = {
    userPlayer: string,
    setScore: Dispatch<SetStateAction<Score[]>>
}

export const useCalculateResults = ({userPlayer, setScore}: Input) => {

    const randomNumber = Math.floor(Math.random() * 3);
    let computerPlayer = ""
    randomNumber === 0 ? computerPlayer = "Paper" : randomNumber === 1 ? computerPlayer = "Rock" : computerPlayer = "Scissors";

    if ((userPlayer === "Paper" && computerPlayer === "Rock") || (userPlayer === "Rock" && computerPlayer === "Scissors") || (userPlayer === "Scissors" && computerPlayer === "Paper")) { 
        setScore(prev => [
            ...prev,
            {
                playerChoice: userPlayer,
                computerChoice: computerPlayer,
                outcome: "You Win!"
            }
        ]);
    }
    if ((userPlayer === "Paper" && computerPlayer === "Scissors") || (userPlayer === "Rock" && computerPlayer === "Paper") || (userPlayer === "Scissors" && computerPlayer === "Rock")) { 
        setScore(prev => [
            ...prev,
            {
                playerChoice: userPlayer,
                computerChoice: computerPlayer,
                outcome: "You Lose!"
            }
        ]);
        
    }
    if (userPlayer === computerPlayer && userPlayer !== "") {
        setScore(prev => [
            ...prev,
            {
                playerChoice: userPlayer,
                computerChoice: computerPlayer,
                outcome: "It's a Tie!"
            }
        ]);
    }
}