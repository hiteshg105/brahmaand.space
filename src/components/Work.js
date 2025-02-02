import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import axiosConfig from "../components/axiosConfig";
import "moment-timezone";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";

function Work() {
  const [howworks, sethowworks] = useState([]);
  useEffect(() => {
    axiosConfig
      .get(`/admin/get_howWorks`)
      .then((response) => {
        sethowworks(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data.data);
      });
  }, []);

  return (
    <>
      <div
        style={{
          margin: "40px",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}> How it works</h1>
        <Container>
          <Row className="mt-2 mb-2">
            <br />
            <br />
            <h3 className="mt-4 mb-2"> How Brahmaand.Space works?</h3>
            <p>
              
            </p>

            {howworks?.map((value) => (
              <>
                <p>{ReactHtmlParser(value.desc)}</p>
                <div className="container mt-4 ">
                  <span className="mb-3">UpdatedAt : </span>
                  <Moment format="lll">
                    {ReactHtmlParser(value.updatedAt)}
                  </Moment>
                </div>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Work;
