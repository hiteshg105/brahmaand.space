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
      setAllWarData(responce.data.data)
    }
  };
  useEffect(() => {
    getallWar();
  }, []);
  console.log(allWarData, "allWarData")
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
        {allWarData ? (allWarData?.map((ele) => (
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
                    <div className="row w-100">
                      <SwiperSlide className="ct_slider_w" >
                        <Container className="py-1 px-4 m-2  bg-white rounded-4 ct_box_shadow">
                          <HomeCountDown endDate={slides.endDate} />
                          <Row className="position-relative">
                            <Col className="d-flex flex-column justify-content-center">
                              <div className="top-main">

                                {typeof slides.resource1.link === "string" ? (
                                  <>
                                    {/* {console.log(`https://www.youtube.com/embed/${
                                    features?.resource1.link.split("v=")[1]
                                  }`,"hello")} */}
                                    {slides.resource1.link.includes("v=") ? (
                                      <iframe
                                        allowfullscreen="true"
                                        className="iframesetdata obj"
                                        style={{
                                          borderRadius: "12px",
                                          width: "100%",
                                          height: "100%",
                                        }}
                                        src={`https://www.youtube.com/embed/${new URLSearchParams(
                                          new URL(slides?.resource1.link).search
                                        ).get("v")}`}
                                      ></iframe>
                                    ) : (
                                      <>
                                        {/* {features?.resource1.img.length ==0 } */}
                                        <img
                                          style={{
                                            objectFit: "contain",
                                            height: "250px",
                                            borderRadius: 12,
                                          }}
                                          className="w-100  object-contain"
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
                                            new URL(slides?.resource1.link).search
                                          ).get("v")}`}
                                        ></iframe>
                                      </>
                                    ) : (
                                      <>
                                        {/* {console.log(features?.resource1.img) } */}
                                        <img
                                          style={{
                                            objectFit: "contain",
                                            height: "250px",
                                            borderRadius: 12,
                                          }}
                                          className="w-100  object-contain"
                                          src={
                                            slides?.resource1.img?.length === 0
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










                                {/* {slides?.resource1.format === "Video" ? (
                                  <iframe
                                    className="w-100 rounded-4 ct_if_asrto rounded-circle"
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
                                    className="d-flex justify-content-center"
                                  >
                                    {console.log(slides?.resource1.img.includes("https"), "slides?.resource1.img")}
                                    <img
                                      className=" rounded-4 object-fit-contain rounded-circle"
                                      style={{ height: "300px",width:"300px" }}
                                      src={
                                        slides?.resource1.img.includes("https")
                                          ? slides?.resource1.img
                                          : slides?.resource1.img.includes("data:image")
                                            ? slides?.resource1.img
                                            : NoImage
                                      }
                                      // src={slides?.resource1.img}
                                      alt=""
                                    />
                                  </div>
                                )} */}
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

                              {typeof slides.resource2.link === "string" ? (
                            <>
                              {slides.resource2.link.includes("v=") ? (
                                <iframe
                                  allowfullscreen="true"
                                  className="iframesetdata obj"
                                  style={{
                                    borderRadius: "12px",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                                    new URL(slides?.resource2.link).search
                                  ).get("v")}`}
                                ></iframe>
                              ) : (
                                <img
                                  style={{
                                    objectFit: "contain",
                                    height: "250px",
                                    borderRadius: 12,
                                  }}
                                  className="w-100"
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
                                  className="iframesetdata obj"
                                  style={{
                                    borderRadius: "12px",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                                    new URL(slides?.resource2.link).search
                                  ).get("v")}`}
                                ></iframe>
                              ) : (
                                <img
                                  style={{
                                    objectFit: "contain",
                                    height: "250px",
                                    borderRadius: 12,
                                  }}
                                  className="w-100"
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
        ))):<div className="d-flex justify-content-center align-items-start" style={{height:"50vh",width:"100%"}}>
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
          </div>}
      </Row>
    </div>
  );
};

export default Category;
