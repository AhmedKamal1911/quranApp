import quran2 from "@/lotties/quran2.json";
import Lottie from "lottie-react";
const PrayerLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Lottie animationData={quran2} loop={true} width={300} />;
    </div>
  );
};

export default PrayerLoader;
