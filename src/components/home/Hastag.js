import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import ReactStars from "react-rating-stars-component";
import versus from "../../images/versus.png";

import HtmlParser from "react-html-parser";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardImg,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import has1 from "../../images/has1.png";
import axiosConfig from "../axiosConfig";
import ShowMore from "react-show-more";
import newsletter from "../../images/newsletter.png";
import { useNavigate } from "react-router-dom";
import emoji from "../../images/emoji.png";
import emoji2 from "../../images/emoji2.png";
import arrowNext from "../../images/arrow-next.png";
import arrowPrev from "../../images/arrow-prev.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import youtubevideo from "../../images/youtubevideo.jpg";
import edu from "../../images/edu.jpg";
import rate from "../../images/rate.jpg";
import socialnetwork from "../../images/socialnetwork.jpg";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import Moment from "react-moment";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/ModulePage.css";
import "../../styles/Hastag.scss";

import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { Input, Button, CardMedia } from "reactstrap";
import { InputGroup } from "react-bootstrap";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";
import PrettyRating from "pretty-rating-react";
import CountDown from "../../pages/CountDown";
import HomeCountDown from "./HomeCountDown";
import NoImage from "../../images/noimage.jpg";

const baseURL = `https://backend.brahmaand.space/`
// const baseURL: `http://localhost:9000`,


