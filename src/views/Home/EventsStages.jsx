import React from "react";
function EventsStages() {
  return (
    <div>
      <div className="main-container lg:pb-[132px] md:pb-24 pb-14">
        <div className="max-w-[825px] mx-auto px-5 text-center mb-[50px]">
          <h2 className="text-[28px] font-semibold text-white mb-5">
            One event, many stages, many audiences
          </h2>
          <p className="font-medium text-base text-primary">
            Stream your live event to your communities virtual spaces to turn a
            single event into many. Multiple Stages. audience chat, Q&A, mixing
            multiple speakers and screen-shares, upload to youtube and facebook
            means you reach your maximum audience.
          </p>
        </div>
        <div>
          <img src="/images/Bitmap (1).png" alt="" />
        </div>
        <div className="grid md:grid-cols-2 gap-3  grid-cols-1 place-items-center pt-[97px]">
          <div>
            <div className="max-w-[475px] md:text-left text-center">
              <h3 className="font-semibold text-white text-[28px] mb-5">
                Add more fun
              </h3>
              <p className="text-primary text-base font-medium">
                We built in games and icebreakers so your events can almost run
                themselves. Help your audience meet new random friends and stay
                engaged with games, emoji reactions, sound effects, stickers and
                more.
              </p>
            </div>
          </div>
          <div>
            <div className="flex md:justify-start justify-center md:pt-0 pt-7">
              <img src="/images/Group 10.png" alt="" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3  grid-cols-1 place-items-center pt-[97px]">
          <div className="md:order-1 order-2">
            <div className="flex md:justify-start justify-center md:pt-0 pt-7 ">
              <img src="/images/Bitmap (2).png" alt="" />
            </div>
          </div>
          <div className="md:order-2 order-1">
            <div className="max-w-[475px] md:text-left text-center">
              <h3 className="font-semibold text-white text-[28px] mb-5">
                Metaverse on Mobile
              </h3>
              <p className="text-primary text-base font-medium">
                Moving an avatar in a 2D space in native apps for Windows,
                MacOS, Android, and iOS lets your audience create genuine
                connections from anywhere while maintaining privacy. Better
                networking by expressive avatars that sync to your face and show
                who you are paying attention to.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3  grid-cols-1 place-items-center pt-[97px]">
          <div>
            <div className="max-w-[475px] md:text-left text-center">
              <h3 className="font-semibold text-white text-[28px] mb-5">
                Stay connected between events
              </h3>
              <p className="text-primary text-base font-medium">
                Your communities live past your events, now grow your community
                each time you have an event and let them continue conversations
                with posts, chatrooms, threads and more.
              </p>
            </div>
          </div>
          <div className="relative md:overflow-hidden">
            <div className="flex md:justify-start justify-center md:pt-0 pt-7">
              <img src="/images/Bitmap (3).png" alt="" />
            </div>
            <div className="flex md:justify-start justify-center md:pt-0 pt-7">
              <img
                src="/images/Group 15.png"
                alt=""
                className="absolute left-[163px] md:w-auto md:block hidden bottom-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsStages;
