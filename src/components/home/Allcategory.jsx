import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../styles/ModulePage.css";
import { Container, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Allcategory() {
  const [categry, setCategry] = useState([]);

  useEffect(() => {
    allcategory();
  }, []);

  const allcategory = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/getallCategory`)
      .then((response) => {
        setCategry(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  };

  return (
    <div>
      <p className="category mt-5 mb-2">All Categories</p>
      <Container fluid className=" d-flex justify-content-center">
        <Container>
          <Row className="m-3 ">
            {categry?.map((value) => (
              <Col lg="3" md="6" sm="12" className="" key={value?._id}>
                <Link
                  className="imageblackoverlay"
                  to={`/subcategory/${value?._id}`}
                >
                  <div className="blackimage">
                    <img
                      className="imgCol allcategoryback"
                      src={value?.cat_img}
                      alt="img"
                    />
                  </div>
                  <div className=" d-flex content-bt">
                    <p className="d-flex " style={{ color: "white" }}>
                      {value?.title}
                    </p>
                  </div>
                  <div className=" d-flex content-bt">
                    <Row className=" allcategorymarginbutton mt-2">
                      <Button className="btlisting">
                        {value?.subCount} - Listing
                      </Button>
                    </Row>
                  </div>
                </Link>
                <Row></Row>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Allcategory;
