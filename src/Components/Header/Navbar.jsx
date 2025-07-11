<<<<<<< HEAD


=======
>>>>>>> origin/dev_biplap
import { useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useBannerHeight } from "../../Context/BannerHeightContext.jsx";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [hideLogoEnquiry, setHideLogoEnquiry] = useState(false);
  const [hamburgerScroll, setHamburgerScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [menuColor, setMenuColor] = useState("light");
=======
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [menuColor, setMenuColornp] = useState("light");
>>>>>>> origin/dev_biplap

  const { bannerHeight } = useBannerHeight();

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHideLogoEnquiry(scrollY > 100);
      setHamburgerScroll(scrollY > bannerHeight - 80);

      if (scrollY > bannerHeight - 80) {
        setMenuColor("dark");
      } else {
        setMenuColor("light");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [bannerHeight]);
=======
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
>>>>>>> origin/dev_biplap

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
<<<<<<< HEAD
      className={`fixed top-0 left-0 ${
        hamburgerScroll ? "w-fit" : "w-full"
      } z-50 transition duration-300`}
=======
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        menuColor === "dark"
          ? "bg-[#0E1C41] border-b border-[#F6BC6D] shadow"
          : "bg-transparent"
      }`}
>>>>>>> origin/dev_biplap
    >
      <div className="flex items-center justify-between px-6 py-5 transition-all duration-300">
        {/* Hamburger Menu */}
        <div className="flex items-center gap-8">
          <div
            className="lg:w-12 lg:h-10 w-10 h-8 relative flex flex-col justify-center cursor-pointer z-[60]"
            onClick={toggleSidebar}
          >
            {[0, 1, 2].map((index) => {
              const commonClasses =
                "absolute h-[3px] transition-all duration-300 ease-in-out";
<<<<<<< HEAD
              // Corrected color logic: color depends on menuColor only
              const colorClass = menuColor === "light" ? "bg-white" : "bg-black";

              let extraClasses = "";
              if (index === 0) {
                extraClasses = isOpen
                  ? "rotate-45 top-5 w-12"
                  : "top-2 w-12";
              } else if (index === 1) {
                extraClasses = isOpen
                  ? "opacity-0 top-5 w-8"
                  : "top-5 w-8";
              } else if (index === 2) {
                extraClasses = isOpen
                  ? "-rotate-45 top-5 w-12"
                  : "top-8 w-12";
=======
              const colorClass =
                menuColor === "light" ? "bg-white" : "bg-black";

              let extraClasses = "";
              if (index === 0) {
                extraClasses = isOpen ? "rotate-45 top-5 w-12" : "top-2 w-12";
              } else if (index === 1) {
                extraClasses = isOpen ? "opacity-0 top-5 w-8" : "top-5 w-8";
              } else if (index === 2) {
                extraClasses = isOpen ? "-rotate-45 top-5 w-12" : "top-8 w-12";
>>>>>>> origin/dev_biplap
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
<<<<<<< HEAD
            className={`flex items-center transition-opacity duration-300 ${
              hideLogoEnquiry ? "hidden pointer-events-none" : "opacity-100"
            }`}
=======
            className={`flex items-center transition-opacity duration-300 opacity-100`}
>>>>>>> origin/dev_biplap
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
<<<<<<< HEAD
          className={`flex items-center gap-4 transition-opacity duration-300 ${
            hideLogoEnquiry ? "hidden pointer-events-none" : "opacity-100"
          }`}
        >
          <span className="font-medium text-white hidden md:block">
            +1 (234) 567-8901
=======
          className={`flex items-center gap-4 transition-opacity duration-300 opacity-100`}
        >
          <span
            className={`font-medium ${
              menuColor === "light" ? "text-white" : "text-[#232266]"
            } hidden md:block`}
          >
            <Link to="tel:+91 9999999999"> +91 9999999999</Link>
>>>>>>> origin/dev_biplap
          </span>

          <Link
            to="/contact"
<<<<<<< HEAD
            className={`transition cursor-pointer ${
              isMobile
                ? "p-2 rounded-full"
                : "px-4 py-2 rounded font-semibold bg-white text-[#232266] hover:bg-[#e0a647]"
            }`}
          >
            {isMobile ? (
              <BiSolidMessageAltDetail color="white" size={30} />
=======
            className={`transition transform ease-in-out cursor-pointer ${
              menuColor === "light"
                ? "bg-transparent lg:bg-white "
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
>>>>>>> origin/dev_biplap
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
