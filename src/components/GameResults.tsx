import { Dispatch, SetStateAction } from "react"
import { Score, PlayerType } from "../types/types";

type Props = {
    userPlayer: PlayerType,
    computerPlayer: PlayerType,
    setScore: Dispatch<SetStateAction<Score>>,
    resultMessage: string
}

export const GameResults = ({userPlayer, computerPlayer, resultMessage}: Props) => {
    
    return (
        <>  
            <h2 className="text-center leading-normal text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold my-6">{resultMessage}</h2>
            <div className="flex justify-center gap-12">
                <div className="flex flex-col items-center">
                    <p className="text-center pb-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">You</p>
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 h-20 w-20 hover:scale-110 transition-transform duration-300"><img src={userPlayer.svg} alt={userPlayer.choice} className="h-1/2 filter invert" /></div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-center pb-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">Computer</p>
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 h-20 w-20 hover:scale-110 transition-transform duration-300"><img src={computerPlayer.svg} alt={computerPlayer.choice} className="h-1/2 filter invert scale-x-[-1]" /></div>
                </div>
            </div>
        </>
    )
}