"use client"
import React from "react";
import './Banner9.css'
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
const projects = [
  {
    name: "Koolfly",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Koolfly",
    category: "eCommerce",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
  {
    name: "Chrome Industries",
    category: "Kick-eez ",
    image: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742986335/koolfly_xojuqv.webp",
  },
];

export default function Banner9({page}) {
  return (
    <section className="projectsSectionKcom">
      <div className="projectsHeaderKcom">
        <div className="textKcom">
          <h2 className="primary-heading">Our Success Stories</h2>
          <p className="secondary-heading">
          Explore how our custom solutions have helped businesses to shine in this competitive world.
          </p>
        </div>
          <Link href="/portfolio">
        <button className="viewAllBtnKcom">
          View All Work 
          </button>
          </Link>

      </div>

<div className="b2b-sectionKcom">
  
    <div className="b2b-contentKcom">
      <div className="left-b2b-cardsKcom">
        <div className="left-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-2_atom41.jpg" alt="Shopify Plus" />
            <Link href="/2ndamendment" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward /></Link>
          </div>
          
          <a href="/2ndamendment" className="b2b-btnKcom">
          2ndamendment
            <p>{page}</p>
          </a>  
          <hr className="hrKcomKu"/>
        </div>
        <div className="left-b2b-cardKcom-2">
          <div className="b2b-logoKcom">
           
           <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-6_wfoqas.jpg" alt="Shopify Plus" />
           <Link href="/sites" id="human" className="hover-linkCom"> View Case Study<MdArrowOutward /></Link>
          </div>
         
          <a href="/sites" className="b2b-btnKcom">
          sights & scopes 
            <p>{page}</p>
          </a>  
          <hr />
        </div>
        
        <div className="left-b2b-cardKcom-3">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-1_lbb6yj.jpg" alt="Shopify Plus" />
            <Link href="/topbrass" id="human" className="hover-linkCom"> View Case Study <MdArrowOutward/></Link>
          </div>
         
          <a href="/topbrass" className="b2b-btnKcom">
          Top Brass Tactical
            <p>{page}</p>
          </a>
          <hr/>
        </div>
      </div>
      <div className="right-b2b-cardsKcom">
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-5_t6orct.jpg" alt="Shopify Plus" />
            <Link href="/portfolio" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /> </Link>
          </div>
         
          <a href="/portfolio" className="b2b-btnKcom">
          Black Rhino
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744009340/indrpal-6_xkecsz.png" alt="Shopify Plus" />
            <a href="/Slidesdesign" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
          
          <a href="/Slidesdesign" className="b2b-btnKcom">
          Slides 365
            <p>{page}</p>
          </a>
          <hr/>
        </div>
        <div className="right-b2b-cardKcom">
          <div className="b2b-logoKcom">
            <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743402463/lovely-6-page-3_kaxts8.jpg" alt="Shopify Plus" />
            <a href="/kick-eez" id="human" className="hover-linkCom">View Case Study <MdArrowOutward /></a>
          </div>
         
          <a href="/kick-eez" className="b2b-btnKcom">
          Kick-eez
            <p>{page}</p>
          </a>
          <hr/>
        </div>

        
      </div>

      

      
    </div>
  
    </div>
    </section>
  );
}