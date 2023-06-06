import PrettyRating from "pretty-rating-react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";

//images
import { BsFillStarFill } from "react-icons/bs";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import mdicon1 from "../assets/icons/mdicon-1.png";
import usericon from "../assets/icons/usericon.png";
import typeicon from "../assets/icons/typeicon.png";
import languageicon from "../assets/icons/languageicon.png";
import yearicon from "../assets/icons/yearicon.png";
import formaticon from "../assets/icons/formaticon.png";
import diffculty from "../assets/icons/diffculty.png";
import mdicon2 from "../assets/icons/mdicon-2.png";
import submiticon from "../assets/icons/submiticon.png";
import createricon from "../assets/icons/createricon.png";
import trophy from "../assets/icons/trophy.png";
import loser from "../assets/icons/loser.png";
import link from "../assets/icons/link.png";
import ratings from "../assets/icons/ratings.png";
import instance from "../components/axiosConfig";
import CountDown from "./CountDown";

import swal from "sweetalert";

const TrendingWarzone = () => {
  const { id } = useParams();
  // console.log(id, "id");
  const [war, setWar] = useState();
  const [warReview, setWarReview] = useState();
  const [warRscReview, setWarRscReview] = useState();
  const [comment, setComment] = useState();
  const [rsc1Review, setRsc1Review] = useState({ rate: 0, comment: "" });
  const [rsc2Review, setRsc2Review] = useState({ rate: 0, comment: "" });
  const [rsc1Star, setRsc1Star] = useState({
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
    star5: 0,
  });
  const [rsc2Star, setRsc2Star] = useState({
    star1: 0,
    star2: 0,
    star3: 0,
    star4: 0,
    star5: 0,
  });

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

  const warRating = {
    size: 30,
    count: 5,
    color: "#434b4d47",
    activeColor: "#d9ad26",
    // value: 2.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
  };
  // console.log(instance)
  const getSingleWar = async () => {
    const data = await instance.get(`/get/single/warzone/${id}`);
    // console.log(data.data.war);
    setWar(data.data.war);
  };

  const getWarReview = async () => {
    const data = await instance.get(`/get/review/warzone/${id}`);
    // console.log(data.data);
    setWarReview(data.data);
  };

  const getWarRscReview = async () => {
    const data = await instance.get(`/get/allreview/warzone/resource/${id}`);
    // console.log(data.data);
    setWarRscReview(data.data);
    let Start1R1 = 0;
    let Start2R1 = 0;
    let Start3R1 = 0;
    let Start4R1 = 0;
    let Start5R1 = 0;
    let Start1R2 = 0;
    let Start2R2 = 0;
    let Start3R2 = 0;
    let Start4R2 = 0;
    let Start5R2 = 0;
    for (let i = 0; i < data.data?.rsc1Comment.length; i++) {
      if (
        data.data.rsc1Comment[i].rating > 0 &&
        data.data.rsc1Comment[i].rating <= 1
      ) {
        Start1R1++;
      }
      if (
        data.data.rsc1Comment[i].rating > 1 &&
        data.data.rsc1Comment[i].rating <= 2
      ) {
        Start2R1++;
      }
      if (
        data.data.rsc1Comment[i].rating > 2 &&
        data.data.rsc1Comment[i].rating <= 3
      ) {
        Start3R1++;
      }
      if (
        data.data.rsc1Comment[i].rating > 3 &&
        data.data.rsc1Comment[i].rating <= 4
      ) {
        Start4R1++;
      }
      if (
        data.data.rsc1Comment[i].rating > 4 &&
        data.data.rsc1Comment[i].rating <= 5
      ) {
        Start5R1++;
      }
    }

    setRsc1Star({
      star1: (Start1R1 * 100) / data.data?.rsc1Comment.length + "%",
      star2: (Start2R1 * 100) / data.data?.rsc1Comment.length + "%",
      star3: (Start3R1 * 100) / data.data?.rsc1Comment.length + "%",
      star4: (Start4R1 * 100) / data.data?.rsc1Comment.length + "%",
      star5: (Start5R1 * 100) / data.data?.rsc1Comment.length + "%",
    });
    for (let i = 0; i < data.data?.rsc2Comment.length; i++) {
      if (
        data.data.rsc2Comment[i].rating > 0 &&
        data.data.rsc2Comment[i].rating <= 1
      ) {
        Start1R2++;
      }
      if (
        data.data.rsc2Comment[i].rating > 1 &&
        data.data.rsc2Comment[i].rating <= 2
      ) {
        Start2R2++;
      }
      if (
        data.data.rsc2Comment[i].rating > 2 &&
        data.data.rsc2Comment[i].rating <= 3
      ) {
        Start3R2++;
      }
      if (
        data.data.rsc2Comment[i].rating > 3 &&
        data.data.rsc2Comment[i].rating <= 4
      ) {
        Start4R2++;
      }
      if (
        data.data.rsc2Comment[i].rating > 4 &&
        data.data.rsc2Comment[i].rating <= 5
      ) {
        Start5R2++;
      }
    }
    setRsc2Star({
      star1: (Start1R2 * 100) / data.data?.rsc2Comment.length + "%",
      star2: (Start2R2 * 100) / data.data?.rsc2Comment.length + "%",
      star3: (Start3R2 * 100) / data.data?.rsc2Comment.length + "%",
      star4: (Start4R2 * 100) / data.data?.rsc2Comment.length + "%",
      star5: (Start5R2 * 100) / data.data?.rsc2Comment.length + "%",
    });
  };

  const getComment = async () => {
    const data = await instance.get(`/get/comment/warzone/${id}`);
    // console.log(data.data);
    setComment(data.data);
  };

  const submitRcc1Comment = async (e) => {
    e.preventDefault();
    try {
      const userid = localStorage.getItem("userId");
      const data = await instance.post(`user/add_Comment`, {
        submitresrcId: war.resource1._id,
        userid: userid,
        comment: rsc1Review.comment,
        rating: rsc1Review.rate,
      });
      // console.log(data.data);
      if (data.data.message === "success") {
        swal("Added Successfully");
      }
      if (data.data.msg === "waiting for admin approvel") {
        swal("waiting for admin approvel");
      }
    } catch (error) {
      if (error.response.status === 403) {
        swal("Comment Exist");
      }
    }
  };

  const submitRcc2Comment = async (e) => {
    e.preventDefault();
    try {
      const userid = localStorage.getItem("userId");
      const data = await instance.post(`user/add_Comment`, {
        submitresrcId: war.resource2._id,
        userid: userid,
        comment: rsc2Review.comment,
        rating: rsc2Review.rate,
      });
      // console.log(data.data);
      if (data.data.message === "success") {
        swal("Added Successfully..");
      }
      if (data.data.msg === "waiting for admin approvel") {
        swal("waiting for admin approvel");
      }
    } catch (error) {
      if (error.response.status === 403) {
        swal("Comment Exist");
      }
    }
  };

  useEffect(() => {
    getSingleWar();
    getWarReview();
    getWarRscReview();
    getComment();
  }, []);

  return (
    <Container>
      <Col className="mb-4 mt-5">
        <h1 style={{ fontSize: "40px", textAlign: "center" }}>
          Trending Warzone
        </h1>
      </Col>
      <Row className="justify-content-between">
        <Col className="d-none d-lg-flex justify-content-center mt-5">
          <div
            style={{ border: "3px solid #6BE585", width: "fit-content" }}
            className="d-flex align-items-center px-4 py-2"
          >
            <span className="me-3">
              <img src={trophy} width={25} alt="" />
            </span>
            <span style={{ color: "#6BE585", fontWeight: "bold" }}>WINNER</span>
          </div>
        </Col>
        <Col>
          <CountDown endDate={war && war.endDate} />
        </Col>
        <Col
          style={{ top: "-16px", right: "-12px" }}
          className="h-100 text-end position-absolute d-sm-block d-lg-none"
        ></Col>
        <Col className="d-none d-lg-flex align-items-center">
          <Col className="h-100 d-flex align-items-end">
            <div
              style={{ border: "3px solid #B62E17", width: "fit-content" }}
              className="d-flex align-items-center px-4 py-2"
            >
              <span className="me-3">
                <img src={loser} width={25} alt="" />
              </span>
              <span style={{ color: "#B62E17", fontWeight: "bold" }}>
                LOSER
              </span>
            </div>
          </Col>
        </Col>
      </Row>
      <Row className="d-flex d-lg-none border-top mt-4">
        {/* <Col className="h-100 d-flex justify-content-center border-start py-4">
              <div style={{ border: "3px solid #B62E17", width: "fit-content" }} className="d-flex align-items-center px-4 py-2">
                <span className="me-3">
                  <img src={loser} width={25} alt="" />
                </span>
                <span style={{ color: "#B62E17", fontWeight: "bold" }}>LOSER</span>
              </div>
            </Col> */}
      </Row>

      {war?.winner ? (
        <Row className="m-0 mt-0 mt-lg-4">
          <Col lg={6} className="border-top border-bottom p-0">
            {war?.winner === war?.resource1._id ? (
              <Col className="border-bottom d-flex d-lg-none justify-content-center py-4">
                <div
                  style={{ border: "3px solid #6BE585", width: "fit-content" }}
                  className="d-flex align-items-center px-4 py-2"
                >
                  <span className="me-3">
                    <img src={trophy} width={25} alt="" />
                  </span>
                  <span style={{ color: "#6BE585", fontWeight: "bold" }}>
                    WINNER
                  </span>
                </div>
              </Col>
            ) : (
              <Col className="border-bottom d-flex d-lg-none justify-content-center py-4">
                <div
                  style={{ border: "3px solid #B62E17", width: "fit-content" }}
                  className="d-flex align-items-center px-4 py-2"
                >
                  <span className="me-3">
                    <img src={loser} width={25} alt="" />
                  </span>
                  <span style={{ color: "#B62E17", fontWeight: "bold" }}>
                    LOSER
                  </span>
                </div>
              </Col>
            )}

            <Row className="py-3 pe-4 ps-4 ps-lg-0">
              <p
                style={{ fontSize: "24px", fontWeight: "bold" }}
                className="col-lg-10 mb-3"
              >
                {war?.resource1.desc}
              </p>
              <div className="d-flex align-items-center">
                <Link className="me-3" to="#">
                  <img src={mdicon1} alt="" width={24} />
                </Link>
                <Link to="#">
                  <img src={mdicon2} alt="" width={24} />
                </Link>
              </div>
            </Row>
          </Col>

          <Col lg={6} className="content-box border-top border-bottom p-0">
            {war?.winner === war?.resource2._id ? (
              <Col className="border-bottom d-flex d-lg-none justify-content-center py-4">
                <div
                  style={{ border: "3px solid #6BE585", width: "fit-content" }}
                  className="d-flex align-items-center px-4 py-2"
                >
                  <span className="me-3">
                    <img src={trophy} width={25} alt="" />
                  </span>
                  <span style={{ color: "#6BE585", fontWeight: "bold" }}>
                    WINNER
                  </span>
                </div>
              </Col>
            ) : (
              <Col className="border-bottom d-flex d-lg-none justify-content-center py-4">
                <div
                  style={{ border: "3px solid #B62E17", width: "fit-content" }}
                  className="d-flex align-items-center px-4 py-2"
                >
                  <span className="me-3">
                    <img src={loser} width={25} alt="" />
                  </span>
                  <span style={{ color: "#B62E17", fontWeight: "bold" }}>
                    LOSER
                  </span>
                </div>
              </Col>
            )}
            <Row className="py-3 ps-4">
              <p
                style={{ fontSize: "24px", fontWeight: "bold" }}
                className="col-lg-10 mb-3"
              >
                {war?.resource2.desc}
              </p>
              <div className="d-flex align-items-center">
                <Link className="me-3" to="#">
                  <img src={mdicon1} alt="" width={24} />
                </Link>
                <Link to="#">
                  <img src={mdicon2} alt="" width={24} />
                </Link>
              </div>
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
      <Row>
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-center text-uppercase py-3"
        >
          ALL-Topics
        </p>
        <Col lg={6} className="border-top border-bottom p-0 py-4">
          <div className="d-flex justify-content-center">
            <span className="me-3">
              <img src={link} alt="" width={20} />
            </span>
            <div className="d-flex flex-wrap tag-2">
              {war?.resource1.topics[0].split(",").map((val) => (
                <Link className="d-flex" to="#">
                  {val}
                </Link>
              ))}
            </div>
          </div>
        </Col>
        <Col lg={6} className="content-box border-top border-bottom p-0 py-4">
          <div className="d-flex justify-content-center">
            <span className="me-3">
              <img src={link} alt="" width={20} />
            </span>
            <div className="d-flex flex-wrap tag-2">
              {war?.resource2.topics[0].split(",").map((val) => (
                <Link className="d-flex" to="#">
                  {val}
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-center text-uppercase py-3"
        >
          comparison
        </p>
        <Col
          lg={6}
          className="border-top border-bottom border-right py-4 px-0 ps-4 ps-lg-4 pe-4"
        >
          <div>
            {war?.resource1.format === "Video" ? (
              <iframe
                style={{ height: "400px" }}
                className="w-100"
                src={`https://www.youtube.com/embed/${
                  war?.resource1.link.split("v=")[1]
                }`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <div className="d-flex">
                <img
                  className="mx-auto"
                  style={{ height: "400px" }}
                  src={war?.resource1.img}
                  alt=""
                />
              </div>
            )}
          </div>
        </Col>
        <Col
          lg={6}
          className="content-box border-top border-bottom border-right py-4 px-0 pe-4 pe-lg-0 ps-4"
        >
          <div>
            {war?.resource2.format === "Video" ? (
              <iframe
                style={{ height: "400px" }}
                className="w-100"
                src={`https://www.youtube.com/embed/${
                  war?.resource2.link.split("v=")[1]
                }`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <div className="d-flex">
                <img
                  className="mx-auto"
                  style={{ height: "400px" }}
                  src={war?.resource1.img}
                  alt=""
                />
              </div>
            )}
          </div>
        </Col>
      </Row>

      <Row className="px-2">
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-center text-uppercase py-3"
        >
          War rating
        </p>
        <Col
          lg={6}
          className="border-top border-bottom border-right py-4 pe-4 ps-4 ps-lg-0"
        >
          <div
            style={{ width: "69%" }}
            className="shadow-lg mx-auto mx-lg-0 ms-lg-auto ps-4 py-2"
          >
            <p style={{ fontSize: "24px", fontWeight: "600" }}>
              {warReview?.rsc1AvReview < 2
                ? "Bad"
                : warReview?.rsc1AvReview >= 2 && warReview?.rsc1AvReview < 3
                ? "Average"
                : warReview?.rsc1AvReview >= 3 && warReview?.rsc1AvReview < 4
                ? "Good"
                : warReview?.rsc1AvReview >= 4 && warReview?.rsc1AvReview < 4.5
                ? "Very Good"
                : "Excellent"}
            </p>
            <p className="my-3">Based on {warReview?.toalRsc1} reviews</p>
            <div className="d-flex align-items-center">
              {/* {console.log(warReview?.rsc1AvReview)} */}
              {warReview && (
                <ReactStars
                  edit={false}
                  value={warReview?.rsc1AvReview}
                  {...warRating}
                />
              )}

              <p
                style={{ fontSize: "22px", fontWeight: "600" }}
                className="ms-2"
              >
                {warReview?.rsc1AvReview?.toFixed(2)}
              </p>
            </div>
            <p style={{ fontWeight: "bold" }}>Satisfied Review</p>
          </div>
        </Col>
        <Col
          lg={6}
          className="content-box border-top border-bottom border-right py-4 ps-4"
        >
          <div
            style={{ width: "69%" }}
            className="shadow-lg mx-auto mx-lg-0 ps-4 py-2"
          >
            <p style={{ fontSize: "24px" }} className="text-start fw-bold">
              {warReview?.rsc2AvReview < 2
                ? "Bad"
                : warReview?.rsc2AvReview >= 2 && warReview?.rsc2AvReview < 3
                ? "Average"
                : warReview?.rsc2AvReview >= 3 && warReview?.rsc2AvReview < 4
                ? "Good"
                : warReview?.rsc2AvReview >= 4 && warReview?.rsc2AvReview < 4.5
                ? "Very Good"
                : "Excellent"}
            </p>
            <p className="my-3">Based on {warReview?.toalRsc2} reviews</p>
            <div className="d-flex align-items-center">
              {warReview && (
                <ReactStars
                  edit={false}
                  value={warReview?.rsc2AvReview}
                  {...warRating}
                />
              )}

              <p
                style={{ fontSize: "22px", fontWeight: "600" }}
                className="ms-2"
              >
                {warReview?.rsc2AvReview?.toFixed(2)}
              </p>
            </div>
            <p style={{ fontWeight: "bold" }}>Satisfied Review</p>
          </div>
        </Col>
      </Row>

      <Row className="px-2">
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-uppercase text-center border-bottom py-3"
        >
          Links
        </p>

        <Col lg={6} className="border-top border-bottom border-right py-4">
          <Row className="mb-4 text-lg-end pe-4">
            <Link
              style={{ color: "#5F56C6", fontSize: "20px" }}
              to={war?.resource1.link}
            >
              {war?.resource1.link}
            </Link>
          </Row>
          <Row className="justify-content-center justify-content-lg-start">
            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1">
                  <div className="mid-1-a">
                    <img src={createricon} alt="" />
                  </div>
                  <div className="mid-1-b">
                    <p>Creator:</p>
                    <h4 className="fw-bold">{war?.resource1.creatorName}</h4>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1">
                  <div className="mid-1-a">
                    <img src={usericon} alt="" />
                  </div>
                  <div className="mid-1-b">
                    <p>Submitted by:</p>
                    <h4 className="fw-bold">
                      {war?.resource1.userid?.username}
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={typeicon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Type:</p>
                    <Link to="#">{war?.resource1.type}</Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={formaticon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Format:</p>
                    <Link to="#">{war?.resource1.format}</Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={diffculty} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Category:</p>
                    <Link>{war?.resource1.category.title}</Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={languageicon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Language:</p>
                    {war?.resource1.language.map((lang) => (
                      <Link
                        key={lang._id}
                        style={{
                          borderWidth: "0.5px",
                          borderColor: "#494949",
                          color: "#494949",
                          fontWeight: 500,
                          backgroundColor: "#F1F1F1",
                        }}
                      >
                        {lang.language}
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={yearicon} alt="" width="35px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Year:</p>
                    <Link
                      style={{
                        borderWidth: "0.5px",
                        borderColor: "#494949",
                        color: "#494949",
                        fontWeight: 500,
                        backgroundColor: "#F1F1F1",
                      }}
                    >
                      {war?.resource1.relYear[0].yrName}
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={ratings} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Ratings:</p>
                    <div
                      style={{ color: "#FCAF3B" }}
                      className="d-flex align-items-center"
                    >
                      <BsFillStarFill size={20} />
                      <span className="ms-2">
                        {warRscReview?.rsc1AvReview?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={submiticon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Submitted:</p>
                    <p className="text-black fw-bold">
                      {war?.resource1.createdAt.toString().slice(0, 10)}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="px-0"></Col>
            </Row>
          </Row>
        </Col>

        <Col
          lg={6}
          className="content-box border-top border-bottom border-right py-4"
        >
          <Row className="mb-4 text-lg-start pe-4">
            <Link
              style={{ color: "#5F56C6", fontSize: "20px" }}
              to={war?.resource2.link}
            >
              {war?.resource2.link}
            </Link>
          </Row>
          <Row className="justify-content-start justify-content-lg-end">
            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1">
                  <div className="mid-1-a">
                    <img src={createricon} alt="" />
                  </div>
                  <div className="mid-1-b">
                    <p>Creator:</p>
                    <h4 className="fw-bold">{war?.resource2.creatorName}</h4>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1">
                  <div className="mid-1-a">
                    <img src={usericon} alt="" />
                  </div>
                  <div className="mid-1-b">
                    <p>Submitted by:</p>
                    <h4 className="fw-bold">
                      {war?.resource2.userid?.username}
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={typeicon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Type:</p>
                    <Link to="#">{war?.resource2.type}</Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={formaticon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Format:</p>
                    <Link to="#">{war?.resource2.format}</Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={diffculty} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Category:</p>
                    <Link>{war?.resource2.category.title}</Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={languageicon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Language:</p>
                    {war?.resource2.language.map((lang) => (
                      <Link
                        key={lang._id}
                        style={{
                          borderWidth: "0.5px",
                          borderColor: "#494949",
                          color: "#494949",
                          fontWeight: 500,
                          backgroundColor: "#F1F1F1",
                        }}
                      >
                        {lang.language}
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={yearicon} alt="" width="35px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Year:</p>
                    <Link
                      style={{
                        borderWidth: "0.5px",
                        borderColor: "#494949",
                        color: "#494949",
                        fontWeight: 500,
                        backgroundColor: "#F1F1F1",
                      }}
                    >
                      {war?.resource2.relYear[0].yrName}
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={ratings} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Ratings:</p>
                    <div
                      style={{ color: "#FCAF3B" }}
                      className="d-flex align-items-center"
                    >
                      <BsFillStarFill size={20} />
                      <span className="ms-2">
                        {warRscReview?.rsc2AvReview?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="shadow-lg px-0">
                <div className="mid-1 tt-2">
                  <div className="me-3">
                    <img src={submiticon} alt="" width="25px" />
                  </div>
                  <div className="mid-1-b tt-1">
                    <p>Submitted:</p>
                    <p className="text-black fw-bold">
                      {war?.resource2.createdAt.toString().slice(0, 10)}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="px-0"></Col>
            </Row>
          </Row>
        </Col>
      </Row>

      <Row>
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-uppercase text-center py-3"
        >
          Descriptions
        </p>
        <Col lg={6} className="px-0">
          <p
            style={{ color: "#737373" }}
            className="text-center mx-auto border-top"
          >
            {war?.resource1.res_desc}
          </p>
        </Col>
        <Col lg={6} className="content-box px-0">
          <p
            style={{ color: "#737373" }}
            className="text-center mx-auto border-top"
          >
            {war?.resource2.res_desc}
          </p>
        </Col>
      </Row>

      <Row className="border-top border-bottom">
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-uppercase text-center py-3"
        >
          Overall Rating
        </p>
        <Col
          lg={6}
          className="d-flex border-top justify-content-center text-end p-3"
        >
          <div
            style={{ width: "fit-content" }}
            className="mx-0 ms-lg-auto me-0 me-lg-4"
          >
            <p style={{ fontSize: "24px" }} className="text-start fw-bold">
              {warRscReview?.rsc1AvReview < 2
                ? "Bad"
                : warRscReview?.rsc1AvReview >= 2 &&
                  warRscReview?.rsc1AvReview < 3
                ? "Average"
                : warRscReview?.rsc1AvReview >= 3 &&
                  warRscReview?.rsc1AvReview < 4
                ? "Good"
                : warRscReview?.rsc1AvReview >= 4 &&
                  warRscReview?.rsc1AvReview < 4.5
                ? "Very Good"
                : "Excellent"}
            </p>
            <div className="d-flex align-items-center">
              {warRscReview && (
                <ReactStars
                  edit={false}
                  value={warRscReview?.rsc1AvReview}
                  {...warRating}
                />
              )}

              <p
                style={{ fontSize: "22px", fontWeight: "600" }}
                className="ms-2"
              >
                {warRscReview?.rsc1AvReview?.toFixed(2)}
              </p>
            </div>
            <p
              style={{ fontSize: "14px", color: "#CACACA" }}
              className="mt-2 text-start fw-bold"
            >
              {warRscReview?.toalRsc1} customers reviews
            </p>
            <div className="d-flex flex-column gap-2 mt-3">
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  5 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc1Star.star5,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  4 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc1Star.star4,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  3 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc1Star.star3,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  2 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc1Star.star2,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  1 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc1Star.star1,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col
          lg={6}
          className="content-box border-top d-flex justify-content-center text-end p-3"
        >
          <div style={{ width: "fit-content" }} className="ms-0 ms-lg-4">
            <p style={{ fontSize: "24px" }} className="text-start fw-bold">
              {warRscReview?.rsc2AvReview < 2
                ? "Bad"
                : warRscReview?.rsc2AvReview >= 2 &&
                  warRscReview?.rsc2AvReview < 3
                ? "Average"
                : warRscReview?.rsc2AvReview >= 3 &&
                  warRscReview?.rsc2AvReview < 4
                ? "Good"
                : warRscReview?.rsc2AvReview >= 4 &&
                  warRscReview?.rsc2AvReview < 4.5
                ? "Very Good"
                : "Excellent"}
            </p>
            <div className="d-flex align-items-center">
              {warRscReview && (
                <ReactStars
                  edit={false}
                  value={warRscReview?.rsc2AvReview}
                  {...warRating}
                />
              )}

              <p
                style={{ fontSize: "22px", fontWeight: "600" }}
                className="ms-2"
              >
                {warRscReview?.rsc2AvReview?.toFixed(2)}
              </p>
            </div>
            <p
              style={{ fontSize: "14px", color: "#CACACA" }}
              className="mt-2 text-start fw-bold"
            >
              {warRscReview?.toalRsc2} customers reviews
            </p>
            <div className="d-flex flex-column gap-2 mt-3">
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  5 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc2Star.star5,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  4 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc2Star.star4,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  3 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc2Star.star3,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  2 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc2Star.star2,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
              <div className="d-flex flex-nowrap align-items-center gap-3">
                <span
                  style={{ color: "#5F56C6", fontSize: "14px" }}
                  className="text-nowrap fw-bold"
                >
                  1 Stars
                </span>
                <div
                  style={{
                    backgroundColor: "#F2F2F2",
                    height: "14px",
                    minWidth: "150px",
                  }}
                  className="rounded-2 position-relative"
                >
                  <span
                    style={{
                      backgroundColor: "#FDB800",
                      width: rsc2Star.star1,
                    }}
                    className="position-absolute start-0 h-100 rounded-2"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="border-top border-bottom">
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-uppercase text-center py-3"
        >
          Write Your reviews
        </p>
        <Col lg={6} className="p-3 pe-4 border-top">
          <div className="w-100 w-lg-75 mx-auto ms-lg-auto mt-5">
            <div className="reviews-rating-stars d-flex justify-content-lg-end">
              <PrettyRating
                value={rsc1Review.rate}
                onChange={(e) => setRsc1Review({ ...rsc1Review, rate: e })}
                icons={icons.star}
                colors={colors.star}
              />
            </div>
            {/* {console.log(rsc1Review, "rsc1Review")} */}
            <form className="position-relative">
              <textarea
                value={rsc1Review.comment}
                onChange={(e) =>
                  setRsc1Review({ ...rsc1Review, comment: e.target.value })
                }
                name="text"
                className="form-control st-taetarea"
                placeholder=" Enter your Review if you want"
              ></textarea>
              <button
                onClick={(e) => submitRcc1Comment(e)}
                style={{
                  backgroundColor: "#5F56C6",
                  right: "8px",
                  bottom: "8px",
                }}
                className="position-absolute text-uppercase text-white border-0 shadow-lg fw-bold px-4 py-1 rounded-2"
              >
                send
              </button>
            </form>
          </div>
        </Col>
        <Col lg={6} className="content-box p-3 ps-4 border-top">
          <div className="w-100 w-lg-75 mt-5 mx-auto mx-lg-0">
            <div className="reviews-rating-stars d-flex">
              <PrettyRating
                value={rsc2Review.rate}
                onChange={(e) => setRsc2Review({ ...rsc2Review, rate: e })}
                icons={icons.star}
                colors={colors.star}
              />
            </div>
            <form className="position-relative">
              <textarea
                value={rsc2Review.comment}
                name="text"
                onChange={(e) =>
                  setRsc2Review({
                    ...rsc2Review,
                    comment: e.target.value,
                  })
                }
                className="form-control st-taetarea"
                placeholder=" Enter your Review if you want"
              ></textarea>
              <button
                onClick={(e) => submitRcc2Comment(e)}
                style={{
                  backgroundColor: "#5F56C6",
                  right: "8px",
                  bottom: "8px",
                }}
                className="position-absolute text-uppercase text-white border-0 shadow-lg fw-bold px-4 py-1 rounded-2"
              >
                send
              </button>
            </form>
          </div>
        </Col>
      </Row>

      <Row className="border-top border-bottom">
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-uppercase text-center py-3"
        >
          REVIEWS
        </p>
        <Col
          style={{ padding: "40px 16px 16px" }}
          className="content-box border-top d-flex flex-column gap-3"
        >
          {comment?.newData &&
            comment?.newData.map((value) => (
              <div
                style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                className="d-flex flex-column p-3 rounded-4"
              >
                <div className="re-list d-flex align-items-center gap-4">
                  <div style={{ width: "50px" }}>
                    <img
                      className="w-100 h-auto rounded-circle"
                      src={value?.userid?.profileImg?.[0]}
                      timeLine
                      alt="UserImage"
                    />
                  </div>
                  <div className="re-listcont w-100 d-flex justify-content-between">
                    <div>
                      <h5>{value?.userid?.username}</h5>
                      <div className="star-1">
                        <PrettyRating
                          value={value.rating}
                          edit={false}
                          icons={icons.star}
                          colors={["#5F56C6", "#5F56C6", "#434b4d"]}
                        />
                      </div>
                    </div>
                    <span>
                      {/* <Moment format="ll"></Moment> */}
                      {value?.timeLine}
                    </span>
                  </div>
                </div>
                <p className="fw-bold">{value.comment}</p>
              </div>
            ))}
        </Col>
        <Col
          style={{ padding: "40px 16px 16px" }}
          className="content-box border-top d-flex flex-column gap-3"
        >
          {/* {console.log(comment?.newData2)} */}
          {comment?.newData2 &&
            comment?.newData2.map((value) => (
              <div
                style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                className="d-flex flex-column p-3 rounded-4"
              >
                <div className="re-list d-flex align-items-center gap-4">
                  <div style={{ width: "50px" }}>
                    <img
                      className="w-100 h-auto rounded-circle"
                      src={value?.userid?.profileImg[0]}
                      alt="UserImage"
                    />
                  </div>
                  <div className="re-listcont w-100 d-flex justify-content-between">
                    <div>
                      <h5>{value?.userid?.username}</h5>
                      <div className="star-1">
                        <PrettyRating
                          edit={false}
                          value={value.rating}
                          icons={icons.star}
                          colors={["#5F56C6", "#5F56C6", "#434b4d"]}
                        />
                      </div>
                    </div>
                    <span>
                      {/* <Moment format="ll"></Moment> */}
                      {value?.timeLine}
                    </span>
                  </div>
                </div>
                <p className="fw-bold">{value.comment}</p>
              </div>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TrendingWarzone;
