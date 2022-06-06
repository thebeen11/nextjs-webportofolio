import React, { useState } from "react";
import { Transition } from "@headlessui/react"; //smooth transition
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
              {/* Desktop */}

              <div className="flex  justify-center items-center flex-shrink-0 ml-10">
                <h1 className="font-bold text-xl cursor-pointer">
                  Im<span className="text-secondary">Been</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-secondary px-3 py-2 text-md"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="Services"
                    to="services"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-secondary px-3 py-2 text-md"
                  >
                    Services
                  </Link>
                  <Link
                    activeClass="Project"
                    to="project"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-secondary px-3 py-2 text-md"
                  >
                    Porjects
                  </Link>
                  <Link
                    activeClass="Work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-secondary px-3 py-2 text-md"
                  >
                    Work
                  </Link>
                  <Link
                    activeClass="Contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-secondary px-3 py-2 text-md"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center flex-shrink-0">
                <h1 className="font-semibold text-lg cursor-pointer hidden md:block">
                  Say <span className="text-secondary">Hi</span>
                </h1>
              </div>
            </div>

            {/* Mobile */}
            <div className="mr-14 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={false}
              >
                <span className="sr-only"> Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xlmns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h12M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xlmns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white mx-4 mr-20 py-4 pb-4 space-y-1"
              >
                <Link
                  href="/home"
                  activeClass="Home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer text-black hover:bg-secondary hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  activeClass="Services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer text-black hover:bg-secondary hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/work"
                  activeClass="Work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer text-black hover:bg-secondary hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Porjects
                </Link>
                <Link
                  href="/clients"
                  activeClass="Clients"
                  to="clients"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer text-black hover:bg-secondary hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Clients
                </Link>
                <Link
                  to="/contact"
                  activeClass="Contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer text-black hover:bg-secondary hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/hi"
                  activeClass="hi"
                  to="hi"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-secondary text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Say<span className="text-black">hi</span>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
