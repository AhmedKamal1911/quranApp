import { quran2 } from "@/assets";
const Track = ({ isPlaying, imgSrc, title }) => {
  return (
    <div className="flex-row items-center gap-5 hidden md:flex">
      <div>
        <img
          // src={imgSrc ?? "https://placehold.co/800x600"}
          src={quran2}
          alt="track-img"
          // className={`w-20 h-20 rounded-full object-cover ${
          //   isPlaying ? "animate-[spin_1.8s_linear_infinite]" : ""
          // }`}
          className={`w-20 h-20 rounded-full object-cover`}
        />
      </div>
      <h2 className="font-bold text-white truncate w-[100px]">{title}</h2>
    </div>
  );
};

export default Track;
