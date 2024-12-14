import { useState } from "react";

export const GameStats = ( {wins, losses, totalGames, ties}: {wins: number, losses: number, totalGames: number, ties: number} ) => {

    return (
        <div className="flex mx-8 my-6 gap-8">
            <div className="w-3/12 flex flex-col bg-gradient-to-r from-blue-300 to-green-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center">Wins</span>
                <span className="text-center">{wins}</span>
            </div>
            <div className="w-3/12 flex flex-col bg-gradient-to-r from-pink-400 to-red-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center">Losses</span>
                <span className="text-center">{losses}</span>
            </div>
            <div className="w-3/12 flex flex-col bg-gradient-to-r from-lime-900 to-indigo-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center">Ties</span>
                <span className="text-center">{ties}</span>
            </div>
            <div className="w-3/12 flex flex-col bg-gradient-to-r from-yellow-300 to-orange-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center">Total Games</span>
                <span className="text-center">{totalGames}</span>
            </div>
        </div>
    )
}