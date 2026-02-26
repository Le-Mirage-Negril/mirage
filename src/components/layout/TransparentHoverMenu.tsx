"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks: Record<string, string>[] = [
  {
    name: "Rooms",
    href: "/rooms",
    image: "/room-1.jpg",
  },
  {
    name: "Weddings",
    href: "/weddings",
    image: "/room-2.jpg",
  },
  {
    name: "Reservations",
    href: "/reservations",
    image: "/swim-4.jpg",
  },
];

function TransparentHoverMenu() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<Record<string, string> | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="flex flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src={scrolled ? "/logo.png" : "/logo.png"}
              alt="Le Mirage Negril"
              width={130}
              height={50}
              priority
              className={scrolled ? "" : "brightness-0 invert"}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-10">
          {menuLinks.map((link) => (
            <div
              key={link.href}
              className="relative group"
              onMouseEnter={() => setActiveItem(link)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <Link
                href={link.href}
                className={`py-2 text-lg font-bold transition-colors relative ${
                  pathname === link.href
                    ? scrolled
                      ? "text-amber-600"
                      : "text-amber-400"
                    : scrolled
                      ? "text-cyan-950 hover:text-amber-600"
                      : "text-white hover:text-amber-400"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-amber-500 w-full"
                      : scrolled
                        ? "bg-amber-500"
                        : "bg-white"
                  }`}
                ></span>
              </Link>

              {/* Image Preview on Hover */}
              <AnimatePresence>
                {activeItem === link && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 overflow-hidden rounded-md shadow-lg z-50"
                  >
                    <div className="relative h-40 w-full">
                      <Image src={link.image} alt={link.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-cyan-950/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-medium text-sm">{link.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
          <Link href="/reservations">
            <Button
              className={
                scrolled
                  ? "bg-amber-500 hover:bg-amber-600 text-white"
                  : "bg-white hover:bg-white/90 text-cyan-950"
              }
            >
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className={`rounded-md p-2 ${scrolled ? "text-cyan-950" : "text-white"}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 md:hidden "
            >
              <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg"
              >
                <div className="flex items-center justify-between p-6 border-b">
                  <Image src="/logo.png" alt="Le Mirage Negril" width={100} height={40} />
                  <button
                    type="button"
                    className="rounded-md p-2 text-cyan-950"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="p-6 space-y-1 bg-white">
                  {menuLinks.map((link) => (
                    <div key={link.href} className="relative overflow-hidden rounded-lg mb-4">
                      <Link
                        href={link.href}
                        className="flex items-center hover:bg-cyan-50 p-3 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="w-16 h-16 mr-4 rounded-md overflow-hidden">
                          <Image
                            src={link.image}
                            alt={link.name}
                            width={64}
                            height={64}
                            className="object-cover h-full w-full"
                          />
                        </div>

                        <div>
                          <h3
                            className={`font-medium ${
                              pathname === link.href ? "text-amber-600" : "text-cyan-950"
                            }`}
                          >
                            {link.name}
                          </h3>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t bg-white">
                  <Link href="/reservations">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default TransparentHoverMenu;
