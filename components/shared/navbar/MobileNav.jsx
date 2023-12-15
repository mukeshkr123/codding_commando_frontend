"use client";

import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "../../ui/sheet";
import { logoutAction } from "../../../GlobalRedux/slices/userSlice";
import { useDispatch } from "react-redux";

const MobileNav = ({ navLinks, user }) => {
  const dispatch = useDispatch();
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={28} />
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

            {user ? (
              <div className="flex w-full flex-col ">
                <SheetClose asChild>
                  <Link href={`/users/${user?._id}`}>
                    <p className="text-lg font-semibold transition duration-300 hover:text-[#F5478E]">
                      My Courses
                    </p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <div>
                    <Button
                      className="mt-4 w-[40%] rounded-[45px] bg-[#F5478E] py-4 transition duration-300 hover:bg-[#be3169]"
                      onClick={() => dispatch(logoutAction())}
                    >
                      <span className="text-xl font-semibold text-white">
                        Log Out
                      </span>
                    </Button>
                  </div>
                </SheetClose>
              </div>
            ) : (
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
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
