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
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";

const MobileNav = ({ navLinks }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={30} />
      </SheetTrigger>
      <SheetContent className="bg-dark-purple text-white  transition-all duration-300 ease-in-out">
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
              <SheetClose asChild key={index}>
                <Link href={navItem.href}>
                  <p className="text-lg font-semibold transition duration-300 hover:text-[#F5478E]">
                    {navItem.title}
                  </p>
                </Link>
              </SheetClose>
            ))}

            <div className="flex w-full flex-col space-y-4">
              <SheetClose asChild>
                <Link href="/login">
                  <Button className="w-[60%] rounded-[45px] bg-[#F5478E] py-4 transition duration-300 hover:bg-[#be3169]">
                    <span className="text-xl font-semibold text-white">
                      Log In
                    </span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/login">
                  <Button className="w-[60%] rounded-[45px] bg-[#F5478E] py-4 transition duration-300 hover:bg-[#be3169]">
                    <span className="text-xl font-semibold text-white ">
                      Sign Up
                    </span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
