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
              <SheetClose asChild key={index}>
                <Link href={navItem.href}>
                  <p className="text-lg font-semibold hover:text-[#F5478E] transition duration-300">
                    {navItem.title}
                  </p>
                </Link>
              </SheetClose>
            ))}

            <div className="flex flex-col space-y-4 w-full">
              <SheetClose asChild>
                <Link href="/login">
                  <Button className="py-4 w-[60%] bg-[#F5478E] rounded-[45px] hover:bg-[#be3169] transition duration-300">
                    <span className="text-white text-xl font-semibold">
                      Log In
                    </span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/login">
                  <Button className="py-4 w-[60%] bg-[#F5478E] hover:bg-[#be3169] transition duration-300 rounded-[45px]">
                    <span className="text-white text-xl font-semibold ">
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
