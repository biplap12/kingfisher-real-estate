import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TbArrowUpDashed } from "react-icons/tb";
import { MenuContext } from "../state/MenuContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import {
  FaArrowRight,
  FaBullseye,
  FaCheckCircle,
  FaEye,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { showErrorToast } from "../config/toastConfig";
import api from "../services/api";
import PurposeSection from "../Components/AboutSection/PurposeSection";

export default function About() {
  const divRef = useRef(null);
  // const { setMenuColor } = useContext(MenuContext);
  const isVisible = useInView(divRef, { once: false });
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setMenuColor("dark");
    fetchTeamMembers();
  }, [isVisible]);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/team-members/active");
      if (response.data.success) {
        setTeamMembers(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching team members:", error);
      showErrorToast("Failed to load team members. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-[#F5BC6D] -mt-23">
      <div className="relative h-auto -mt-25">
        <div
          className="relative h-[50vh] mt-24 bg-center bg-cover bg-no-repeat z-20 overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}>
          <div className="absolute inset-0 backdrop-blur-sm z-20" />
          <div className="relative z-30 text-center max-w-2xl mx-auto px-6 pt-32 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-font">
              About Us
            </h1>
            <Breadcrumbs />
          </div>
        </div>

        <div className="min-h-screen flex flex-col w-full darkSection">
          {/* Our Story */}
          {/* <div className="text-center p-4 lg:p-6 max-w-7xl mx-auto">
            <Link
              to={"/"}
              className="flex mt-5  justify-start items-center text-gray-700"
            >
              <ArrowLeft size={15} /> Back
            </Link>
            <h2 className="text-4xl lg:text-5xl heading-font uppercase mb-6">
              Our Purpose
            </h2>
            <p className="text-lg raleway-regular text-gray-500 mx-auto ">
              Framed by a stunning ocean panorama, Kingfisher&apos;s newest
              landmark on Dubai Islands captures the essence of refined coastal
              living. Nestled along the marina, this exceptional development
              offers a seamless blend of tranquility, energy, and
              connectivity—where every feature is thoughtfully designed to
              elevate modern lifestyles. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Nulla repellat aperiam enim temporibus id.
            </p>
          </div> */}

          <PurposeSection />

          <section className="py-18 px-6 mx-20">
           
            <h2 className="text-4xl md:text-7xl font-bold text-center mb-20 heading-font">
              Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-3 text-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading team members...</p>
                </div>
              ) : teamMembers.length > 0 ? (
                teamMembers.map((member) => (
                  <div
                    key={member._id}
                    className="relative group rounded-md w-full overflow-hidden"
                    style={{ height: "500px" }}>
                    {/* Image */}
                    <img
                      src={
                        member.image ||
                        "https://via.placeholder.com/300x400?text=Team+Member"
                      }
                      alt={member.name}
                      className="w-full h-full object-cover rounded-md"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x400?text=Team+Member";
                      }}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary-color bg-opacity-70 text-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md flex flex-col">
                      {/* Rotated name */}
                      <div className="absolute bottom-2 left-10 transform -translate-y-1/2 rotate-[-90deg] origin-left max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap px-2 bg-primary-color bg-opacity-50">
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                          {member.name}
                        </h3>
                      </div>

                      {/* Social icons */}
                      <div className="absolute top-5 right-5 flex flex-col gap-4">
                        {member.facebookUrl && (
                          <a
                            href={member.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500">
                            <FaFacebook size={24} />
                          </a>
                        )}
                        {member.twitterUrl && (
                          <a
                            href={member.twitterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900">
                            <FaInstagram size={24} />
                          </a>
                        )}
                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0A66C2]">
                            <FaLinkedin size={24} />
                          </a>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto self-end m-5">
                        <div className="rounded-full hover:bg-gray-200 transition">
                          <img
                            src="./logo/icon.png"
                            alt="logo icon"
                            height={20}
                            width={35}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-20">
                  <p className="text-gray-600">No team members found.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ExpandImageScroll() {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         imageRef.current,
//         { width: "40vw" },
//         {
//           width: "100vw",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top top",
//             end: "+=200vh", // <- SLOWER SCROLLING
//             scrub: 2, // <- SMOOTHER PROGRESS
//             pin: true,
//           },
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div>
//       {/* Scroll Animation Section */}
//       <section
//         ref={containerRef}
//         className="h-[100vh] w-screen flex items-center justify-center bg-black overflow-hidden"
//       >
//         <img
//           ref={imageRef}
//           src="/office-modern.jpg"
//           alt="Expanding"
//           className="transition-all will-change-[width] object-cover"
//           style={{ width: "40vw" }}
//         />
//       </section>

//       {/* Content after animation */}
//       <section className="min-h-screen bg-white text-black p-10">
//         <h1 className="text-4xl font-bold mb-4">Page Content</h1>
//         <p>Now scrolling continues as normal.</p>
//       </section>
//     </div>
//   );
// }
