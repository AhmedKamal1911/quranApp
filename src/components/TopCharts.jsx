import { Link } from "react-router-dom";
import { CardSkeletonLoader, Loading, TopChartCard } from ".";
import { useGetQuranQuery } from "@/redux/services/musicApi";
import { useSelector } from "react-redux";

const TopCharts = () => {
  const { data, error, isFetching } = useGetQuranQuery();
  const quranData = data?.data;
  const topClicked = quranData?.slice(0, 5);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="lg:sticky top-[calc(16px+65.78px)] lg:self-start">
      <div className="flex flex-row gap-5 justify-between my-3">
        <h3 className="text-white font-bold text-lg">الأكثر استماعاً</h3>
        <Link className="text-white font-bold" to={"/top-charts"}>
          المزيد
        </Link>
      </div>
      <div className="flex flex-col gap-5 max-h-[600px] overflow-y-auto py-3 pl-1 top-charts">
        <Loading
          isFetching={isFetching}
          error={error}
          loadingElement={<CardSkeletonLoader />}
        >
          {topClicked?.map((surah, i) => (
            <TopChartCard
              i={i}
              isSelected={activeSong?.asma.ar.long === surah.asma.ar.long}
              isPlaying={
                isPlaying && activeSong?.asma.ar.long === surah.asma.ar.long
              }
              song={surah}
              key={surah.number}
              topSongs={topClicked}
            />
          ))}
        </Loading>
      </div>
    </div>
  );
};

export default TopCharts;
