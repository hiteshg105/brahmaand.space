import React, { useState, useEffect } from "react";
import "../../styles/ModulePage.css";
import axios from "axios";
import Head from "../../images/social-media-with-photo-frame-like-button-media-payer-pink-background-illustration 10.png";
import { useNavigate } from "react-router-dom";
import Hastag from "../../../src/components/home/Hastag";
import { Container, Row, Col, Card, Button } from "reactstrap";
import backimg from "../../assets/images/backimg.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import swal from "sweetalert";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

function Header() {
  const [searchbytopics, setSearchbytopics] = useState("");
  const [searchdata, setSearchdata] = useState("");

  const navigate = useNavigate();
  const [homesearch, setHomesearch] = useState("");

  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    console.log(newitem);
    return (
      <>
        <>
          {/* <span style={{ display: "block", textAlign: "left" }}>
            id: {item.id}
          </span> */}
          <span style={{ display: "block", textAlign: "left" }}>
            {item?.name}
          </span>
        </>
      </>
    );
  };

  const handlesearchtopics = () => {
    // console.log(searchdata);
    localStorage.setItem("searchdata", searchdata);
    if (searchdata !== "") {
      axios
        .post(`https://backend.brahmaand.space/user/search_topic_title`, {
          searchinput: searchdata,
        })
        .then((res) => {
          if (res.data.data.length == "0") {
            swal("No product found");
          } else {
            const search = res.data.data[0]?.sub_category;
            if (search !== "" && search !== undefined) {
              navigate(`/productsearch/${search}`);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // const data = "#learning , #media , #study,  #songs, #learning ";
    // const onedata = data.split(",");
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handlesearchtopics();
    }
  };
  const [newitem, setNewitem] = useState([]);
  useEffect(() => {
    handlesearchtopics();
    axios
      .get(`https://backend.brahmaand.space/admin/getallCategory`)
      .then((res) => {
        // console.log(res.data.data);
        setNewitem(res.data.data);
      })
      .then((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className="mainBg"
        style={{
          backgroundImage: `url(${backimg})`,
          width: "100%",
          padding: "0px 0px",
          backgroundSize: "cover",
        }}
      >
        {/* <section className="text_header ">
          <Container>
            <Row>
              <Col md="6">
                <div className="py-20">
                  <h1>Struggling to Find Relevant Content ?</h1>
                  <h5 className=" mx-30 ">
                    Find best quality content across the universe with our
                    community-driven database and AI-based search engine.
                  </h5>
                </div>
              </Col>
              <Col md="6">
                <div className="hImage col">
                  <img src={Head} className="imghead" />
                </div>
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </section> */}
        <section className="newdesign-main">
          <div className="hero-swiper">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{
                el: ".hero-swiper_swiper_pagination",
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div>
                  <img src="/hero-img.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="/hero-img.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="/hero-img.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="/hero-img.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src="/hero-img.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            style={{
              backgroundImage: "url(/bg.png)",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`hero-swiper_swiper_pagination d-flex justify-content-center gap-3 py-4 z-1`}
            ></div>
            <h1 style={{ fontSize: "69px" }} className="text-center p-0 m-0">
              Looking for best content across the world?
            </h1>
            <p
              style={{ fontSize: "45px", letterSpacing: "0.5px" }}
              className="text-center p-0 m-0 mt-3"
            >
              Finding the quality resources is not a hassle anymore
            </p>
            <div className="text-center p-0 m-0 mt-5 pb-4">
              <button
                style={{
                  backgroundColor: "#FC9358",
                  fontSize: "22px",
                  borderRadius: "24px",
                }}
                className="border-0 text-white fw-bold px-2 pe-3 py-2 me-5 opacity-75"
              >
                <div>
                  <span className="me-3">+</span>
                  <span>Submit a content</span>
                </div>
              </button>
              <button
                style={{
                  backgroundColor: "#FC9358",
                  fontSize: "22px",
                  borderRadius: "24px",
                }}
                className="border-0 text-white fw-bold px-2 pe-3 py-2 opacity-75"
              >
                <div>
                  <span className="me-3">+</span>
                  <span>Submit a content creator</span>
                </div>
              </button>
            </div>
            {/* <div
              style={{
                maxWidth: "90%",
                marginTop: "65px",
                paddingBottom: "150px",
              }}
              className="mx-auto"
            >
              <div className="position-relative">
                <input
                  style={{
                    padding: "40.5px 0 40.5px 105px",
                    borderRadius: "66.5px",
                    fontSize: "28px",
                    color: "#5C5C5C",
                  }}
                  className="w-100 border-0"
                  type="text"
                  placeholder="Searching best quality content here . . . "
                />
                <div
                  style={{
                    left: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="position-absolute"
                >
                  <img src="/search-icon.png" alt="search" />
                </div>
                <div
                  style={{
                    right: "30px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="h-100 position-absolute d-flex align-items-center"
                >
                  <button
                    style={{
                      backgroundColor: "#011D2B",
                      height: "80%",
                      fontSize: "28px",
                      borderRadius: "55px",
                      padding: "0 80px",
                    }}
                    className="text-white border-0"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <section>
        <div className="searchbar">
          <div className="inputarea">
            {/* <Row
              className=" align-item-center justify-content-center"
              style={{ width: "100%" }}
            >
              <Col lg="1"></Col>
              <Col className="mt-3 mb-2" lg="10">
                <ReactSearchAutocomplete
                  items={items}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  formatResult={formatResult}
                />
              </Col>
              <Col lg="1"></Col>
            </Row> */}

            <input
              type="text"
              placeholder="Search for the top content in any niche ... (e.g. Java) "
              className="search"
              onKeyDown={handleEnter}
              value={searchdata}
              onChange={(e) => {
                setSearchdata(e.target.value);
              }}
            />
          </div>
          <div className="text-center mt-3">
            <Button onClick={handlesearchtopics} className="btn btn-success">
              Search
            </Button>
          </div>
        </div>
      </section>
      <br />
      <br />
      <Hastag />

      <br />
      <br />
    </>
  );
}

export default Header;
