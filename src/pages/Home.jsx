import MapSection from "../Components/Home/MapSection.jsx";
<<<<<<< HEAD
import PaymentPlanSection from "../Components/Home/PaymentPlanSection.jsx";
import FloorPlanSelector from "../Components/Home/FloorPlanSelector.jsx";
import IconicProperties from "../Components/Home/IconicProperties.jsx";
import Whykingfisher from "../Components/Home/WhyKingFisher.jsx";
import AmenitiesSection from "../Components/Home/AmenitiesSection.jsx";
import Slider from "../Components/Home/Slider.jsx";
import Hero1 from "../Components/Home/BackgroundImageSection.jsx";
import Details from "../Components/Home/Details.jsx";
import Gallery from "../Components/Home/Gallery.jsx";
import PartnerLogos from "../Components/Partners/Associated-Partners.jsx";
import Sticky from "../Components/Home/Sticky.jsx";
import { useEffect, useState } from "react";
import api from "../services/api.js";
4;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/home-galleries/active");
        if (response.data.success) {
          console.log("Gallery data:", response.data.data[0].imageUrl);
          setGalleryData(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching gallery data:", err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const text = [
    {
      title: "Our Story",
      description:
        "Framed by a stunning ocean panorama, Kingfisher's newest landmark on Dubai Islands captures the essence of refined coastal living. Nestled along the marina, this exceptional development offers a seamless blend of tranquility, energy, and connectivity—where every feature is thoughtfully designed to elevate modern lifestyles.",
    },
  ];

  return (
    <>
      {/* <Navbar/> */}
      <section data-theme="light" className="min-h-screen">
        <Hero1 />
      </section>
      <section data-theme="dark" className="">
        <Details />
      </section>
      <div className="sticky top-0">
        <Sticky />
      </div>
      <section className="min-h-screen" id="our-story">
        <Slider
          title={text[0].title}
          description={text[0].description}
          images={galleryData || []}
          loading={loading}
        />
      </section>
      <section className="min-h-screen">
        <Gallery />
      </section>
      <section className="min-h-screen">
        <Whykingfisher />
      </section>
      <section className="min-h-screen">
        <IconicProperties />
      </section>
      <section className="min-h-screen">
        <AmenitiesSection />
      </section>
      <section className="min-h-screen">
        <MapSection />
      </section>
      <section className="min-h-screen">
        <PaymentPlanSection />
      </section>
      <section className="min-h-screen">
        <FloorPlanSelector />
      </section>
      <section className="min-h-screen">
=======
// import PaymentPlanSection from "../Components/Home/PaymentPlanSection.jsx";
import FloorPlanSelector from "../Components/Home/FloorPlanSelector.jsx";
import IconicProperties from "../Components/Home/IconicProperties.jsx";
import Whykingfisher from "../Components/Home/WhyKingFisher.jsx";
// import GallerySlider from "../Components/PropertyDetails/slider.jsx";
import Hero1 from "../Components/Home/BackgroundImageSection.jsx";
import Gallery from "../Components/Home/Gallery.jsx";
import PartnerLogos from "../Components/Partners/Associated-Partners.jsx";
// import { useEffect, useState } from "react";
// import api from "../services/api.js";
import Home1 from "../Components/Home/home.jsx";

import OurStorySlider from "../Components/Home/OurStorySlider.jsx";
import AboutPage from "../Components/Home/AboutPage.jsx";
import Testimonial from "../Components/Home/customerOponion.jsx";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <section data-theme="light" className="min-h-screen relative">
        {/* <Hero1 /> */}
        <Home1/>
        {/* <div className="absolute lg:-bottom-20 -bottom-30  left-1/2  transform -translate-x-1/2 ">
          <AbcPage />
        </div> */}
      </section>
      <section>
        <AboutPage/>
      </section>

       <section className="min-h-screen" id="our-story">
        <OurStorySlider/>
      </section> 
      {/* <section>
        <Gallery />
      </section> */}
      <section>
        <Whykingfisher />
      </section>
      <section>
        <IconicProperties />
      </section>

      <section>
        <MapSection />
      </section>
      {/* <section >
        <PaymentPlanSection />
      </section> */}
      <section>
        <FloorPlanSelector />
      </section>
      <section>
        <Testimonial/>
      </section>
      <section>
>>>>>>> origin/dev_biplap
        <PartnerLogos />
      </section>
    </>
  );
};

export default Home;
