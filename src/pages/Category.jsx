import { Button, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import PrettyRating from "pretty-rating-react";

import img1 from "../images/hero-swiper-img-1.png";
import swiperLeft from "../images/swiper-img1.png";
import swiperRight from "../images/swiper-img2.png";
import versus from "../images/versus.png";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import HomeCountDown from "../components/home/HomeCountDown";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../components/axiosConfig";

const Category = () => {
  const [allWarData, setAllWarData] = useState();
  const navigate = useNavigate();

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

  const getallWar = async () => {
    const responce = await axiosConfig.get(`/get/warzone`);
    // console.log(responce.data.data)
    setAllWarData(responce.data.data);
  };
  useEffect(() => {
    getallWar();
  }, []);
  // console.log(allWarData, "allWarData")
  return (
    <div className="category-main overflow-x-hidden">
      <Row className="hero-swiper">
        <h3 className="text-center">Brahmaand Warzone</h3>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <img className="w-100 h-auto" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100 h-auto" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100 h-auto" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100 h-auto" src={img1} alt="" />
          </SwiperSlide>
        </Swiper>
      </Row>

      <Row className="common-swipers ps-5 position-relative">
        {allWarData?.map((ele) => (
          <>
            <div
              style={{ top: 0 }}
              className="position-absolute d-flex h-100 w-100"
            >
              <img
                className="w-100 object-fit-contain"
                src="/trending-bg.png"
                alt="bg"
              />
            </div>
            <h3 className="my-4 fw-bold">{ele[0]?.category?.title}</h3>
            <Swiper
              breakpoints={{
                1084: {
                  slidesPerView: 2,
                },
                980: {
                  slidesPerView: 2,
                },
                910: {
                  slidesPerView: 2,
                },
                820: {
                  slidesPerView: 2,
                },
                780: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
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
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{
                el: ".swiper_pagination",
                clickable: true,
              }}
            >
              {ele?.map((slides) => {
                return (
                  <>
                    <SwiperSlide className="bg-white rounded-4">
                      <Container className="py-3 px-4">
                        <HomeCountDown endDate={slides.endDate} />
                        <Row className="position-relative">
                          <Col className="d-flex flex-column justify-content-center">
                            <div className="top-main">
                              {slides?.resource1.format === "Video" ? (
                                <iframe
                                  height={300}
                                  className="w-100 rounded-4"
                                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                                    new URL(slides?.resource1.link).search
                                  ).get("v")}`}
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen
                                ></iframe>
                              ) : (
                                <div
                                  style={{ height: "300px" }}
                                  className="d-flex"
                                >
                                  <img
                                    className="w-100 h-auto rounded-4 object-fit-contain"
                                    style={{ height: "400px" }}
                                    src={slides?.resource1.img}
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                            {/* <img className="w-100 h-auto rounded-4" src={swiperLeft} alt="" /> */}
                            <Row>
                              <h4 className="text-center">
                                {slides?.resource1.creatorName}
                              </h4>
                              <div className="d-flex align-items-center justify-content-center">
                                <div className="d-flex align-items-center">
                                  <PrettyRating
                                    value={
                                      slides?.resource1.ava_rating === null
                                        ? 0
                                        : slides?.resource1.ava_rating
                                    }
                                    icons={icons.star}
                                    colors={colors.star}
                                  />
                                  <span
                                    style={{ fontSize: "14px" }}
                                    className="ms-1"
                                  >
                                    (
                                    {slides?.resource1.ava_rating === null
                                      ? 0
                                      : slides?.resource1.ava_rating?.toFixed(
                                          2
                                        )}
                                    )
                                  </span>
                                </div>
                              </div>
                            </Row>
                          </Col>
                          <Col className="d-flex flex-column justify-content-center">
                            <div className="top-main">
                              {slides?.resource2.format === "Video" ? (
                                <iframe
                                  height={300}
                                  className="w-100 rounded-4"
                                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                                    new URL(slides?.resource2.link).search
                                  ).get("v")}`}
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen
                                ></iframe>
                              ) : (
                                <div
                                  style={{ height: "300px" }}
                                  className="d-flex"
                                >
                                  <img
                                    className="w-100 h-auto rounded-4 object-fit-contain"
                                    style={{ height: "400px" }}
                                    src={slides?.resource2.img}
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                            {/* <img className="w-100 h-auto rounded-4" src={swiperRight} alt="" /> */}
                            <Row>
                              <h4 className="text-center">
                                {slides?.resource2.creatorName}
                              </h4>
                              <div className="d-flex align-items-center justify-content-center">
                                <div className="d-flex align-items-center">
                                  <PrettyRating
                                    value={
                                      slides?.resource1.ava_rating === null
                                        ? 0
                                        : slides?.resource1.ava_rating
                                    }
                                    icons={icons.star}
                                    colors={colors.star}
                                  />
                                  <span
                                    style={{ fontSize: "14px" }}
                                    className="ms-1"
                                  >
                                    (
                                    {slides?.resource1.ava_rating === null
                                      ? 0
                                      : slides?.resource2.ava_rating?.toFixed(
                                          2
                                        )}
                                    )
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
                            <img
                              width={90}
                              height={90}
                              src={versus}
                              alt="v/s"
                            />
                          </div>
                        </Row>
                        <Row>
                          <Button
                            onClick={() =>
                              navigate(`/trending-warzone/${slides._id}`)
                            }
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
                  </>
                );
              })}
            </Swiper>
            <div
              className={`swiper_pagination d-flex justify-content-center gap-3 py-4 z-1`}
            ></div>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Category;
