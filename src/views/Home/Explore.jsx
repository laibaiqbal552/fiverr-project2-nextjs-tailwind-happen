import React from "react";
import ExploreCards from "./ExploreCards";

function Explore() {
  return (
    <div>
      <div className="main-container text-white md:text-left text-center md:pt-[100px] pt-[70px] lg:pb-[100px] pb-2">
        <div>
          <h1 className="font-medium text-[46px] pb-[21px] ">Explore</h1>
          <div className="flex gap-3 md:justify-between lg:flex-nowrap flex-wrap md:flex-row flex-col justify-center">
            <p className="font-medium text-lg text-primary">
              Insights from our team, user success stories, and how to get
              started.
            </p>
            <a
              href="/"
              className="max-w-[134px] md:mx-0 mx-auto font-bold text-lg text-secondary border-b-2 border-secondary pb-1"
            >
              View All Posts
            </a>
          </div>
        </div>
        <div>
          <ExploreCards />
        </div>
      </div>
    </div>
  );
}

export default Explore;
