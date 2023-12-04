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
    <div className="w-full  bg-[#10001C] pb-8 text-white lg:py-12 xl:pr-16 ">
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
        <div className="m-auto flex w-full space-x-20 px-8 md:px-12 ">
          <div className="flex w-[40%] flex-col lg:flex-row lg:justify-between">
            <div className="mb-4">
              <h1 className="pb-2 text-xl font-semibold text-[#EBEBEB]">
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
              <h1 className="pb-2 text-xl font-semibold text-[#EBEBEB]">
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
          <div className="flex w-[60%] flex-col lg:flex-row lg:justify-between">
            <div className="mb-4">
              <h1 className="pb-2 text-xl font-semibold text-[#EBEBEB]">
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
              <h1 className="pb-2 text-xl font-semibold text-[#EBEBEB]">
                Contact Us
              </h1>
              <p className=" p-1 pl-2 text-base font-normal leading-5 text-gray-600">
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
