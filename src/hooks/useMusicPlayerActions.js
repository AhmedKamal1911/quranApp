import { useDispatch, useSelector } from "react-redux";
import { setActiveSong, playPause } from "@/redux/features/playerSlice";
const useMusicPlayerActions = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const surahName = activeSong?.asma.ar.long;
  const togglePlayClick = (songIdx, song, data) => {
    if (song.asma.ar.long !== surahName) {
      dispatch(setActiveSong({ song, data, i: songIdx }));
      dispatch(playPause(true));
    } else {
      dispatch(playPause(!isPlaying));
    }
  };
  return { togglePlayClick };
};
export default useMusicPlayerActions;
