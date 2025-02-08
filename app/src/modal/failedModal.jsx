/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

function FailedModal({ retryForFailed, moves }) {
  const [gif, setGif] = useState(null);
  const [reactions, setReactions] = useState([]);
  const [gifFetched, setGifFetched] = useState(false);
  const totalMoves = 12;
  const scaledMove = Math.round((moves / totalMoves) * 100);
  useEffect(() => {
    const fetchReactions = async () => {
      try {
        const { data } = await axios.get(
          "https://api.otakugifs.xyz/gif/allreactions"
        );
        setReactions(data.reactions);
      } catch (error) {
        console.error("Error fetching reactions:", error);
      }
    };

    fetchReactions();
  }, []);

  useEffect(() => {
    if (reactions.length > 0 && !gifFetched) {
      const fetchRandomGif = async () => {
        const randomReaction =
          reactions[Math.floor(Math.random() * reactions.length)];
        try {
          const { data } = await axios.get(
            `https://api.otakugifs.xyz/gif?reaction=${randomReaction}`
          );
          setGif(data.url);
          setGifFetched(true);
        } catch (error) {
          console.error("Error fetching GIF:", error);
        }
      };

      fetchRandomGif();
    }
  }, [reactions, gifFetched]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="relative bg-[#1a1a2e] text-white p-6 rounded-2xl shadow-xl w-80 text-center animate-fadeIn">
        <IoMdClose
          size={25}
          onClick={retryForFailed}
          className="cursor-pointer absolute right-3 top-4"
        />
        <h2 className="text-xl font-bold">Oops! You Failed</h2>
        <p className="text-gray-300 mt-2">Try again and improve your score.</p>
        <p className="text-gray-300 mt-2">score : {scaledMove} </p>
        {gif && (
          <div className="flex justify-center items-center mt-4">
            <img src={gif || ""} alt="Failed Reaction" className="w-32 h-32" />
          </div>
        )}
        <button
          onClick={retryForFailed}
          className="mt-4 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg font-medium"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default FailedModal;
