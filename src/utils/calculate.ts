import { Score, Choice } from "../types/types";

const numberToChoice: Record<number, Choice> = {
    0: "Paper",
    1: "Rock",
    2: "Scissors"
}

export const calculateResults = ({userPlayer}: {userPlayer: Choice}): Score => {

    const randomNumber = Math.floor(Math.random() * 3);
    const computerPlayer = numberToChoice[randomNumber];

    if ((userPlayer === "Paper" && computerPlayer === "Rock") || (userPlayer === "Rock" && computerPlayer === "Scissors") || (userPlayer === "Scissors" && computerPlayer === "Paper")) { 
        return {
            playerChoice: userPlayer,
            computerChoice: computerPlayer,
            outcome: "You Win!"
        }

    }
    if ((userPlayer === "Paper" && computerPlayer === "Scissors") || (userPlayer === "Rock" && computerPlayer === "Paper") || (userPlayer === "Scissors" && computerPlayer === "Rock")) { 
        return {
            playerChoice: userPlayer,
            computerChoice: computerPlayer,
            outcome: "You Lose!"
        }
        
    }
    return {
        playerChoice: userPlayer,
        computerChoice: computerPlayer,
        outcome: "It's a Tie!"
    }

    // return {
    //     playerChoice: userPlayer,
    //     computerChoice: computerPlayer,
    //     outcome: "Unknown Result",
    //   };
    
}