import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import moment from "moment";

const HomeCountDown = ({ endDate }) => {
  const [countdown, setCountdown] = useState(moment.duration().asSeconds());

  // console.log(endDate);
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

  const days = countdown > 0 ? Math.floor(countdown / 86400) : 0;
  const hours = countdown > 0 ? Math.floor((countdown % 86400) / 3600) : 0;
  const minutes = countdown > 0 ? Math.floor((countdown % 3600) / 60) : 0;
  const seconds = countdown > 0 ? Math.floor(countdown % 60) : 0;
  return (
    <Row
      style={{ border: "2px solid #BAB8B8", width: "fit-content" }}
      className="rounded-2 py-2 flex-nowrap mx-auto"
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
          {days} 
        </p>
        <p
          style={{ fontSize: "8px", fontWeight: "bold" }}
          className="text-center p-0"
        >
          Days
        </p>
        
      </Col> :
      <Col className="px-2">
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
          className="text-center p-0"
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
      <Col className="px-2">
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
          className="text-center p-0"
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
      <Col className="px-2">
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
          className="text-center p-0"
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
    </Row>
  );
};

export default HomeCountDown;
