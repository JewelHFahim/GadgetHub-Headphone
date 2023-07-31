import { ThemeContext } from "@/Context/AppContext";
import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

const FollowUs = () => {
  const { isDarkmode } = useContext(ThemeContext);

  const iConDark = "text-[20px] text-white rotate-[90deg]";
  const iConLight = "text-[20px] text-black rotate-[90deg]";

  return (
    <div>
      {/* <div className="rotate-[-90deg] lg:flex items-center gap-[20px] z-[99]">
        <button>
          <div
            className={`w-[60px] h-[30px] border-[3px] rounded-[46px] flex justify-end items-center ${
              isDarkmode ? "border-white border-opacity-[50%]" : "border-black"
            } `}
          >
            <div
              className={`w-[14px] h-[3px] ${
                isDarkmode ? "bg-white" : "bg-black"
              } bg-opacity-[50%] rounded-[30px] mr-4`}
            ></div>
          </div>
        </button>

        <div className="w-[60px] h-[30px] border-2"></div>

        <div className="w-[342px] h-[24px] flex items-center gap-[10px] rotate-[-360deg] border">
          <p
            className={`text-[20px] font-[500] font-inter ${
              isDarkmode ? "text-white" : "text-black"
            }`}
          >
            FOLLOW US
          </p>

          <div
            className={`w-[91px] h-[1px] ${
              isDarkmode ? "bg-white" : "bg-black"
            } `}
          ></div>

          <div className="flex items-center gap-[15px]">
            <button>
              <FaFacebookF className={isDarkmode ? iConDark : iConLight} />
            </button>
            <button>
              <FaYoutube className={isDarkmode ? iConDark : iConLight} />
            </button>
            <button>
              <FaTwitter className={isDarkmode ? iConDark : iConLight} />
            </button>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col items-center gap-[20px]">
        <div
          className=" flex flex-col gap-[10px] text-[22px]"
          style={{ color: "#EFEFEF" }}
        >
          <FaTwitter />
          <FaYoutube />
          <FaFacebookF />
        </div>

        <div
          style={{ width: "3px", height: "91px", backgroundColor: "#EFEFEF" }}
        />

        <p
          className="rotate-[-90deg] uppercase mt-[30px] font-[600] text-[20px] text-[#EFEFEF]"
          style={{ color: "#EFEFEF" }}
        >
          {" "}
          Follow Us{" "}
        </p>

        <div
          style={{
            width: "31px",
            height: "61px",
            border: "3px solid #EFEFEF",
            marginTop: "35px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "5px",
              height: "14px",
              backgroundColor: "#EFEFEF",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
