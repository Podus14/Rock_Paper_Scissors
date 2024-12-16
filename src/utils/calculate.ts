export const calculateResults = (userPlayer: string) => {

    const randomNumber = Math.floor(Math.random() * 3);
    randomNumber === 0 ? setComputerPlayer("Paper") : randomNumber === 1 ? setComputerPlayer("Rock") : setComputerPlayer("Scissors");

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
}