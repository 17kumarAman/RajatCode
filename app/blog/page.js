"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../COMMON/Navbar";
import Footer from '../COMMON/Footer'

const Page = () => {
  const baseUrl = "https://backblog.kusheldigi.com";
  const [getAllBlogs, setGetAllBlogs] = useState([]);

  const fetchAllBlog = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/getAllBlog`);
      const data = await response.json();
      if (response.ok) {
        const ans = data.blogs.filter((blog) => blog.domain === "kusheldigi.com")
        // console.log(ans.length,ans)
        setGetAllBlogs(ans);
        // console.log(data?.blogs);
        //   console.log(getAllBlogs)
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const [allCatBlogs, setAllCatBlogs] = useState([]);
  const [recentBlog, setRecentBlog] = useState([]);
  const [featuredBlog, setFeatureBlog] = useState([]);
  const [ecommerceBlog, setEcommerceBlog] = useState([]);
  const [seoBlog, setSeoBlog] = useState([]);
  const [digitalBlog, setDigitalBlog] = useState([]);
  const [webBlog, setWebBlog] = useState([]);
  const [businessBlog, setBusinessBlog] = useState([]);


  const fetchCatBlogs = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/allcatBlogs`);
      const data = await response.json();

      if (response.ok) {
        setAllCatBlogs(data?.data);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const featureBlogs = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/featured`);
      const data = await response.json();
      if (response.ok) {
        setFeatureBlog(data.blogs);
        console.log('feature', data)
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchLatestBlog = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/recentBlogs`);
      const data = await response.json();

      console.log("data", data);

      if (response.ok) {
        setRecentBlog(data?.data);
      } else {
        console.error("Failed to fetch categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  // console.log(getAllBlogs.filter((blog) => blog.category?.title === "SEO"))
  useEffect(() => {
    if (getAllBlogs.length > 0) {
      setEcommerceBlog(
        getAllBlogs.filter((blog) => blog.category?.title === "e-commerce")
      );
      setSeoBlog(getAllBlogs.filter((blog) => blog.category?.title === "SEO"));
      // console.log(seoBlog)
      setDigitalBlog(
        getAllBlogs.filter((blog) => blog.category?.title === "Digital Marketing")
      );
      setWebBlog(
        getAllBlogs.filter((blog) => blog.category?.title === "Web Development")
      );
      setBusinessBlog(
        getAllBlogs.filter((blog) => blog.category?.title === "Business")
      );
    }
  }, [getAllBlogs]);

  useEffect(() => {
    fetchAllBlog();
    fetchCatBlogs();
    featureBlogs();
    fetchLatestBlog();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const totalPages = Math.ceil(getAllBlogs?.length / tasksPerPage);
  const currentTasks = getAllBlogs?.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [showOnlyEcommerce, setShowOnlyEcommerce] = useState(false);
  const [showOnlySeo, setShowOnlySeo] = useState(false);
  const [showOnlyDigital, setShowOnlyDigital] = useState(false);
  const [showOnlyWeb, setShowOnlyWeb] = useState(false);
  const [showOnlyBusiness, setShowOnlyBusiness] = useState(false);

  const handleFilter = (title) => {
    switch (title) {
      case "e-commerce":
        setShowOnlyEcommerce(prev => !prev);
        setShowOnlySeo(false);
        setShowOnlyDigital(false);
        setShowOnlyWeb(false);
        setShowOnlyBusiness(false);
        break;
      case "SEO":
        setShowOnlySeo(prev => !prev);
        setShowOnlyEcommerce(false);
        setShowOnlyDigital(false);
        setShowOnlyWeb(false)
        setShowOnlyBusiness(false);
        break;
      case "Digital Marketing":
        setShowOnlySeo(false);
        setShowOnlyEcommerce(false);
        setShowOnlyDigital(prev => !prev);
        setShowOnlyWeb(false)
        setShowOnlyBusiness(false);
        break;
      case "Web Development":
        setShowOnlySeo(false);
        setShowOnlyEcommerce(false);
        setShowOnlyDigital(false);
        setShowOnlyWeb((prev) => !prev);
        setShowOnlyBusiness(false);
        break;
      case "Business":
        setShowOnlySeo(false);
        setShowOnlyEcommerce(false);
        setShowOnlyDigital(false);
        setShowOnlyWeb(false)
        setShowOnlyBusiness((prev) => !prev);
        break;
      default:
        setShowOnlyEcommerce(false);
        setShowOnlySeo(false);
        setShowOnlyDigital(false);
        setShowOnlyWeb(false)
        setShowOnlyBusiness(false);
        break;
    }
  };


  // useEffect(() => {
  //   console.log(showOnlyBusiness, 'showBusinesss');
  //   console.log(showOnlyDigital, 'Digital');
  //   console.log(showOnlyEcommerce, 'ecommerce');
  //   console.log(showOnlySeo, 'seo');
  //   console.log(showOnlyWeb, 'web developer');



  // }, [showOnlyEcommerce, showOnlyBusiness, showOnlyDigital, showOnlySeo, showOnlyWeb])

  return (
    <div>
      <Navbar />
      <section className="mainsecBlo">
        {/* header section */}
        <section className="blog-first-section ">
          <div className="contt">
            <div className="typing">
              <h1>Typing as we speak</h1>
            </div>
            <div className="bttnn">
              {allCatBlogs.map((item, index) => {
                return (
                  <button
                    key={item._id}
                    onClick={() => handleFilter(item?.title)}
                    className="button"
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            <br />
            <div>
              <p
                style={{
                  border: "1px solid rgba(40, 39, 39, 0.17)",
                  marginTop: 20,
                }}
              />
            </div>
            <br />
          </div>
        </section>
        <br /> <br />
        {/* header section end */}
        {/* firstSection start */}
        {
          (!showOnlyEcommerce && !showOnlySeo && !showOnlyDigital && !showOnlyWeb && !showOnlyBusiness) && (
            <section className="blog-second-section">
              <div className="bimagelogMain">
                <div className="bimagelog">
                  <Link href={`/blogdetails/${getAllBlogs[0]?._id}`}>
                    <img src={getAllBlogs[0]?.images} alt="" />
                  </Link>
                </div>
                <div className="bimageloDi">
                  <p className="bimageloDiPa">
                    {new Date(getAllBlogs[0]?.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <div className="bimageloDiPara11">
                    <Link href={`/blogdetails/${getAllBlogs[0]?._id}`}>
                      <div className="bimageloDiPARa12">
                        <p className="bimageloDiPara">
                          {getAllBlogs[0]?.title?.slice(0, 24)}
                        </p>
                        <p className="bimageloDiPara">
                          {getAllBlogs[0]?.title?.slice(24, 47)}
                        </p>
                        <p className="bimageloDiPara">
                          {getAllBlogs[0]?.title?.slice(47)}
                        </p>
                      </div>
                    </Link>
                    <p className="bimageloDiParra">
                      {getAllBlogs[0]?.subdescription}
                    </p>
                    <Link href={`/blogdetails/${getAllBlogs[0]?._id}`}>
                      <p className="bimageloDiPaara">Read More</p>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        {/* first section end */}
        {/* third section start */}
        {(!showOnlyEcommerce && !showOnlySeo && !showOnlyDigital && !showOnlyWeb && !showOnlyBusiness) && (
          <section className="newMainSec">
            <div className="newsroom-section">
              <div className="newsroom-header">
                <h5>Latest Articles</h5>
              </div>
              <hr /> <br />
              <div className="news-grid">
                {recentBlog.map((item, index) => {
                  return (
                    <Link
                      href={`/blogdetails/${item._id}`}
                      key={index}
                      className="news-item"
                    >
                      <div>
                        <img
                          src={item.images[0]}
                          alt=""
                          className="news-image"
                        />
                      </div>
                      <div className="news-content">
                        <div className="news-title">
                          <h3 className="news-title" id="newBlogTil">
                            <p> {item?.title.slice(0, 25)}...</p>
                          </h3>
                          <p className="cardBlogStpaa">
                            {new Date(item?.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        {/* third section end */}
        {
          (!showOnlySeo && !showOnlyDigital && !showOnlyWeb && !showOnlyBusiness) && (
            <section className="latest-container">
              <div className="cardsectFive">
                <p>E-Commerce</p>
                <hr />
              </div>
              <div className="cardMainBlogSec">
                {ecommerceBlog.map((item, index) => {
                  return (
                    <Link
                      href={`/blogdetails/${item._id}`}
                      key={index}
                      className="cardBlogSt"
                    >
                      <div className="cardBlogStImg">
                        <div>
                          <img src={item.images[0]} alt="" />
                        </div>
                      </div>
                      <p className="cardBlogStpaa">
                        {new Date(item?.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <div className="cardBlogStpaara1">
                        <div>
                          <p className="cardBlogStpaara">
                            {item?.title.slice(0, 26)}...
                          </p>
                        </div>
                      </div>
                      <p className="cardBlogStpaaragr">
                        {item.subdescription.slice(0, 100)}...
                      </p>
                      <p className="cardBlogStpaarw">Read More</p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )
        }
        {/* forth section start */}
        {
          (!showOnlyEcommerce && !showOnlyDigital && !showOnlyWeb && !showOnlyBusiness) && (
            <section className="blog-fourth-section">
              <div className="event-section">
                {/* Header */}
                <div className="event-header">
                  <h5>SEO</h5>
                </div>
                <hr />
                <br />
                {/* Event Cards Grid */}
                <div className="event-grid">
                  {/* Event Card 1 */}
                  {seoBlog.map((item, index) => {
                    return (
                      <Link href={`/blogdetails/${item._id}`} key={index}>
                        <div className="event-card">
                          <div className="event-image">
                            <div>
                              <img src={item.images[0]} alt="Event 1" />
                            </div>
                          </div>

                          <div className="event-category">
                            <p className="cardBlogStpaa">
                              {new Date(item?.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                          <div className="event-title">
                            <h5>
                              <div>
                                {" "}
                                <p>{item?.title.slice(0, 18)}...</p>
                              </div>
                            </h5>
                          </div>
                          <p className="event-description">
                            {item.subdescription.slice(0, 100)}...
                          </p>
                          <div className="event-author">
                            <p className="cardBlogStpaarw">Read More</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )
        }
        {/* forth section end */}
        {/*fifth  row start */}
        {
          (!showOnlyEcommerce && !showOnlySeo && !showOnlyWeb && !showOnlyBusiness) && (
            <section className="cardsectFiveMain">
              <div className="cardsectFive">
                <p>Digital Marketing</p>
                <hr />
              </div>
              <section className="cardMainBlogSec">
                {digitalBlog.map((item, index) => {
                  return (
                    <Link
                      href={`/blogdetails/${item._id}`}
                      key={index}
                      className="cardBlogSt"
                    >
                      <div className="cardBlogStImg">
                        <div>
                          <img src={item.images[0]} alt="" />
                        </div>
                      </div>
                      <p className="cardBlogStpaa">
                        <p className="cardBlogStpaa">
                          {new Date(item?.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </p>
                      <div className="cardBlogStpaara1">
                        <div>
                          <p className="cardBlogStpaara">
                            {item?.title.slice(0, 26)}...
                          </p>
                        </div>
                      </div>
                      <p className="cardBlogStpaaragr">
                        {item.subdescription.slice(0, 100)}...
                      </p>
                      <p className="cardBlogStpaarw">Read More</p>
                    </Link>
                  );
                })}
              </section>
            </section>
          )
        }
        {/* fifth row end */}
        {/* six row start */}
        {
          (!showOnlyEcommerce && !showOnlySeo && !showOnlyDigital && !showOnlyBusiness) && (
            <section className="blogSixMainSec">
              <div className="bookmarkk">
                <div className="blogSixMainSecDiv">
                  <p>Web Development</p>
                  <hr />
                </div>
                <div className="blogSixMainDivSS">
                  {webBlog.map((item, index) => {
                    return (
                      <Link
                        href={`/blogdetails/${item._id}`}
                        key={index}
                        className="blogSixMaiDivBlS"
                      >
                        <div className="blogSixMaiDivBImgS">
                          <img src={item.images[0]} alt="" />
                        </div>
                        <p className="blogSixMaiDivBImpaa">
                          {new Date(item?.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                        <div className="BlogSixBook">
                          <p className="blogSixMaiDivparaa">
                            {item.title.slice(0, 20)}...
                          </p>{" "}
                        </div>
                        <p className="blogSixMaiDivpaA">Read More</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )
        }
        {/* six section end */}
        {/* seven section start */}
        {
          (!showOnlyEcommerce && !showOnlySeo && !showOnlyDigital && !showOnlyWeb) && (
            <section className="cardsectFiveMain">
              <div className="cardsectFive">
                <p>Business</p>
                <hr />
              </div>
              <section className="cardMainBlogSec">
                {businessBlog.map((item, index) => {
                  return (
                    <Link
                      href={`/blogdetails/${item._id}`}
                      key={index}
                      className="cardBlogSt"
                    >
                      <div className="cardBlogStImg">
                        <img src={item.images[0]} alt="" />
                      </div>
                      <p className="cardBlogStpaa">
                        {new Date(item?.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <div className="cardBlogStpaara1">
                        <p className="cardBlogStpaara">
                          {item.title.slice(0, 27)}..
                        </p>{" "}
                      </div>
                      <p className="cardBlogStpaaragr">
                        {item.subdescription.slice(0, 100)}...
                      </p>
                      <p className="cardBlogStpaarw">Read More</p>
                    </Link>
                  );
                })}
              </section>
            </section>
          )
        }
        {/* seven row start */}
        {/* eight row start */}
        {
          (!showOnlyEcommerce && !showOnlySeo && !showOnlyDigital && !showOnlyWeb && !showOnlyBusiness) && (
            <section className="eightBlogSMain">
              <div className="ALLt">
                <p>All</p>
                <hr />
                <br />
              </div>

              {currentTasks.length > 0 && (
                // currentTasks.map((item,index)=>{
                // <Link href={`/blogdetails/${item._id}`}
                // key={index}>
                <div className="bimagelogMain">


                  <div className="bimagelog">
                    {currentTasks[0]?.images?.[0] ? (
                      <Link href={`/blogdetails/${currentTasks[0]._id}`}>
                        <img
                          src={currentTasks[0].images[0]}
                          alt={currentTasks[0].title || "Main Blog"}
                        />
                      </Link>
                    ) : (
                      <p>No Image Available</p>
                    )}
                  </div>



                  <div className="bimageloDi">

                    <div className="bimageloDiPARa12">
                      <Link href={`/blogdetails/${currentTasks[0]._id}`}>
                        <h2 className="bimageloDiPara">{currentTasks[0]?.title || "No Title"}</h2>
                      </Link>

                    </div>

                    <p className="bimageloDiParra">
                      {currentTasks[0]?.subdescription ||
                        "No Description Available"}
                    </p>
                  </div>
                </div>
                //  </Link>

                // })

              )}

              {/* Small Blog Images Section */}
              <div className="smallBlogContainer">
                {currentTasks.length > 1 ? (
                  currentTasks.slice(1, 5).map((item, index) => (
                    <Link
                      href={`/blogdetails/${item._id}`}
                      key={index}
                      className="smallBlogCard"
                    >
                      {item.images?.[0] ? (
                        <img
                          src={item.images[0]}
                          alt={item.title || "Blog Image"}
                        />
                      ) : (
                        <p>No Image</p>
                      )}
                    </Link>
                  ))
                ) : (
                  <p>No Other Blogs Available</p>
                )}
              </div>

              {totalPages > 1 && (
                <div className="NavButtonn">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="navbuttonbtn"
                  >
                    Prev
                  </button>
                  <span className="px-4">{currentPage}</span>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="navbuttonbtn"
                  >
                    Next
                  </button>
                </div>
              )}
            </section>
          )
        }
      </section>
      <Footer />
    </div>
  );
};

export default Page;
