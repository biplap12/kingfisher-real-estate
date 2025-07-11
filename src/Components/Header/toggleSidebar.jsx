import { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ToggleSidebar({ onClose }) {
<<<<<<< HEAD
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [navHovered, setNavHovered] = useState(false);

  const navItems = [
    ["/", "Home"],
    ["/properties", "Properties"],
    ["/about", "About Us"],
    ["/services", "Our Services"],
    ["/blog", "Blog"],
    ["/contact", "Contact"],
  ];

  const navContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 22,
      },
    },
  };

=======
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Properties",
      href: "/properties",
      subMenu: [
        {
          label: "Apartments",
          href: "/properties/apartments",
          subMenu: [
            {
              label: "abc apartments",
              href: "/properties/apartments/apartments",
            },
            { label: "abc apartments", href: "/properties/apartments/villas" },
          ],
        },
        {
          label: "Villas",
          href: "/properties/villas",
          subMenu: [
            { label: "abc villas", href: "/properties/villas/apartments" },
            { label: "abc villas", href: "/properties/villas/villas" },
          ],
        },
        {
          label: "Villamates",
          href: "/properties/villamates",
          subMenu: [
            {
              label: "abc villamates",
              href: "/properties/villamates/apartments",
            },
            { label: "abc villamates", href: "/properties/villamates/villas" },
          ],
        },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

>>>>>>> origin/dev_biplap
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-black/80 to-black/80 backdrop-blur-md z-50"
        onClick={onClose}
      >
<<<<<<< HEAD
        {/* Sidebar Content */}
=======
>>>>>>> origin/dev_biplap
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
<<<<<<< HEAD
          className="fixed top-10 left-0 w-full md:w-[600px] h-full rounded-r-3xl p-8 md:py-10 overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={navContainer}
            className="flex flex-col justify-center items-start gap-4 text-lg h-screen "
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => {
              setNavHovered(false);
              setHoveredIndex(null);
            }}
          >
            {navItems.map(([href, label], i) => {
              // Determine text color class based on hover states
              let textColorClass ="text-[#f6bc6d]";

              if (navHovered) {
                textColorClass =
                  i === hoveredIndex ? "text-[#f6bc6d]" : "text-zinc-400";
              }

              return (
                <motion.div
                  variants={navItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`playfair-display-sc-regular relative block px-4 py-2 rounded-full font-bold tracking-wide font-serif text-6xl uppercase  transition-colors duration-300  ${textColorClass}`}
                >
                  <Link
                    key={href}
                    to={href}
                    onClick={onClose}
                    className="text-2xl md:text-6xl lg:text-[63px] "
                  >
                    {label}
{/* 
                    <span
                      className={`absolute -top-1 -right-1 rounded-full border w-6 h-6 flex items-center justify-center text-xs ${textColorClass}`}
                    >
                      {i + 1}
                    </span> */}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>
        </motion.div>

        {/* Centered Social Icons */}
        {/* <div className="fixed bottom-10 left-0 right-0 md:bottom-110 flex items-center justify-center pointer-events-none z-50">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-4 sm:gap-6 pointer-events-auto"
          >
            {[
              {
                icon: <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />,
                hoverColor: "hover:text-pink-500",
                href: "https://instagram.com/yourprofile",
              },
              {
                icon: <FaFacebookF className="w-6 h-6 sm:w-8 sm:h-8" />,
                hoverColor: "hover:text-blue-500",
                href: "https://facebook.com/yourprofile",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-gray-300 ${item.hoverColor} transition-all duration-300 cursor-pointer`}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div> */}
=======
          className="fixed top-20 left-0 w-full md:w-[600px] h-full p-8 md:py-10 overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={() => {
            const timeout = setTimeout(() => {
              setActiveMenu(null);
              setActiveSubMenu(null);
            }, 400);
            setSubmenuTimeout(timeout);
          }}
          onMouseEnter={() => {
            if (submenuTimeout) {
              clearTimeout(submenuTimeout);
              setSubmenuTimeout(null);
            }
          }}
        >
          <nav className="flex flex-col justify-start items-start gap-4 text-lg h-full relative overflow-y-auto">
            {navItems.map((item, i) => {
              const isActive = activeMenu === i;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => {
                    if (submenuTimeout) clearTimeout(submenuTimeout);
                    setActiveMenu(i);
                  }}
                  className={`playfair-display-sc-regular relative block px-4 py-2 font-bold tracking-wide font-serif text-6xl transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-[#f6bc6d]" : "text-zinc-400"
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="text-2xl md:text-6xl lg:text-[63px]"
                  >
                    {item.label}
                  </Link>

                  {/* Submenu + Child Submenu Container */}
                  <AnimatePresence>
                    {isActive && item.subMenu && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-28 left-[600px] flex h-full z-50 border-l  border-zinc-900"
                        onMouseEnter={() => {
                          if (submenuTimeout) clearTimeout(submenuTimeout);
                          setActiveMenu(i);
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => {
                            setActiveSubMenu(null);
                            setActiveMenu(null);
                          }, 400);
                          setSubmenuTimeout(timeout);
                        }}
                      >
                        {/* Left Submenu */}
                        <div className="w-[350px] bg-opacity-90 p-6 text-white flex flex-col gap-4 font-semibold text-2xl overflow-y-auto border-l border-[#f6bc6d]  ">
                          {item.subMenu.map((subItem, j) => {
                            const isSubActive = activeSubMenu === j;
                            return (
                              <div
                                key={subItem.label}
                                onMouseEnter={() => setActiveSubMenu(j)}
                                className={`relative cursor-pointer py-3 px-5 transition-colors duration-300 gap-5 flex ${
                                  isSubActive
                                    ? "text-[#f6bc6d]"
                                    : "hover:bg-[#f6bc6d]/30"
                                }`}
                              >
                                <Link
                                  to={subItem.href}
                                  onClick={onClose}
                                  className="block"
                                >
                                  {subItem.label}
                                </Link>
                              </div>
                            );
                          })}
                        </div>

                        {/* Right Child Submenu */}
                        {item.subMenu[activeSubMenu]?.subMenu && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-72 bg-opacity-95 p-4 mt-4 gap-4 text-xl font-normal overflow-y-auto border-l border-[#f6bc6d] scrollbar-hide"
                          >
                            <h3 className="text-2xl font-semibold mb-4">
                              {item.subMenu[activeSubMenu]?.label}
                            </h3>
                            {item.subMenu[activeSubMenu]?.subMenu.map(
                              (child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  onClick={onClose}
                                  className="block px-3 py-2 hover:text-[#f6bc6d] text-white transition-colors duration-200"
                                >
                                  {child.label}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </motion.div>
>>>>>>> origin/dev_biplap
      </motion.div>
    </AnimatePresence>
  );
}
