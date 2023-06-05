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

function Hastag() {
  const [trendingsearch, setTrendingsearch] = useState([]);
  const [categry, setCategry] = useState([]);
  const [newslettervid, setNewslettervid] = useState([]);
  const [rating, setRating] = useState("");
  const swiperRef = useRef();
  const prevBtnRef = useRef();
  const nextBtnRef = useRef();

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
    axios
      .get(`https://backend.brahmaand.space/admin/getTrending`)
      .then((res) => {
        // console.log(res.data.data);
        setTrendingsearch(res.data.data);
      })
      .catch((err) => {});
  };
  const [popblog, setPop] = useState([]);
  const popularblog = () => {
    axios
      .get(`https://backend.brahmaand.space/user/popularBlog`)

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
  }, []);
  const allcategory = () => {
    axios
      .get(`https://backend.brahmaand.space/admin/getallCategory`)
      .then((response) => {
        setCategry(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {});
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function performValidation() {
    return email.length > 14;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("userid");

    axios
      .post(`https://backend.brahmaand.space/user/add_news_ltr`, {
        email: email,
        userid: userid,
      })
      .then((response) => {
        setEmail("");
        swal("Subscribed Successfully");
      })
      .catch((error) => {});
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
        // console.log(res.data.data);
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

  const warContent = () => {
    axiosConfig
      .get(`/get/all/warzone`)
      .then((res) => {
        // console.log(res.data);
        setWar(res.data.war);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const landtoproductpage = () => {
    // console.log(homesearch);
    // navigate(`/productList/${homesearch}`);
  };
  localStorage.setItem("hastag", "hastag");
  function handlehastagtopic(hastag) {
    localStorage.setItem("hastag", hastag);

    if (hastag !== "") {
      axios
        .post(`https://backend.brahmaand.space/user/search_topic_title`, {
          searchinput: hastag,
        })
        .then((res) => {
          console.log(res.data);
          if (
            res.data.data[0]?.sub_category === "" ||
            res.data.data[0]?.sub_category == undefined
          ) {
            swal("No data Found!");
          }
          const search = res.data.data[0]?.sub_category;

          // if (search !== "" && search !== undefined) {
          //   navigate(`/productList/${search}`);
          // }
          if (search !== "" && search !== undefined) {
            navigate(`/producthastag/${search}`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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
              <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-3">
                {trendingsearch !== ""
                  ? trendingsearch?.slice(0, 32).map((trendingtopics) => (
                      <button
                        key={trendingtopics._id}
                        onClick={() => (
                          handlehastagtopic(trendingtopics?.topics),
                          gaEventTracker(`${trendingtopics?.topics}`)
                        )}
                        className="btn1"
                      >
                        {trendingtopics?.topics}
                      </button>
                    ))
                  : null}
              </div>
            </div>

            <br />
            <br />
          </div>
        </section>
      </Container>

      {/* warzone */}
      <Container>
        {/* <Row
          className="d-flex justify-content-center"
          style={{ alignItems: "center" }}
        >
          <Col>
            <p className="Trending">
              <img className="mb-5" src={has1} alt="img" width="45px" />
              Trending Warzone
            </p>
          </Col>
          <Col className="text-end">
            <Link
              to="/category"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <span style={{ font: "larger" }}> SEE All</span>
            </Link>
          </Col>
        </Row> */}

        {/* <center>
          <Link
            to="/category"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button
              to="/category"
              className="viewall "
              size="lg"
              onClick={() => gaEventTracker("VIEW All")}
            >
              SEARCH All
            </Button>
          </Link>
        </center> */}
        {/* <div className="trending-warzone-main position-relative">
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
            spaceBetween={40}
            slidesPerView={3}
            allowTouchMove={false}
            centeredSlides={war.length === 1 && true}
          >
            {war?.map((features) => (
              <SwiperSlide className="swiperslidescutom" key={features?._id}>
                <h4 className="text-center fw-bold">
                  {features?.category.title}
                </h4>
                <HomeCountDown endDate={features.endDate} />

                <div className="ifram warzone">
                  <div>
                    <Row className="rowmainheading">
                      <Col>
                        <div className="iframmainhead">
                          {features.resource1.format === "Video" ? (
                            <iframe
                              allowfullscreen="true"
                              className="iframesetdata"
                              width="300px"
                              style={{ borderRadius: "12px" }}
                              src={`https://www.youtube.com/embed/${
                                features?.resource1.link.split("v=")[1]
                              }`}
                            ></iframe>
                          ) : (
                            <div className="d-flex">
                              <img
                                className="mx-auto"
                                style={{ height: "300px" }}
                                src={features?.resource1.img}
                                alt=""
                              />
                            </div>
                          )}
                        </div>
                      </Col>
                      <Col
                        lg="2"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                        className="imagehead position-absolute"
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
                        className="d-flex justify-content-center align-items-center"
                      >
                        {features.resource2.format === "Video" ? (
                          <iframe
                            allowfullscreen="true"
                            className="iframesetdata"
                            width="300px"
                            style={{ borderRadius: "12px" }}
                            src={`https://www.youtube.com/embed/${
                              features?.resource2.link.split("v=")[1]
                            }`}
                          ></iframe>
                        ) : (
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              className="m-auto h-auto"
                              src={features?.resource2.img}
                              alt=""
                            />
                          </div>
                        )}
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
                        navigate(`/trending-warzone/${features._id}`)
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
        </div> */}
      </Container>

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
                    </div>

                    <div className=" d-flex  content-bt">
                      <p
                        className="d-flex justify-content-end text-right contenttextcategory"
                        style={{ color: "white" }}
                      >
                        {value?.title}
                      </p>
                    </div>
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

      {/* Featured */}

      <div className="container">
        <Container>
          <h2 className="category2 mt-4 mb-4">Featured</h2>
          <Swiper
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
            className="sld-1"
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
                    className="iframesetdata"
                    // width="auto"
                    // height="300px"
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
          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
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

          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
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

          <Col lg="4" md="6" sm="12" className="Card-Text">
            <Card>
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
        className="fluid newsletters mb-3"
        style={{
          // height: "70vh",
          position: "relative",
          backgroundImage: `url(${newsletter})`,
          backgroundSize: "cover",
          // opacity: 0.8,
          width: "100%",
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
                        <Col lg="8" md="8" sm="8" className="searchbara ">
                          <input
                            value={email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter Email Address to Subscribe"
                            className="d-flex searchnew  inputareea"
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
                          className=" d-flex justify-content-center subscribebtn col-md-4"
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
                      <Nav.Link as={NavLink} className="navbar-link">
                        <div className="ty-1">
                          <BsPlay
                            className="bsplaybutton"
                            size={75}
                            style={{ backgroundColor: "white" }}
                            type="submit"
                            // onClick={() => setOpenone(true)}
                          />
                        </div>
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
                        lines={1}
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
