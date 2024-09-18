import { Aside, MusicPlayer, Searchbar, TopCharts } from "@/components";
import MusicPlayerManager from "@/components/MusicPlayerManager";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <div className="flex-1 flex">
        {isLargeScreen && <Aside />}
        <div className="flex flex-1 flex-col bg-gradient-to-br from-black to-[#121286]">
          <Searchbar />
          <div className="px-6 py-4 flex lg:flex-row flex-col-reverse gap-5">
            <div className="flex-1">
              <Outlet />
            </div>
            <TopCharts />
          </div>
        </div>
      </div>
      <MusicPlayerManager />
    </>
  );
};

export default RootLayout;
