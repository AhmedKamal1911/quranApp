import quran from "@/lotties/quran.json";
import Lottie from "lottie-react";
const QuranLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Lottie animationData={quran} loop={true} width={300} />;
    </div>
  );
};

export default QuranLoader;
