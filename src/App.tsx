
import { useEffect, useMemo, useState } from "react"
import { GameStats } from "./components/GameStats"
import { GameControls } from "./components/GameControls"
import { GameResults } from "./components/GameResults";
import { Reset } from "./components/Reset";
import { Score } from "./types/types";

const getDataFromLocalStorage = () => {
  const storedData = localStorage.getItem("score")
  return storedData ? JSON.parse(storedData) : []
}

function App() {

  const [score, setScore] = useState<Score[]>(getDataFromLocalStorage());

  const totalGames = useMemo(() => score.length || 0, [score]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score])

  return (
    <main className="bg-gradient-to-t from-pink-100 to-purple-400 h-screen pt-6">
      <h1 className="text-center leading-normal text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Rock Paper Scissors</h1>
      <h2 className="text-center text-2xl text-gray-200 font-bold">Scoreboard</h2>
      <GameStats score = {score} totalGames = {totalGames} />
      <GameControls setScore = {setScore} />
      <GameResults score = {score} />
      <Reset setScore = {setScore} />
    </main>
  )
}

export default App
