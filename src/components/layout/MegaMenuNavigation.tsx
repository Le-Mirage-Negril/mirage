"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  {
    name: "Rooms",
    href: "/rooms",
    image: "/rooms-preview.jpg",
    subItems: [
      { name: "Deluxe Suite", href: "/rooms/deluxe-suite" },
      { name: "Ocean View", href: "/rooms/ocean-view" },
      { name: "Executive Suite", href: "/rooms/executive-suite" },
      { name: "Presidential Suite", href: "/rooms/presidential-suite" },
    ],
  },
  {
    name: "Weddings",
    href: "/weddings",
    image: "/weddings-preview.jpg",
    subItems: [
      { name: "Venues", href: "/weddings/venues" },
      { name: "Packages", href: "/weddings/packages" },
      { name: "Gallery", href: "/weddings/gallery" },
    ],
  },
  {
    name: "Dining",
    href: "/dining",
    image: "/dining-preview.jpg",
    subItems: [
      { name: "Restaurants", href: "/dining/restaurants" },
      { name: "Bars & Lounges", href: "/dining/bars-lounges" },
      { name: "Private Dining", href: "/dining/private-dining" },
    ],
  },
  {
    name: "Reservations",
    href: "/reservations",
    image: "/reservations-preview.jpg",
    subItems: [],
  },
];

function MegaMenuNavigation() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuHover = (menuName: string) => {
    setOpenMenu(menuName);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image src="/logo.png" alt="Le Mirage Negril" width={100} height={100} priority />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-cyan-950"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {menuLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMenuHover(link.name)}
                onMouseLeave={handleMenuLeave}
              >
                <div className="flex items-center gap-1 py-3">
                  <Link
                    href={link.href}
                    className={`text-sm font-medium ${
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? "text-amber-600"
                        : "text-cyan-950 hover:text-amber-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.subItems.length > 0 && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openMenu === link.name ? "rotate-180" : ""
                      } ${
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "text-amber-600"
                          : "text-cyan-950"
                      }`}
                    />
                  )}
                </div>

                {/* Mega dropdown */}
                {link.subItems.length > 0 && (
                  <AnimatePresence>
                    {openMenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 z-10 mt-2 w-screen max-w-md -translate-x-1/2 px-4"
                      >
                        <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid grid-cols-2 gap-6 p-6">
                            <div className="col-span-1">
                              <div className="space-y-4">
                                {link.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`block rounded p-2 text-sm font-medium leading-6 ${
                                      pathname === subItem.href
                                        ? "bg-amber-50 text-amber-600"
                                        : "text-cyan-900 hover:bg-cyan-50"
                                    }`}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-span-1">
                              <div className="aspect-[4/3] h-auto w-full overflow-hidden rounded-lg">
                                <Image
                                  src={link.image}
                                  alt={link.name}
                                  width={300}
                                  height={225}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <div className="mt-2 text-xs text-cyan-700">
                                Explore our {link.name.toLowerCase()}
                              </div>
                            </div>
                          </div>
                          <div className="bg-cyan-50 px-6 py-3">
                            <Link
                              href={link.href}
                              className="text-sm font-medium text-cyan-900 hover:text-amber-600"
                            >
                              View all {link.name} <span aria-hidden="true">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">Book Now</Button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on mobile menu state */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="space-y-1 px-4 pb-5 divide-y divide-gray-200">
                {menuLinks.map((link) => (
                  <div key={link.name} className="py-2">
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md ${
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "bg-amber-50 text-amber-600"
                          : "text-cyan-900 hover:bg-cyan-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>

                    {link.subItems.length > 0 && (
                      <div className="mt-1 pl-4 space-y-1">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-2 text-sm rounded-md ${
                              pathname === subItem.href
                                ? "bg-amber-50 text-amber-500"
                                : "text-cyan-800 hover:bg-cyan-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 pb-2">
                  <Button className="w-full mt-2 bg-amber-500 hover:bg-amber-600 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default MegaMenuNavigation;
