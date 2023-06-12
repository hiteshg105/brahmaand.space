import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { Button, Col, Container, Row } from "react-bootstrap";
import HomeCountDown from "../components/home/HomeCountDown";
import PrettyRating from "pretty-rating-react";

import has1 from "../../src/images/has1.png";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import versus from "../images/versus.png";
import { Link } from "react-router-dom";

function NewDesign() {
  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
  };

  const colors = {
    star: ["#d9ad26", "#d9ad26", "#434b4d"],
  };

  return (
    <div
      className="newdesign-main"
      style={{ backgroundColor: "#F5F5F5", paddingBottom: "100px" }}
    >
      <div className="hero-swiper">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{
            el: ".hero-swiper_swiper_pagination",
            clickable: true,
          }}
        >
          {[
            "/hero-img1.png",
            "/hero-img2.png",
            "/hero-img3.png",
            "/hero-img4.png",
            "/hero-img5.png",
          ].map((imgPath) => (
            <SwiperSlide>
              <div>
                <img src={imgPath} alt="hero-images" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`hero-swiper_swiper_pagination d-flex justify-content-center gap-3 py-4 z-1`}
        ></div>
        <h1 style={{ fontSize: "69px" }} className="text-center p-0 m-0">
          Looking for best content across the world?
        </h1>
        <p
          style={{ fontSize: "45px", letterSpacing: "0.5px" }}
          className="text-center p-0 m-0 mt-3"
        >
          Finding the quality resources is not a hassle anymore
        </p>
        <div className="text-center p-0 m-0 mt-5">
          <button
            style={{
              backgroundColor: "#FC9358",
              fontSize: "22px",
              borderRadius: "24px",
            }}
            className="border-0 text-white fw-bold px-2 pe-3 py-2 me-5 opacity-75"
          >
            <div>
              <span className="me-3">+</span>
              <span>Submit a content</span>
            </div>
          </button>
          <button
            style={{
              backgroundColor: "#FC9358",
              fontSize: "22px",
              borderRadius: "24px",
            }}
            className="border-0 text-white fw-bold px-2 pe-3 py-2 opacity-75"
          >
            <div>
              <span className="me-3">+</span>
              <span>Submit a content creator</span>
            </div>
          </button>
        </div>
        <div
          style={{ maxWidth: "90%", marginTop: "65px", paddingBottom: "150px" }}
          className="mx-auto"
        >
          <div className="position-relative">
            <input
              style={{
                padding: "40.5px 0 40.5px 105px",
                borderRadius: "66.5px",
                fontSize: "28px",
                color: "#5C5C5C",
              }}
              className="w-100 border-0"
              type="text"
              placeholder="Searching best quality content here . . . "
            />
            <div
              style={{
                left: "30px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              className="position-absolute"
            >
              <img src="/search-icon.png" alt="search" />
            </div>
            <div
              style={{
                right: "30px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              className="h-100 position-absolute d-flex align-items-center"
            >
              <button
                style={{
                  backgroundColor: "#011D2B",
                  height: "80%",
                  fontSize: "28px",
                  borderRadius: "55px",
                  padding: "0 80px",
                }}
                className="text-white border-0"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="hastag_heading mb-5">
          <Row className="d-flex justify-content-center">
            <p className="Trending d-flex justify-content-center">
              <img src={has1} alt="img" width="62px" />
              <div
                style={{ fontSize: "52px" }}
                className="d-flex align-items-end"
              >
                Trending hashtags
              </div>
            </p>
          </Row>
        </div>
        <div style={{ maxWidth: "80%" }} className="mx-auto">
          {[
            "Brahmaand",
            "Brahmaand_space",
            "Go_Brahmaand_space",
            "follow_me_india",
            "tamil",
            "lifestyle",
            "life",
            "photoshoot",
            "reelsinstagram",
            "motivation",
            "funnymemes",
            "instafashion",
            "share",
            "trend",
            "instagram",
            "trendingnow",
          ].map((val) => (
            <button
              style={{
                fontSize: "32px",
                border: "2px dashed #011D2B",
                borderRadius: "50px",
              }}
              className="me-4 mb-4 px-4"
            >
              #{val}
            </button>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "95%", marginTop: "100px" }} className="mx-auto">
        <Swiper
          breakpoints={{
            1084: {
              slidesPerView: 1.5,
            },
            980: {
              slidesPerView: 1.5,
            },
            910: {
              slidesPerView: 1.5,
            },
            820: {
              slidesPerView: 1.5,
            },
            780: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
            240: {
              slidesPerView: 1,
            },
          }}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.5}
          navigation
          className="trending_warzone_swiper"
        >
          <SwiperSlide className="bg-white rounded-4">
            <Container className="py-3 px-4">
              <HomeCountDown endDate={new Date()} />
              <Row className="position-relative">
                <Col className="d-flex flex-column justify-content-center">
                  <div className="top-main">
                    <div style={{ height: "300px" }} className="d-flex">
                      <img
                        className="w-100 h-auto rounded-4 object-fit-contain"
                        style={{ height: "400px" }}
                        src="/slide-1-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <img className="w-100 h-auto rounded-4" src={swiperLeft} alt="" /> */}
                  <Row>
                    <h4 className="text-center">Carry Minati</h4>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-flex align-items-center">
                        <PrettyRating
                          value={2.5}
                          icons={icons.star}
                          colors={colors.star}
                        />
                        <span style={{ fontSize: "14px" }} className="ms-1">
                          (5)
                        </span>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                  <div className="top-main">
                    <div style={{ height: "300px" }} className="d-flex">
                      <img
                        className="w-100 h-auto rounded-4 object-fit-contain"
                        style={{ height: "400px" }}
                        src="/slide-1-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <img className="w-100 h-auto rounded-4" src={swiperRight} alt="" /> */}
                  <Row>
                    <h4 className="text-center">Carry Minati</h4>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-flex align-items-center">
                        <PrettyRating
                          value={1.5}
                          icons={icons.star}
                          colors={colors.star}
                        />
                        <span style={{ fontSize: "14px" }} className="ms-1">
                          (4)
                        </span>
                      </div>
                    </div>
                  </Row>
                </Col>
                <div
                  style={{
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%,-50%)",
                  }}
                  className="position-absolute text-center p-0"
                >
                  <img width={90} height={90} src={versus} alt="v/s" />
                </div>
              </Row>
              <Row>
                <Button
                  style={{
                    borderRadius: "4px",
                    width: "fit-content",
                    backgroundColor: "#5F56C6",
                  }}
                  size="sm"
                  className="m-0 border-0 mx-auto text-white px-3"
                >
                  Rate Now
                </Button>
              </Row>
            </Container>
          </SwiperSlide>

          <SwiperSlide className="bg-white rounded-4">
            <Container className="py-3 px-4">
              <HomeCountDown endDate={new Date()} />
              <Row className="position-relative">
                <Col className="d-flex flex-column justify-content-center">
                  <div className="top-main">
                    <div style={{ height: "300px" }} className="d-flex">
                      <img
                        className="w-100 h-auto rounded-4 object-fit-contain"
                        style={{ height: "400px" }}
                        src="/slide-1-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <img className="w-100 h-auto rounded-4" src={swiperLeft} alt="" /> */}
                  <Row>
                    <h4 className="text-center">Carry Minati</h4>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-flex align-items-center">
                        <PrettyRating
                          value={2.5}
                          icons={icons.star}
                          colors={colors.star}
                        />
                        <span style={{ fontSize: "14px" }} className="ms-1">
                          (5)
                        </span>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                  <div className="top-main">
                    <div style={{ height: "300px" }} className="d-flex">
                      <img
                        className="w-100 h-auto rounded-4 object-fit-contain"
                        style={{ height: "400px" }}
                        src="/slide-1-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <img className="w-100 h-auto rounded-4" src={swiperRight} alt="" /> */}
                  <Row>
                    <h4 className="text-center">Carry Minati</h4>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-flex align-items-center">
                        <PrettyRating
                          value={1.5}
                          icons={icons.star}
                          colors={colors.star}
                        />
                        <span style={{ fontSize: "14px" }} className="ms-1">
                          (4)
                        </span>
                      </div>
                    </div>
                  </Row>
                </Col>
                <div
                  style={{
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%,-50%)",
                  }}
                  className="position-absolute text-center p-0"
                >
                  <img width={90} height={90} src={versus} alt="v/s" />
                </div>
              </Row>
              <Row>
                <Button
                  style={{
                    borderRadius: "4px",
                    width: "fit-content",
                    backgroundColor: "#5F56C6",
                  }}
                  size="sm"
                  className="m-0 border-0 mx-auto text-white px-3"
                >
                  Rate Now
                </Button>
              </Row>
            </Container>
          </SwiperSlide>
        </Swiper>
      </div>
      <Container style={{ marginTop: "100px" }}>
        <p className="category">Top Categories</p>
        <Container>
          <Row className="m-3 mb-4">
            {new Array(8).fill(69).map((value) => (
              <Col lg="3" md="6" sm="12">
                <Link to={`/subcategory`}>
                  <div className="bg-1">
                    <div className="blackimage position-relative">
                      <div className="gradient position-absolute h-100 w-100"></div>
                      <img className="imgCol" src={versus} alt="img" />
                      <div
                        style={{ bottom: 0 }}
                        className="position-absolute d-flex flex-column p-4"
                      >
                        <p
                          className="d-flex fw-bold mb-2"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          Fake Title
                        </p>
                        <p
                          style={{
                            fontSize: "18px",
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            borderRadius: "40px",
                          }}
                          className="px-4 py-2 text-white fw-bold"
                        >
                          Fake Listing
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <button
              style={{
                backgroundColor: "#011D2B",
                fontSize: "20px",
                borderRadius: "40px",
              }}
              className="text-white px-5 py-2 border-0"
            >
              View All
            </button>
          </div>
        </Container>
      </Container>
      <div
        style={{ marginTop: "100px", maxWidth: "90%" }}
        className="mx-auto position-relative"
      >
        <div className="d-flex justify-content-center">
          <p className="category">Featured content</p>
          <div style={{ right: 0 }} className="position-absolute d-flex gap-4">
            <span className="feature_content_swiper_prev"></span>
            <span className="feature_content_swiper_next"></span>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(/bg.png)",
            backgroundPosition: "center",
          }}
          className="pt-5"
        >
          <Swiper
            breakpoints={{
              1084: {
                slidesPerView: 2.3,
              },
              980: {
                slidesPerView: 2.3,
              },
              910: {
                slidesPerView: 2.3,
              },
              820: {
                slidesPerView: 2.3,
              },
              780: {
                slidesPerView: 2.3,
              },
              768: {
                slidesPerView: 2.3,
              },
              640: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
              240: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2.3}
            navigation={{
              disabledClass: "feature_content_swiper_button-disabled",
              nextEl: ".feature_content_swiper_next",
              prevEl: ".feature_content_swiper_prev",
            }}
            className="feature_content_swiper"
          >
            <SwiperSlide>
              <div>
                <img src="/featured-content.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/featured-content.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="/featured-content.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <Row style={{ marginTop: "80px" }} className="gap-4 mx-0">
            <Col
              style={{ borderColor: "#011D2B61", borderRadius: "20px" }}
              className="border"
            >
              <div
                style={{
                  lineHeight: "515px",
                  height: "515px",
                  maxWidth: "515px",
                }}
                className="w-100 m-auto"
              >
                <img className="w-100 h-auto" src="/img1.png" alt="" />
              </div>
              <div>
                <p
                  style={{ fontSize: "30px" }}
                  className="text-center p-0 px-5"
                >
                  Content is scattered all over the web and finding quality,
                  best content is a challenge. People waste their time and money
                  consuming irrelevant, unauthentic resources.
                </p>
              </div>
            </Col>
            <Col
              style={{ borderColor: "#011D2B61", borderRadius: "20px" }}
              className="border"
            >
              <div
                style={{
                  lineHeight: "515px",
                  height: "515px",
                  maxWidth: "515px",
                }}
                className="w-100 m-auto"
              >
                <img className="w-100 h-auto" src="/img2.png" alt="" />
              </div>
              <div>
                <p
                  style={{ fontSize: "30px" }}
                  className="text-center p-0 px-5"
                >
                  Brahmaand.Space brings you the community and expert rated
                  tutorials, courses, articles, blogs, vlogs, tv, movies etc. in
                  all niche
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div
        style={{
          marginTop: "100px",
          maxWidth: "90%",
          backgroundImage: "url(/joinus-bg.png)",
          backgroundPosition: "center",
          borderRadius: "30px",
          padding: "50px 0",
        }}
        className="mx-auto"
      >
        <p
          style={{ fontSize: "30px", maxWidth: "50%" }}
          className="mx-auto text-white text-center"
        >
          Are you a Youtube content creator and want to promote your content and
          earn money.
        </p>
        <div className="text-center">
          <button
            style={{
              backgroundColor: "#FC9563",
              fontSize: "20px",
              borderRadius: "40px",
              marginTop: "30px",
            }}
            className="text-white border-0 px-5 py-2"
          >
            JOIN US !
          </button>
        </div>
      </div>
      <div className="my-5">
        <p className="walk-through position-relative mx-auto d-flex justify-content-center align-items-center gap-4">
          <span></span>
          walk-through
          <span></span>
        </p>
      </div>
      <div style={{ maxWidth: "95%" }} className="mx-auto">
        <p className="category">How does Brahmaand works?</p>
        <Row style={{ gap: "40px", marginTop: "50px" }}>
          <Col
            style={{ borderColor: "#F3F3F3", borderRadius: "25px" }}
            className="border pt-5 pb-3 px-3"
          >
            <div className="text-center p-0">
              <img src="/hdbw-1.png" alt="" />
            </div>
            <div style={{ fontSize: "24px" }}>
              <p className="text-center fw-bold p-0 mt-4">
                Search for our top content on any subject
              </p>
              <p
                style={{ color: "#848484" }}
                className="text-center fw-bold p-0 px-5 mt-2"
              >
                Eg. Java
              </p>
            </div>
            <div style={{ color: "#6E757C" }} className="mt-2">
              <p className="text-center">
                Our team of experts at Brahmaand.Spacethoroughly evaluates and
                curates submittedcontent from across the globe, which
              </p>
            </div>
            <div className="p-0 mt-4 d-flex justify-content-center">
              <button
                style={{
                  backgroundColor: "#011D2B",
                  fontSize: "24px",
                  borderRadius: "40px",
                }}
                className="text-white border-0 py-2 px-4"
              >
                Learn more
              </button>
            </div>
          </Col>
          <Col
            style={{ borderColor: "#F3F3F3", borderRadius: "25px" }}
            className="border pt-5 pb-3 px-3"
          >
            <div className="text-center p-0">
              <img src="/hdbw-2.png" alt="" />
            </div>
            <div style={{ fontSize: "24px" }}>
              <p className="text-center fw-bold p-0 mt-4">
                User community and category experts will give their assessments
                and feedback for the submitted content
              </p>
            </div>
            <div style={{ color: "#6E757C" }} className="mt-2">
              <p className="text-center">
                Again, our expert team manually evaluates allratings and reviews
                to verify their sources andensure they provide helpful
                information.
              </p>
            </div>
            <div className="p-0 mt-4 d-flex justify-content-center">
              <button
                style={{
                  backgroundColor: "#011D2B",
                  fontSize: "24px",
                  borderRadius: "40px",
                }}
                className="text-white border-0 py-2 px-4"
              >
                Learn more
              </button>
            </div>
          </Col>
          <Col
            style={{ borderColor: "#F3F3F3", borderRadius: "25px" }}
            className="border pt-5 pb-3 px-3"
          >
            <div className="text-center p-0">
              <img src="/hdbw-3.png" alt="" />
            </div>
            <div style={{ fontSize: "24px" }}>
              <p className="text-center fw-bold p-0 mt-4">
                Brahmaand.Space showcases the best content that rises to the top
                for your learning and enjoyment.
              </p>
            </div>
            <div style={{ color: "#6E757C" }} className="mt-2">
              <p className="text-center">
                Our platform rewards users who submitted contentin the first
                step with prizes based on the ratingsand reviews from
                Brahmaand.Space
              </p>
            </div>
            <div className="p-0 mt-4 d-flex justify-content-center">
              <button
                style={{
                  backgroundColor: "#011D2B",
                  fontSize: "24px",
                  borderRadius: "40px",
                }}
                className="text-white border-0 py-2 px-4"
              >
                Learn more
              </button>
            </div>
          </Col>
          <Col
            style={{ borderColor: "#F3F3F3", borderRadius: "25px" }}
            className="border pt-5 pb-3 px-3"
          >
            <div className="text-center p-0">
              <img src="/hdbw-4.png" alt="" />
            </div>
            <div style={{ fontSize: "24px" }}>
              <p className="text-center fw-bold p-0 mt-4">
                Submit, rate / review content and content creators and earn
                rewards.
              </p>
            </div>
            <div style={{ color: "#6E757C" }} className="mt-2">
              <p className="text-center">
                Open the doors to endless earning potential by submitting
                content links, regardless of whether you created them, and
                actively engaging on our platform to earn money and seize
                exciting prize opportunities
              </p>
            </div>
            <div className="p-0 mt-4 d-flex justify-content-center">
              <button
                style={{
                  backgroundColor: "#011D2B",
                  fontSize: "24px",
                  borderRadius: "40px",
                }}
                className="text-white border-0 py-2 px-4"
              >
                Learn more
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <Row
        style={{ backgroundImage: "url(/monthly-bg.png)", marginTop: "50px" }}
      >
        <Col className="d-flex justify-content-center align-items-center">
          <div style={{ maxWidth: "60%", lineHeight: 1.1 }}>
            <p style={{ fontSize: "48px" }} className="fw-bold">
              Get Our Monthly Newsletter
            </p>
            <p style={{ color: "#676C7B", fontSize: "16px" }} className="mt-4">
              Select a category that best suits your interest. Use filters to
              customize your search and to find exactly what you want.
            </p>
            <div className="position-relative mt-4">
              <input
                style={{
                  borderRadius: "66.5px",
                  padding: "30px 0 30px 25px",
                  fontSize: "16px",
                  color: "#676C7B",
                }}
                className="w-100 border-0"
                type="text"
                placeholder="Enter email address"
              />
              <div
                style={{
                  right: "30px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                className="h-100 position-absolute d-flex align-items-center"
              >
                <button
                  style={{
                    backgroundColor: "#011D2B",
                    height: "70%",
                    fontSize: "16px",
                    borderRadius: "55px",
                  }}
                  className="text-white border-0 px-4"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <img src="/video.png" alt="" />
        </Col>
      </Row>
      <div style={{ marginTop: "100px" }}>
        <p className="category mb-4">Latest Blogs</p>
        <Row style={{ maxWidth: "85%" }} className="mx-auto">
          <Col>
            <div style={{ maxHeight: "300px" }}>
              <img
                style={{ maxHeight: "300px", borderRadius: "20px 20px 0 0" }}
                className="w-100 h-auto object-fit-cover"
                src="/blog-1.png"
                alt=""
              />
            </div>
            <div
              style={{ borderRadius: "0 0 20px 20px" }}
              className="bg-white p-4"
            >
              <p
                style={{ fontSize: "20px", color: "#09153D" }}
                className="fw-bold"
              >
                30 popular business listings of this pandemic year 2021
              </p>
              <p
                style={{ color: "#676C7B", fontSize: "16px" }}
                className="mt-3 mb-4"
              >
                You’ve probably noticed there are dozens of platforms that offer
                business listings. Let’s look at a few of the most popular sites
                and...
              </p>
              <p
                style={{ color: "#FF823A", fontSize: "14px" }}
                className="fw-bold"
              >
                24th Dec, 2021 .
                <span style={{ color: "#676C7B" }}> 5 min read</span>
              </p>
            </div>
          </Col>
          <Col>
            <div style={{ maxHeight: "300px" }}>
              <img
                style={{ maxHeight: "300px", borderRadius: "20px 20px 0 0" }}
                className="w-100 h-auto object-fit-cover"
                src="/blog-2.png"
                alt=""
              />
            </div>
            <div
              style={{ borderRadius: "0 0 20px 20px" }}
              className="bg-white p-4"
            >
              <p
                style={{ fontSize: "20px", color: "#09153D" }}
                className="fw-bold"
              >
                Most visited places & top rated shops from our listing
              </p>
              <p
                style={{ color: "#676C7B", fontSize: "16px" }}
                className="mt-3 mb-4"
              >
                You’ve probably noticed there are dozens of platforms that offer
                business listings. Let’s look at a few of the most popular sites
                and...
              </p>
              <p
                style={{ color: "#FF823A", fontSize: "14px" }}
                className="fw-bold"
              >
                17th Oct, 2021 .
                <span style={{ color: "#676C7B" }}> 5 min read</span>
              </p>
            </div>
          </Col>
          <Col>
            <div style={{ maxHeight: "300px" }}>
              <img
                style={{ maxHeight: "300px", borderRadius: "20px 20px 0 0" }}
                className="w-100 h-auto object-fit-cover"
                src="/blog-3.png"
                alt=""
              />
            </div>
            <div
              style={{ borderRadius: "0 0 20px 20px" }}
              className="bg-white p-4"
            >
              <p
                style={{ fontSize: "20px", color: "#09153D" }}
                className="fw-bold"
              >
                Optimize your business page for national/global customers
              </p>
              <p
                style={{ color: "#676C7B", fontSize: "16px" }}
                className="mt-3 mb-4"
              >
                You’ve probably noticed there are dozens of platforms that offer
                business listings. Let’s look at a few of the most popular sites
                and...
              </p>
              <p
                style={{ color: "#FF823A", fontSize: "14px" }}
                className="fw-bold"
              >
                24th Dec, 2021 .
                <span style={{ color: "#676C7B" }}> 5 min read</span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NewDesign;
