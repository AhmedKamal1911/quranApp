import { Loading, QuranLoader, SongCard } from "@/components";

import { genres } from "@/data";
import { useGetQuranQuery } from "@/redux/services/musicApi";

const Discover = () => {
  const { data, error, isFetching } = useGetQuranQuery();
  const quranData = data?.data;

  return (
    <>
      <Loading
        error={error?.error}
        isFetching={isFetching}
        loadingElement={<QuranLoader />}
      >
        <div className="flex flex-col ">
          <div
            dir="rtl"
            className="flex sm:flex-row justify-between px-5 mt-4 flex-col items-center"
          >
            <h2 className="font-bold text-3xl text-white">القرآن الكريم</h2>
            <select
              onChange={() => {}}
              className="border-none outline-none text-sm mt-4 sm:mt-0 text-gray-300 bg-black p-3 rounded-lg"
            >
              {genres.map(({ title, value }) => (
                <option value={value} key={value}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div
            dir="ltr"
            className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 justify-center"
          >
            {quranData?.map((surah, index) => (
              <SongCard
                key={surah.number}
                song={surah}
                i={index}
                data={quranData}
              />
            ))}
          </div>
        </div>
      </Loading>
    </>
  );
};

export default Discover;
