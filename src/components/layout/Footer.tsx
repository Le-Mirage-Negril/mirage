// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-200  mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-6 md:mb-0 space-y-2">
            <Image src="/logo.png" alt="Le Mirage Negril" width={100} height={100} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-700  uppercase tracking-wider">
                Le Mirage
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/rooms" className="text-gray-700  hover:text-amber-600 ">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/weddings" className="text-gray-600  hover:text-amber-600 ">
                    Weddings
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800  uppercase tracking-wider">
                Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="http://negrilchamber.org/"
                    className="text-gray-600  hover:text-amber-600 "
                  >
                    Negril Chamber of Commerce
                  </a>
                </li>
                <li>
                  <a
                    href="https://visitjamaica.com/"
                    className="text-gray-600  hover:text-amber-600 "
                  >
                    Jamaica Tourist Board
                  </a>
                </li>
                <li>
                  <a
                    href="https://charelainn.com/"
                    className="text-gray-600  hover:text-amber-600 "
                  >
                    Charela Inn
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm font-semibold text-gray-800  uppercase tracking-wider">
                Contact
              </h3>
              <div className="mt-4 text-center space-y-2 mb-4">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Mail /> <a href="mailto:mirage02@cwjamaica.com">mirage02@cwjamaica.com</a>
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Phone /> <a href="tel:+1-876-957-0386">+1 876-957-0386</a> |{" "}
                  <span>Whatsapp: (876) 379-1505</span>
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-600 text-sm">ADDRESS</p>
                <p className="text-sm text-gray-600 pt-3">
                  Mirage Resort, Lighthouse Road <br /> P.O. Box 33 Negril, Jamaica W.I
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 ">
            &copy; {new Date().getFullYear()} Le Mirage Negril. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="https://www.facebook.com/mirage.negril/"
              className="text-gray-400 hover:text-amber-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/lemirageresort"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>

              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
