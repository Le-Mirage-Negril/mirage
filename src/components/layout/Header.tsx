"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

const menuLinks = [
  {
    name: "Rooms",
    href: "/rooms",
  },
  {
    name: "Weddings",
    href: "/weddings",
  },
  {
    name: "Book",
    href: "/book",
  },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function handleCloseMobileMenu() {
    setMobileMenuOpen(false);
  }
  return (
    <nav className="mx-auto p-4">
      <div className="md:flex justify-between items-center hidden py-3 w-full">
        <div className="">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="flex space-between items-center">
          <div className="flex gap-4">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-gray-900 dark:text-gray-100 font-semibold hover:underline"
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
          <Button size="lg">Book Now</Button>
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div>
          <Button size="lg" asChild>
            <Menu
              size={42}
              className="text-gray-900 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            />
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="grid gap-2 w-full  p-4">
          <div className="flex justify-between items-center">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <Button asChild>
              <X
                size={30}
                className="text-gray-900 dark:text-gray-100"
                onClick={handleCloseMobileMenu}
              />
            </Button>
          </div>
          <div className="mt-3 grid gap-3">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-gray-900 dark:text-gray-100 font-semibold hover:underline"
                onClick={handleCloseMobileMenu}
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
