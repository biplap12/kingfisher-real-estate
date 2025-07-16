import { useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useBannerHeight } from "../../Context/BannerHeightContext.jsx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [menuColor, setMenuColornp] = useState("light");

  const { bannerHeight } = useBannerHeight();

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // useEffect(() => {
  //   // const handleScroll = () => {
  //   //   const scrollY = window.scrollY;
  //   //   if (scrollY > bannerHeight - 80) {
  //   //     setMenuColor("light");
  //   //   } else {
  //   //     setMenuColor("light");
  //   //   }
  //   // };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [bannerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        menuColor === "dark"
          ? "bg-[#0E1C41] border-b border-[#F6BC6D] shadow"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-20 py-5 transition-all duration-300">
        {/* Hamburger Menu */}
        <div className="flex items-center gap-8">
          <div
            className="lg:w-12 lg:h-10 w-10 h-8 relative flex flex-col justify-center cursor-pointer z-[60]"
            onClick={toggleSidebar}
          >
            {[0, 1, 2].map((index) => {
              const commonClasses =
                "absolute h-[3px] transition-all duration-300 ease-in-out";
              const colorClass =
                menuColor === "light" ? "bg-white" : "bg-black";

              let extraClasses = "";
              if (index === 0) {
                extraClasses = isOpen ? "rotate-45 top-5 w-12" : "top-2 w-12";
              } else if (index === 1) {
                extraClasses = isOpen ? "opacity-0 top-5 w-8" : "top-5 w-8";
              } else if (index === 2) {
                extraClasses = isOpen ? "-rotate-45 top-5 w-12" : "top-8 w-12";
              }

              return (
                <span
                  key={index}
                  className={`${commonClasses} ${colorClass} ${extraClasses}`}
                />
              );
            })}
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <Link
            to="/"
            className={`flex items-center transition-opacity duration-300 opacity-100`}
          >
            <img
              src="/logo/logo1.png"
              alt="logo"
              className="h-8 md:h-12 object-contain"
            />
          </Link>
        </div>

        {/* Contact & Enquiry */}
        <div
          className={`flex items-center gap-4 transition-opacity duration-300 opacity-100`}
        >
          <span
            className={`font-medium ${
              menuColor === "light" ? "text-[#F6BC6D]" : "text-[#232266]"
            } hidden md:block`}
          >
            <Link to="tel:+91 9999999999"> +91 9999999999</Link>
          </span>

          <Link
            to="/contact"
            className={`transition transform ease-in-out cursor-pointer ${
              menuColor === "light"
                ? "bg-transparent lg:bg-[#F6BC6D] "
                : "bg-transparent lg:bg-[#F5BC6D] text-white"
            } ${
              isMobile
                ? "p-2 rounded-full"
                : "px-4 py-2 rounded font-semibold  text-[#232266] hover:bg-[#F5BC6D]"
            }`}
          >
            {isMobile ? (
              <BiSolidMessageAltDetail
                color={menuColor === "light" ? "white" : "#232266"}
                size={30}
              />
            ) : (
              "Enquiry Now?"
            )}
          </Link>
        </div>
      </div>

      {/* Sidebar Panel */}
      {isOpen && <ToggleSidebar onClose={closeSidebar} />}
    </div>
  );
}