function Hastag() {
  const [trendingsearch, setTrendingsearch] = useState([]);
  const [categry, setCategry] = useState([]);
  const [newslettervid, setNewslettervid] = useState([]);
  const [rating, setRating] = useState("");
  const swiperRef = useRef();
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();

  const [contentCreators, setContentCreators] = useState([]);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const secondExample = {
    size: 20,
    count: 5,
    color: "#434b4d47",
    activeColor: "#d9ad26",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    // filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };
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

  const gettrendingdata = () => {
    axiosConfig
      .get(`/admin/getTrending`)
      .then((res) => {
        // console.log(res.data.data,"This is data by smit");
        setTrendingsearch(res.data.data);
      })
      .catch((err) => { });
  };
  const [popblog, setPop] = useState([]);
  const popularblog = () => {
    axiosConfig
      .get(`/user/popularBlog`)

      .then((response) => {
        setPop(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data.data);
      });
  };



  useEffect(() => {
    popularblog();
    gettrendingdata();
    allcategory();
    monthlynewslettervid();
    featuredContent();
    warContent();
    contentCator();
  }, []);
  const allcategory = () => {
    axiosConfig
      .get(`/admin/getallCategory`)
      .then((response) => {
        setCategry(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => { });
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function performValidation() {
    return email.length > 14;
  }
  const handleSubmit = (e) => {
    const userid = localStorage.getItem("userid");

    axiosConfig
      .post(`/user/add_news_ltr`, {
        email: email,
        userid: userid,
      })
      .then((response) => {
        setEmail("");
        swal("Subscribed Successfully");
      })
      .catch((error) => { });
  };
  function isValidEmail(email) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  }

  const monthlynewslettervid = () => {
    axiosConfig
      .get(`/user/getVideo`)
      .then((res) => {
        setNewslettervid(res.data.data);
        console.log(res.data.data, "This is video Data");
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please Enter correct Email to Subscribe");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  // featured content api integration
  const [feature, setFeature] = useState([]);
  const [war, setWar] = useState([]);
  // console.log(war, "fgnlshflshfhsl")

  const featuredContent = () => {
    axiosConfig
      .get(`/user/get_featured_cnt`)
      .then((res) => {
        // console.log(res.data);
        setFeature(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const contentCator = () => {
    axiosConfig
      .get(`/content/creator/get_content_data/home`)
      .then((res) => {
        setContentCreators(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  console.log("contentcreators", contentCreators)

  const warContent = async () => {
    const responce = await axiosConfig.get(`/get/all/warzone`);
    const data = responce.data.war;
    // console.log(data,"data")
    data.forEach((obj) => {
      obj.isContent = 0;
    });
    // console.log(responce.data.war, "responce.data.war")
    const responce1 = await axiosConfig.get(`/get/all/creator_warzone`);
    const data1 = responce1.data.war;
    // console.log(data1, "data1");
    data1.forEach((obj) => {
      obj.isContent = 1;
    });
    if (responce.data.status === true && responce1.data.status === true) {
      setWar([...data, ...data1]);
    }
  };
  // console.log(war, "fnslfbhsofgsfbsklfb")
  const landtoproductpage = () => {
    // console.log(homesearch);
    // navigate(`/productList/${homesearch}`);
  };
  localStorage.setItem("hastag", "hastag");
  function handlehastagtopic(hastag) {
    localStorage.setItem("hastag", hastag);
    setName(hastag)
    if (hastag !== "") {
      axiosConfig
        .post(`/user/search_topic_title`, {
          searchinput: hastag,
        })
        .then((res) => {
          // console.log(res.data);
          if (
            res.data.data[0]?.sub_category === "" ||
            res.data.data[0]?.sub_category == undefined
          ) {
            swal("No data Found!");
          }
          const search = res.data.data[0]?.sub_category;
          console.log(search, "search")
          // if (search !== "" && search !== undefined) {
          //   navigate(`/productList/${search}`);
          // console.log(res.data.data[0].topics[0],"name::")
          // }


          // setName(res.data.data[0]?.topics)
          if (search !== "" && search !== undefined) {
            navigate(`/productsearch/${search}`, { state: hastag });
            // 
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  // console.log("name:", name)
  const [isOpenone, setOpenone] = useState(false);

  const gaEventTracker = useAnalyticsEventTracker("Hastag");
  return (
    <>
      <Container>
        <section>
          <div className="hastah_main">
            <div className="hastag_heading">
              <Row className="d-flex justify-content-center">
                <p className="Trending">
                  <img className="mb-5" src={has1} alt="img" width="45px" />
                  Trending Searches
                </p>
              </Row>
            </div>

            <div className=" row mt-3">
              <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-3 text-center">
                {trendingsearch !== ""
                  ? trendingsearch?.slice(0, 32).map((trendingtopics) => {

                    return (
                      <>
                        <button
                          key={trendingtopics._id}
                          onClick={() => (
                            handlehastagtopic(trendingtopics?.topics),
                            gaEventTracker(`${trendingtopics?.topics}`)
                            // setName(trendingtopics?.topics)
                          )}
                          // stateValue={trendingtopics?.topics}
                          className="btn1"
                        >
                          {trendingtopics?.topics}
                        </button>

                      </>
                    )

                  })
                  : null}
              </div>
            </div>

            <br />
            <br />
          </div>
        </section>
      </Container>

      {/* warzone */}
      {war.length !== 0 && (
        <Container>
          <Row
            className="d-flex justify-content-center"
            style={{ alignItems: "center" }}
          >
            <Col>
              <p className="Trending">
                <img className="mb-5" src={has1} alt="img" width="45px" />
                Brahmaand Battle
              </p>
              <div className="text-end">
                <Link
                  to="/category"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span style={{ font: "larger" }}>SEE ALL</span>
                </Link>
              </div>
            </Col>
          </Row>

          <div className="trending-warzone-main position-relative">
            <Swiper
              breakpoints={{
                1084: {
                  slidesPerView: 2,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
                980: {
                  slidesPerView: 2,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
                910: {
                  slidesPerView: 2,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
                820: {
                  slidesPerView: 2,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
                780: {
                  slidesPerView: 2,
                  direction: "horizontal",
                  spaceBetween: 10,
                },

                768: {
                  slidesPerView: 2,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
                320: {
                  slidesPerView: 1,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
                240: {
                  slidesPerView: 1,
                  direction: "horizontal",
                  spaceBetween: 10,
                },
              }}
              ref={swiperRef}
              className="sld-1"
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              allowTouchMove={false}
              centeredSlides={war.length === 1 && true}
            >
              {war?.map((features) => (
                <SwiperSlide className="swiperslidescutom" key={features?._id}>
                  <h4 className="text-center fw-bold">
                    {features?.category?.title}
                  </h4>
                  <div style={{ minHeight: "53px" }} className="mb-4">
                    {features.winner || features.winner === null ? (
                      <h3 className="text-center fw-bold">Result Declared</h3>
                    ) : (
                      <HomeCountDown endDate={features.endDate} />
                    )}
                  </div>

                  <div className="ifram warzone">
                    <div>
                      {/* {console.log(Array.isArray(features?.resource1.link) === true ? features?.resource1.link[0].split("v=")[1] : features?.resource1.link.split("v=")[1])} */}
                      <Row className="rowmainheading">
                        <Col className="position-relative  slideParent p-0 mx-3 rounded-circle overflow-hidden -z-50 ">
                          {/* {features.resource1.format === "Video" ? (
                            <> */}
                          {typeof features.resource1.link === "string" ? (
                            <>
                              {/* {console.log(`https://www.youtube.com/embed/${
                                    features?.resource1.link.split("v=")[1]
                                  }`,"hello")} */}
                              {features.resource1.link.includes("v=") ? (
                                <iframe
                                  allowfullscreen="true"
                                  className="iframesetdata obj rounded-circle border border-dark"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                  }}
                                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                                    new URL(features?.resource1.link).search
                                  ).get("v")}`}
                                ></iframe>
                              ) : (
                                <>
                                  {/* {features?.resource1.img.length ==0 } */}
                                  <img
                                    className="object-contain rounded-circle border border-dark imageSetdata"
                                    src={
                                      features?.resource1.img.length === 0
                                        ? NoImage
                                        : features?.resource1.img
                                    }
                                    alt="player"
                                  />
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              {features.resource1.link.some((e) =>
                                e.includes("v=")
                              ) ? (
                                <>
                                  <iframe
                                    allowfullscreen="true"
                                    className="iframesetdata obj border border-dark rounded-circle"
                                    style={{
                                      borderRadius: "12px",
                                      width: "300px",
                                      height: "300px",
                                    }}
                                    src={`https://www.youtube.com/embed/${new URLSearchParams(
                                      new URL(features?.resource1.link).search
                                    ).get("v")}`}
                                  ></iframe>
                                </>
                              ) : (
                                <>
                                  {/* {console.log(features?.resource1.img) } */}
                                  <img
                                    className="object-contain border border-dark rounded-circle imageSetdata"
                                    src={
                                      features?.resource1.img?.length === 0
                                        ? NoImage
                                        : features?.resource1.img?.includes(
                                          "https"
                                        )
                                          ? features?.resource1.img
                                          : `https://backend.brahmaand.space/${features?.resource1.img}`
                                    }
                                    alt=""
                                  />
                                </>
                              )}
                            </>
                          )}
                          {/* </> */}
                          {/* ) : (
                            <div
                              // style={{ }}
                              className="w-100"
                            >
                              {typeof features?.resource1.link === "string" ? (
                                <>
                                  <img
                                    style={{
                                      height: "250px",
                                      borderRadius: 12,
                                      objectFit: "contain",
                                    }}
                                    className="w-100"
                                    src={
                                      features?.resource1.img.length === 0
                                        ? NoImage
                                        : features?.resource1.img
                                    }
                                    alt=""
                                  />
                                </>
                              ) : (
                                <>
                                  <img
                                    style={{
                                      height: "250px",
                                      borderRadius: 12,
                                      objectFit: "contain",
                                    }}
                                    className="w-100"
                                    src={
                                      features?.resource1.img.length === 0
                                        ? NoImage
                                        : `https://backend.brahmaand.space/${features?.resource1.img}`
                                    }
                                    alt=""
                                  />
                                </>
                              )} */}
                          {/* </div> */}
                          {/* )} */}

                          {features.winner || features.winner === null ? (
                            features.winner === null ? (
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
                            ) : features.winner === features.resource1._id ? (
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
                          {/* {features.winner ? features.winner === features.resource1._id ? <div style={{ backgroundColor: "#000000B3", height: "90%", width: "90%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "32px" }} className="position-absolute text-white d-flex justify-content-center align-items-center">WINNER</div> : "" : ""} */}
                        </Col>
                        <Col
                          lg="2"
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%,-33%)",
                            zIndex: 69,
                          }}
                          className="imagehead position-absolute "
                        >
                          <div className="imagemainhead">
                            <img
                              style={{ maxWidth: "100px" }}
                              className="imageimg"
                              src={versus}
                              alt="img"
                            />
                          </div>
                        </Col>
                        <Col
                          lg=""
                          className="slideParent position-relative p-0 mx-3 rounded-circle overflow-hidden "
                        >
                          {/* {features.resource2.format === "Video" ? (
                            <> */}
                          {typeof features.resource2.link === "string" ? (
                            <>
                              {features.resource2.link.includes("v=") ? (
                                <iframe
                                  allowfullscreen="true"
                                  className="iframesetdata obj border border-dark rounded-circle"
                                  style={{
                                    width: "300px",
                                    height: "300px",
                                  }}
                                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                                    new URL(features?.resource2.link).search
                                  ).get("v")}`}
                                ></iframe>
                              ) : (
                                <img
                                  className="rounded-circle border border-dark imageSetdata"
                                  src={
                                    features?.resource2.img.length === 0
                                      ? NoImage
                                      : features?.resource2.img
                                  }
                                  alt=""
                                />
                              )}
                            </>
                          ) : (
                            <>
                              {features.resource2.link.some((e) =>
                                e.includes("v=")
                              ) ? (
                                <iframe
                                  allowfullscreen="true"
                                  className="iframesetdata obj border border-black rounded-circle"
                                  style={{
                                    borderRadius: "12px",
                                    width: "300px",
                                    height: "300px",
                                  }}
                                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                                    new URL(features?.resource2.link).search
                                  ).get("v")}`}
                                ></iframe>
                              ) : (
                                <img
                                  className="border border-dark rounded-circle imageSetdata"
                                  src={
                                    features?.resource2.img?.length === 0
                                      ? NoImage
                                      : features?.resource2.img?.includes(
                                        "https"
                                      )
                                        ? features?.resource2.img
                                        : `https://backend.brahmaand.space/${features?.resource2.img}`
                                  }
                                  alt=""
                                />
                              )}
                            </>
                          )}
                          {/* </>
                          ) : (
                            <div
                              // style={{ height: "250px",  }}
                              className="w-100"
                            >
                              {typeof features?.resource2.link === "string" ? (
                                <>
                                  <img
                                    style={{
                                      height: "250px",
                                      borderRadius: 12,
                                      objectFit: "contain",
                                    }}
                                    className="w-100"
                                    src={
                                      features?.resource2.img.length === 0
                                        ? NoImage
                                        : features?.resource2.img
                                    }
                                    alt=""
                                  />
                                </>
                              ) : (
                                <>
                                  <img
                                    style={{
                                      height: "250px",
                                      borderRadius: 12,
                                      objectFit: "contain",
                                    }}
                                    className="w-100"
                                    src={
                                      features?.resource2.img.length === 0
                                        ? NoImage
                                        : `https://backend.brahmaand.space/${features?.resource2.img}`
                                    }
                                    alt=""
                                  />
                                </>
                              )}
                            </div>
                          )} */}

                          {features.winner || features.winner === null ? (
                            features.winner === null ? (
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
                            ) : features.winner === features.resource2._id ? (
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

                          {/* {features.winner ? features.winner === features.resource2._id ? <div style={{ backgroundColor: "#000000B3", height: "90%", width: "90%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "32px" }} className="position-absolute text-white d-flex justify-content-center align-items-center">WINNER</div> : "" : ""} */}
                        </Col>
                      </Row>
                    </div>

                    <Row>
                      <Col>
                        <h4 className="text-center">
                          {features?.resource1.creatorName}
                        </h4>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="d-flex align-items-center">
                            <PrettyRating
                              value={features?.resource1.ava_rating}
                              icons={icons.star}
                              colors={colors.star}
                            />
                            <span style={{ fontSize: "14px" }} className="ms-1">
                              {/* {console.log(
                                features?.resource1.ava_rating,
                                "features?.resource1.ava_rating"
                              )} */}
                              {features?.resource1.ava_rating?.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <h4 className="text-center">
                          {features?.resource2.creatorName}
                        </h4>
                        <div className="d-flex align-items-center justify-content-center">
                          <div className=" d-flex align-items-center">
                            <PrettyRating
                              value={features?.resource2.ava_rating}
                              icons={icons.star}
                              colors={colors.star}
                            />
                            <span style={{ fontSize: "12px" }} className="ms-1">
                              {features?.resource2.ava_rating?.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Button
                        onClick={() =>
                          // navigate(`/trending-warzone/${features._id}`)

                          navigate(
                            `/trending-warzone/${features._id}?additionalValue=${features.isContent}`
                          )
                        }
                        style={{ borderRadius: "4px", width: "fit-content" }}
                        size="sm"
                        className="mx-auto btlisting m-0 border-0"
                      >
                        Rate Now
                      </Button>
                    </Row>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      )}

      {/* category */}
      <br />
      <br />
      <Container className="mt-3">
        <p className="category">Top Categories</p>
        <Container className=" ">
          <Row className="m-3 mb-4">
            {categry?.map((value) => (
              <Col lg="3" md="6" sm="12" className="" key={value?._id}>
                <Link to={`/subcategory/${value?._id}`}>
                  <div className="bg-1">
                    <div className="blackimage position-relative">
                      <div className="gradient position-absolute h-100 w-100"></div>
                      <img className="imgCol" src={value?.cat_img} alt="img" />
                      <div className=" d-flex content-bt newcontent">
                        <Row className=" mt-2">
                          <Button
                            className="btlisting"
                            onClick={() => gaEventTracker("Listing")}
                          >
                            {value?.subCount} - Listing
                          </Button>
                        </Row>
                      </div>
                      <p
                        style={{ bottom: 30, right: 10, fontSize: 23 }}
                        className="position-absolute text-white text-end"
                      >
                        {value?.title}
                      </p>
                    </div>

                    {/* <div className="content-bt">
                      <p
                        className="d-flex justify-content-end text-right contenttextcategory"
                        style={{ color: "white" }}
                      >
                        {value?.title}
                      </p>
                    </div> */}
                    {/* <div className=" d-flex content-bt newcontent">
                      <Row className="  mt-2">
                        <Button className="btlisting">
                          {value?.subCount} - Listing
                        </Button>
                      </Row>
                    </div> */}
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Container className="d-flex justify-content-center ">
        <Link
          to="/allcategory"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            to="/allcategory"
            className="viewall"
            size="lg"
            onClick={() => gaEventTracker("VIEW All")}
          >
            VIEW All
          </Button>
        </Link>
      </Container>
      {/* contant creater */}
      {
        contentCreators?.length !== 0 ? (
          <Container className="mt-3">
            <p className="category">Content Creator</p>
            <Row className="m-3 mb-4 w-100 justify-content-center">
              {
                contentCreators?.map((data) => {
                  return (
                    <Col lg="3" md="6" sm="12" className="my-3">
                      <Link>
                        <div className="p-2 border border-dark creatorParent rounded-3 shadow">
                          <div className="CreatorCard rounded-circle overflow-hidden">
                            <img src={
                              data?.img.includes('https')
                                ? data?.img
                                : baseURL + data?.img
                            }

                              className="h-100 w-100" />
                          </div>
                          <div className="d-flex flex-column align-items-center">
                            <p className="fs-3 text-dark text-center">{data?.creatorName}</p>
                            <div>
                              <PrettyRating
                                value={data?.ava_rating === null ? 0 : data?.ava_rating}
                                icons={icons.star}
                                colors={colors.star}

                              />
                              <span className="ms-2">
                                ({data?.ava_rating === null ? 0 : data?.ava_rating})
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        ):(<></>)
      }

      {/* Featured */}

      <div className="container">
        <Container>
          <p class="category my-4">Featured</p>
          <Swiper
            className="sld-1 featured_swiper"
            breakpoints={{
              1084: {
                slidesPerView: 3,
                direction: "horizontal",
                spaceBetween: 10,
              },
              980: {
                slidesPerView: 3,
                direction: "horizontal",
                spaceBetween: 10,
              },
              910: {
                slidesPerView: 2,
                direction: "horizontal",
                spaceBetween: 10,
              },
              820: {
                slidesPerView: 2,
                direction: "horizontal",
                spaceBetween: 10,
              },
              820: {
                slidesPerView: 1,
                direction: "horizontal",
                spaceBetween: 10,
              },
              780: {
                slidesPerView: 1,
                direction: "horizontal",
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 1,
                direction: "horizontal",
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                direction: "horizontal",
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 1,
                direction: "horizontal",
                spaceBetween: 10,
              },
              240: {
                slidesPerView: 1,
                direction: "horizontal",
                spaceBetween: 10,
              },
            }}
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={70}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          >
            {feature?.map((features) => (
              <SwiperSlide key={features?._id}>
                <div className="ifram">
                  <iframe
                    allowfullscreen="true"
                    className=""
                    width="100%"
                    height="200px"
                    style={{ borderRadius: "12px" }}
                    src={`https://www.youtube.com/embed/${features?.video_link}`}
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>

      {/* How does Brahmaand works */}
      <div className="container">
        <p className="category3">How does Brahmaand works?</p>
        <Row>
          <Col lg="4" md="6" sm="12" className="Card-Text my-3">
            <Card className="h-100">
              <Container>
                <img height="140" className="imgCard" src={edu} alt="img" />
                <p>Search for the top content on any subject ... (e.g. Java)</p>

                <ShowMore
                  className="showmore"
                  style={{ color: "black" }}
                  lines={3}
                  more="learn More"
                  less="learn less"
                  anchorClass=""
                >
                  Our team of experts at Brahmaand.Space thoroughly evaluates
                  and curates submitted content from across the globe, which are
                  links to YouTube videos, courses, articles, and blogs.
                </ShowMore>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Text my-3">
            <Card className="h-100">
              <Container>
                <img height="140" className="imgCard" src={rate} alt="img" />
                <p>
                  User community and category experts will give their
                  assessments and feedback for the submitted content.
                </p>
                <ShowMore
                  className="showmore"
                  style={{ color: "black" }}
                  lines={3}
                  more="learn More"
                  less="learn less"
                  anchorClass=""
                >
                  Again, our expert team manually evaluates all ratings and
                  reviews to verify their sources and ensure they provide
                  helpful information.
                </ShowMore>
              </Container>
            </Card>
          </Col>

          <Col lg="4" md="6" sm="12" className="Card-Text my-3">
            <Card className="h-100">
              <Container>
                <img
                  height="140"
                  className="imgCard"
                  src={socialnetwork}
                  alt="img"
                />
                <p>
                  Brahmaand.Space showcases the best content that rises to the
                  top for your learning and enjoyment.
                </p>
                <ShowMore
                  className="showmore"
                  style={{ color: "black" }}
                  lines={3}
                  more="learn More"
                  less="learn less"
                  anchorClass=""
                >
                  Our platform rewards users who submitted content in the first
                  step with prizes based on the ratings and reviews from
                  Brahmaand.Space users community.
                </ShowMore>
              </Container>
            </Card>
          </Col>
        </Row>
      </div>
      <br />
      <br />

      <div
        className="fluid newsletters mb-3 W-100"
        style={{
          // height: "70vh",
          position: "relative",
          backgroundImage: `url(${newsletter})`,
          backgroundSize: "cover",
          // opacity: 0.8,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <Row className="mt-3"> */}
            <Container>
              <Container>
                <Container>
                  <Col className="Card-Form ">
                    <Container>
                      <p className="d-flex  ">Get the Latest Updates.</p>
                    </Container>
                    <Container>
                      <span className="d-flex  mt-3 newslettertext">
                        Sign up for Brahmaand.Space's newsletter to receive
                        updates on new and relevant content.
                      </span>
                    </Container>
                    {/* news letter */}
                    <Container>
                      <InputGroup className="Card-Form mb-4">
                        <Col
                          lg="8"
                          md="8"
                          sm="8"
                          className="searchbara w-100 mb-2"
                        >
                          <input
                            value={email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter Email Address to Subscribe"
                            className="d-flex searchnew inputareea"
                          />

                          {error && (
                            <span style={{ color: "red" }}>{error}</span>
                          )}
                        </Col>
                        {/* login to subscribe */}
                        <Button
                          lg="4"
                          md="4"
                          sm="3"
                          type="submit"
                          disabled={!performValidation()}
                          onClick={() => (
                            handleSubmit(), gaEventTracker("Subscribe")
                          )}
                          className=" d-flex justify-content-center subscribebtn col-md-4 "
                        >
                          Subscribe
                        </Button>
                      </InputGroup>
                    </Container>
                  </Col>
                </Container>
              </Container>
            </Container>
          </div>
          <div className=" col-lg-6 col-md-6 col-sm-12">
            {/* api integrate form here */}
            {newslettervid
              ?.map((video) => (
                <Col className="container" key={video?._id}>
                  <div
                    style={{ backgroundImage: `url(${video})` }}
                    className="ty-3"
                  >
                    <div className="ty-2">
                      <Nav.Link
                        as={NavLink}
                        className="navbar-link mt-0 text-center"
                      >
                        <BsPlay
                          className="bsplaybutton"
                          size={75}
                          style={{ backgroundColor: "white" }}
                          type="submit"
                          onClick={() => setOpenone(true)}
                        />
                        <div className="modalvideo">
                          <ModalVideo
                            style={{ borderRadius: "12px" }}
                            channel="youtube"
                            autoplay
                            isOpen={isOpenone}
                            videoId={video?.videoid}
                            onClose={() => setOpenone(false)}
                          />
                        </div>
                      </Nav.Link>
                    </div>
                  </div>
                </Col>
              ))
              .slice(0, 1)}
          </div>
        </div>
      </div>

      {/* blogs */}
      <div className="container">
        <p className="category3">Latest Blogs</p>

        <Swiper
          className="latest-blog"
          breakpoints={{
            1084: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 10,
            },
            980: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 10,
            },
            910: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 10,
            },
            780: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              direction: "horizontal",
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 10,
            },
            240: {
              slidesPerView: 1,
              direction: "horizontal",
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={70}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {popblog?.map((value) => (
            <SwiperSlide key={value?._id}>
              <Card className="h-100 mb-0" key={value?._id}>
                <Link key={value?._id} to={`/blogdescription/${value?._id}`}>
                  <div className="popularimg">
                    <CardImg
                      style={{
                        height: "250px",
                      }}
                      src={value?.blogImg}
                      className="photo"
                    />
                  </div>
                  <CardBody>
                    <CardTitle>
                      <b style={{ color: "black" }}>
                        {HtmlParser(value?.blog_title.slice(0, 40))}
                      </b>
                    </CardTitle>
                    <CardSubtitle>
                      <b style={{ color: "#5F56C6" }}>
                        <Moment format="lll">{value?.createdAt}</Moment>
                      </b>
                    </CardSubtitle>
                    <br></br>
                    <CardText style={{ color: "black", minHeight: "190px" }}>
                      <ShowMore
                        className="showmore"
                        style={{ color: "black" }}
                        lines={2}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                      >
                        {HtmlParser(value?.desc)}
                      </ShowMore>
                    </CardText>
                    <CardText style={{ color: "black" }}>
                      posted by
                      <img
                        className="mx-3"
                        src={value?.posted_by_img}
                        style={{
                          width: "70px",
                          height: "65px",
                          borderRadius: "50%",
                        }}
                      />
                      <b>{value?.posted_by}</b>
                    </CardText>
                  </CardBody>
                </Link>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Row>
          {popblog?.map(value => (
            <Col lg="4" sm="6" xs="12">
              <Card key={value?._id}>
                <Link key={value?._id} to={`/blogdescription/${value?._id}`}>
                  <div className="popularimg">
                    <CardImg
                      style={{
                        height: "250px",
                      }}
                      src={value?.blogImg}
                      className="photo"
                    />
                  </div>
                  <CardBody>
                    <CardTitle>
                      <b style={{ color: "black" }}>
                        {HtmlParser(value?.blog_title.slice(0, 40))}
                      </b>
                    </CardTitle>
                    <CardSubtitle>
                      <b style={{ color: "#5F56C6" }}>
                        <Moment format="lll">{value?.createdAt}</Moment>
                      </b>
                    </CardSubtitle>
                    <br></br>
                    <CardText style={{ color: "black" }}>
                      <ShowMore
                        className="showmore"
                        style={{ color: "black" }}
                        lines={3}
                        more="Show more"
                        less="Show less"
                        anchorClass=""
                      >
                        {HtmlParser(value?.desc)}
                      </ShowMore>
                    </CardText>
                    <CardText style={{ color: "black" }}>
                      posted by
                      <img
                        className="mx-3"
                        src={value?.posted_by_img}
                        style={{
                          width: "70px",
                          height: "65px",
                          borderRadius: "50%",
                        }}
                      />
                      <b>{value?.posted_by}</b>
                    </CardText>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row> */}
      </div>
    </>
  );
}

export default Hastag;
