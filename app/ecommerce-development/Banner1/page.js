"use client"
import React, { useEffect } from "react";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Banner = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: false
};

  // useEffect(() => {
  //         const handleHashChange = () => {
  //             const section = document.getElementById("form-section");
  //             if (section) {
  //                 setTimeout(() => {
  //                     const offset = 150;
  //                     const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
  //                     window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  //                 }, 0);
  //             }
  //         };
  
  //         window.addEventListener("hashchange", handleHashChange, false);
  
  //         return () => {
  //             window.removeEventListener("hashchange", handleHashChange, false);
  //         };
  //     }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      const yOffset = -120; 
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="Mainhero-sectionss">
        <div className="hero-containerMa">
          <div className="hero-containerMaSub">
            <div className="hero-contentBi">
              <p className="hero-tagCo">Top Ecommerce Development Agency</p>
              <h3 className="headssCom primary-heading">
                Looking for a High-Conversion eCommerce Solution?
              </h3>
              <p className="hero-descriptionCom secondary-heading">
                Your search for the perfect eCommerce solution ends here! Kushel
                Digi has emerged as a top ecommerce development agency as our
                experts build powerful, scalable eCommerce solutions according
                to your business needs.
              </p>
              <div className="buttonsBi">
                 <button onClick={scrollToForm} className="secondary-btn">
                  Talk To a Consultant
                 </button>
                <Link href="/contact-us" className="primary-btn">
                  Book A Call<FaArrowRight/>
                </Link>    
              </div>
            </div>
          </div>

          <div className="img-containerCo">
          <Slider {...settings}>
                            <img className='new-banner-scroll-img'
                                width="486"
                                height="463"
                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741088247/MacBook_2_2_two22g.png"
                                src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1744005078/indrpal-2_s9ckw6.png'
                                alt="bigcommerce"
                            />
                            <img
                                width="486"
                                height="463"
                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742641401/immmmm-removebg-preview_yhm4on.png"
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744005078/indrpal-3_gmtgvg.png"
                                alt="shopify"
                            />
                            <img className='new-banner-scroll-img'
                                width="486"
                                height="463"
                                loading='lazy'
                                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1741089462/Group_1171281256_1_znsijn.png"
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744005077/indrpal-1_xw4dan.png"
                                alt="magento"
                            />
                        </Slider>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
