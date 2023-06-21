import React from "react";

function SignUp() {
  return (
    <div>
      <div className="main-container xl:pb-[299px] lg:pb-[199px] pb-20 lg:pt-[100px] md:pt-20 pt-8">
        <div className="text-center">
          <h4 className="font-medium md:text-[46px] text-4xl leading-[40px] text-white pb-5">
            Sign Up for Beta
          </h4>
          <p className="font-medium text-lg   text-primary md:mb-[45px] mb-7">
            Short description goes here
          </p>
          <div className="md:max-w-[474px] max-w-full mx-auto">
            <div className="flex md:flex-nowrap flex-wrap justify-center">
              <div className="md:max-w-[314px] w-full max-w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="focus:outline-none w-full pb-[18px] pt-3 bg-bgBlack border  border-primary rounded-l-[7px]   md:rounded-r-none rounded-r-[7px] pl-4 placeholder:text-base placeholder:text-primary placeholder:font-medium "
                />
              </div>
              <a className="sm:max-w-auto max-w-full md:w-auto w-full md:px-4 px-8 md:mt-0 mt-4 md:py-2 py-5 flex items-center rounded-r-[7px] md:rounded-l-none rounded-l-[7px] text-sm font-semibold text-white  header-btn capitalize">
                Signup for Beta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
