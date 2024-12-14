export const GameStats = ( {wins, losses, totalGames, ties}: {wins: number, losses: number, totalGames: number, ties: number} ) => {

    return (
        <div className="flex mx-8 my-6 gap-8">
            <div className="w-3/12 flex flex-col justify-center bg-gradient-to-r from-blue-300 to-green-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center text-2xl">Wins</span>
                <span className="text-center text-xl">{wins}</span>
            </div>
            <div className="w-3/12 flex flex-col justify-center bg-gradient-to-r from-pink-400 to-red-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center text-2xl">Losses</span>
                <span className="text-center text-xl">{losses}</span>
            </div>
            <div className="w-3/12 flex flex-col justify-center bg-gradient-to-r from-lime-900 to-indigo-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center text-2xl">Ties</span>
                <span className="text-center text-xl">{ties}</span>
            </div>
            <div className="w-3/12 flex flex-col justify-center bg-gradient-to-r from-yellow-300 to-orange-600 rounded-lg p-2 text-white font-bold hover:scale-110 transition-transform duration-300">
                <span className="text-center text-2xl">Total Games</span>
                <span className="text-center text-xl">{totalGames}</span>
            </div>
        </div>
    )
}