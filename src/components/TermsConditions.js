import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import axios from "axios";

function TermsConditions() {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    privacypolicy();
  }, []);

  const privacypolicy = () => {
    axios
      .get(`http://3.7.173.138:9000/admin/get_term_cond`)
      .then((res) => {
        console.log(res.data.data);
        setfirst(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <Container>
          <h1
            className="all mx-1 mt-5 mb-4"
            style={{ textAlign: "center", fontFamily: "GT Walsheim Pro" }}
          >
            Terms and Conditions
          </h1>
          <br />
          <h2> Terms and Conditions</h2>
          <hr />
          {first?.map((first) => (
            <h3 className="mt-3">{first.desc}</h3>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default TermsConditions;
