"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  function handleCloseMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className=" border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image src="/logo.png" alt="Le Mirage Negril" width={100} height={100} />
          </Link>
        </div>
        {/*  */}

        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6 text-gray-600" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden md:flex lg:gap-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === link.href ? "text-amber-700 " : "text-gray-700  hover:text-amber-600 "
              }`}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex ml-4">
          <Button size="lg" variant="outline" className="font-bold">
            Book Now
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50  backdrop-blur-sm ">
            <div className="relative flex w-full flex-col overflow-y-auto  px-6 py-6  sm:ring-1 ">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5 flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image src="/logo.png" alt="GetGameFlow" width={90} height={90} />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-amber-500/10">
                  <div className="space-y-2 py-6">
                    {menuLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                          pathname === link.href
                            ? "text-amber-700 bg-gray-50 "
                            : "text-gray-700  hover:bg-amber-50"
                        }`}
                        onClick={handleCloseMobileMenu}
                      >
                        <p>{link.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
