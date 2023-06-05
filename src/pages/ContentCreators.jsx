import { Button, Col, Container, Row } from "react-bootstrap"
import PrettyRating from "pretty-rating-react";

import img from '../images/creator-img.png';
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const ContentCreators = () => {
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        },
    };

    const colors = {
        star: ["#FCAF3B", "#FCAF3B", "#FCAF3B"],
    };

    return (
        <Container className="content-creator-main mt-5" >
            <Row className="d-flex justify-content-between">
                <Col>
                    <h3 className="fw-bold">Showing Results</h3>
                </Col>
                <Col>
                    <div className="toggle">
                        <input type="checkbox" />
                        <label className="l">Content</label>
                        <label className="r">Content Creators</label>
                    </div>
                </Col>
            </Row>

            <Row className="my-4">
                <h4 className="fw-bold">Content Creators</h4>
            </Row>

            <div className="grid-main justify-content-center justify-content-md-between">

                <div className="item">
                    <Col>
                        <div>
                            <img style={{ borderRadius: "10px" }} className="w-100 h-auto" src={img} alt="" />
                        </div>
                        <div className="py-3 px-3">
                            <h3 className="fw-bold">Sonakshi Singh</h3>
                            <p className="mb-2">User since: 21May 2022</p>
                            <div className="d-flex justify-content-sm-between">
                                <div className="d-flex align-items-center">
                                    <PrettyRating
                                        value={2.5}
                                        icons={icons.star}
                                        colors={colors.star}
                                    />
                                    <span style={{ color: "#FCAF3B" }} className="ms-2 fw-bold">(4.5)</span>
                                </div>
                                <p style={{ color: "#5F56C6" }} className="fw-bold">12.2k Reviews</p>
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="item">
                    <Col>
                        <div>
                            <img style={{ borderRadius: "10px" }} className="w-100 h-auto" src={img} alt="" />
                        </div>
                        <div className="py-3 px-3">
                            <h3 className="fw-bold">Sonakshi Singh</h3>
                            <p className="mb-2">User since: 21May 2022</p>
                            <div className="d-flex justify-content-sm-between">
                                <div className="d-flex align-items-center">
                                    <PrettyRating
                                        value={2.5}
                                        icons={icons.star}
                                        colors={colors.star}
                                    />
                                    <span style={{ color: "#FCAF3B" }} className="ms-2 fw-bold">(4.5)</span>
                                </div>
                                <p style={{ color: "#5F56C6" }} className="fw-bold">12.2k Reviews</p>
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="item">
                    <Col>
                        <div>
                            <img style={{ borderRadius: "10px" }} className="w-100 h-auto" src={img} alt="" />
                        </div>
                        <div className="py-3 px-3">
                            <h3 className="fw-bold">Sonakshi Singh</h3>
                            <p className="mb-2">User since: 21May 2022</p>
                            <div className="d-flex justify-content-sm-between">
                                <div className="d-flex align-items-center">
                                    <PrettyRating
                                        value={2.5}
                                        icons={icons.star}
                                        colors={colors.star}
                                    />
                                    <span style={{ color: "#FCAF3B" }} className="ms-2 fw-bold">(4.5)</span>
                                </div>
                                <p style={{ color: "#5F56C6" }} className="fw-bold">12.2k Reviews</p>
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="item">
                    <Col>
                        <div>
                            <img style={{ borderRadius: "10px" }} className="w-100 h-auto" src={img} alt="" />
                        </div>
                        <div className="py-3 px-3">
                            <h3 className="fw-bold">Sonakshi Singh</h3>
                            <p className="mb-2">User since: 21May 2022</p>
                            <div className="d-flex justify-content-sm-between">
                                <div className="d-flex align-items-center">
                                    <PrettyRating
                                        value={2.5}
                                        icons={icons.star}
                                        colors={colors.star}
                                    />
                                    <span style={{ color: "#FCAF3B" }} className="ms-2 fw-bold">(4.5)</span>
                                </div>
                                <p style={{ color: "#5F56C6" }} className="fw-bold">12.2k Reviews</p>
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="item">
                    <Col>
                        <div>
                            <img style={{ borderRadius: "10px" }} className="w-100 h-auto" src={img} alt="" />
                        </div>
                        <div className="py-3 px-3">
                            <h3 className="fw-bold">Sonakshi Singh</h3>
                            <p className="mb-2">User since: 21May 2022</p>
                            <div className="d-flex justify-content-sm-between">
                                <div className="d-flex align-items-center">
                                    <PrettyRating
                                        value={2.5}
                                        icons={icons.star}
                                        colors={colors.star}
                                    />
                                    <span style={{ color: "#FCAF3B" }} className="ms-2 fw-bold">(4.5)</span>
                                </div>
                                <p style={{ color: "#5F56C6" }} className="fw-bold">12.2k Reviews</p>
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="item">
                    <Col>
                        <div>
                            <img style={{ borderRadius: "10px" }} className="w-100 h-auto" src={img} alt="" />
                        </div>
                        <div className="py-3 px-3">
                            <h3 className="fw-bold">Sonakshi Singh</h3>
                            <p className="mb-2">User since: 21May 2022</p>
                            <div className="d-flex justify-content-sm-between">
                                <div className="d-flex align-items-center">
                                    <PrettyRating
                                        value={2.5}
                                        icons={icons.star}
                                        colors={colors.star}
                                    />
                                    <span style={{ color: "#FCAF3B" }} className="ms-2 fw-bold">(4.5)</span>
                                </div>
                                <p style={{ color: "#5F56C6" }} className="fw-bold">12.2k Reviews</p>
                            </div>
                        </div>
                    </Col>
                </div>

            </div>

            <Row>
                <button style={{ width: "fit-content", margin: "30px auto 0", backgroundColor: "#FC9357", fontSize: "24px" }} className="text-white fw-bold border-0 rounded-5 py-2 px-4">
                    See More
                </button>
            </Row>
        </Container >
    )
}

export default ContentCreators 