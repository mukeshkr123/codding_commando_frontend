import Link from "next/link";
import React from "react";

const FooterLinks = ({ title, href }) => {
  return (
    <Link href={href}>
      <p className="text-gray-600 font-syne text-base font-normal leading-5 pl-2 p-1">
        {title}
      </p>
    </Link>
  );
};

export default FooterLinks;
