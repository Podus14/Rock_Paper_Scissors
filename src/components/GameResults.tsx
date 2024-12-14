
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export const GameResults = ({userPlayer, computerPlayer, setWins, setLosses, setTies, setTotalGames}: {userPlayer: string, computerPlayer: string, setWins: Dispatch<SetStateAction<number>>, setLosses: Dispatch<SetStateAction<number>>, setTies: Dispatch<SetStateAction<number>>, setTotalGames: Dispatch<SetStateAction<number>>}) => {

    const [resultMessage, setResultMessage] = useState("");

    useEffect(() => {
        if ((userPlayer === "Paper" && computerPlayer === "Rock") || (userPlayer === "Rock" && computerPlayer === "Scissors") || (userPlayer === "Scissors" && computerPlayer === "Paper")) {
            setTotalGames(prev => prev + 1);
            setWins(prev => prev + 1);
            setResultMessage("You Win!");
        }
        if ((userPlayer === "Paper" && computerPlayer === "Scissors") || (userPlayer === "Rock" && computerPlayer === "Paper") || (userPlayer === "Scissors" && computerPlayer === "Rock")) {
            setTotalGames(prev => prev + 1);
            setLosses(prev => prev + 1);
            setResultMessage("You Lose!");
        }
        if (userPlayer === computerPlayer && userPlayer !== "") {
            setTotalGames(prev => prev + 1);
            setTies(prev => prev + 1);
            setResultMessage("It's a Tie!");
        }
    }, [userPlayer, computerPlayer]);
    
    return (
        <>
            <div>Player {userPlayer}</div>
            <div>Computer {computerPlayer}</div>
            <div>{resultMessage}</div>
        </>
    )
}