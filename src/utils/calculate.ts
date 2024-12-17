import {Dispatch, SetStateAction} from "react"
import { Score, PlayerType } from "../types/types";
import  Paper  from "@icons/paper.svg";
import  Rock  from "@icons/rock.svg";   
import  Scissors  from "@icons/scissors.svg";

type Props = {
    userPlayer: string,
    setComputerPlayer: Dispatch<SetStateAction<PlayerType>>,
    setScore: Dispatch<SetStateAction<Score>>,
    setResultMessage: Dispatch<SetStateAction<string>>
}

export const calculateResults = ({userPlayer, setComputerPlayer, setScore, setResultMessage}: Props) => {

    const randomNumber = Math.floor(Math.random() * 3);
    randomNumber === 0 ? setComputerPlayer({choice: "Paper", svg: Paper}) : randomNumber === 1 ? setComputerPlayer({choice: "Rock", svg: Rock}) : setComputerPlayer({choice: "Scissors", svg: Scissors});

    let computerPlayer = ""
    randomNumber === 0 ? computerPlayer = "Paper" : randomNumber === 1 ? computerPlayer = "Rock" : computerPlayer = "Scissors";

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
}