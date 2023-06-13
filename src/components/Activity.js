import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import axios from "axios";
import axiosClient from "../components/axiosConfig";

function Activity() {
  const [userdata, setUserData] = useState({});
  const id = localStorage.getItem("userId");

  useEffect(() => {
    axiosClient
      .get(`/user/getoneUser/${id}`)
      .then((response) => {
        // console.log("getdata", response.data.data);
        setUserData(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data.data);
      });
  }, []);
  return (
    <div>
      Your last Seen :{`     `}
      <Moment format="lll">{userdata.updatedAt}</Moment>
    </div>
  );
}

export default Activity;
