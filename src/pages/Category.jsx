import { Button, Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import PrettyRating from "pretty-rating-react";

import img1 from '../images/hero-swiper-img-1.png';
import swiperLeft from '../images/swiper-img1.png';
import swiperRight from '../images/swiper-img2.png';
import versus from "../images/versus.png";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Category = () => {

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
                <div style={{ top: 0 }} className="position-absolute d-flex h-100 w-100">
                    <img className="w-100 object-fit-cover" src="/trending-bg.png" alt="bg" />
                </div>
                <h3 className="my-4 fw-bold">Trending</h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                    pagination={{
                        el: '.swiper_pagination',
                        clickable: true,
                    }}
                >
                    <SwiperSlide className="bg-white rounded-4">
                        <Container className="py-3 px-4">
                            <Row
                                style={{ border: "2px solid #BAB8B8", width: "fit-content" }}
                                className="rounded-2 py-2 flex-nowrap mx-auto mb-4"
                            >
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Days
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        hours
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        minutes
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Seconds
                                    </p>
                                </Col>
                            </Row>
                            <Row className="position-relative">
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperLeft} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperRight} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <div style={{ left: '50%', top: "40%", transform: "translate(-50%,-50%)" }} className="position-absolute text-center p-0">
                                    <img width={90} height={90} src={versus} alt="v/s" />
                                </div>
                            </Row>
                            <Row>
                                <Button
                                    style={{ borderRadius: "4px", width: "fit-content", backgroundColor: "#5F56C6" }}
                                    size="sm"
                                    className="m-0 border-0 mx-auto text-white px-3"
                                >
                                    Rate Now
                                </Button>
                            </Row>
                        </Container>
                    </SwiperSlide>

                    <SwiperSlide className="bg-white rounded-4">
                        <Container className="py-3 px-4">
                            <Row
                                style={{ border: "2px solid #BAB8B8", width: "fit-content" }}
                                className="rounded-2 py-2 flex-nowrap mx-auto mb-4"
                            >
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Days
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        hours
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        minutes
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Seconds
                                    </p>
                                </Col>
                            </Row>
                            <Row className="position-relative">
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperLeft} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperRight} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <div style={{ left: '50%', top: "40%", transform: "translate(-50%,-50%)" }} className="position-absolute text-center p-0">
                                    <img width={90} height={90} src={versus} alt="v/s" />
                                </div>
                            </Row>
                            <Row>
                                <Button
                                    style={{ borderRadius: "4px", width: "fit-content", backgroundColor: "#5F56C6" }}
                                    size="sm"
                                    className="m-0 border-0 mx-auto text-white px-3"
                                >
                                    Rate Now
                                </Button>
                            </Row>
                        </Container>
                    </SwiperSlide>

                    <SwiperSlide className="bg-white rounded-4">
                        <Container className="py-3 px-4">
                            <Row
                                style={{ border: "2px solid #BAB8B8", width: "fit-content" }}
                                className="rounded-2 py-2 flex-nowrap mx-auto mb-4"
                            >
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Days
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        hours
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        minutes
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Seconds
                                    </p>
                                </Col>
                            </Row>
                            <Row className="position-relative">
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperLeft} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperRight} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <div style={{ left: '50%', top: "40%", transform: "translate(-50%,-50%)" }} className="position-absolute text-center p-0">
                                    <img width={90} height={90} src={versus} alt="v/s" />
                                </div>
                            </Row>
                            <Row>
                                <Button
                                    style={{ borderRadius: "4px", width: "fit-content", backgroundColor: "#5F56C6" }}
                                    size="sm"
                                    className="m-0 border-0 mx-auto text-white px-3"
                                >
                                    Rate Now
                                </Button>
                            </Row>
                        </Container>
                    </SwiperSlide>

                    <SwiperSlide className="bg-white rounded-4">
                        <Container className="py-3 px-4">
                            <Row
                                style={{ border: "2px solid #BAB8B8", width: "fit-content" }}
                                className="rounded-2 py-2 flex-nowrap mx-auto mb-4"
                            >
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Days
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        hours
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        minutes
                                    </p>
                                </Col>
                                <Col className="px-2">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                        }}
                                        className="text-center p-0"
                                    >
                                        69
                                    </p>
                                    <p
                                        style={{ fontSize: "8px", fontWeight: "bold" }}
                                        className="text-center p-0"
                                    >
                                        Seconds
                                    </p>
                                </Col>
                            </Row>
                            <Row className="position-relative">
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperLeft} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center">
                                    <img className="w-100 h-auto rounded-4" src={swiperRight} alt="" />
                                    <Row>
                                        <h4 className="text-center">Carry Minati</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PrettyRating
                                                    value={3}
                                                    icons={icons.star}
                                                    colors={colors.star}
                                                />
                                                <span style={{ fontSize: "14px" }} className="ms-1">(4.00)</span>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <div style={{ left: '50%', top: "40%", transform: "translate(-50%,-50%)" }} className="position-absolute text-center p-0">
                                    <img width={90} height={90} src={versus} alt="v/s" />
                                </div>
                            </Row>
                            <Row>
                                <Button
                                    style={{ borderRadius: "4px", width: "fit-content", backgroundColor: "#5F56C6" }}
                                    size="sm"
                                    className="m-0 border-0 mx-auto text-white px-3"
                                >
                                    Rate Now
                                </Button>
                            </Row>
                        </Container>
                    </SwiperSlide>

                </Swiper>

                <div className="swiper_pagination d-flex justify-content-center gap-3 py-4 z-1">
                </div>

            </Row>
        </div >
    )
}

export default Category