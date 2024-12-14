
import { useState } from "react"
import { GameStats } from "./components/GameStats"
import { GameControls } from "./components/GameControls"
import { GameResults } from "./components/GameResults";
import { Reset } from "./components/Reset";

function App() {

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [userPlayer, setUserPlayer] = useState("");
  const [computerPlayer, setComputerPlayer] = useState("");

  return (
    <main className="bg-gradient-to-t from-pink-100 to-purple-400 h-screen pt-6">
      <h1 className="text-center leading-normal text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Rock Paper Scissors</h1>
      <h2 className="text-center text-2xl text-gray-200 font-bold">Scoreboard</h2>
      <GameStats wins={wins} losses={losses} ties={ties} totalGames={totalGames} />
      <GameControls setUserPlayer= {setUserPlayer} setComputerPlayer={setComputerPlayer} setTotalGames={setTotalGames}/>
      <GameResults userPlayer={userPlayer} computerPlayer={computerPlayer} totalGames = {totalGames} setWins= {setWins} setLosses={setLosses} setTies={setTies}/>
      <Reset setWins= {setWins} setLosses={setLosses} setTies={setTies} setTotalGames={setTotalGames} setUserPlayer= {setUserPlayer} setComputerPlayer={setComputerPlayer}/>
    </main>
  )
}

export default App
