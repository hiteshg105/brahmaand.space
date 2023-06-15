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
      {/* <div
        style={{ border: "3px solid #000" }}
        className="mt-5 rounded-2 px-3 py-2 px-xl-5 py-xl-4"
      >
        <Row>
          <Col>
            <p
              className="countdown-timer"
              style={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {days.toString().length === 1 ? `${days}0` : days}
            </p>
          </Col>{" "}
          <Col>
            <p
              className="countdown-timer"
              style={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {hours.toString().length === 1 ? `0${hours}` : hours}
            </p>
          </Col>{" "}
          <Col>
            <p
              className="countdown-timer"
              style={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {minutes.toString().length === 1 ? `0${minutes}` : minutes}
            </p>
          </Col>{""}
          <Col>
            <p
              className="countdown-timer"
              style={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {seconds.toString().length === 1 ? `0${seconds}` : seconds}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0 ms-1"
            >
              Days
            </p>
          </Col>
          <Col>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0 ms-3"
            >
              hours
            </p>
          </Col>
          <Col>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0 ms-2"
            >
              minutes
            </p>
          </Col>
          <Col>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              Seconds
            </p>
          </Col>
        </Row>
      </div> */}
      <div
        style={{ border: "3px solid #000" }}
        className="mt-5 rounded-2 px-3 py-2 px-xl-5 py-xl-4"
      >
        <Row
        // style={{ border: "3px solid #000" }}
        // className="d-flex align-items-center me-4 text-uppercase text-nowrap"
        >


          <Col style={{ width: "50px" }}>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
              className=""
            >
              {days <= 9 ? ("0" + days).slice(-2) : days}
            </p>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              Days
            </p>
          </Col>
          <Col style={{ width: "2px", fontSize: "20px" }} className="mt-1">:</Col>
          <Col style={{ width: "50px" }}>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
              className=""
            >
              {hours <= 9 ? ("0" + hours).slice(-2) : hours}

              {/* {hours} */}
            </p>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              hours
            </p>
          </Col>
          <Col style={{ width: "2px", fontSize: "20px" }} className="mt-1">:</Col>
          <Col style={{ width: "50px" }}>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
              className=""
            >
              {minutes <= 9 ? ("0" + minutes).slice(-2) : minutes}
              {/* {minutes} */}
            </p>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              minutes
            </p>
          </Col>
          <Col style={{ width: "2px", fontSize: "20px" }} className="mt-1">:</Col>
          <Col style={{ width: "50px" }}>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
              className=""
            >
              {seconds <= 9 ? ("0" + seconds).slice(-2) : seconds}

              {/* {seconds<=9} */}
            </p>
            <p
              style={{ fontSize: "12px", fontWeight: "bold" }}
              className="text-center p-0"
            >
              Seconds
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CountDown;
