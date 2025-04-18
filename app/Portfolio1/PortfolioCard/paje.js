"use client"
import React from 'react';
import './PortfolioCard.css';
import Link from 'next/link';

const portfolioData = [
  {
    id: 'automotive-1',
    companyName: 'Kick-eez',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477030/abImg1_vyhxn6.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
                     "UX/UI Website Design","Website Development","QA & Website Testing"
    ],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/kick-eez',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-2',
    companyName: 'Pro Trucks',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477086/abimg2_vksyx7.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/pro-track',
      platform: '/bigcommerce-development',
    },
    
  },
  {
    id: 'automotive-3',
    companyName: 'Rely',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477117/abimg3_tsrgwp.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/rely',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-4',
    companyName: 'Solenoid Ninja',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477144/abimg5_wfhlp8.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/solenoid-ninja',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-5',
    companyName: 'Ballistic Dummy Lab',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952762/image_75_ywf6np.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/ballistic',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-6',
    companyName: 'Sites and Scopes',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725953651/image_18_1_j5e3am.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/sites',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-7',
    companyName: 'Top Brass Tactical',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725953729/logo-white_1_1689966883__67774_1_yqlhdf.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/topbrass',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-8',
    companyName: 'Slides365',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725953057/slide_1_gelwuz.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/Slidesdesign',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-9',
    companyName: '2ndamendment Armory',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1730459236/Group_1171275966_xq0qb4.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/2ndamendment',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-10',
    companyName: 'Ai',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744280422/Untitled-1_nkikqq.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/Ai',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-11',
    companyName: 'Ride Ready',
    logo: 'https://res.cloudinary.com/dgif730br/image/upload/v1732807319/logo_1_1688114115__84399_2_iaqhon.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/rideready',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-12',
    companyName: 'My CMS',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477196/mycms_dc994l.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/crazyCMS',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-13',
    companyName: 'FairChild',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952623/Layer_1_15_ilqoor.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-14',
    companyName: 'Wood View',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952841/image_76_tovttv.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/woodView',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-15',
    companyName: 'HRMS',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477326/hrmsname_ljnty9.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
 
  {
    id: 'automotive-16',
    companyName: 'Shubhalloys',
    logo: 'https://res.cloudinary.com/ecommerce-website/image/upload/v1725952993/SHUBHALLOYS_j2i6dz.svg',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/subhAlloy',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-17',
    companyName: 'Inventory Propus Enterprises',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478580/custom11_kznig4.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-18',
    companyName: 'Instacertify',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478756/webinstalogo_rutcoc.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-19',
    companyName: 'OBTECH',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478856/webobtech_km5zcs.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-20',
    companyName: 'DigitalMnA',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740477171/abimg11_aiqpei.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '/Digitalmna',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-21',
    companyName: 'Auxible',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478612/webauxlogo_sxf2ww.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-22',
    companyName: 'Juinor Achievement',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478786/webjuniorlogo_pvlv7i.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-23',
    companyName: 'Suvrin',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478645/websuvrinlogo_cdrlkl.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-24',
    companyName: 'Jowffe',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478824/touffle_le6ygd.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-25',
    companyName: 'Major',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478721/webmajorlogo_ejcx63.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-26',
    companyName: 'Usha Fasteners',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-27',
    companyName: 'Saina',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-28',
    companyName: 'Circuit Route Planner',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-29',
    companyName: 'Apeejay Business Center',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-30',
    companyName: 'Fit Cloud Pro',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-31',
    companyName: 'EAR SHOT',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
    platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-32',
    companyName: 'VR OTT',
     logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
  {
    id: 'automotive-33',
    companyName: 'Phastek Performance',
    logo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1740478690/webushalogo_kkmm5o.png',
   platformLogo: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744283247/bigcommerce-logo_1_hhzwuv.svg',
    description: [
        "UX/UI Website Design","Website Development","QA & Website Testing"
],
    links: {
      liveStore: 'https://www.phastekperformance.com/',
      caseStudy: '#',
      platform: '/bigcommerce-development',
    },
  },
];


const Portfolio = () => {
  return (
    <section className='PortfolioMainSection'>
      <div className='mainCardOverlay'>
        {portfolioData.map((item, index) => (
          <div className="client each-portfolio-cards automotive" id={item?.id} key={index}>
            <div className="each-portfolio">
              <img alt={`${item?.companyName} Logo`} src={item?.logo} className="top-company-logos" />
              <img alt="Platform Logo" src={item?.platformLogo} className="bottom-platform-logo" />
              <div className="card-overlayMain">
                <div className="overlay-content">
                  <img alt={`${item?.companyName} Logo`} src={item?.logo} />
                  <h3>{item?.companyName}</h3>
                  {item.description?.map((content,i)=>{
                    return <p key={i}>{content}</p>
                  })}
                  <ul>
                    <li><a href={item.links?.liveStore} target="_blank" rel="noopener noreferrer">live store</a></li>
                    <li className="list-divider">|</li>
                    <li><Link href={item.links?.caseStudy}>case study</Link></li>
                    <li className="list-divider">|</li>
                    <li><a href={item.links?.platform}>BigCommerce</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
