import React from "react";

function Header() {
  return (
    <div>
      <div className="main-conatiner text-white lg:pt-[184px]  pt-20">
        <div className="inner-container text-center">
          <h1 className="font-medium  lg:text-[46px] text-4xl leading-[56px] pb-[21px]">
            Turn Events into{" "}
            <span className="Communities lg:mx-3">Communities</span>
          </h1>
          <p className="pb-[35px] font-medium md:text-lg text-base">
            A home for your community, supporting live events with many
            conversations, icebreakers, and forums so conversations can continue
            between events
          </p>
          <div className="flex justify-center pb-[85px]">
            <div className="flex gap-[25px]">
              <div className="text-sm font-semibold">
                <a className=" px-4 py-[10px] rounded-[7px] text-sm font-semibold text-white  header-btn capitalize">
                  Signup for Beta
                </a>
              </div>
              <div className="text-sm font-semibold">
                <a href="/">Learn More</a>
              </div>
            </div>
          </div>
          <div className="relative pb-24">
            <div>
              <img
                src="/images/Group 16 Copy 3.png"
                alt=""
                className="absolute -left-[237px] -top-[103px]  hide-923"
              />
              <img
                src="/images/Combined Shape.png"
                alt=""
                className="absolute -right-[229px] w-[350px] lg:-top-[171px] -top-[200px]  lg:block hidden"
              />
            </div>
            <div>
              <img src="/images/Bitmap.png" alt="" className="relative z-10" />
            </div>
            <img
              src="/images/Group 16 Copy 5.png"
              alt=""
              className="absolute -right-[97px] -bottom-[33px] z-[2] hide-923"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
