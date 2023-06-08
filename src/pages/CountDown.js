import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import moment from "moment";

const CountDown = ({ endDate }) => {
  const [countdown, setCountdown] = useState(moment.duration().asSeconds());
  //   console.log(endDate);
  //   let date = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      //   console.log(now, "now");
      const duration = moment.duration(moment(endDate).diff(now));
      // console.log(duration);
      setCountdown(duration.asSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);
  // console.log(first)
  const days = countdown > 0 ? Math.floor(countdown / 86400) : 0;
  const hours = countdown > 0 ? Math.floor((countdown % 86400) / 3600) : 0;
  const minutes = countdown > 0 ? Math.floor((countdown % 3600) / 60) : 0;
  const seconds = countdown > 0 ? Math.floor(countdown % 60) : 0;

  return (
    <div className="d-flex justify-content-center">
      {/* <p
        style={{ fontSize: "20px", fontWeight: "bold" }}
        className="d-flex align-items-center me-4 text-uppercase text-nowrap"
      >
        Ends In:
      </p> */}
      <div style={{ border: "3px solid #000" }}
        className="mt-5 rounded-2 px-5 py-4"
      >
        <Row>
          <Col>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {days}
            </p>
          </Col> : 
          <Col>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {hours}
            </p>
          </Col> :
          <Col>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {minutes}
            </p>
          </Col> :
          <Col>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {seconds}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p
              style={{ fontSize: "8px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              Days
            </p>
          </Col>

          <Col>
            <p
              style={{ fontSize: "8px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              hours
            </p>
          </Col>
          <Col>
            <p
              style={{ fontSize: "8px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              minutes
            </p>
          </Col>
          <Col>
            <p
              style={{ fontSize: "8px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              Seconds
            </p>
          </Col>
        </Row>
      </div>
      {/* <Row
        style={{ border: "3px solid #000" }}
        className="rounded-2 px-3 py-2 flex-nowrap items-center"
      >
        

        <Col>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            {days}
          </p>
          <p
            style={{ fontSize: "8px", fontWeight: "bold" }}
            className="text-center p-0"
          >
            Days
          </p>
        </Col> :
        <Col>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            {hours}
          </p>
          <p
            style={{ fontSize: "8px", fontWeight: "bold" }}
            className="text-center p-0"
          >
            hours
          </p>
        </Col> :
        <Col>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            {minutes}
          </p>
          <p
            style={{ fontSize: "8px", fontWeight: "bold" }}
            className="text-center p-0"
          >
            minutes
          </p>
        </Col> :
        <Col>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            {seconds}
          </p>
          <p
            style={{ fontSize: "8px", fontWeight: "bold" }}
            className="text-center p-0"
          >
            Seconds
          </p>
        </Col>
      </Row> */}
    </div>
  );
};

export default CountDown;
