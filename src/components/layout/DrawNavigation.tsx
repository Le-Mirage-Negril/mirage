"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  {
    name: "Rooms",
    href: "/rooms",
    image: "/room-2.jpg",
    description: "Luxurious accommodations with stunning views",
  },
  {
    name: "Weddings",
    href: "/weddings",
    image: "/room-1.jpg",
    description: "Create unforgettable celebrations at our resort",
  },
  {
    name: "Dining",
    href: "/dining",
    image: "/room-2.jpg",
    description: "Exquisite culinary experiences",
  },
  {
    name: "Spa",
    href: "/spa",
    image: "/swim-1.jpg",
    description: "Rejuvenate with our premium wellness treatments",
  },
  {
    name: "Reservations",
    href: "/reservations",
    image: "/room-1.jpg",
    description: "Book your stay directly for the best rates",
  },
];

function DrawerNavigation() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(null);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-950/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image src="/logo.png" alt="Le Mirage Negril" width={100} height={100} priority />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-medium">
            Book Now
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-cyan-950"
                aria-label="Open main menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[540px] p-0 border-l border-cyan-950/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-5 h-full">
                {/* Menu Items Column */}
                <div className="sm:col-span-2 p-6 bg-cyan-950 h-full">
                  <div className="flex items-center justify-between mb-10">
                    <Image
                      src="/logo-white.png"
                      alt="Le Mirage Negril"
                      width={80}
                      height={80}
                      className="invert"
                    />
                    <SheetClose className="rounded-full p-2 text-white">
                      <X className="h-6 w-6" />
                    </SheetClose>
                  </div>

                  <div className="space-y-6 mt-10">
                    {menuLinks.map((link) => (
                      <div key={link.href} className="relative">
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className={`block py-3 text-xl font-light tracking-wide ${
                              pathname === link.href
                                ? "text-amber-400"
                                : "text-white hover:text-amber-400 transition-colors"
                            }`}
                            onMouseEnter={() => setActiveItem(link)}
                            onFocus={() => setActiveItem(link)}
                          >
                            {link.name}
                          </Link>
                        </SheetClose>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-10">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white mt-10">
                      Book Your Stay
                    </Button>
                  </div>
                </div>

                {/* Preview Image Column */}
                <div className="sm:col-span-3 hidden sm:block relative bg-cyan-900">
                  <AnimatePresence mode="wait">
                    {activeItem && (
                      <motion.div
                        key={activeItem.href}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <div className="relative h-full">
                          <Image
                            src={activeItem.image}
                            alt={activeItem.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 via-cyan-950/40 to-transparent" />
                          <div className="absolute bottom-10 left-10 right-10 text-white">
                            <h3 className="text-3xl font-light mb-2">{activeItem.name}</h3>
                            <p className="text-white/80">{activeItem.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!activeItem && (
                    <div className="flex items-center justify-center h-full text-white/50 text-xl">
                      <p>Hover over a menu item to explore</p>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default DrawerNavigation;
