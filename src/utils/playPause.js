import { useDispatch, useSelector } from "react-redux";
import { setActiveSong, playPause } from "@/redux/features/playerSlice";

const dispatch = useDispatch();
const { activeSong, isPlaying } = useSelector((state) => state.player);
export const togglePlayClick = (i, data, song) => {
  if (song.title !== activeSong.title) {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  } else {
    dispatch(playPause(!isPlaying));
  }
};
