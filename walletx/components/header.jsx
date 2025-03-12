import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
export const Header = async () => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur:md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center space-x-2 text-black">
            <span className="text-3xl font-bold bg-gradient-to-r from-black to-blue-600 text-transparent bg-clip-text">
              WalletX
            </span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline"> Dashboard </span>
              </Button>
            </Link>
            <Link
              href={"/transaction/create"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline"> Add Transaction </span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <div className="flex justify-center space-x-4">
              <SignInButton forceRedirectUrl="/dashboard">
                <Button> Login </Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="outline"> SignUp </Button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-full h-full",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};
