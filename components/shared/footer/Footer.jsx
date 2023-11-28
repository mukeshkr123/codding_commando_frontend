import React from "react";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const FollowLinks = [
  {
    icon: <FaTelegram aria-label="Telegram" className="text-xl" />,
  },
  {
    icon: <FaInstagram aria-label="Instagram" className="text-xl" />,
  },
  {
    icon: <FaFacebook aria-label="Facebook" className="text-xl" />,
  },
  {
    icon: <FaWhatsapp aria-label="WhatsApp" className="text-xl" />,
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
    title: "Learning Portal",
    href: "/learning-portal",
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
    <div className="w-full  bg-[#10001C] xl:pr-16 text-white lg:py-12 pb-8 ">
      <div className="lg:flex lg:justify-between">
        <div className="py-4 px-8 md:py-0">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            height={200}
            width={200}
            className="py-6 lg:py-2"
          />
        </div>
        <div className="flex w-full m-auto px-8 space-x-20 md:px-12 ">
          {/* Useful Links and Follow Us */}
          <div className="flex flex-col lg:flex-row lg:justify-between w-[40%]">
            <div className="mb-4">
              <h1 className="text-xl font-semibold text-[#EBEBEB] pb-2">
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
              <h1 className="text-xl font-semibold text-[#EBEBEB] pb-2">
                Follow Us
              </h1>
              <div className="flex">
                {FollowLinks &&
                  FollowLinks.map((link, index) => (
                    <span key={index} className="mr-4">
                      {link.icon}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Courses and Contact Us */}
          <div className="flex flex-col lg:flex-row lg:justify-between w-[60%]">
            <div className="mb-4">
              <h1 className="text-xl font-semibold text-[#EBEBEB] pb-2">
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
              <h1 className="text-xl font-semibold text-[#EBEBEB] pb-2">
                Contact Us
              </h1>
              <p className="text-gray-600 font-syne text-base font-normal leading-5 pl-2 p-1">
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
