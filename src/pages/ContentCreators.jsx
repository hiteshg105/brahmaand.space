import { Button, Col, Container, Row } from "react-bootstrap";
import PrettyRating from "pretty-rating-react";
import img from "../images/creator-img.png";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import axiosClient from "../components/axiosConfig";
import { useState } from "react";
import { useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Label } from "reactstrap";
import { MdCancelPresentation } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import mdicon1 from "../assets/icons/mdicon-1.png";
import mdicon2 from "../assets/icons/mdicon-2.png";
import createricon from "../assets/icons/createricon.png";
import usericon from "../assets/icons/usericon.png";
import ratingM from "../assets/icons/rating.png";
import typeicon from "../assets/icons/typeicon.png";
import formaticon from "../assets/icons/formaticon.png";
import diffculty from "../assets/icons/diffculty.png";
import languageicon from "../assets/icons/languageicon.png";
import yearicon from "../assets/icons/yearicon.png";
import submiticon from "../assets/icons/submiticon.png";
import { BsFillBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import Moment from "react-moment";
import ReactStars from "react-rating-stars-component";
import { AiFillEdit } from "react-icons/ai";
import swal from "sweetalert";

const base_URL = "https://backend.brahmaand.space/";
// const base_URL = "http://localhost:9000";

const ContentCreators = ({ categry }) => {
  const [content, setContent] = useState("Content");
  // let [page,setPage] = useState(1);
  let [limit, setLimit] = useState(12);
  let [val, setVal] = useState([]);
  const [Producdetail, setProductdetail] = useState([]);
  const [contentCretorDetail, setContentCretorDetail] = useState([]);

  const [text, settText] = useState("");
  const [modalsuggestion, setModalsuggestion] = useState(false);
  const togglesuggestion = () => setModalsuggestion(!modalsuggestion);
  const toggle = () => setModal(!modal);
  const toggleone = () => setModalone(!modalone);
  const [modal, setModal] = useState(false);
  const [modalone, setModalone] = useState(false);
  const [productdes, setProductdes] = useState("");
  const [handlebookmark, setHandlebookmark] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [getonecomment, setGetonecomment] = useState([]);
  const [editmodal, setEditmodal] = useState(false);
  const [liked, setliked] = useState("");
  const [myId, setmyId] = useState("");
  const [activelike, setActivelike] = useState("");

  const [rating, setRating] = useState("");

  const navigate = useNavigate();
  const [upcom, setUpcom] = useState("");
  const toggleedit = () => {
    setEditmodal(!editmodal);
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
    // filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };
  const editcomment = (id, dataid, oldrating) => {
    // console.log(oldrating);
    if (rating == "") {
      setRating(oldrating);
    }
    // console.log(rating);
    const user = localStorage.getItem("userId");
    if (rating !== "" && upcom !== "") {
      axios
        .post(`https://backend.brahmaand.space/user/editCommentbyUser/${id}`, {
          submitresrcId: dataid,
          userid: user,
          comment: upcom,
          rating: rating,
        })
        .then((res) => {
          // console.log(res.data.data);
          swal("Submitted Successfully");
          toggleedit();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
  };

  const handleSelection = (id) => {
    if (content === "Content") {
      axios
        // .get(`https://backend.brahmaand.space/admin/getone_reslist/${productdes}`)
        .get(`https://backend.brahmaand.space/admin/getone_reslist/${id}`)
        .then((res) => {
          // console.log(res.data.data._id);
          // console.log(res);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setProductdetail(res.data.data);
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });

      axios
        .get(`https://backend.brahmaand.space/user/comment_list/${id}`)
        .then((res) => {
          setGetonecomment(res.data.data);
          // console.log(res.data.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }

    if (content === "Content Creators") {
      console.log(id, "hello");
      axiosClient
        .get(
          `https://backend.brahmaand.space/content/creator/get_single_content_data/${id}`
        )
        .then((res) => {
          // console.log(res.data.data._id);
          // console.log(res);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setContentCretorDetail(res.data.data);
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });
    }
    //
  };

  console.log(contentCretorDetail, "contentCreator");

  useEffect(() => {
    handleSelection(selectedItemId);
  }, [selectedItemId]);

  const removebookmark = (id) => {
    setliked(id);
    if (myId !== "" && myId !== null) {
      axiosClient
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "false",
        })
        .then((response) => {
          // console.log(response.data.data);
          setActivelike(response.data.data.status);
          swal("you Removed your bookmark ");
          hadlestatusbookmark();
        })
        .catch((error) => {});
    } else {
      swal("User Need to Login first ");
      navigate("/login");
    }
  };

  const addbookmark = (id) => {
    console.log(id);
    setliked(id);

    if (myId !== "" && myId !== null) {
      axiosClient
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "true",
        })
        .then((response) => {
          // console.log(response.data.data);
          setActivelike(response.data.data.status);
          swal("You Bookmark it");
          hadlestatusbookmark();
        })
        .catch((error) => {
          if (error.response.data.message == "already exists") {
            swal(" Your already bookmarked It");
          }
        });
    } else {
      swal("login first");
      navigate("/login");
    }
  };

  const hadlestatusbookmark = () => {
    axiosClient
      .get(`/user/getone_mylikes/${myId}/${liked}`)
      .then((res) => {
        // console.log(res.data.data);
        setHandlebookmark(res.data.data.status);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  };

  const handleeditcomment = (id) => {
    axios
      .get(`https://backend.brahmaand.space/admin/getone_coment_list/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setUpcom(res.data.data?.comment);
        toggleedit();
      })
      .catch((err) => {
        console.log(err);
      });
    const user = localStorage.getItem("userId");
  };

  const onchangehandler = (e) => {
    settText(e.target.value);
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    if (myId == "") {
      swal("Login First");
      navigate("/login");
    }
    if (myId !== null && myId !== undefined && myId !== "") {
      const selectedId = Producdetail._id;

      if (!(!text && rating !== 0)) {
        axiosClient
          .post(`/user/add_Comment`, {
            submitresrcId: id,
            userid: myId,
            comment: text,
            rating: rating,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.status == true) {
              swal("Your Review Submitted Successfully!");
            } else if (res.data.msg == "not able to comment") {
              swal("User can't Review own Resource");
            }

            if (res.data.msg == "waiting for admin approvel") {
              swal("Already commented On it wait for aprroval");
            }
          })
          .catch((err) => {
            // console.log(err.response.data.message == "already exists");
            if (err.response.data.message == "already exists") {
              swal("You already Commented On It");
            }
          });
        settText("");
        setRating("");
      } else {
        swal("Please Enter Rating and Comment");
      }
    }
  };

  const handleContentClick = (event) => {
    if (event.target.checked === true) {
      setContent("Content Creators");
    } else {
      setContent("Content");
    }
  };
  const seeMore = () => {
    //   setPage(page+1);
    setLimit(limit + 12);
  };
  const handleContent = async (data, l1) => {
    if (data === "Content") {
      const data = await axiosClient.get(
        `/user/get_all_active_resrc_lsit?limit=${l1}`
      );
      // console.log(data.data.data);
      setVal(data.data.data);
    }
    if (data === "Content Creators") {
      const data = await axiosClient.get("/get_all/content/creator");
      setVal(data.data.data);
    }
  };

  const colors = {
    star: ["#FCAF3B", "#FCAF3B", "#FCAF3B"],
  };

  useEffect(() => {
    handleContent(content, limit);
  }, [content, limit]);

  useEffect(() => {
    setVal(categry);
  }, [categry]);

  const handleclosemodal = () => {
    setModal(false);
    setProductdetail("");
    setProductdes("");
  };

  return (
    <Container className="ccm content-creator-main mt-5">
      <Row className="d-flex justify-content-between">
        <Col>
          <h3 className="fw-bold">Showing Results</h3>
        </Col>
        <Col>
          <div className="toggle">
            <input type="checkbox" onChange={(e) => handleContentClick(e)} />
            <label className="l">Content</label>
            <label className="r">Content Creators</label>
          </div>
        </Col>
      </Row>

      <Row className="my-4">
        <h4 className="fw-bold">Content Creators</h4>
      </Row>

      <div className="grid-main">
        {val.map((item, i) => {
          const date = new Date(
            item.userid !== null ? item.userid?.createdAt : new Date()
          );

          const options = { day: "2-digit", month: "short", year: "numeric" };
          const formattedDate = date.toLocaleDateString("en-US", options);
          return (
            <>
              {/* {console.log(item.img)} */}
              <div
                className="item"
                key={item._id}
                onClick={() => (setSelectedItemId(item._id), setModal(true))}
              >
                <Col>
                  <div style={{ maxHeight: "300px" }}>
                    <img
                      style={{ borderRadius: "10px" }}
                      className="w-100"
                      height={300}
                      src={
                        item.img.includes("https")
                          ? item.img
                          : `${base_URL + "/" + item.img}`
                      }
                      alt=""
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h3 className="fw-bold">{item?.creatorName}</h3>
                    <p className="mb-2">User since: {formattedDate}</p>
                    <div className="d-flex justify-content-sm-between">
                      <div className="d-flex align-items-center">
                        <PrettyRating
                          value={2.5}
                          icons={icons.star}
                          colors={colors.star}
                        />
                        <span
                          style={{ color: "#FCAF3B" }}
                          className="ms-2 fw-bold"
                        >
                          (4.5)
                        </span>
                      </div>
                      <p style={{ color: "#5F56C6" }} className="fw-bold">
                        12.2k Reviews
                      </p>
                    </div>
                  </div>
                </Col>
              </div>
            </>
          );
        })}
      </div>
      {content && content === "Content" ? (
        <Modal
          key={Producdetail?._id}
          className="mdlg ccm"
          isOpen={modal}
          toggle={handleclosemodal}
          // {...args}
        >
          <ModalBody>
            <Row>
              <Col></Col>
              <Col lg="1" className="d-flex justify-content-right">
                <MdCancelPresentation
                  className="cancelbuttondata"
                  onClick={handleclosemodal}
                  size={30}
                />
              </Col>
            </Row>
            <div className="main-content">
              <h2>
                {Producdetail?.resTitle?.slice(0, 80)}
                {Producdetail?.desc?.slice(0, 80)}
              </h2>
              <Row className="top-icon">
                <Col lg="10">
                  {" "}
                  <Link to="#">
                    <img src={mdicon1} alt="" />
                  </Link>
                  <Link to="#">
                    <img src={mdicon2} alt="" />
                  </Link>
                </Col>
                <Col
                  style={{ textAlign: "right" }}
                  lg="2"
                  key={Producdetail?._id}
                >
                  {handlebookmark === "true" ? (
                    <BsFillBookmarkCheckFill
                      size={35}
                      key={Producdetail?._id}
                      className="addbookmark  "
                      color="#5f56c6"
                      onClick={() => removebookmark(Producdetail?._id)}
                    />
                  ) : (
                    <BsBookmark
                      size={35}
                      key={Producdetail?._id}
                      onClick={() => addbookmark(Producdetail?._id)}
                      className="addbookmark "
                      color="warning "
                    />
                  )}
                </Col>
              </Row>
              <div className="tag-list">
                <div className="tag-1">
                  <h5>
                    <span>
                      <img src={icons} alt="" width="30px" />
                    </span>
                    Topic:
                  </h5>
                </div>
                <div className=" d-flex tag-2">
                  {Producdetail?.topics?.map((val) => (
                    <Link className="d-flex " to="#">
                      {val} &nbsp;
                    </Link>
                  ))}
                </div>
              </div>

              <hr></hr>
            </div>

            <div className="mid">
              <h5 className="mt-3">
                Link :
                {/* <a
                                        target="_blank" href={Producdetail?.link}>
                                        {Producdetail?.link}
                                    </a> */}
                <a
                  style={{ wordBreak: "break-word" }}
                  target="_blank"
                  href={Producdetail?.link}
                >
                  {" "}
                  {Producdetail?.link}
                </a>
              </h5>
              <div className="mid-content">
                <Row>
                  <Col lg="6" md="6">
                    <div className="mid-1 mb-3">
                      <div className="mid-1-a">
                        <img src={createricon} alt="" />
                      </div>
                      <div className="mid-1-b">
                        <p>Creator:</p>
                        <h4>{Producdetail?.creatorName}</h4>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" md="6">
                    <div className="mid-1 mb-3 ">
                      <div className="mid-1-a">
                        <img src={usericon} alt="" />
                      </div>
                      <div className="mid-1-b">
                        <p>Submitted by:</p>
                        <h4>{Producdetail?.userid?.display_name}</h4>
                      </div>
                    </div>
                  </Col>
                  <div className="d-flex flex-wrap mt-3 gap-3">
                    <div>
                      <div className="mid-1 mb-3 tt-2">
                        <div className="mid-1-a">
                          <img src={typeicon} alt="" width="35px" />
                        </div>
                        <div className="mid-1-b tt-1">
                          <p>Type:</p>
                          <Link to="#">{Producdetail?.type}</Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mid-1 mb-3 tt-2">
                        <div className="mid-1-a">
                          <img src={formaticon} alt="" width="35px" />
                        </div>
                        <div className="mid-1-b tt-1">
                          <p>Format:</p>
                          <Link to="#">{Producdetail?.format}</Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mid-1 mb-3 tt-2">
                        <div className="mid-1-a">
                          <img src={diffculty} alt="" width="35px" />
                        </div>
                        <div className="mid-1-b tt-1">
                          <p>Category:</p>
                          <Link>{Producdetail?.category?.title}</Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mid-1 mb-3 tt-2">
                        <div className="mid-1-a">
                          <img src={yearicon} alt="" width="35px" />
                        </div>
                        <div className="mid-1-b tt-1">
                          <p>Year:</p>

                          {Producdetail?.relYear?.map((year) => (
                            <Link>{year?.yrName}</Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mid-1 mb-3 tt-2">
                        <div className="mid-1-a">
                          <img src={ratingM} alt="" width="35px" />
                        </div>
                        <div className="mid-1-b tt-1">
                          <p>Ratings:</p>
                          <Link to="#">[{Producdetail?.ava_rating}]</Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mid-1 mb-3 tt-2">
                        <div className="mid-1-a">
                          <img src={submiticon} alt="" width="35px" />
                        </div>
                        <div className="mid-1-b tt-1">
                          <p>Submitted:</p>
                          <Link to="#">
                            <Moment format="ll">
                              {Producdetail?.createdAt}
                            </Moment>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mid-1 mb-3 tt-2">
                        <div className="mid-1-a">
                          <img src={languageicon} alt="" width="35px" />
                        </div>
                        <div className="mid-1-b tt-1">
                          <p>Language:</p>
                          {Producdetail?.language?.map((lang) => (
                            <span>{lang?.language} </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </div>

            <hr></hr>

            <div className="description mt-3 mb-3">
              <h4>Description:</h4>
              <p>{Producdetail?.desc?.slice(0, 80)}</p>
            </div>

            <hr></hr>

            <div className="rating-box">
              <Row>
                <Col lg="6">
                  <div className="rat-left mt-3">
                    <h4>Customer Rating</h4>
                    <div className="">
                      <PrettyRating
                        value={Producdetail?.ava_rating}
                        icons={icons.star}
                        colors={colors.star}
                      />
                      <span className="starratinginno">
                        {Producdetail?.ava_rating != 0 ? (
                          <>[{Producdetail?.ava_rating}] of 5 Stars</>
                        ) : null}
                      </span>
                      <br></br>
                      <span className="mt-3">
                        {getonecomment?.length}- Customers Reviews
                      </span>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  {" "}
                  <h4 className="mt-3">Write your Review</h4>
                  <ReactStars {...secondExample} />
                </Col>
              </Row>
              <Row>
                <Col lg="12" key={Producdetail?._id}>
                  <div className="rat-right">
                    <Row></Row>

                    <Row lg="12">
                      <form key={Producdetail?._id}>
                        <textarea
                          key={Producdetail?._id}
                          value={text}
                          name="text"
                          onChange={onchangehandler}
                          className="form-control st-taetarea"
                          placeholder=" Enter your Review if you want"
                        ></textarea>
                        <Button
                          // onClick={handleSubmit}
                          onClick={(e) => handleSubmit(e, Producdetail?._id)}
                          className="bt-st reviewbutton mb-3"
                        >
                          Submit
                        </Button>
                      </form>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
            <Row key={Producdetail?._id}>
              <Col lg="4"></Col>
            </Row>
            <hr></hr>
            <div className="review-list mt-3  ">
              <h4>Reviews:</h4>
              {getonecomment?.map((value) => (
                <div className="re-list" key={value._id}>
                  <div className="d-flex justify-content-right">
                    {value?.userid?._id == localStorage.getItem("userId") ? (
                      <>
                        <h6>
                          <AiFillEdit onClick={handleeditcomment} size="25px" />
                        </h6>
                      </>
                    ) : null}
                  </div>
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
                      <PrettyRating
                        value={value?.rating}
                        icons={icons.star}
                        colors={colors.star}
                      />
                    </div>
                  </div>
                  <div className="re-btext mt-3">
                    <Row>
                      <Col lg="10"> {value?.comment}</Col>
                      <Col lg="2">
                        {value?.userid?._id ==
                        localStorage.getItem("userId") ? (
                          <>
                            <h6>
                              <AiFillEdit
                                onClick={() => handleeditcomment(value?._id)}
                                // onClick={
                                //
                                // }
                                size="25px"
                              />
                            </h6>
                            <Modal
                              className="ccm"
                              isOpen={editmodal}
                              toggle={toggleedit}
                              // {...args}
                            >
                              <ModalHeader toggle={toggleedit}>
                                Edit Your Comment
                              </ModalHeader>
                              <ModalBody>
                                <Row>
                                  <Col>
                                    <Label>Edit Review</Label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder={value?.comment}
                                      value={upcom}
                                      onChange={(e) => setUpcom(e.target.value)}
                                      aria-describedby="inputGroupPrepend"
                                      required
                                    />
                                  </Col>
                                  <Col>
                                    <ReactStars
                                      style={{
                                        size: "25px",
                                      }}
                                      {...secondExample}
                                    />
                                  </Col>
                                </Row>

                                <Col className="d-flex justify-content-center">
                                  <button
                                    style={{
                                      color: "white",
                                    }}
                                    onClick={() => {
                                      editcomment(
                                        value?._id,
                                        Producdetail?._id,
                                        value?.rating
                                      );
                                    }}
                                    class="btn success"
                                  >
                                    Edit your comment
                                  </button>
                                </Col>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={toggleedit}>
                                  Do Something
                                </Button>{" "}
                                <Button color="secondary" onClick={toggleedit}>
                                  Cancel
                                </Button>
                              </ModalFooter>
                            </Modal>
                          </>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <div>
                        <>
                          <Row>
                            <Col>
                              <Label>Edit Review</Label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder={value?.comment}
                                value={upcom}
                                onChange={(e) => setUpcom(e.target.value)}
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                            </Col>
                            <Col>
                              <ReactStars
                                style={{
                                  size: "25px",
                                }}
                                {...secondExample}
                              />
                            </Col>
                            <Col className="d-flex justify-content-center">
                              <button
                                style={{
                                  color: "white",
                                }}
                                onClick={() => {
                                  editcomment(value?._id);
                                }}
                                class="btn success"
                              >
                                Edit your comment
                              </button>
                            </Col>
                          </Row>
                        </>
                      </div>
                    </Row>
                  </div>
                </div>
              ))}
            </div>
          </ModalBody>
        </Modal>
      ) : (
        <>
          <Modal
            key={contentCretorDetail?._id}
            className="mdlg ccm"
            isOpen={modal}
            toggle={handleclosemodal}
            // {...args}
          >
            <ModalBody>
              <Row>
                <Col></Col>
                <Col lg="1" className="d-flex justify-content-right">
                  <MdCancelPresentation
                    className="cancelbuttondata"
                    onClick={handleclosemodal}
                    size={30}
                  />
                </Col>
              </Row>
              <div className="main-content">
                <h2>
                  {contentCretorDetail?.resTitle?.slice(0, 80)}
                  {contentCretorDetail?.desc?.slice(0, 80)}
                </h2>
                <Row className="top-icon">
                  <Col lg="10">
                    {" "}
                    <Link to="#">
                      <img src={mdicon1} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={mdicon2} alt="" />
                    </Link>
                  </Col>
                  <Col
                    style={{ textAlign: "right" }}
                    lg="2"
                    key={contentCretorDetail?._id}
                  >
                    {handlebookmark === "true" ? (
                      <BsFillBookmarkCheckFill
                        size={35}
                        key={contentCretorDetail?._id}
                        className="addbookmark  "
                        color="#5f56c6"
                        onClick={() => removebookmark(contentCretorDetail?._id)}
                      />
                    ) : (
                      <BsBookmark
                        size={35}
                        key={contentCretorDetail?._id}
                        onClick={() => addbookmark(contentCretorDetail?._id)}
                        className="addbookmark "
                        color="warning "
                      />
                    )}
                  </Col>
                </Row>
                <div className="tag-list">
                  <div className="tag-1">
                    <h5>
                      <span>
                        <img src={icons} alt="" width="30px" />
                      </span>
                      Topic:
                    </h5>
                  </div>
                  <div className=" d-flex tag-2">
                    {/* {contentCretorDetail?.topics?.map(
                                                (val) => (
                                                    <Link
                                                        className="d-flex "
                                                        to="#"
                                                    >
                                                        {val} &nbsp;
                                                    </Link>
                                                )
                                            )} */}
                    {contentCretorDetail?.topics}
                  </div>
                </div>

                <hr></hr>
              </div>

              <div className="mid">
                <h5 className="mt-3">
                  Link :
                  {/* <a
    target="_blank" href={contentCretorDetail?.link}>
    {contentCretorDetail?.link}
</a> */}
                  <a
                    style={{ wordBreak: "break-word" }}
                    target="_blank"
                    href={contentCretorDetail?.link}
                  >
                    {" "}
                    {contentCretorDetail?.link}
                  </a>
                </h5>
                <div className="mid-content">
                  <Row>
                    <Col lg="6" md="6">
                      <div className="mid-1 mb-3">
                        <div className="mid-1-a">
                          <img src={createricon} alt="" />
                        </div>
                        <div className="mid-1-b">
                          <p>Creator:</p>
                          <h4>{contentCretorDetail?.creatorName}</h4>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6" md="6">
                      <div className="mid-1 mb-3 ">
                        <div className="mid-1-a">
                          <img src={usericon} alt="" />
                        </div>
                        <div className="mid-1-b">
                          <p>Submitted by:</p>
                          <h4>{contentCretorDetail?.userid?.username}</h4>
                        </div>
                      </div>
                    </Col>
                    <div className="d-flex flex-wrap gap-3 mt-3">
                      <div>
                        <div className="mid-1 mb-3 tt-2 pe-3">
                          <div className="mid-1-a">
                            <img src={formaticon} alt="" width="35px" />
                          </div>
                          <div className="mid-1-b tt-1">
                            <p>Format:</p>
                            <Link to="#">{contentCretorDetail?.format}</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mid-1 mb-3 tt-2 pe-3">
                          <div className="mid-1-a">
                            <img src={diffculty} alt="" width="35px" />
                          </div>
                          <div className="mid-1-b tt-1">
                            <p>Category:</p>
                            <Link>{contentCretorDetail?.category?.title}</Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mid-1 mb-3 tt-2 pe-3">
                          <div className="mid-1-a">
                            <img src={ratingM} alt="" width="35px" />
                          </div>
                          <div className="mid-1-b tt-1">
                            <p>Ratings:</p>
                            <Link to="#">
                              {contentCretorDetail?.avarageRating === null
                                ? 0
                                : contentCretorDetail?.avarageRating?.toFixed(
                                    2
                                  )}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mid-1 mb-3 tt-2 pe-3">
                          <div className="mid-1-a">
                            <img src={submiticon} alt="" width="35px" />
                          </div>
                          <div className="mid-1-b tt-1">
                            <p>Submitted:</p>
                            <Link to="#">
                              <Moment format="ll">
                                {contentCretorDetail?.createdAt}
                              </Moment>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mid-1 mb-3 tt-2 pe-3">
                          <div className="mid-1-a">
                            <img src={languageicon} alt="" width="35px" />
                          </div>
                          <div className="mid-1-b tt-1">
                            <p>Language:</p>
                            {contentCretorDetail?.language?.map((lang) => (
                              <span>{lang?.language} </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>

              <hr></hr>

              <div className="description mt-3 mb-3">
                <h4>Description:</h4>
                <p>{contentCretorDetail?.desc?.slice(0, 80)}</p>
              </div>

              <hr></hr>

              <div className="rating-box">
                <Row>
                  <Col lg="6">
                    <div className="rat-left mt-3">
                      <h4>Customer Rating</h4>
                      <div className="">
                        <PrettyRating
                          value={
                            contentCretorDetail?.avarageRating === null
                              ? 0
                              : contentCretorDetail?.avarageRating?.toFixed(2)
                          }
                          icons={icons.star}
                          colors={colors.star}
                        />
                        <span className="starratinginno">
                          {contentCretorDetail?.avarageRating != 0 ? (
                            <>
                              [
                              {contentCretorDetail?.avarageRating === null
                                ? 0
                                : contentCretorDetail?.avarageRating?.toFixed(
                                    2
                                  )}
                              ] of 5 Stars
                            </>
                          ) : (
                            0
                          )}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    {" "}
                    <h4 className="mt-3">Write your Review</h4>
                    <ReactStars {...secondExample} />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" key={contentCretorDetail?._id}>
                    <div className="rat-right">
                      <Row></Row>

                      <Row lg="12">
                        <form key={contentCretorDetail?._id}>
                          <textarea
                            key={contentCretorDetail?._id}
                            value={text}
                            name="text"
                            onChange={onchangehandler}
                            className="form-control st-taetarea"
                            placeholder=" Enter your Review if you want"
                          ></textarea>
                          <Button
                            // onClick={handleSubmit}
                            onClick={(e) =>
                              handleSubmit(e, contentCretorDetail?._id)
                            }
                            className="bt-st reviewbutton mb-3"
                          >
                            Submit
                          </Button>
                        </form>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row key={contentCretorDetail?._id}>
                <Col lg="4"></Col>
              </Row>
              <hr></hr>
              <div className="review-list mt-3  ">
                <h4>Reviews:</h4>
                {contentCretorDetail?.comment?.map((value) => (
                  <div className="re-list" key={value._id}>
                    <div className="d-flex justify-content-right">
                      {value?.userid?._id == localStorage.getItem("userId") ? (
                        <>
                          <h6>
                            <AiFillEdit
                              onClick={handleeditcomment}
                              size="25px"
                            />
                          </h6>
                        </>
                      ) : null}
                    </div>
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
                        <PrettyRating
                          value={value?.rating}
                          icons={icons.star}
                          colors={colors.star}
                        />
                      </div>
                    </div>
                    <div className="re-btext mt-3">
                      <Row>
                        <Col lg="10"> {value?.comment}</Col>
                        <Col lg="2">
                          {value?.userid?._id ==
                          localStorage.getItem("userId") ? (
                            <>
                              <h6>
                                <AiFillEdit
                                  onClick={() => handleeditcomment(value?._id)}
                                  // onClick={
                                  //
                                  // }
                                  size="25px"
                                />
                              </h6>
                              <Modal
                                className="ccm"
                                isOpen={editmodal}
                                toggle={toggleedit}
                                // {...args}
                              >
                                <ModalHeader toggle={toggleedit}>
                                  Edit Your Comment
                                </ModalHeader>
                                <ModalBody>
                                  <Row>
                                    <Col>
                                      <Label>Edit Review</Label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder={value?.comment}
                                        value={upcom}
                                        onChange={(e) =>
                                          setUpcom(e.target.value)
                                        }
                                        aria-describedby="inputGroupPrepend"
                                        required
                                      />
                                    </Col>
                                    <Col>
                                      <ReactStars
                                        style={{
                                          size: "25px",
                                        }}
                                        {...secondExample}
                                      />
                                    </Col>
                                  </Row>

                                  <Col className="d-flex justify-content-center">
                                    <button
                                      style={{
                                        color: "white",
                                      }}
                                      onClick={() => {
                                        editcomment(
                                          value?._id,
                                          contentCretorDetail?._id,
                                          value?.rating
                                        );
                                      }}
                                      class="btn success"
                                    >
                                      Edit your comment
                                    </button>
                                  </Col>
                                </ModalBody>
                                <ModalFooter>
                                  <Button color="primary" onClick={toggleedit}>
                                    Do Something
                                  </Button>{" "}
                                  <Button
                                    color="secondary"
                                    onClick={toggleedit}
                                  >
                                    Cancel
                                  </Button>
                                </ModalFooter>
                              </Modal>
                            </>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <div>
                          <>
                            <Row>
                              <Col>
                                <Label>Edit Review</Label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={value?.comment}
                                  value={upcom}
                                  onChange={(e) => setUpcom(e.target.value)}
                                  aria-describedby="inputGroupPrepend"
                                  required
                                />
                              </Col>
                              <Col>
                                <ReactStars
                                  style={{
                                    size: "25px",
                                  }}
                                  {...secondExample}
                                />
                              </Col>
                              <Col className="d-flex justify-content-center">
                                <button
                                  style={{
                                    color: "white",
                                  }}
                                  onClick={() => {
                                    editcomment(value?._id);
                                  }}
                                  class="btn success"
                                >
                                  Edit your comment
                                </button>
                              </Col>
                            </Row>
                          </>
                        </div>
                      </Row>
                    </div>
                  </div>
                ))}
              </div>
            </ModalBody>
          </Modal>
        </>
      )}

      <Row>
        <button
          style={{
            width: "fit-content",
            margin: "30px auto 0",
            backgroundColor: "#FC9357",
            fontSize: "24px",
          }}
          className="text-white fw-bold border-0 rounded-5 py-2 px-4"
          onClick={() => seeMore()}
        >
          See More
        </button>
      </Row>
    </Container>
  );
};

export default ContentCreators;
