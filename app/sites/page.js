"use client"

import React, { useState, useEffect } from "react";

import Link from "next/link";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";

import '../globals.css'

const Sites = () => {
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
    }
const generateMetadata = ({ params }) => ({
         title: 'Kusheldigi.com/site',
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


        <Navbar/>
           
            <div className="ser-main">
                <div>
                    <div className="side-bg-trio">
                        <div className="first-kick-pads incheingh">
                            <div className="left-section-kids">
                                <img src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726142417/image_18_yj36zo.svg"} width="120" alt="img"></img>
                                <p className="shoots_premium mt_top">
                                    Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals. All their aim is on delivering a precision-engineered product for utmost reliability and clearness in any environment.
                                </p>
                                <h1 >Technologies Used</h1>
                                <div className="main-box-logic flex">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470189/tim1_pbvpzn.svg' id="sim" alt="img"></img>
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470234/tim2_hsq94y.svg' id="rotat" alt="img"></img>
                                </div>
                            </div>
                            <div className="right-section-kids">
                                <img className="ai_site fi_site" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470339/sambar_vnirbm.svg' alt="img"></img>
                            </div>
                        </div>
                        {/* *********************************************** */}
                        <div className="MadFish_press">
                            <div className="MadFish-back">
                                <div className="MadFish-back1">
                                    {/* <div className="MadFish_press_head">
                                        <img src={madlogooooo} alt="madlogooooo" />
                                    </div> */}
                                    <div className="MadFish_press_para">
                                        <p>
                                            Sites and Scopes has specialized experience in delivering high performance optics and accessories for marksmen, hunters, and tactical professionals. All their aim is on delivering a precision-engineered product for utmost reliability and clearness in any environment.

                                        </p>
                                    </div>
                                </div>
                                <div className="MadFish-back2">
                                    <img src="https://res.cloudinary.com/ecommerce-website/image/upload/v1726150027/Group_1171275974_1_p0bran.svg" alt="MadFish" />
                                </div>
                            </div>
                        </div>
                        {/* ************************************************** */}
                        <div className="second-service-conte">
                            <p className="service-hinking">Services Provided</p>
                            <div className="main-img-mighty">
                                <div className="bepolo">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470034/Group_1000004718_bbbkvt.png' id="ux-safari" alt="img"></img>
                                    <p>UX/UI Website Design</p>
                                </div>
                                <div className="bepolo">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470073/Group_1000004715_xw2osd.png' id="web-safari" alt="img"></img>
                                    <p>Website Development</p>
                                </div>
                                <div className="bepolo">
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470107/Group_1000004716_h9f2tv.png' id="qa-safari" alt="img"></img>
                                    <p>QA & Website Testing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fourth-plate-juuls">
                    <div className="left-card-hub">
                        <div className="vl-chic vl_chic3">
                            <p className="fila">Font</p>
                            <div className="ywo-stem">
                                <div className="light-aa">
                                    <p className="hoo">Aa</p>
                                    <p className="roboto-tip">Helvetica Neue</p>
                                </div>
                                <div className="dark-aa ml-6">
                                    <p className="dark-canny">Aa</p>
                                    <p className="prompt-tip">Trump Gothic Pro</p>
                                </div>
                                {/* <div className="medium-aa">
                                    <p className="medium">Aa</p>
                                    <p className="node-tip">Roboto</p>
                                </div> */}
                            </div>
                            <div className="sub-worm">
                                <p className="tool">Tools Use</p>
                                <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470148/Group_1000006500_1_cqzxil.png' id="pals-circle" alt="img"></img>
                            </div>
                        </div>
                    </div>
                    <div className="right-card-omega">
                        <p>Color Plate</p>
                        <img src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726205579/Group_1171276051_kenw1s.svg"} id="gang" alt="img" />
                    </div>
                </div>{" "}



                <div className="back-story">
                    <div className="step1-back">
                        <div className="step-backs1">
                            <h3 className="nila">01</h3>
                            <h3>BACKSTORY</h3>
                        </div>
                        <div className="step-backs2">
                            <p>

                                Kushel Digi Solutions undertook the project of designing and developing a modern, user-friendly website for Sites and Scopes which aims to enhance their online presence along with customer engagement.

                            </p>

                        </div>
                    </div>
                    {/* <div className="step-images flex items-start salaruu  justify-center mt-20">
                        <img className="batleft heightcum" src={tii1} alt="stepback" />
                        <img className="batleft " src={tii2} alt="stepback1" />
                        <img className="batleft heightcum" src={tii3} alt="stepback1" />
                    </div> */}
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
                                        The translation of the passion and precision of the brand into a digital platform.
                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Ensuring that BigCommerce integrates smoothly with custom features.
                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Balancing aesthetic appeal with functionality for a diverse user base, which includes hunters, tactical professionals, and firearms enthusiasts.
                                    </p>
                                </div>
                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Creating a website that performs well across various devices and browsers.
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
                                        We designed a modern, clean, and intuitive interface that appeals to the target audience.
                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        We integrated BigCommerce, allowing Sites and Scopes to manage their product catalog, orders, and customers efficiently.
                                    </p>
                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        The site was optimized for search engines to ensure high visibility in relevant searches.
                                    </p>

                                </div>

                                <div className="challenge-list1">
                                    <div className="nilust"></div>
                                    <p>
                                        Fast loading times and a seamless user experience were prioritized to keep visitors engaged and improve conversion rates.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="kick-start kick-start22">
                    <div className="kick-first kick-first222">

                        <div className="kickds">
                            <img width="210" src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726206845/image_19_qgz5jx.png"} alt="kick5" />
                        </div>
                    </div>
                    <div className="kick-second kick-second222 relative">
                        <div className="about165">
                            <img
                                className="absolute about161 animate__animated animate__pulse animate__infinite"
                                src={"https://res.cloudinary.com/ecommerce-website/image/upload/v1726206677/Ellipse_451_bi1imf.png"}
                                alt="kushel"
                            />
                        </div>
                        <img
                            className="relative z-10 about162 pick222"
                            src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470600/simar_bxwsoj.png'
                            alt="aa"
                        />
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
                                    The new site of Sites and Scopes resulted in great jump of 45 percent in organic traffic and 25 percent in sales conversions in the first three months. The new design boosted user engagement to the tune of 30 percent more engagement with longer sessions and positive feedback from the customer. The streamlined checkout process with secure payment integration thus boosted customer trust and repeated business and hence increased brand credibility.
                                </p>

                                <div className="azib-tech">
                                    <h3>Technologies Used</h3>
                                    <img className="conjun" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469995/opqweeeeeee_ekryke.png' alt="kushel" />
                                </div>
                            </div>
                        </div>

                        <div className="azib-images flex items-center justify-center">
                            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470449/lk11_hpcgqm.svg' alt="azib" />
                            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470542/lk22_mbdv4v.svg' alt="azib" />
                            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740470572/lk33_pga6ri.svg' alt="azib" />
                        </div>
                    </div>
                </div>
                <div className="client-apperication">
                   
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
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428893/rel1_fffpuy.png' alt="rel1" />
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
                                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428931/rel2_nclse2.png' alt="rel1" />
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
                                    <img className="rel3" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469898/rel3_zey415.png' alt="rel1" />
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
                                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739428861/arrow4_ig23cr.png'
                                    alt="alik"
                                />
                                       </Link>
                            </button>
                 
                    </div>
                </div>

                <Footer/>

                {/*  buttons  */}
                <div className="whtsApBtns">
                    <button onClick={whatAppHandler}>
                        <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469695/whatsapp_ubh9of.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
                    </button>
                    <button onClick={callHandler}>
                        <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740469745/telephone_twhjto.png' alt="call-icon" title="call-icon" />
                    </button>

                </div>
            </div>
        </>
    );
};

export default Sites;
