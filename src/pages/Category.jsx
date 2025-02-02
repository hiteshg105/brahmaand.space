import { Button, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import PrettyRating from "pretty-rating-react";

import img1 from "../images/hero-swiper-img-1.png";
import img2 from "../images/hero-swiper-img-2.png";
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
import NoImage from "../components/home/noimage1.png";
import { Oval } from "react-loader-spinner";

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
    const responce = await axiosConfig.get(`/get/both_warzone`);

    if (responce.data.success === true) {
      setAllWarData(responce.data.data);
    }
  };
  useEffect(() => {
    getallWar();
  }, []);
  console.log(allWarData, "allWarData");
  return (
    <div className="category-main overflow-hidden">
      <Row className="hero-swiper mx-0">
        <h3 className="text-center">Brahmaand Warzone</h3>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
          }}
        >
          <SwiperSlide>
            <img className="w-100 h-auto" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100 h-auto" src={img2} alt="" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img className="w-100 h-auto" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100 h-auto" src={img1} alt="" />
          </SwiperSlide> */}
        </Swiper>
      </Row>

      <Row className="common-swipers px-5 w-100 position-relative overflow-hidden m-0">
        {allWarData ? (
          allWarData?.map((ele) => (
            <>
              {/* <div
              style={{ top: 0 }}
              className="position-absolute d-flex h-100 w-100"
            >
              <img  
                className="w-100 object-fit-contain"
                src="/trending-bg-3.png"
                alt="bg"
              />
            </div> */}
              <h3 className="my-4 fw-bold">{ele[0]?.category?.title}</h3>
              <Swiper
                breakpoints={{
                  1084: {
                    slidesPerView: 1,
                  },
                  980: {
                    slidesPerView: 1,
                  },
                  910: {
                    slidesPerView: 1,
                  },  
                  820: {
                    slidesPerView: 1,
                  },
                  780: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
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
                slidesPerView={1}
                centeredSlides={true}
                navigation
                pagination={{
                  el: ".swiper_pagination",
                  clickable: true,
                }}
              >
                {ele?.map((slides) => {
                  return (
                    <>
                      <div className="row w-100 flex-nowrap border border-dark">
                        <SwiperSlide className="ct_slider_w">
                          <Container className="py-1 px-4 m-2  bg-white rounded-4 ct_box_shadow">
                            {slides.winner || slides.winner === null ? (
                              <h3 className="text-center fw-bold">
                                Result Declared
                              </h3>
                            ) : (
                              <HomeCountDown endDate={slides.endDate} />
                            )}
                            {/* <HomeCountDown endDate={slides.endDate} /> */}
                            <Row className="position-relative flex-nowrap">
                              <Col className="d-flex flex-column justify-content-center align-items-center">
                                <div
                                  className="top-main d-flex justify-content-center position-relative rounded-circle overflow-hidden"
                                >
                                  {typeof slides.resource1.link === "string" ? (
                                    <>
                                      {/* {console.log(`https://www.youtube.com/embed/${
                                    features?.resource1.link.split("v=")[1]
                                  }`,"hello")} */}
                                      {slides.resource1.link.includes("v=") ? (
                                        <iframe
                                          allowfullscreen="true"
                                          className="iframesetdata obj rounded-circle"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                          src={`https://www.youtube.com/embed/${new URLSearchParams(
                                            new URL(
                                              slides?.resource1.link
                                            ).search
                                          ).get("v")}`}
                                        ></iframe>
                                      ) : (
                                        <>
                                          {/* {features?.resource1.img.length ==0 } */}
                                          <img
                                            style={{
                                              objectFit: "contain",
                                              height: "100%",
                                              width: "100%",
                                            }}
                                            className=" rounded-circle object-contain"
                                            src={
                                              slides?.resource1.img.length === 0
                                                ? NoImage
                                                : slides?.resource1.img
                                            }
                                            alt=""
                                          />
                                        </>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      {slides.resource1.link.some((e) =>
                                        e.includes("v=")
                                      ) ? (
                                        <>
                                          <iframe
                                            allowfullscreen="true"
                                            className="iframesetdata obj"
                                            style={{
                                              borderRadius: "12px",
                                              width: "100%",
                                              height: "100%",
                                            }}
                                            src={`https://www.youtube.com/embed/${new URLSearchParams(
                                              new URL(
                                                slides?.resource1.link
                                              ).search
                                            ).get("v")}`}
                                          ></iframe>
                                        </>
                                      ) : (
                                        <>
                                          {/* {console.log(features?.resource1.img) } */}
                                          <img
                                            style={{
                                              objectFit: "contain",
                                              height: "100%",
                                              width: "100%",
                                              // borderRadius: 12,
                                            }}
                                            className="rounded-circle object-contain"
                                            src={
                                              slides?.resource1.img?.length ===
                                              0
                                                ? NoImage
                                                : slides?.resource1.img?.includes(
                                                    "https"
                                                  )
                                                ? slides?.resource1.img
                                                : `https://backend.brahmaand.space/${slides?.resource1.img}`
                                            }
                                            alt=""
                                          />
                                        </>
                                      )}
                                    </>
                                  )}
                                  {slides.winner || slides.winner === null ? (
                                    slides.winner === null ? (
                                      <div
                                        style={{
                                          backgroundColor: "#000000B3",
                                          height: "100%",
                                          width: "100%",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%,-50%)",
                                          fontSize: "32px",
                                        }}
                                        className="position-absolute text-white d-flex justify-content-center align-items-center"
                                      >
                                        DRAW
                                      </div>
                                    ) : slides.winner ===
                                      slides.resource1._id ? (
                                      <div
                                        style={{
                                          backgroundColor: "#000000B3",
                                          height: "100%",
                                          width: "100%",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%,-50%)",
                                          fontSize: "32px",
                                        }}
                                        className="position-absolute text-white d-flex justify-content-center align-items-center"
                                      >
                                        WINNER
                                      </div>
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    ""
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
                              <Col className="d-flex flex-column justify-content-center align-items-center">
                                <div className="top-main d-flex justify-content-center position-relative rounded-circle overflow-hidden">
                                  {typeof slides.resource2.link === "string" ? (
                                    <>
                                      {slides.resource2.link.includes("v=") ? (
                                        <iframe
                                          allowfullscreen="true"
                                          className="iframesetdata obj rounded-circle"
                                          style={{
                                            // borderRadius: "12px",
                                            width: "100%",
                                            height: "100%",
                                          }}
                                          src={`https://www.youtube.com/embed/${new URLSearchParams(
                                            new URL(
                                              slides?.resource2.link
                                            ).search
                                          ).get("v")}`}
                                        ></iframe>
                                      ) : (
                                        <img
                                          style={{
                                            objectFit: "contain",
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: 12,
                                          }}
                                          className="rounded-circle"
                                          src={
                                            slides?.resource2.img.length === 0
                                              ? NoImage
                                              : slides?.resource2.img
                                          }
                                          alt=""
                                        />
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      {slides.resource2.link.some((e) =>
                                        e.includes("v=")
                                      ) ? (
                                        <iframe
                                          allowfullscreen="true"
                                          className="iframesetdata obj rounded-circle"
                                          style={{
                                            borderRadius: "12px",
                                            width: "100%",
                                            height: "100%",
                                          }}
                                          src={`https://www.youtube.com/embed/${new URLSearchParams(
                                            new URL(
                                              slides?.resource2.link
                                            ).search
                                          ).get("v")}`}
                                        ></iframe>
                                      ) : (
                                        <img
                                          style={{
                                            objectFit: "contain",
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: 12,
                                          }}
                                          className="rounded-circle"
                                          src={
                                            slides?.resource2.img?.length === 0
                                              ? NoImage
                                              : slides?.resource2.img?.includes(
                                                  "https"
                                                )
                                              ? slides?.resource2.img
                                              : `https://backend.brahmaand.space/${slides?.resource2.img}`
                                          }
                                          alt=""
                                        />
                                      )}
                                    </>
                                  )}

                                  {/* {slides?.resource2.format === "Video" ? (
                                          <iframe
                                            className="w-100 rounded-4 ct_if_asrto"
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
                                              src={
                                                slides?.resource2?.img?.includes("https") ? slides.resource2.img
                                                  : NoImage
                                              }
                                              // src={slides?.resource2.img}
                                              alt=""
                                            />
                                          </div>
                                        )} */}
                                  {slides.winner || slides.winner === null ? (
                                    slides.winner === null ? (
                                      <div
                                        style={{
                                          backgroundColor: "#000000B3",
                                          height: "100%",
                                          width: "100%",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%,-50%)",
                                          fontSize: "32px",
                                        }}
                                        className="position-absolute text-white d-flex justify-content-center align-items-center"
                                      >
                                        DRAW
                                      </div>
                                    ) : slides.winner ===
                                      slides.resource1._id ? (
                                      <div
                                        style={{
                                          backgroundColor: "#000000B3",
                                          height: "100%",
                                          width: "100%",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%,-50%)",
                                          fontSize: "32px",
                                        }}
                                        className="position-absolute text-white d-flex justify-content-center align-items-center"
                                      >
                                        WINNER
                                      </div>
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    ""
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
                                onClick={
                                  () =>
                                    navigate(
                                      `/trending-warzone/${slides._id}?additionalValue=${slides.isContent}`
                                    )
                                  // navigate(`/trending-warzone/${slides._id}`)
                                }
                                style={{
                                  borderRadius: "4px",
                                  width: "fit-content",
                                  backgroundColor: "#5F56C6",
                                }}
                                size="sm"
                                className="m-0 mb-2 border-0 mx-auto text-white px-3"
                              >
                                Rate Now
                              </Button>
                            </Row>
                          </Container>
                        </SwiperSlide>
                      </div>
                    </>
                  );
                })}
              </Swiper>
              <div
                className={`swiper_pagination d-flex justify-content-center gap-3 py-4 z-1`}
              ></div>
            </>
          ))
        ) : (
          <div
            className="d-flex justify-content-center align-items-start"
            style={{ height: "50vh", width: "100%" }}
          >
            <Oval
              height={100}
              width={100}
              color="#fca878"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#feeae0"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
      </Row>
    </div>
  );
};

export default Category;
