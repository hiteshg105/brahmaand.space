import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/ModulePage.css";
import {
  Container,
  Card,
  Input,
  Row,
  Button,
  Col,
  CardMedia,
} from "reactstrap";
import { InputGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

function AllSubCategory() {
  let Params = useParams();
  const navigate = useNavigate();

  const [subcatgry, setsubCatgry] = useState([]);

  useEffect(() => {
    // console.log("Params", Params);
    allsubcategory();
  }, [Params]);

  const allsubcategory = () => {
    axios

      .get(`https://backend.brahmaand.space/admin/listbycategory/${Params.id}`)
      .then((response) => {
        // console.log(response.data.data);
        if (response.data.data.length === 0) {
          swal("No Product found for this Category");
          // navigate("/allcategory");
          navigate(-1);
        } else {
          setsubCatgry(response.data.data);
        }
        // console.log(response.data.data);

        // console.log("subcategory", response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  };
  return (
    <div>
      <p className="category mt-5 mb-2">
        {subcatgry[0]?.category.title !== null
          ? subcatgry[0]?.category.title
          : null}
      </p>
      <Container fluid className=" d-flex justify-content-center">
        <Container>
          <Row className="m-3 mb-4">
            {subcatgry?.map((value) => (
              <Col lg="3" md="6" sm="12" className="" key={value?.category._id}>
                <Link to={`/productList/${value._id}`}>
                  <div className="bg-1">
                    <div className="blackimage">
                      <img
                        className="imgCol"
                        src={value?.Subcat_img}
                        alt="img"
                      />
                      <div className=" d-flex content-bt newcontent">
                        <Row className="  mt-2">
                          <Button className="btlisting">
                            {value?.conent_count} - Listing
                          </Button>
                        </Row>
                      </div>
                    </div>
                    <div className="d-flex content-bt">
                      <p className="d-flex" style={{ color: "white" }}>
                        {value?.title}
                      </p>
                    </div>
                    {/* <div className=" d-flex content-bt">
                      <Row className="  mt-2">
                        <Button className="btlisting">
                          {value?.conent_count} - Listing
                        </Button>
                      </Row>
                    </div> */}
                  </div>
                </Link>
              </Col>
            ))}

            {/* <Col lg="3" md="6" sm="12">
              <Link to="/productList">
                <img className="imgCol" src={education} alt="img" />
                <div className="content-bt">
                  <p>Education</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link to="/productList">
                <img className="imgCol" src={healthcare} alt="img" />
                <div className="content-bt">
                  <p>Healthcare</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link to="/productList">
                <img className="imgCol" src={eatfoods} alt="img" />
                <div className="content-bt">
                  <p>Eat & Foods</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3" className="">
              <Link to="/productList">
                <img className="imgCol" src={entertainment} alt="img" />
                <div className="content-bt">
                  <p>Entertainment</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/productList">
                <img className="imgCol" src={finance} alt="img" />
                <div className="content-bt">
                  <p>Finance</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/productList">
                <img className="imgCol" src={technology} alt="img" />
                <div className="content-bt">
                  <p>Technology</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/productList">
                <img className="imgCol" src={travel} alt="img" />
                <div className="content-bt">
                  <p>Travel</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col> */}
          </Row>
          {/* <Row className="m-3 mb-4">
            <Col lg="3" md="6" sm="12" className="">
              <Link to="/productList">
                <img className="imgCol" src={business} alt="img" />
                <div className="content-bt">
                  <p>Business</p>
                  <Button className="btlisting">12 Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link to="/productList">
                <img className="imgCol" src={education} alt="img" />
                <div className="content-bt">
                  <p>Education</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link to="/productList">
                <img className="imgCol" src={healthcare} alt="img" />
                <div className="content-bt">
                  <p>Healthcare</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3" md="6" sm="12">
              <Link to="/productList">
                <img className="imgCol" src={eatfoods} alt="img" />
                <div className="content-bt">
                  <p>Eat & Foods</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3" className="">
              <Link to="/productList">
                <img className="imgCol" src={entertainment} alt="img" />
                <div className="content-bt">
                  <p>Entertainment</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/productList">
                <img className="imgCol" src={finance} alt="img" />
                <div className="content-bt">
                  <p>Finance</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/productList">
                <img className="imgCol" src={technology} alt="img" />
                <div className="content-bt">
                  <p>Technology</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
            <Col lg="3">
              <Link to="/productList">
                <img className="imgCol" src={travel} alt="img" />
                <div className="content-bt">
                  <p>Travel</p>
                  <Button className="bt">Listing</Button>
                </div>
              </Link>
            </Col>
          </Row> */}
        </Container>
      </Container>
    </div>
  );
}

export default AllSubCategory;
