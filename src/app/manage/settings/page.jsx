"use client";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/utils/links";
import DesktopSideBar from "@/components/DesktopSideBar";
import DashboardTop from "@/components/DashboardTop";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { CirclesWithBar } from "react-loader-spinner";

const Settings = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const router = useRouter();
  if (session.status === "loading") {
    return (
      <div className="absolute h-[100vh] w-[100vw] flex items-center justify-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#5965F9"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    router?.push("/trade/auth");
  }

  const showBar = () => {
    setShowSideBar(!showSideBar);
  };

  const hideBar = () => {
    setShowSideBar(false);
  };
  return (
    <div className="relative w-full bg-[#191f3a]">
      <div className="w-full h-[80px] md:h-[90px] flex  items-center px-[20px] md:px-[100px] lg:px-[150px]">
        <div className="w-0 md:w-[300px] h-full"></div>
        <div className=" w-full flex  items-center justify-between md:justify-end">
          {/* Mobile Sidebar Controller */}
          <div
            className={` flex flex-col gap-2 rounded-md bground p-4 cursor-pointer md:hidden`}
            onClick={() => showBar()}
          >
            <div className="w-[25px] h-[5px] bg-white"></div>
            <div className="w-[25px] h-[5px] bg-white"></div>
          </div>

          <div className="gap-2 md:gap-5 hidden lg:flex text-[20px] md:font-bold">
            <div className={`flex gap-5 cursor-pointer font-light`}>
              <div
                onClick={signOut}
                className={`bground py-2 px-4 rounded-[20px] w-max font-medium`}
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="flex">
        <DesktopSideBar />
        <div className="bg-[#0c1023] h-[90vh] p-3 w-full">
          <DashboardTop />
        </div>
      </div>
      {/* Mobile Sidebar */}
      {showSideBar && (
        <div>
          <SideBar showSideBar={showSideBar} hideBar={hideBar} />
        </div>
      )}
    </div>
  );
};

export default Settings;
