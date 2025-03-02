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
    name: "Reservations",
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
      <div className="hidden md:flex justify-between items-center  py-3 w-full">
        <div className="">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="flex space-between items-center gap-4">
          <div className="flex gap-4">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-gray-700 font-semibold hover:underline"
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
          <Button size="lg" variant="outline" className="font-bold">
            Book Now
          </Button>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
            </Link>
          </div>
          {mobileMenuOpen ? (
            <X size={34} className="text-gray-600" onClick={handleCloseMobileMenu} />
          ) : (
            <div>
              <Menu size={34} onClick={() => setMobileMenuOpen(true)} className="text-gray-600" />
            </div>
          )}
        </div>
        {mobileMenuOpen && (
          <div className="grid gap-2 w-full  p-4">
            <div className="mt-3 grid gap-3">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg text-gray-700 font-semibold hover:underline"
                  onClick={handleCloseMobileMenu}
                >
                  <p>{link.name}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
