import React from "react";
// import FooterLogo from "/images/footerLogo.png";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="main-container pt-12 md:pb-[90px] pb-10 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-20">
          <div className="lg:col-span-1 md:col-span-3 sm:col-span-2 lg:block sm:flex justify-center">
            <div className="">
              <div className="pb-[22px]">
                <img src="/images/footerLogo.png" alt="" />
              </div>
              <p className="text-sm font-medium text-primary">
                Turn Events into Communities
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <h3 className="text-sm font-semibold  mb-[14px]  text-gray-400 tracking-wider uppercase">
                Get Started
              </h3>
              <ul className=" mb-3">
                {navigation.started.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <div>
              <h3 className="text-sm  mb-[14px] font-semibold text-gray-400 tracking-wider uppercase">
                Resources
              </h3>
              <ul className=" mb-3">
                {navigation.resourses.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h3 className="text-sm font-semibold text-gray-400 mb-[26px] tracking-wider uppercase">
              GET IN TOUCH
            </h3>
            <div className="flex space-x-6">
              <div className="flex gap-5 items-center">
                <div className="bg-twitter hover:text-gray-300 p-2 rounded-full">
                  <a href="/">
                    <FaTwitter className="text-white text-[20px]" />
                  </a>
                </div>
                <div className="bg-facebook hover:text-gray-300 p-2 rounded-full">
                  <a href="/">
                    <FaFacebookF className="text-white text-[22px]" />
                  </a>
                </div>
                <div className="bg-linkedIn hover:text-gray-300 p-2 rounded-full">
                  <a href="/">
                    <FaLinkedinIn className="text-white text-[22px]" />
                  </a>
                </div>
                <div className=" ">
                  <a href="/">
                    <FaInstagram className="text-white text-[32px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-primary pt-8 md:text-left text-center md:flex items-center md:justify-between justify-center">
          <p className="text-base text-primary">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
          <div>
            <div className="flex gap-6 justify-center">
              <div>
                <a href="/" className="text-sm text-primary">
                  privacy policy
                </a>
              </div>
              <div>
                <a href="/" className="text-sm text-primary">
                  cookies
                </a>
              </div>
              <div>
                <a href="/" className="text-sm text-primary">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const navigation = {
  started: [
    { name: "Signup for Beta", href: "/" },
    { name: "Features", href: "/" },
    { name: "Solutions", href: "/" },
    { name: "Blockchain", href: "/" },
  ],

  resourses: [
    { name: "Explore", href: "/" },
    { name: "Careers", href: "/" },
    { name: "Help Center", href: "/" },
    { name: "Cookie Settings", href: "/" },
  ],
};
