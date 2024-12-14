import  Paper  from "@icons/paper.svg";
import  Rock  from "@icons/rock.svg";
import  Scissors  from "@icons/scissors.svg";
import {Dispatch, SetStateAction} from "react"

export const GameControls = ({setUserPlayer, setComputerPlayer, setTotalGames}: {setUserPlayer: Dispatch<SetStateAction<string>>, setComputerPlayer: Dispatch<SetStateAction<string>>, setTotalGames: Dispatch<SetStateAction<number>>}) => {

    const randComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        randomNumber === 0 ? setComputerPlayer("Paper") : randomNumber === 1 ? setComputerPlayer("Rock") : setComputerPlayer("Scissors");
    }
    

    return (
        <div className="flex justify-center gap-6">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300"
            onClick={() => {
                setUserPlayer("Paper");
                randComputerChoice();
                setTotalGames(prev => prev + 1);
            }}>
                <img src={Paper} alt="Paper" className="h-1/2 justify-self-center filter invert" />
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300"
            onClick={() => {
                setUserPlayer("Rock");
                randComputerChoice();
                setTotalGames(prev => prev + 1);
            }}>
                <img src={Rock} alt="Rock" className="h-1/2 justify-self-center filter invert"/>
            </button>
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 hover:scale-110 transition-transform duration-300" 
            onClick={() => {
                setUserPlayer("Scissors");
                randComputerChoice();
                setTotalGames(prev => prev + 1);
            }}>
                <img src={Scissors} alt="Scissors" className="h-1/2 justify-self-center filter invert"/>
            </button>
        </div>
    )
}