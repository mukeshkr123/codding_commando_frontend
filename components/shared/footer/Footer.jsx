import React from "react";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const FollowLinks = [
  {
    icon: <FaTelegram aria-label="Telegram" className="text-lg sm:text-xl" />,
  },
  {
    icon: <FaInstagram aria-label="Instagram" className="text-lg sm:text-xl" />,
  },
  {
    icon: <FaFacebook aria-label="Facebook" className="text-lg sm:text-xl" />,
  },
  {
    icon: <FaWhatsapp aria-label="WhatsApp" className="text-lg sm:text-xl" />,
  },
];

const UseFullLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Demo",
    href: "/demo",
  },
];

const Courses = [
  {
    title: "Complete SalesForce",
    href: "/courses",
  },
  {
    title: "Mastering Apex",
    href: "/courses",
  },
  {
    title: "Mastering LWC",
    href: "/courses",
  },
  {
    title: "Java",
    href: "/courses",
  },
];

const Footer = () => {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden  bg-[#10001C] pb-8 text-white lg:py-12 xl:pr-16 ">
      <div className="lg:flex lg:justify-between">
        <div className="px-8 py-4 md:py-0">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              height={200}
              width={200}
              className="py-6 lg:py-2"
            />
          </Link>
        </div>
        <div className="m-auto flex w-full space-x-8 px-8 sm:space-x-20 md:px-12 ">
          <div className="flex w-[40%] flex-col lg:flex-row lg:justify-between">
            <div className="mb-4">
              <h1 className="pb-2 text-lg font-semibold text-[#EBEBEB] sm:text-xl">
                Useful Links
              </h1>
              {UseFullLinks &&
                UseFullLinks.map((link) => (
                  <FooterLinks
                    key={link.href}
                    title={link.title}
                    href={link.href}
                  />
                ))}
            </div>
            <div>
              <h1 className="pb-2 text-lg font-semibold text-[#EBEBEB] sm:text-xl">
                Follow Us
              </h1>
              <div className="flex gap-2">
                {FollowLinks &&
                  FollowLinks.map((link, index) => (
                    <span key={index} className="">
                      {link.icon}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Courses and Contact Us */}
          <div className="flex w-[60%] flex-col lg:flex-row lg:justify-between">
            <div className="mb-4">
              <h1 className="pb-2 text-lg font-semibold text-[#EBEBEB] sm:text-xl">
                Courses
              </h1>
              {Courses &&
                Courses.map((course) => (
                  <FooterLinks
                    key={course.href}
                    title={course.title}
                    href={course.href}
                  />
                ))}
            </div>
            <div className="pt-6 lg:pt-0">
              <h1 className="pb-2 text-lg font-semibold text-[#EBEBEB] sm:text-xl">
                Contact Us
              </h1>
              <p className=" px-2 text-sm font-normal text-gray-600  sm:p-1 sm:pl-2 sm:text-base">
                Lorem ipsum <br />
                Lore@gmail.com <br />
                +919945544554
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
