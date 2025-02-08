/* eslint-disable react/prop-types */
function SuccessModal({successor,moves}){
    const totalMoves = 12
    const scaledMove = Math.round((moves / totalMoves) * 100);
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-[#1a2e1a] text-white p-6 rounded-2xl shadow-xl w-80 text-center animate-fadeIn">
        <h2 className="text-xl font-bold">Congratulations! 🎉</h2>
        <p className="text-gray-300 mt-2">
          You completed the game in <span className="text-green-400 font-bold">{moves}</span> moves!
        </p>
        <p className="text-gray-300 mt-2">
        <span className="text-green-400 font-bold">{scaledMove}</span> score!
        </p>

        <button onClick={successor}
          className="mt-4 bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg font-medium"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
