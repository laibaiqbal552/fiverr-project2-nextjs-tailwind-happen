import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const cards = [
  {
    title: "How to Host Large Virtual Events — And Do It For Free",
    role: "Dylan Jay",
    imageUrl: "/images/Bitmap (4).png",
    href: "/",
  },
  {
    title: "8 Virtual Games You Can Play Online Right Now in Happen",
    role: "Dylan Jay",
    imageUrl: "/images/Bitmap (5).png",
    href: "/",
  },
  {
    title: "How to Join a Happen Event?",
    role: "Dylan Jay",
    imageUrl: "/images/Bitmap (6).png",
    href: "/",
  },
  {
    title: "How to Design Your Own Virtual Stage in Happen For Free",
    role: "Dylan Jay",
    imageUrl: "/images/Bitmap (7).png",
    href: "/",
  },
];

export default function ExploreCards() {
  return (
    <div className="main-container">
      <div className=" py-12 ">
        <ul className="md:grid sm:grid-cols-2 sm:gap-5  lg:grid-cols-4 ">
          {cards.map((card) => (
            <li
              key={card.title}
              className=" bg-white max-w-[275px] mx-auto mb-6 rounded-[10px]  text-left"
            >
              <div className="">
                <img src={card.imageUrl} alt="" className="rounded-t-[11px]" />
                <div className=" p-6 flex flex-col justify-between gap-y-[31px]">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-black font-semibold text-lg mb-[10px]">
                      {card.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {card.role}
                    </p>
                  </div>
                  <div>
                    <a
                      href={card.href}
                      className="text-sm uppercase flex gap-1 items-center font-semibold text-secondary"
                    >
                      Read More
                      <span>
                        <MdKeyboardArrowRight className="text-lg" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
