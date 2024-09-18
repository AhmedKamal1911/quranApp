import { useSelector } from "react-redux";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import useMusicPlayerActions from "@/hooks/useMusicPlayerActions";
import { quran } from "@/assets";
const SongCard = ({ song, i, data }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const surahName = activeSong?.asma.ar.long;
  const { togglePlayClick } = useMusicPlayerActions();
  return (
    <div className="flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full group">
        <img
          src={quran}
          alt=""
          className="object-cover w-full aspect-[1/0.8] select-none bg-slate-300/20"
        />
        <div
          onClick={() => togglePlayClick(i, song, data)}
          className={`absolute justify-center items-center inset-0 bg-black bg-opacity-50 group-hover:flex ${
            surahName === song.asma.ar.long
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          {isPlaying && surahName === song.asma.ar.long ? (
            <FaPauseCircle size={35} className="text-gray-300" />
          ) : (
            <FaPlayCircle size={35} className="text-gray-300" />
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        {/* <Link to={`/music/${song.id}`}>
        </Link> */}
        <h3 className="font-semibold text-lg text-white truncate text-center select-none">
          {song.asma.ar.long}
        </h3>
      </div>
    </div>
  );
};

export default SongCard;
