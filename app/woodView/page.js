"use client"
import React, { useState, useEffect } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Head from 'next/head';



import Footer from "../COMMON/Footer";

import Navbar from "../COMMON/Navbar";
import '../globals.css'
import Link from "next/link";
const WoodView = () => {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    if (window.matchMedia("(max-width: 800px)").matches) {
      setPerPage(2);
    }
    if (window.matchMedia("(max-width: 650px)").matches) {
      setPerPage(1);
    }
  }, []);

  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };
  const generateMetadata = ({ params }) => ({
    title: 'Kusheldigi.com/woodView',
    description:"Web Development Company | Kushel Digi Solutions"
  });
  
useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    metaDescription ? metaDescription.content = description : 
      document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
  }, []);

  return (
    <>

<Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>
      
    <Navbar/>
     

      <div className="ser-main">

        <div className="changebgcolor">
          <div className="side-bg-trio ">

            <div className="first-kick-pads incheingh  ">
              <div className="left-section-kids">
                <img
                  src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401658/viewimg2_a4jlb6.png'
                  alt="img"
                ></img>
                <p className="shoots_premium kooo">
                Wood View focuses on mental health, autism support, and counseling services for individual and family support. The programs offered help improve mental well-being through personalized care and professional guidance.
                </p>
                <h3>Technologies Used</h3>
                <div className="main-box-logic flex">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401477/omis_estvk3.svg' id="sim" alt="img"></img>
                  {/* <img className="pokli" src={omis1} id="rotat" alt="img"></img> */}
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401520/omis2_txza3q.svg' id="rotat" alt="img"></img>
                </div>
              </div>
              <div className="right-section-kids ramit">
                <img className="sotal-group" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740402063/renid_zvwlcc.svg' id="total-group" alt="img"></img>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="MadFish_press">

              <div className="MadFish-back crazy-back2">

                <div className="MadFish-back1">
                
                  <div className="MadFish_press_para crazy_cms">
           
                    <p className="sociawrodfs">
                    Kushel Digi Solutions is proud to contribute to Wood View to enhance their digital platform that aims to strengthen their online presence and help them to  deliver personalized care and guidance to individuals and families.
                    </p>
                  </div>

                </div>

                <div className="MadFish-back2">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401710/woldview22_rheuzm.png' alt="MadFish" />
                </div>

              </div>

            </div>

            {/* ************************************************** */}
            <div className="second-service-conte">
              <p className="service-hinking">Services Provided</p>
              <div className="main-img-mighty">
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401260/Group_1000004718_jyqca6.png' id="ux-safari" alt="img"></img>
                  <p>UX/UI Website Design</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401300/Group_1000004715_grqo5k.png' id="web-safari" alt="img"></img>
                  <p>Website Development</p>
                </div>
                <div className="bepolo">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401343/Group_1000004716_lv06s4.png' id="qa-safari" alt="img"></img>
                  <p>QA & Website Testing</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="fourth-plate-juuls">
          <div className="left-card-hub">
            <div className="vl-chic">
              <p className="fila">Font</p>
              <div className="ywo-stem">
                <div className="light-aa">
                  <p className="hoo">Aa</p>
                  <p className="roboto-tip">Inter</p>
                </div>
                <div className="dark-aa">
                  <p className="dark-canny">Aa</p>
                  <p className="prompt-tip">Gilroy</p>
                </div>
             
              </div>
              <div className="sub-worm">
                <p className="tool">Tools Use</p>
                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401369/Group_1000006500_1_zdds4p.png' id="pals-circle" alt="img"></img>
              </div>
            </div>
          </div>
          <div className="right-card-omega">
            <p>Color Plate</p>
            <img
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401762/woodcolorplate_tcbxfl.png'
              id="gang"
              alt="img"
            />
          </div>
        </div>

        <div className="back-story">
          <div className="step1-back">
            <div className="step-backs1">
              <h3 className="nila">01</h3>
              <h3>BACKSTORY</h3>
            </div>
            <div className="step-backs2">
              <p>
          
              Wood View was relying on manual processes to collect feedback from clients participating in their various programs, such as mental health, autism support, and counseling services. Due to the gradual increase in the scale of the organization, it had now become difficult to handle and analyze the increasing amount of survey data. This was seriously impacting their ability to better respond to the needs of clients. They approached Kushel Digi Solutions to design an effective survey management system, which automated data collection for richer reporting and subsequently improved program outcomes.


              </p>
            </div>
          </div>
       
        </div>

        <div className="challenge-story">
          <div className="challenge-story1">
            <h3 className="nila">02</h3>
            <h3>Challenges & Solutions</h3>
          </div>
          <div className="challenge-story2 flex gap-4">
            <div className="challenge-box challenge-box2  ">
              <h4>Challenges</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  The collection and analysis of feedback were time-consuming and prone to errors, hindering decision-making.
                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  Management of a continuous increase in volume of survey data across various programs with confidentiality.


                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  The new system had to be compatible with current operations and technologies in place at Wood View. 


                  </p>
                </div>
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  As the process was manual, reports were not timely enough to make quick decisions or track the effectiveness of programs.

                  </p>
                </div>
              </div>
            </div>
            <div className="challenge-box challenge-box2  ">
              <h4>Solutions</h4>
              <div className="chal"></div>
              <div className="challenge-list mt-8">
                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We developed an extensive survey management system using Laravel, which automated the intake of data and allowed real-time analysis of the stored information. 


                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  In-depth reporting capabilities were integrated that allowed Wood View to observe trends in feedback and create informed improvements to the programs.


                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We ensured the new system had the capability to integrate seamlessly with their existing workflows, further streamlining operations.

                  </p>
                </div>

                <div className="challenge-list1">
                  <div className="nilust"></div>
                  <p>
                  We have implemented automated reporting features displaying quick insights to enable Wood View to track the effectiveness of its programs.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg_crazy4">
          <div className="bg_cms">
            <div className="bg_left">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401958/logowood_axwbor.png' alt="lojj" />
            </div>
            <div className="bg_right">
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401605/lojj_ot9sxx.svg' className="llgg" alt="lojj" />
              <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401924/ellipse451_ahvqja.png' className="ep44" alt="kushel" />
            </div>
          </div>
        </div>

        <div className="azib kickazib">
          <div className="azib1">
            <div className="azib1-sect">
              <div className="azib1-first">
                <h3 className="azib-pa">03</h3>
                <h3>RESULT</h3>
              </div>
              <div className="azib1-second">
                <p>
                The new survey management system has resulted in a massive turnabout for Wood View in its collection of clients' feedback to ensure that the program keeps improving. With automated data collection and reporting, they can now make quicker data-driven decisions in improving their service delivery across their mental health, autism, and counseling programs.

                </p>

                <div className="azib-tech">
                  <h3>Technologies Used</h3>
                  <div className="fopping">
                    {/* <div className="spoing">
                      <img src={kpingq1} alt="kushel" />
                      <p>Python</p>
                    </div> */}
                    <div className="spoing kint">
                      <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401555/kping_nmar5z.svg' alt="kushel" />
                      <p>Laravel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="azib-images flex items-center justify-center">
              <img className="sohhh" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401996/woodadduser_btwv0q.png' alt="azib" />
              <img className="sohhh" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740402033/woodadduser2_jpobk8.png' alt="azib" />
              {/* <img src={azib4} alt="azib" /> */}
            </div>
          </div>
        </div>

        <div className="other-project">
          <h2 className="text-center ">OTHER PROJECTS</h2>
          <Splide
            aria-label="Our Services"
            options={{
              perPage: perPage,
              perMove: 1,
              autoplay: true,
              pauseOnHover: true,
              type: "loop",
              interval: 2000,
              drag: true,
            }}
          >
            <SplideSlide>
              <div className="other-card">
                <div className="other-box">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401152/rel1_auxbaq.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>RELY INNOVATION</h3>
                  <p>
                    Get peace of mind. install alarms that not only notify you
                    of danger, but also clearly instructs you on what to do
                    next.
                  </p>
                  <Link href="/rely">
                    <button className="kick_eez-btn">View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="other-card">
                <div className="other-box other-box1">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401200/rel2_drc3kq.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>PRO TRUCKS</h3>
                  <p>
                    Aftermarket suspension lift kits, leveling kits and
                    accessories for 4X4 off-road truck and jeep enthusiasts
                  </p>
                  <Link href="/pro-track">
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="other-card">
                <div className="other-box other-box3">
                  <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401229/rel3_dnqpnb.png' alt="rel1" />
                </div>
                <div className="other-tox-para">
                  <h3>SOLENOID NINJA</h3>
                  <p>
                    Due to high volatility in the materials market we are
                    currently experiencing longer than normal lead times.
                  </p>
                  <Link href="/solenoid-ninja">
                    <button>View</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>

        <div className="req">
          <div className="req-sect">
            <h3>
              Would You Like To Talk To <br /> About Your Project?
            </h3>
            <p>
              {" "}
              You can send us the details of your project, and a member of our
              team will contact you shortly.
            </p>
       
              <button>
              <Link href="/contact-us">
                Request A Call{" "}
                <img
                  width={13}
                  className=" inline ml-2"
                  src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401104/arrow4_vdzisk.png'
                  alt="alik"
                />
                    </Link>
              </button>
        
          </div>
        </div>
        
        {/*  buttons  */}
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img
              className="what-image-universal"
              src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401400/whatsapp_qknuap.png'
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
            />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401442/telephone_rg2izx.png' alt="call-icon" title="call-icon" />
          </button>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default WoodView;
