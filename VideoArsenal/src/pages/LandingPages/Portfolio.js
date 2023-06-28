/* eslint-disable no-unused-vars */
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import routes from "routes";
import footerRoutes from "footer.routes";
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import "./Portfolio.css";
function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobileDevice);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resizing
    window.addEventListener("resize", checkIfMobile);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const elementStyle = {
    position: isMobile ? "static" : "relative",
    top: isMobile ? 0 : "1px",
    left: isMobile ? "auto" : "35%",
    width: isMobile ? "390px" : "800px",
    height: "800px",
  };

  return (
    <div>
      <MKBox>
        <DefaultNavbar routes={routes} transparent light />
      </MKBox>
      <div className="background-video">
        <ReactPlayer
          url="https://player.vimeo.com/video/121097470?h=e3506ba6f1"
          playing
          loop
          muted
          allowFullscreen
          width="640px"
          height="800px"
          style={elementStyle}
        />
      </div>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}

export default Portfolio;
