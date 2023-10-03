import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Ava from "../assert/ava2.png";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Team Learners", href: "/abt", current: false },
  // Removed "Add Your Projects" and "Projects" from the navigation array
];

const conditionalNavigation = [
  // Added "Add Your Projects" and "Projects" to this array
  { name: "Add Your Projects", href: "/prj", current: false },
  { name: "Projects", href: "/prjscr", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userLoggedIn") === "true"
  );

  useEffect(() => {
    // Update isLoggedIn state when userLoggedIn changes in localStorage
    setIsLoggedIn(localStorage.getItem("userLoggedIn") === "true");
  }, []);

  const navigationWithCurrent = navigation.map((item) => ({
    ...item,
    current: item.href === location.pathname,
  }));

  const handleLogout = () => {
    // Perform logout actions here
    // For example, clear user data in localStorage
    localStorage.setItem("userLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 ml-0   lg:px-8 ">
            <div className="relative flex h-16  items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img className="h-10 w-auto" src={img} alt="Your Company" /> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationWithCurrent.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue-300 text-white"
                            : "text-gray-300 hover:bg-blue-300 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-custom"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {/* Conditional rendering of navigation items */}
                    {isLoggedIn &&
                      conditionalNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-blue-300 text-white"
                              : "text-gray-300 hover:bg-blue-300 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-custom"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src={Ava} alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                      {isLoggedIn ? (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? "bg-blue-300 rounded-lg " : "",
                                "block px-4 py-2 text-sm text-white font-custom"
                              )}
                            >
                              Profile
                            </Link>
                          )}
                        </Menu.Item>
                      ) : (
                        ""
                      )}

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/abt"
                            className={classNames(
                              active ? "bg-blue-300 rounded-lg " : "",
                              "block px-4 py-2 text-sm text-white font-custom"
                            )}
                          >
                            About Us
                          </Link>
                        )}
                      </Menu.Item>
                      {isLoggedIn ? (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/logout"
                              onClick={handleLogout}
                              className={classNames(
                                active ? "bg-blue-300 rounded-lg" : "",
                                "block px-4 py-2 text-sm text-white font-custom"
                              )}
                            >
                              Logout
                            </Link>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/login"
                              className={classNames(
                                active ? "bg-blue-300 rounded-lg" : "",
                                "block px-4 py-2 text-sm text-white font-custom"
                              )}
                            >
                              Login
                            </Link>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationWithCurrent.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-custom"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* Conditional rendering of navigation items */}
              {isLoggedIn &&
                conditionalNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-custom"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
