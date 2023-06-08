import { Button, Col, Container, Row } from "react-bootstrap";
import PrettyRating from "pretty-rating-react";
import img from "../images/creator-img.png";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import axiosClient from "../components/axiosConfig";
import { useState } from "react";
import { useEffect } from "react";

// const base_URL = "https://backend.brahmaand.space/"
const base_URL = "http://localhost:9000";

const ContentCreators = ({ categry }) => {
    const [content, setContent] = useState("Content");
    // let [page,setPage] = useState(1);
    let [limit, setLimit] = useState(9);
    let [val, setVal] = useState([]);
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        },
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
        setLimit(limit + 9);
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

    return (
        <Container className="content-creator-main mt-5">
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
                            <div className="item" key={item._id}>
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
