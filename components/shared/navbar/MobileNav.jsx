import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Courses",
    href: "/courses",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const MobileNav = ({ navLinks }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={30} />
      </SheetTrigger>
      <SheetContent className="bg-[#10001C] text-white">
        <SheetHeader>
          <SheetTitle>
            <div className="mb-14">
              <Image
                src="/assets/icons/logo.svg"
                alt="Codding Commando"
                height={150}
                width={180}
              />
            </div>
          </SheetTitle>
          <SheetDescription className="flex flex-col space-y-6 text-white">
            {navLinks.map((navItem, index) => (
              <Link href={navItem.href} key={index}>
                <p className="text-lg font-semibold">{navItem.title}</p>
              </Link>
            ))}

            <div className="flex flex-col space-y-4 w-full">
              <Link href="/sign-in">
                <Button className="py-4 w-[60%]">
                  <span className="text-white text-lg font-semibold">Log In</span>
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button className="py-4 w-[60%]">
                  <span className="text-white text-lg font-semibold">Sign Up</span>
                </Button>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
