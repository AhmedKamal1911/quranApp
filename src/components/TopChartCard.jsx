import useMusicPlayerActions from "@/hooks/useMusicPlayerActions";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { quran } from "@/assets";
import { memo } from "react";
const TopChartCard = ({ song, isSelected, i, topSongs, isPlaying }) => {
  const { togglePlayClick } = useMusicPlayerActions();

  return (
    <div
      dir="ltr"
      className="flex flex-row gap-10 items-center justify-between p-2 hover:bg-[#4c426e] bg-opacity-5 rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <span className="text-white">{i + 1}.</span>
        <div className="flex gap-4">
          <div className="relative group rounded-md overflow-hidden">
            <img
              src={quran}
              alt=""
              className="object-cover select-none w-[100px] h-[100px]"
            />
            <div
              onClick={() => togglePlayClick(i, song, topSongs)}
              className={`absolute justify-center items-center inset-0 bg-black bg-opacity-50 group-hover:flex ${
                isSelected ? "flex bg-black bg-opacity-70" : "hidden"
              }`}
            >
              {isPlaying ? (
                <FaPauseCircle size={35} className="text-gray-300" />
              ) : (
                <FaPlayCircle size={35} className="text-gray-300" />
              )}
            </div>
          </div>
          <h3 className="mt-3 text-white font-bold">{song.asma.ar.long}</h3>
        </div>
      </div>
      <div onClick={() => togglePlayClick(i, song, topSongs)}>
        {isPlaying ? (
          <FaPauseCircle size={35} className="text-gray-300" />
        ) : (
          <FaPlayCircle size={35} className="text-gray-300" />
        )}
      </div>
    </div>
  );
};

export default memo(TopChartCard);
