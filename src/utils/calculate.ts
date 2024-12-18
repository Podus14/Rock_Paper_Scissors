const numberToChoice: Record<number, string> = {
    0: "Paper",
    1: "Rock",
    2: "Scissors"
}

export const calculateResults = ({userPlayer}: {userPlayer: string}) => {

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
    if (userPlayer === computerPlayer && userPlayer !== "") {
        return {
            playerChoice: userPlayer,
            computerChoice: computerPlayer,
            outcome: "It's a Tie!"
        }
    }
    return {
        playerChoice: userPlayer,
        computerChoice: computerPlayer,
        outcome: "Unknown Result",
      };
    
}