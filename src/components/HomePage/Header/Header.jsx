import React, { useContext } from "react";
import HeaderSlide from "@/components/HomePage/Header/HeaderSlide";
import "react-modern-drawer/dist/index.css";
import { ThemeContext } from "@/Context/AppContext";
import "./Header.css";
import FollowUs from "@/utils/FollowUs/FollowUs";

const HeaderSlider = () => {
  const { isDarkmode } = useContext(ThemeContext);

  const dark = "bg-gradient-to-t from-bgSecondary from-50% to-bgPrimary to-50%";
  const light = "bg-gradient-to-t from-bgOffWhite from-50%  to-white to-50%";

  return (
    <div className={` relative pt-0  ${isDarkmode ? dark : light}`}>
      {/* Slider */}
      <div className="w-full">
        <HeaderSlide />
      </div>

      {/* Follow Us Icons */}
      <div className="hidden lg:block absolute left-[-26px] bottom-[-65px] z-[99]">
        <FollowUs />
      </div>


    </div>
  );
};

export default HeaderSlider;
