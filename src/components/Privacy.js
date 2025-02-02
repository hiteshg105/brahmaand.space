import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import axiosConfig from "../components/axiosConfig";
import ReactHtmlParser from "react-html-parser";

const Privacy = () => {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    privacypolicy();
  }, []);

  const privacypolicy = () => {
    axiosConfig
      .get(`/admin/getPrivcyPolicy`)
      .then((res) => {
        // console.log(res.data.data);
        setfirst(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <>
      <Container>
        <h1
          className="all mx-1 mt-5"
          style={{ textAlign: "center", fontFamily: "GT Walsheim Pro" }}
        >
          Privacy Policy
        </h1>
        <br />
        <h2 className="d-flex justify-content-center"> Our Policies</h2>
        <hr />
        <div>
          {first?.map((first) => (
            <h4 className="mt-3">{ReactHtmlParser(first.desc)}</h4>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Privacy;
