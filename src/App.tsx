
import { useEffect, useState } from "react"
import { GameStats } from "./components/GameStats"
import { GameControls } from "./components/GameControls"
import { GameResults } from "./components/GameResults";
import { Reset } from "./components/Reset";

function App() {

  const getDataFromLocalStorage = (results: string) => {
    const storedData = localStorage.getItem(results);
    return storedData ? JSON.parse(storedData) : 0;
   }
  
  const [wins, setWins] = useState(() => {
    return getDataFromLocalStorage("wins");
  });

  const [losses, setLosses] = useState(() => {
    return getDataFromLocalStorage("losses");
  });

  const [ties, setTies] = useState(() => {
    return getDataFromLocalStorage("ties");

  });

  const [totalGames, setTotalGames] = useState(() => {
    return getDataFromLocalStorage("totalGames");
  });
  const [userPlayer, setUserPlayer] = useState("");
  const [computerPlayer, setComputerPlayer] = useState("");

  useEffect(() => {
    localStorage.setItem("wins", JSON.stringify(wins));
  }, [wins]);

  useEffect(() => {
    localStorage.setItem("losses", JSON.stringify(losses));
  }, [losses]);

  useEffect(() => {
    localStorage.setItem("ties", JSON.stringify(ties));
  }, [ties]);

  useEffect(() => {
    localStorage.setItem("totalGames", JSON.stringify(totalGames));
  }, [totalGames]);

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
