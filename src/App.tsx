
import { useEffect, useMemo, useState } from "react"
import { GameStats } from "./components/GameStats"
import { GameControls } from "./components/GameControls"
import { GameResults } from "./components/GameResults";
import { Reset } from "./components/Reset";
import { Score } from "./types/types";

function App() {

  // const getDataFromLocalStorage = (results: string) => {
  //   const storedData = localStorage.getItem(results);
  //   return storedData ? JSON.parse(storedData) : 0;
  //  }
  
  // const [wins, setWins] = useState(() => {
  //   return getDataFromLocalStorage("wins");
  // });

  // const [losses, setLosses] = useState(() => {
  //   return getDataFromLocalStorage("losses");
  // });

  // const [ties, setTies] = useState(() => {
  //   return getDataFromLocalStorage("ties");

  // });

  // const [totalGames, setTotalGames] = useState(() => {
  //   return getDataFromLocalStorage("totalGames");
  // });

  // useEffect(() => {
  //   localStorage.setItem("wins", JSON.stringify(wins));
  // }, [wins]);

  // useEffect(() => {
  //   localStorage.setItem("losses", JSON.stringify(losses));
  // }, [losses]);

  // useEffect(() => {
  //   localStorage.setItem("ties", JSON.stringify(ties));
  // }, [ties]);

  // useEffect(() => {
  //   localStorage.setItem("totalGames", JSON.stringify(totalGames));
  // }, [totalGames]);
  //}



  const defaultScore = {wins: 0, losses:0, ties: 0};

  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("score");
    return storedData ? JSON.parse(storedData) : defaultScore;
   }

  const [score, setScore] = useState<Score>(() => getDataFromLocalStorage())
  const [userPlayer, setUserPlayer] = useState("");
  const [computerPlayer, setComputerPlayer] = useState("");


  const totalGames = useMemo(() => { return score.wins + score.losses + score.ties }, [score]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score])

  return (
    <main className="bg-gradient-to-t from-pink-100 to-purple-400 h-screen pt-6">
      <h1 className="text-center leading-normal text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Rock Paper Scissors</h1>
      <h2 className="text-center text-2xl text-gray-200 font-bold">Scoreboard</h2>
      <GameStats score = {score} totalGames = {totalGames} />
      <GameControls setUserPlayer = {setUserPlayer} setComputerPlayer = {setComputerPlayer}/>
      <GameResults userPlayer = {userPlayer} computerPlayer = {computerPlayer} setScore = {setScore}/>
      <Reset setScore = {setScore} defaultScore = {defaultScore} setUserPlayer = {setUserPlayer} setComputerPlayer = {setComputerPlayer}/>
    </main>
  )
}

export default App
