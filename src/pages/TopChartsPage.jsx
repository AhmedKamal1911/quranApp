import { Loading, PrayerLoader, SongCard } from "@/components";

import { useGetQuranQuery } from "@/redux/services/musicApi";

const TopChartsPage = () => {
  const { data, error, isFetching } = useGetQuranQuery();
  const quranData = data?.data;
  const topClicked = quranData?.slice(0, 5);
  return (
    <>
      <Loading
        error={error?.error}
        isFetching={isFetching}
        loadingElement={<PrayerLoader />}
      >
        <div className="flex flex-col ">
          <h2 className="font-bold text-3xl mt-4 text-white text-center px-[20px]">
            الأكثر استماعاً
          </h2>
          <div
            dir="ltr"
            className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 justify-center"
          >
            {topClicked?.map((surah, index) => (
              <SongCard
                key={surah.number}
                song={surah}
                i={index}
                data={topClicked}
              />
            ))}
          </div>
        </div>
      </Loading>
    </>
  );
};

export default TopChartsPage;
