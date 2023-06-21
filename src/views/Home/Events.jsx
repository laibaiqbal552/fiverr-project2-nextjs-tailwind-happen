import React from "react";
// import EventsImg from "./images/Group 37.png";
function Events() {
  return (
    <div>
      <div className="main-container lg:pt-[170px] pt-12">
        <div className="grid md:grid-cols-2  grid-cols-1 place-items-center">
          <div>
            <div className="max-w-[475px] md:text-left text-center">
              <h3 className="font-semibold text-white text-[28px] mb-5">
                Online Events where people can connect
              </h3>
              <p className="text-primary text-base font-medium">
                The key to growing a community is that people come for the event
                but stay for the people. No more zoom fatigue with spaces
                supporting 2-200 avatars intuitively joining conversations,
                leaving conversations and awkwardness free side-conversations.
              </p>
            </div>
          </div>
          <div>
            <div className="flex md:justify-start justify-center md:pt-0 pt-7">
              <img src="/images/Group 37.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
