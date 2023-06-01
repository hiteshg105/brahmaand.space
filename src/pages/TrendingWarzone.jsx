import PrettyRating from "pretty-rating-react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import ReactStars from "react-rating-stars-component";

//images
import { AiFillEdit } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";
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
import reviewstar from "../assets/icons/reviewstra.png";
import ratingstar from "../assets/icons/ratingstar.png";
import createricon from "../assets/icons/createricon.png";
import trophy from "../assets/icons/trophy.png";
import loser from "../assets/icons/loser.png";
import link from "../assets/icons/link.png";
import ratings from "../assets/icons/ratings.png";
import { async } from "@firebase/util";
import instance from "../components/axiosConfig";
import CountDown from "./CountDown";

const TrendingWarzone = () => {
  const [rating, setRating] = useState("");
  const [war, setWar] = useState();

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

  const secondExample = {
    size: 50,
    count: 5,
    color: "#434b4d47",
    activeColor: "#d9ad26",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    onChange: (newValue) => {
      setRating(newValue);
    },
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
    onChange: (newValue) => {
      setRating(newValue);
    },
  };
  // console.log(instance)
  const getSingleWar = async () => {
    const data = await instance.get(
      `/get/single/warzone/6476da36304297648d94da9b`
    );
    console.log(data.data.war);
    setWar(data.data.war);
  };

  useEffect(() => {
    getSingleWar();
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
            <span style={{ color: "#6BE585", fontWeight: "bold" }}>
              WINNER
            </span>
          </div>
        </Col>
        <Col>
          <CountDown endDate={war && war.endDate} />
        </Col>
        <Col
          style={{ top: "-16px", right: "-12px" }}
          className="h-100 text-end position-absolute d-sm-block d-lg-none"
        >
        </Col>
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

      <Row className="m-0 mt-0 mt-lg-4">
        <Col lg={6} className="border-top border-bottom p-0">
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
        <Col
          lg={6}
          className="content-box border-top border-bottom p-0 py-4"
        >
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
            <iframe
              style={{ height: "400px" }}
              className="w-100"
              src="https://www.youtube.com/embed/Sg8XVnCneXE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
        <Col
          lg={6}
          className="content-box border-top border-bottom border-right py-4 px-0 pe-4 pe-lg-0 ps-4"
        >
          <div>
            <iframe
              style={{ height: "400px" }}
              className="w-100"
              src="https://www.youtube.com/embed/lpsLAP4x-tk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
            <p style={{ fontSize: "24px" }}>
              Rated <span style={{ fontWeight: "600" }}>Average</span>
            </p>
            <p className="my-3">Based on 227 reviews</p>
            <div className="d-flex align-items-center">
              <ReactStars
                edit={false}
                value={war?.resource1.ava_rating}
                {...warRating}
              />
              <p
                style={{ fontSize: "22px", fontWeight: "600" }}
                className="ms-2"
              >
                {war?.resource1.ava_rating}
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
            <p style={{ fontSize: "24px" }}>
              Rated <span style={{ fontWeight: "600" }}>Average</span>
            </p>
            <p className="my-3">Based on 227 reviews</p>
            <div className="d-flex align-items-center">
              <ReactStars
                edit={false}
                value={war?.resource2.ava_rating}
                {...warRating}
              />
              <p
                style={{ fontSize: "22px", fontWeight: "600" }}
                className="ms-2"
              >
                {war?.resource2.ava_rating}
              </p>
            </div>
            <p style={{ fontWeight: "bold" }}>Satisfied Review</p>
          </div>
        </Col>
      </Row>

      <Row className="px-2">
        <div className="text-center">
          <p
            style={{ fontSize: "20px", fontWeight: "bold" }}
            className="text-uppercase py-2"
          >
            Links
          </p>
          <Link
            style={{ color: "#5F56C6", fontSize: "20px" }}
            to={"https://pl-coding.com/multi-module-course"}
          >
            https://pl-coding.com/multi-module-course
          </Link>
        </div>
        <Col lg={6} className="border-top border-bottom border-right py-4">
          <Row className="justify-content-center justify-content-lg-start">
            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1">
                  <div className="mid-1-a">
                    <img src={createricon} alt="" />
                  </div>
                  <div className="mid-1-b">
                    <p>Creator:</p>
                    <h4 className="fw-bold">Philipp Lackner</h4>
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
                    <h4 className="fw-bold">Florian 3428</h4>
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
                    <Link to="#">Paid</Link>
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
                    <Link to="#">Link tag</Link>
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
                    <Link>Link tag</Link>
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
                    {["Bava Hindi"].map((lang) => (
                      <Link
                        style={{
                          borderWidth: "0.5px",
                          borderColor: "#494949",
                          color: "#494949",
                          fontWeight: 500,
                          backgroundColor: "#F1F1F1",
                        }}
                      >
                        {lang}
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
                    {["2022"].map((lang) => (
                      <Link
                        style={{
                          borderWidth: "0.5px",
                          borderColor: "#494949",
                          color: "#494949",
                          fontWeight: 500,
                          backgroundColor: "#F1F1F1",
                        }}
                      >
                        {lang}
                      </Link>
                    ))}
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
                      <span className="ms-2">(4.5)</span>
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
                    <p className="text-black fw-bold">Aug 24, 2022</p>
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
          <Row className="justify-content-center justify-content-lg-end">
            <Row className="gap-3 mb-3">
              <Col className="shadow-lg px-0">
                <div className="mid-1">
                  <div className="mid-1-a">
                    <img src={createricon} alt="" />
                  </div>
                  <div className="mid-1-b">
                    <p>Creator:</p>
                    <h4 className="fw-bold">Philipp Lackner</h4>
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
                    <h4 className="fw-bold">Florian 3428</h4>
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
                    <Link to="#">Paid</Link>
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
                    <Link to="#">Link tag</Link>
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
                    <Link>Link tag</Link>
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
                    {["Bava Hindi"].map((lang) => (
                      <Link
                        style={{
                          borderWidth: "0.5px",
                          borderColor: "#494949",
                          color: "#494949",
                          fontWeight: 500,
                          backgroundColor: "#F1F1F1",
                        }}
                      >
                        {lang}
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
                    {["2022"].map((lang) => (
                      <Link
                        style={{
                          borderWidth: "0.5px",
                          borderColor: "#494949",
                          color: "#494949",
                          fontWeight: 500,
                          backgroundColor: "#F1F1F1",
                        }}
                      >
                        {lang}
                      </Link>
                    ))}
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
                      <span className="ms-2">(4.5)</span>
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
                    <p className="text-black fw-bold">Aug 24, 2022</p>
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
          className="text-uppercase py-2 text-center"
        >
          Descriptions
        </p>
        <p className="text-center">What is the meaning of description? noun. a statement, picture in words, or account that
          describes; descriptive representation. the act or method of describing.</p>
      </Row>


      <hr></hr>

      <div className="rating-box">
        <Row>
          <Col lg="6">
            <div className="rat-left mt-3">
              <h4>Customer Rating</h4>
              <div className="">
                <PrettyRating
                  value={2.5}
                  icons={icons.star}
                  colors={colors.star}
                />
                <span className="starratinginno">
                  {0 ? <>69 of 5 Stars</> : null}
                </span>
                <br></br>
                <span className="mt-3">69 - Customers Reviews</span>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <h4 className="mt-3">Write your Review</h4>
            <ReactStars {...secondExample} />
          </Col>
          <Row lg="12">
            <div className="rat-right">
              <Row>
                <Col lg="6"></Col>
              </Row>

              <div className="">
                <form>
                  <textarea
                    value={"Somthing"}
                    name="text"
                    className="form-control st-taetarea"
                    placeholder=" Enter your Review if you want"
                  ></textarea>
                  <Button className="bt-st reviewbutton mb-3">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </Row>
        </Row>
      </div>
      <Row>
        <Col lg="4"></Col>
      </Row>
      <hr></hr>
      <div className="review-list mt-3">
        <h4>Reviews:</h4>
        {new Array(3)?.map((value) => (
          <div className="re-list">
            <div className="re-listimg">
              <img src={value?.userid?.profileImg} alt="UserImage" />
            </div>
            <div className="re-listcont">
              <h5>
                {value?.userid?.username}
                <span>
                  <Moment format="ll">{value?.createdAt}</Moment>
                </span>
              </h5>
              <div className="star-1">
                STARSSS
                {/* <PrettyRating
                    value={value?.rating}
                    icons={icons.star}
                    colors={colors.star}
                  /> */}
              </div>
            </div>
            <div className="re-btext mt-3">
              <Row>
                <Col lg="10"> {value?.comment}</Col>
                <Col lg="2">
                  {true ? (
                    <>
                      <h6>
                        <AiFillEdit size="25px" />
                      </h6>
                      <Modal>
                        <ModalHeader>Edit Your Comment</ModalHeader>
                        <ModalBody>
                          <Row>
                            <Col>
                              <Label>Edit Review</Label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={value?.comment}
                                value={"Something"}
                                required
                              />
                            </Col>
                            <Col>
                              STARSSSS
                              {/* <ReactStars
                                  style={{
                                    size: "25px",
                                  }}
                                /> */}
                            </Col>
                          </Row>

                          <Col className="d-flex justify-content-center">
                            <button
                              style={{
                                color: "white",
                              }}
                              class="btn success"
                            >
                              Edit your comment
                            </button>
                          </Col>
                        </ModalBody>
                      </Modal>
                    </>
                  ) : null}
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrendingWarzone;
