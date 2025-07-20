// import { useEffect, useState } from "react";
// import ToggleSidebar from "./toggleSidebar.jsx";
// import { Link } from "react-router-dom";
// import { BiSolidMessageAltDetail } from "react-icons/bi";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [isTop, setIsTop] = useState(true);

//   const toggleSidebar = () => setIsOpen((prev) => !prev);
//   const closeSidebar = () => setIsOpen(false);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 800);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       setIsTop(currentScrollY === 0);

//       if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div
//         className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
//           isTop
//             ? "bg-transparent"
//             : "bg-[#0E1C41] border-b border-[#F6BC6D] shadow transform "
//         } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
//       >
//         <div className="flex items-center justify-between px-5 md:px-20 py-5 transition-all duration-300">
//           {/* Hamburger Menu */}
//           <div className="flex items-center gap-8">
//             <div
//               className="lg:w-12 lg:h-10 w-10 h-8 relative flex flex-col overflow-hidden justify-center cursor-pointer z-[50]"
//               onClick={toggleSidebar}
//             >
//               {[0, 1, 2].map((index) => {
//                 const commonClasses =
//                   "absolute h-[3px] bg-[#F6BC6D] transition-all duration-300 ease-in-out";

//                 let extraClasses = "";
//                 if (index === 0) {
//                   extraClasses = isOpen ? "rotate-45 top-5 w-12" : "top-2 w-12";
//                 } else if (index === 1) {
//                   extraClasses = isOpen ? "opacity-0 top-5 w-8" : "top-5 w-8";
//                 } else if (index === 2) {
//                   extraClasses = isOpen
//                     ? "-rotate-45 top-5 w-12"
//                     : "top-8 w-12";
//                 }

//                 return (
//                   <span
//                     key={index}
//                     className={`${commonClasses} ${extraClasses}`}
//                   />
//                 );
//               })}
//             </div>
//           </div>

//           {/* Logo */}
//           {!isOpen && (
//             <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//               <Link to="/" className="flex items-center opacity-100">
//                 <img
//                   src="/logo/logo1.png"
//                   alt="logo"
//                   className="h-8 md:h-12 object-contain"
//                 />
//               </Link>
//             </div>
//           )}
//           {/* Contact & Enquiry */}
//           {!isOpen && (        
//           <div className="flex items-center gap-4 opacity-100">
//             <span className="font-medium text-[#F6BC6D] hidden md:block">
//               +1 (234) 567-8901
//             </span>

//             <Link
//               to="/contact"
//               className={`transition cursor-pointer ${
//                 isMobile
//                   ? "p-2 rounded-full"
//                   : "px-4 py-2 rounded font-semibold bg-[#F6BC6D] text-[#232266] hover:bg-[#e0a647]"
//               }`}
//             >
//               {isMobile ? (
//                 <BiSolidMessageAltDetail color="white" size={30} />
//               ) : (
//                 "Enquiry Now?"
//               )}
//             </Link>
//           </div>
//             )}
//         </div>
//       </div>
//       {/* Sidebar Panel */}
//       {isOpen && <ToggleSidebar onClose={closeSidebar} />}
//     </>
//   );
// }



import { useEffect, useState } from "react";
import ToggleSidebar from "./toggleSidebar.jsx";
import { Link } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          isTop
            ? "bg-transparent"
            : "bg-[#0E1C41] border-b border-[#F6BC6D] shadow transform "
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center justify-between px-5 md:px-20 py-5 transition-all duration-300">
          {/* Hamburger Menu */}
          <div className="flex items-center gap-8">
            <div
              className="lg:w-12 lg:h-10 w-10 h-8 relative flex flex-col overflow-hidden justify-center cursor-pointer z-[50]"
              onClick={toggleSidebar}
            >
              {[0, 1, 2].map((index) => {
                const commonClasses =
                  "absolute h-[3px] bg-[#F6BC6D] transition-all duration-300 ease-in-out";

                let extraClasses = "";
                if (index === 0) {
                  extraClasses = isOpen ? "rotate-45 top-5 w-12" : "top-2 w-12";
                } else if (index === 1) {
                  extraClasses = isOpen ? "opacity-0 top-5 w-8" : "top-5 w-8";
                } else if (index === 2) {
                  extraClasses = isOpen
                    ? "-rotate-45 top-5 w-12"
                    : "top-8 w-12";
                }

                return (
                  <span
                    key={index}
                    className={`${commonClasses} ${extraClasses}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Logo */}
          {!isOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <Link to="/" className="flex items-center opacity-100">
                <img
                  src="/logo/logo1.png"
                  alt="logo"
                  className="h-8 md:h-12 object-contain"
                />
              </Link>
            </div>
          )}
          {/* Contact & Enquiry */}
          {!isOpen && (        
          <div className="flex items-center gap-4 opacity-100">
            <span className="font-medium text-[#F6BC6D] hidden md:block">
              +1 (234) 567-8901
            </span>

            <Link
              to="/contact"
              className={`transition cursor-pointer ${
                isMobile
                  ? "p-2 rounded-full"
                  : "px-4 py-2 rounded font-semibold bg-[#F6BC6D] text-[#232266] hover:bg-[#e0a647]"
              }`}
            >
              {isMobile ? (
                <BiSolidMessageAltDetail color="white" size={30} />
              ) : (
                "Enquiry Now?"
              )}
            </Link>
          </div>
            )}
        </div>
      </div>
      {/* Sidebar Panel */}
      {isOpen && <ToggleSidebar onClose={closeSidebar} />}
    </>
  );
}
