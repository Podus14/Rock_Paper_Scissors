
import { useEffect, useMemo, useState } from "react"
import { GameStats } from "./components/GameStats"
import { GameControls } from "./components/GameControls"
import { GameResults } from "./components/GameResults";
import { Reset } from "./components/Reset";
import { Score, PlayerType } from "./types/types";
import Player from "@icons/player.svg";
import Robot from "@icons/robot.svg";

function App() {

  const defaultScore = {wins: 0, losses:0, ties: 0};
  const defaultUserPlayer = {choice: "Player", svg: Player};
  const defaultComputerPlayer = {choice: "Computer", svg: Robot};

  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("score");
    return storedData ? JSON.parse(storedData) : defaultScore;
   }

  const [score, setScore] = useState<Score>(() => getDataFromLocalStorage())
  const [userPlayer, setUserPlayer] = useState<PlayerType>(defaultUserPlayer);
  const [computerPlayer, setComputerPlayer] = useState<PlayerType>(defaultComputerPlayer);
  const [resultMessage, setResultMessage] = useState("Let`s Play!");


  const totalGames = useMemo(() => { return score.wins + score.losses + score.ties }, [score]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score])

  return (
    <main className="bg-gradient-to-t from-pink-100 to-purple-400 h-screen pt-6">
      <h1 className="text-center leading-normal text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Rock Paper Scissors</h1>
      <h2 className="text-center text-2xl text-gray-200 font-bold">Scoreboard</h2>
      <GameStats score = {score} totalGames = {totalGames} />
      <GameControls setUserPlayer = {setUserPlayer} setComputerPlayer = {setComputerPlayer} setScore = {setScore} setResultMessage = {setResultMessage}/>
      <GameResults userPlayer = {userPlayer} computerPlayer = {computerPlayer} setScore = {setScore} resultMessage = {resultMessage}/>
      <Reset setScore = {setScore} defaultScore = {defaultScore} defaultUserPlayer = {defaultUserPlayer} defaultComputerPlayer = {defaultComputerPlayer} setUserPlayer = {setUserPlayer} setComputerPlayer = {setComputerPlayer} setResultMessage = {setResultMessage}/>
    </main>
  )
}

export default App
