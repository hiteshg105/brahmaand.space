import React, { useState, useEffect } from "react";
import axios from "axios";
import HtmlParser from "react-html-parser";
import { Navigation, Scrollbar, A11y } from "swiper";
import ReactHtmlParser from "react-html-parser";
import ReactPaginate from "react-paginate";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import StarsRating from "stars-rating";
import "swiper/css";
import "../css/arrow.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import swal from "sweetalert";
import { BsFillBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import "../components/pagination.css";
import { FiFilter } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";

import Slider from "../components/filter/Slider";
import Pagination from "react-bootstrap/Pagination";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import "../styles/ModulePage.css";
import mdicon1 from "../assets/icons/mdicon-1.png";
import mdicon2 from "../assets/icons/mdicon-2.png";
import createricon from "../assets/icons/createricon.png";
import usericon from "../assets/icons/usericon.png";
import typeicon from "../assets/icons/typeicon.png";
import formaticon from "../assets/icons/formaticon.png";
import diffculty from "../assets/icons/diffculty.png";
import Allpromotion from "../components/filter/Allpromotion";
import languageicon from "../assets/icons/languageicon.png";
import yearicon from "../assets/icons/yearicon.png";
import submiticon from "../assets/icons/submiticon.png";
import {
  InputGroup,
  Row,
  Col,
  Form,
  Button,
  Container,
  ToggleButton,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../styles/Filter.css";
import AutoSearch from "../components/filter/AutoSearch";
import {
  FaHeart,
  FaStar,
  FaRegHeart,
  FaSearch,
  FaPhoenixFramework,
} from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import FilterList from "../components/filter/FilterList";
import RecentProductList from "../components/filter/RecentProductList";
import backimg from "../assets/images/backimg.png";
import axiosConfig from "../components/axiosConfig";
import Moment from "react-moment";
import PrettyRating from "pretty-rating-react";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import { CloudLightning, CornerDownLeft } from "react-feather";
import ProgressBar from "@ramonak/react-progress-bar";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Filter.css";
import { number } from "prop-types";
import { useFormState } from "react-hook-form";
import ContentCreators from "./ContentCreators";
import Swal from "sweetalert2";

function Productsearch(args) {
  const [parentState, setParentState] = useState("Content");

  const [modalsuggestion, setModalsuggestion] = useState(false);
  const togglesuggestion = () => setModalsuggestion(!modalsuggestion);
  const toggle = () => setModal(!modal);
  const toggleone = () => setModalone(!modalone);
  const [modal, setModal] = useState(false);
  const [modalone, setModalone] = useState(false);
  const [liked, setliked] = useState("");
  const [activelike, setActivelike] = useState("");
  const [Producdetail, setProductdetail] = useState([]);
  const [productdes, setProductdes] = useState("");
  const [text, settText] = useState("");
  const [getonecomment, setGetonecomment] = useState([]);
  const [categry, setCategry] = useState([]);
  const [promotion, setPromotion] = useState([]);
  const [promotId, setPromotId] = useState("");
  const [promotiondata, setPromotiondata] = useState({});
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");

  // const [searchrating, setSearchrating] = useState("");
  const [handlebookmark, setHandlebookmark] = useState("");
  const [myId, setmyId] = useState("");
  const [averageRating, setAverageRating] = useState("");
  const [searchitem, setSearchitem] = useState("");
  const [lngage, setLngage] = useState([]);
  const [relyear, setRelyear] = useState([]);
  const [contentyear, setContentyear] = useState("");
  const [language, setLanguage] = useState("");
  const [editmodal, setEditmodal] = useState(false);
  const [all, setAll] = useState("");
  const [display, setDisplay] = useState("d-none");
  const [display2, setDisplay2] = useState("d-none");

  const updateParentState = (newValue) => {
    setParentState(newValue);
  };

  // console.log("category::",category)
  const toggleedit = () => {
    setEditmodal(!editmodal);
  };
  const secondExample = {
    size: 50,
    count: 5,
    color: "#434b4d47",
    activeColor: "#d9ad26",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    // filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setRating(newValue);
    },
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handlesearchtopics();
    }
  };
  const [Filtertype, setFiltertype] = useState("");

  const handlefilter = (filtertype) => {
    // console.log("contentyear Id<<<<<<<<<?????", filtertype);
    // console.log(filtertype, "filtertype")
    setFiltertype(filtertype);

    axiosConfig
      .post(`/user/keyword_search_filter`, {
        searchinput: searchdata,
        language: language,
        relYear: filtertype,
        type: type,
        format: format,
      })
      .then((res) => {
        setCategry(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axiosConfig
      .post(`/user/promotion_search_filter`, {
        searchinput: searchdata,
        language: language,
        relYear: filtertype,
        type: type,
        format: format,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data !== "" && res.data.data !== null) {
          setPromotion(res.data.data);
          // localStorage.removeItem("searchdata");
        }
      })
      .catch((err) => {});
  };

  const navigate = useNavigate();
  const [upcom, setUpcom] = useState("");

  const [category, setCategory] = useState("");
  const [catgry, setCatgry] = useState("");
  const [searchData, setSearchData] = useState({
    data: { content: [], resource: [] },
  });
  // const [subcatry, setSubcatry] = useState("");

  const [allcatego, setAllcatego] = useState([]);
  const allcategory = () => {
    axiosConfig
      .get(`/admin/getallCategory`)

      .then((response) => {
        // console.log(response.data.data);
        setAllcatego(response.data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  // const [cat, setCat] = useState("");
  const [subctgry, setSubctgry] = useState([]);
  const [sub_category, setSub_category] = useState([]);

  useEffect(() => {
    // const params = catgry ? catgry : category;
    axiosConfig
      .get(`/admin/listbycategory/${catgry ? catgry : category}`)
      .then((response) => {
        // console.log(response.data.data, "sub cat");
        setSubctgry(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
  }, [catgry, category]);

  // console.log(subctgry, "subctgry")

  useEffect(() => {
    allcategory();
  }, []);

  useEffect(() => {
    setSubctgry([]);
    setCategory("");
    setSub_category([]);
    setCatgry("");
  }, [parentState]);
  const editcomment = (id, dataid, oldrating) => {
    // console.log(oldrating);
    if (rating == "") {
      setRating(oldrating);
    }
    // console.log(rating);
    const user = localStorage.getItem("userId");
    if (rating !== "" && upcom !== "") {
      axiosConfig
        .post(`/user/editCommentbyUser/${id}`, {
          submitresrcId: dataid,
          userid: user,
          comment: upcom,
          rating: rating,
        })
        .then((res) => {
          // console.log(res.data.data);
          swal("Submitted Successfully");
          toggleedit();
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  // console.log(Producdetail, "Searching Product");
  const handleeditcomment = (id) => {
    axiosConfig
      .get(`/admin/getone_coment_list/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setUpcom(res.data.data?.comment);
        toggleedit();
      })
      .catch((err) => {
        console.log(err);
      });
    const user = localStorage.getItem("userId");
  };
  // const handlesearchbylanguage = () => {
  //   if (language !== "" && language !== undefined) {
  //     axios
  //       .get(
  //         `https://backend.brahmaand.space/user/filterbyLanguage/${Params.id}/${language}`
  //       )
  //       .then((res) => {
  //         setCategry(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  const hastagdata = localStorage.getItem("hastag");
  const gethastagdata = () => {
    const hastagdata = localStorage.getItem("hastag");
    // if (hastagdata !== "" && hastagdata !== null) {
    //   axios
    //     .get(`https://backend.brahmaand.space/user/filterbyHashTag/${hastagdata}`)
    //     .then((res) => {
    //       console.log(res.data.data);
    //       if (res.data.data !== "" && res.data.data !== null) {
    //       }
    //       setCategry(res.data.data);
    //       // localStorage.removeItem("hastag");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // if (hastagdata !== "hastag")
    //   axios
    //     .post(`https://backend.brahmaand.space/user/search_topic_title`, {
    //       searchinput: hastagdata,
    //     })
    //     .then((res) => {
    //       if (res.data.data !== "" && res.data.data !== null) {
    //         setCategry(res.data.data);

    //         localStorage.setItem("hastag", "hastag");
    //       }
    //     })
    //     .catch((err) => {
    //       // console.log(err);
    //     });
  };

  const getYear = () => {
    axiosConfig
      .get(`/user/allYear`)
      .then((response) => {
        setRelyear(response.data.data);
      })
      .catch((error) => {});
  };
  const handleclosemodal = () => {
    setModal(false);
    setProductdetail("");
    setProductdes("");
  };
  const handleclosesuggestionmodal = () => {
    setModalsuggestion(false);
    setProductdetail("");
    setProductdes("");
  };

  const handleclosepromotion = () => {
    setModalone(false);
    setPromotId("");
    setPromotiondata("");
  };

  // const getolderyeardata = () => {
  //   if (contentyear !== "") {
  //     axios
  //       .get(
  //         `https://backend.brahmaand.space/user/filterbyyear/${Params.id}/${contentyear}`
  //       )
  //       .then((res) => {
  //         setCategry(res.data.data);
  //         // console.log(res.data.data);
  //         // setContentyear("");
  //       })
  //       .catch((err) => {
  //         // console.log(err);
  //       });
  //   }
  // };

  const searchdata = localStorage.getItem("searchdata");

  const handleSearchHomePage = () => {
    const searchdata = localStorage.getItem("searchdata");
    setSearchitem(searchdata);
    if (searchdata !== "" && searchdata !== null)
      axiosConfig
        .post(`/user/search_topic_title`, {
          searchinput: searchdata,
        })
        .then((res) => {
          // console.log(res.data.data);
          if (res.data.data !== "" && res.data.data !== null) {
            setCategry(res.data.data);
            // localStorage.removeItem("searchdata");
            // localStorage.removeItem("searchdata");
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    axiosConfig
      .post(`/user/search_promotion`, {
        searchinput: searchdata,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data !== "" && res.data.data !== null) {
          setPromotion(res.data.data);
          // localStorage.removeItem("searchdata");
        }
      })
      .catch((err) => {});
    // console.log("you are searching");
  };

  // console.log(parentState, "parentState");
  const handlesearchtopics = () => {
    localStorage.setItem("searchdata", searchitem);
    if (searchitem !== "") {
      axiosConfig
        .post(`/user/search_topic_title/test`, {
          searchinput: searchitem,
        })
        .then((res) => {
          setSearchitem("");
          console.log(parentState, "res");
          setSearchData(res);

          // if (res.data.data.length == "0") {
          //   swal("No product found");
          // } else {
          //   const search = res.data.data[0]?.sub_category;
          //   if (search !== "" && search !== undefined) {
          //     navigate(`/productsearch/${search}`);
          //   }
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // const data = "#learning , #media , #study,  #songs, #learning ";
    // const onedata = data.split(",");
  };

  // const handlesearchdescription = async () => {
  //   localStorage.setItem("searchdata", searchitem);
  //   const responce = await axiosConfig.post(`/user/search_topic_title`, {
  //     searchinput: searchitem,
  //   });
  //   if (responce.data.status === true && responce.data.data.length !== 0) {
  //     navigate(`/productsearch/${responce.data.data[0]?.sub_category}`);
  //   } else {
  //     swal("No Data Found");
  //   }

  //   axiosConfig
  //     .post(`/user/search_promotion`, {
  //       searchinput: searchitem,
  //     })
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       if (res.data.data !== "" && res.data.data !== null) {
  //         setPromotion(res.data.data);
  //       }
  //     })
  //     .catch((err) => {});
  // };

  const getLanguage = () => {
    axiosConfig
      .get(`/user/allLang`)
      .then((response) => {
        setLngage(response.data.data);
      })
      .catch((error) => {});
  };
  const getUser = async () => {
    const user = await localStorage.getItem("userId");
    if (user !== null && user !== "") {
      setmyId(user);
    } else {
      // console.log("no UserId Found");
    }
  };

  const removebookmark = (id) => {
    // console.log(id);
    setliked(id);
    if (myId !== "" && myId !== null) {
      axiosConfig
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "false",
        })
        .then((response) => {
          // console.log(response.data.data);
          setActivelike(response.data.data.status);
          swal("you Removed your bookmark ");
          hadlestatusbookmark();
        })
        .catch((error) => {});
    } else {
      swal("User Need to Login first ");
      navigate("/login");
    }
  };

  const addbookmark = (id) => {
    // console.log(id);
    setliked(id);

    if (myId !== "" && myId !== null) {
      axiosConfig
        .post(`/user/add_like`, {
          submitresrcId: liked,
          userid: myId,
          status: "true",
        })
        .then((response) => {
          // console.log(response.data.data);
          setActivelike(response.data.data.status);
          swal("You Bookmark it");
          hadlestatusbookmark();
        })
        .catch((error) => {
          if (error.response.data.message == "already exists") {
            swal(" Your already bookmarked It");
          }
        });
    } else {
      swal("login first");
      navigate("/login");
    }
  };

  const hadlestatusbookmark = () => {
    axiosConfig
      .get(`/user/getone_mylikes/${myId}/${liked}`)
      .then((res) => {
        // console.log(res.data.data);
        setHandlebookmark(res.data.data.status);
      })
      .catch((err) => {
        // console.log(err.response.data);
      });
  };
  const handlepromotion = (_id) => {
    setPromotiondata("");
    setliked(_id);
    hadlestatusbookmark();
    var promotionId = _id;
    if (promotionId === _id) {
      setPromotId(promotionId);
      axiosConfig
        .get(`/admin/getone_reslist/${promotionId}`)
        .then((res) => {
          // console.log(res.data.data._id);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setPromotiondata(res.data.data);
            // console.log(res.data.data);
            toggleone();
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });
      axiosConfig
        .get(`/user/average_rating/${promotionId}`)
        .then((res) => {
          // console.log(res.data);
          setAverageRating(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
      axiosConfig
        .get(`/user/comment_list/${promotionId}`)
        .then((res) => {
          setGetonecomment(res.data.data);
          // console.log(res.data.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };
  const setCategoryData = (id) => {
    sub_category.includes(id)
      ? setSub_category((pre) => pre.filter((e) => e !== id))
      : setSub_category([...sub_category, id]);
  };
  let Params = useParams();

  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 10;
  const currentItems = categry?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(categry?.length / 10);
  const onchangehandler = (e) => {
    settText(e.target.value);
  };
  const [rating, setRating] = useState("");
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: farStar,
    },
  };
  const colors = {
    star: ["#d9ad26", "#d9ad26", "#434b4d"],
  };
  const clearfilter = () => {
    setType("");
    setFormat("");
    setCategory("");
    setAll("");

    // setSearchrating("");
    setLanguage("");
    setContentyear("");
    setSearchitem("");
    setTypelength("");
    setFormatelength("");
    allsearchproduct();
    setPromotion("");
    promotionadmin();
  };
  const promotionadmin = () => {
    axiosConfig
      .get(`/user/Promotions`)
      .then((res) => {
        setPromotion(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    if (myId == "") {
      swal("Login First");
      navigate("/login");
    }
    if (myId !== null && myId !== undefined && myId !== "") {
      const selectedId = Producdetail._id;

      if (!(!text && rating !== 0)) {
        axiosConfig
          .post(`/user/add_Comment`, {
            submitresrcId: id,
            userid: myId,
            comment: text,
            rating: rating,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.status == true) {
              swal("Your Review Submitted Successfully!");
            } else if (res.data.msg == "not able to comment") {
              swal("User can't Review own Resource");
            }

            if (res.data.msg == "waiting for admin approvel") {
              swal("Already commented On it wait for aprroval");
            }
          })
          .catch((err) => {
            // console.log(err.response.data.message == "already exists");
            if (err.response.data.message == "already exists") {
              swal("You already Commented On It");
            }
          });
        settText("");
        setRating("");
      } else {
        swal("Please Enter Rating and Comment");
      }
    }
  };

  const handleSelection = (_id) => {
    setProductdetail("");

    setliked(_id);
    hadlestatusbookmark();
    var selectedId = _id;

    if (selectedId === _id) {
      setProductdes(selectedId);
      axiosConfig
        // .get(`https://backend.brahmaand.space/admin/getone_reslist/${productdes}`)
        .get(`/admin/getone_reslist/${selectedId}`)
        .then((res) => {
          // console.log(res.data.data._id);
          // console.log(res);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            setProductdetail(res.data.data);
            toggle();
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });

      axiosConfig
        .get(`/user/average_rating/${productdes}`)
        .then((res) => {
          // console.log(res.data);
          setAverageRating(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }

    axiosConfig
      .get(`/user/comment_list/${selectedId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handlesuggSelection = (_id) => {
    setliked(_id);
    hadlestatusbookmark();
    setProductdetail("");

    var selectedId = _id;

    if (selectedId === _id) {
      setProductdes(selectedId);
      axiosConfig
        .get(`/admin/getone_reslist/${productdes}`)
        .then((res) => {
          // console.log(res.data.data._id);
          // console.log(res.data.data);
          if (
            res.data.data._id !== "" ||
            res.data.data._id !== null ||
            res.data.data._id !== undefined
          ) {
            togglesuggestion();

            setProductdetail(res.data.data);
          }
        })
        .catch((err) => {
          // console.log(err.data.data);
        });

      axiosConfig
        .get(`/user/average_rating/${productdes}`)
        .then((res) => {
          // console.log(res.data);
          setAverageRating(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }

    axiosConfig
      .get(`/user/comment_list/${selectedId}`)
      .then((res) => {
        setGetonecomment(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(
    () => {
      allsuggestedproduct();
      getYear();
      getLanguage();
      getUser();

      if (
        (type === "" &&
          format === "" &&
          contentyear == "" &&
          language === "" &&
          searchitem === "" &&
          hastagdata === "hastag" &&
          searchdata === "",
        Filtertype === "")
      ) {
        allsearchproduct();
      }

      if (hastagdata !== "hastag") {
        gethastagdata();
      }
      if (searchdata !== "" && searchdata !== null) {
        // handleSearchHomePage();
      }

      if (Filtertype !== "" || searchdata !== "") {
        handlefilter();
      }

      // if (searchitem !== "") {
      //   handlesearchdescription();
      // }
    },
    [
      Params,
      type,
      format,
      liked,
      Producdetail,
      myId,
      promotiondata,
      handlebookmark,
      activelike,
      // searchitem,
      language,
      // contentyear,
      hastagdata,
      // searchdata,
    ],
    [parentState]
  );

  const [typelength, setTypelength] = useState([]);
  // const gettypefilter = () => {
  //   axios
  //     .get(
  //       `https://backend.brahmaand.space/user/filter_type/${Params.id}/${type}`
  //     )
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       setCategry(res.data.data);
  //       setTypelength(res.data.data);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // };

  const [formatelength, setFormatelength] = useState([]);
  // const getformatfilter = () => {
  //   axios
  //     .get(
  //       `https://backend.brahmaand.space/user/filterbyFormat/${Params.id}/${format}`
  //     )
  //     .then((res) => {
  //       // console.log(res.data.data);
  //       setCategry(res.data.data);
  //       setFormatelength(res.data.data);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // };

  const allsearchproduct = () => {
    const searchdata = localStorage.getItem("searchdata");
    // setSearchitem(searchdata);
    if (searchdata !== "" && searchdata !== null)
      axiosConfig
        .post(`/user/search_topic_title`, {
          searchinput: searchdata,
        })
        .then((res) => {
          // console.log(res.data.data);
          if (res.data.data !== "" && res.data.data !== null) {
            setCategry(res.data.data);
            // localStorage.removeItem("searchdata");
            // localStorage.removeItem("searchdata");
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    axiosConfig
      .post(`/user/search_promotion`, {
        searchinput: searchdata,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data !== "" && res.data.data !== null) {
          setPromotion(res.data.data);
          // localStorage.removeItem("searchdata");
        }
      })
      .catch((err) => {});
    // console.log("you are searching");
    // axios
    //   .get(
    //     `https://backend.brahmaand.space/admin/listbysubcategory/${Params.id}`
    //   )
    //   .then((response) => {
    //     setCategry(response.data.data);
    //     console.log(response.data.data);

    //   })
    //   .catch((error) => {
    //     // console.log(error.response.data);
    //     setLoading(false);
    //   });
  };
  const [suggested, setSuggested] = useState([]);
  const allsuggestedproduct = () => {
    axiosConfig
      .get(`/admin/listbysubcategory/${Params.id}`)
      .then((response) => {
        setSuggested(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data);
        setLoading(false);
      });
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % categry?.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };
  const mobiles = [
    "Apple",
    "Samsung",
    "Google",
    "Huawei",
    "Xiaomi",
    "OnePlus",
    "LG",
    "Sony",
    "Nokia",
    "Motorola",
    "HTC",
    "Lenovo",
    "Oppo",
    "Vivo",
    "Asus",
    "BlackBerry",
    "Alcatel",
    "ZTE",
    "Meizu",
    "Micromax",
  ];
  const hndleMoreCategory = () => {
    display === "d-none" ? setDisplay("") : setDisplay("d-none");
  };
  const hndleMoreCategory2 = () => {
    display2 === "d-none" ? setDisplay2("") : setDisplay2("d-none");
  };
  return (
    <>
      <section className="seachproduct">
        <Container>
          <Row className="searchbarpr">
            <Col className="seachareapr" lg="10">
              <div className="inputareaa searchba">
                <input
                  value={searchitem}
                  type="text"
                  onKeyDown={handleEnter}
                  placeholder=" Search for the top content in any niche ... (e.g. Java)"
                  className="searchprd inputareaa searchba opacity-100"
                  onChange={(e) => {
                    setSearchitem(e.target.value);
                  }}
                />
              </div>
            </Col>
            <Col lg="2">
              <Button className=" d-flex probtn text-center ">
                <p
                  onClick={handlesearchtopics}
                  className="searchproduct d-flex"
                >
                  SEARCH
                </p>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <FilterList />

        <div
          className="bg-st"
          style={{
            backgroundImage: `url(${backimg})`,
            width: "100%",
            padding: "130px 0px",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="productsearch-main">
          <div className="stt-main">
            <div className="d-flex flex-column flex-md-row gap-4">
              <div className="sidebarmain mx-auto mx-md-0">
                <div className="left-side">
                  <Row>
                    <Col lg="12" className="py-3">
                      <div className="ft-slider">
                        <Row>
                          <h3>Filters</h3>
                        </Row>
                        {/* <Row>
                          <Col lg="9">
                            <h5>Review</h5>
                          </Col>
                          <Col className="fifilter " lg="3">
                            <FiFilter size={30} />
                          </Col>
                        </Row> */}

                        {/* <Row>
                          <input
                            min="0"
                            max="5"
                            step="1"
                            type="range"
                            id="temp"
                            name="temp"
                            list="tickmarks"
                            onChange={(e) => {
                              setSearchrating(e.target.value);
                            }}
                          />
                          <datalist id="tickmarks">
                            <option value="0" label="0"></option>
                            <option value="1" label="1"></option>
                            <option value="2" label="2"></option>
                            <option value="3" label="3"></option>
                            <option value="4" label="4"></option>
                            <option value="5" label="5"></option>
                          </datalist>
                        </Row> */}
                        {/* <Row>
                          <Col lg="9">
                            <p>Range</p>
                          </Col>
                          <Col className="searhfastarfilter" lg="1">
                            <FaStar color="#f3c60f" size={22} />
                          </Col>
                          <Col className="rangefil" lg="2">
                            1 - 5
                          </Col>
                        </Row> */}
                      </div>
                    </Col>
                    {/* {console.log(parentState)} */}

                    <Col lg="12" className="py-3">
                      <Row className="mt-3 mb-3 mx-2 d-flex flex-nowrap align-items-center">
                        <input
                          id="All"
                          className="ft-check"
                          type="radio"
                          checked={all}
                          name="all"
                          value="all"
                          onClick={() => {
                            setAll(all ? false : true);
                            handlefilter();
                          }}
                        />
                        <h5 className="mb-0">All &nbsp;</h5>
                      </Row>

                      <Col lg="12" className="py-3">
                        <div className="ft-type">
                          <h5 className="mb-3">Category</h5>

                          {allcatego
                            .filter((res, i) => i < 5)
                            .map((allCategory) => {
                              return (
                                <Row className="mt-3 mb-3 mx-2">
                                  <input
                                    id={allCategory._id}
                                    className="ft-check"
                                    type="radio"
                                    checked={allCategory?._id === catgry}
                                    name="category"
                                    value={allCategory?._id}
                                    onClick={(e) => {
                                      setCatgry(allCategory?._id);
                                      handlefilter();
                                    }}
                                  />
                                  {allCategory?.title} &nbsp;
                                </Row>
                              );
                            })}
                          {/* {console.log(catgry, "catgry")} */}
                          <button
                            className="bg-white border-0"
                            onClick={hndleMoreCategory}
                          >
                            More {allcatego.length - 5} category here
                          </button>
                          <div
                            className={`bg-light border border-black ${display}`}
                            style={{
                              padding: "10px",
                              height: "300px",
                              width: "700px",
                              position: "absolute",
                              zIndex: 99,
                              overflowX: "hidden",
                              overflowY: "auto",
                              left: "250px",
                              top: "50%",
                            }}
                          >
                            <button
                              className="top-0 postion-sticky"
                              style={{
                                left: "100%",
                                height: "50px",
                                width: "50px",
                                backgroundColor: "red",
                              }}
                            >
                              X
                            </button>
                            <div className="d-flex flex-wrap">
                              {allcatego.map((allCategory) => {
                                return (
                                  <div
                                    className="mt-3 mb-3 mx-2"
                                    style={{ width: "200px" }}
                                  >
                                    <input
                                      id={allCategory._id}
                                      className="ft-check"
                                      type="radio"
                                      checked={allCategory?._id === catgry}
                                      name="allCategory"
                                      value={allCategory?._id}
                                      onClick={(e) => {
                                        setCatgry(allCategory?._id);
                                        handlefilter();
                                      }}
                                    />
                                    {allCategory?.title} &nbsp;
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col lg="12" className="py-3">
                        <div className="ft-type">
                          <h5 className="mb-3">Sub Category</h5>

                          {subctgry
                            .filter((res, i) => i < 5)
                            .map((subctgo) => {
                              return (
                                <Row className="mt-3 mb-3 mx-2">
                                  <input
                                    id={subctgo?._id}
                                    className="ft-check"
                                    type="checkbox"
                                    checked={sub_category.some(
                                      (e) => e === subctgo?._id
                                    )}
                                    name="format"
                                    value={subctgo?._id}
                                    onClick={(e) => {
                                      setCategoryData(subctgo?._id);
                                      // setSub_category(subctgo?._id);
                                      handlefilter();
                                    }}
                                  />
                                  {/* {console.log("cvbvcbv",subctgry._id)} */}
                                  {subctgo?.title} &nbsp;
                                </Row>
                              );
                            })}
                          {/* {console.log("subctgry", sub_category)} */}

                          <div
                            className={`bg-light border border-black ${display2}`}
                            style={{
                              padding: "10px",
                              height: "300px",
                              width: "700px",
                              position: "absolute",
                              zIndex: 99,
                              overflowX: "hidden",
                              overflowY: "auto",
                            }}
                          >
                            <div className="d-flex flex-wrap">
                              {subctgry.map((subctgry) => {
                                return (
                                  <div
                                    className="mt-3 mb-3 mx-2"
                                    style={{ width: "200px" }}
                                  >
                                    {/* <input
                                      id={subctgry?._id}
                                      className="ft-check"
                                      type="checkbox"
                                      checked={subctgry?._id === sub_category}
                                      name="format"
                                      value={sub_category?._id}
                                      onClick={(e) => {
                                        // setSub_category([...sub_category,subctgry?._id]);
                                        setSub_category(subctgry?._id);
                                        handlefilter();
                                      }}
                                    /> */}
                                    {subctgry?.title} &nbsp;
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Col>

                    {parentState === "Content Creators" ? (
                      <span></span>
                    ) : (
                      <div className="ft-type">
                        <h5 className="mb-3">Type</h5>
                        <Row className="mt-3 mx-2">
                          <input
                            id="Free"
                            className="ft-check"
                            type="radio"
                            checked={"Free" === type}
                            name="type"
                            value="Free"
                            onClick={() => {
                              setType("Free");
                              handlefilter();
                            }}
                          />
                          Free &nbsp;
                          {typelength[0]?.type == "Free"
                            ? typelength.length
                            : null}
                        </Row>
                        <Row className="mt-3  mx-2">
                          <input
                            id="Paid"
                            checked={"Paid" === type}
                            className="ft-check"
                            type="radio"
                            name="type"
                            value="Paid"
                            onClick={() => {
                              setType("Paid");
                              handlefilter();
                            }}
                          />
                          Paid &nbsp;
                          {typelength[0]?.type == "Paid"
                            ? typelength.length
                            : null}
                        </Row>
                      </div>
                    )}

                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <h5 className="mb-3">Format</h5>
                        <Row className="mt-3 mb-3 mx-2">
                          <input
                            id="Video"
                            className="ft-check"
                            type="radio"
                            checked={"Video" === format}
                            name="format"
                            value="Video"
                            onClick={() => {
                              setFormat("Video");
                              handlefilter();
                            }}
                          />
                          Video &nbsp;
                          {formatelength[0]?.format == "Video"
                            ? formatelength.length
                            : null}
                        </Row>
                        <Row className=" mb-3 mx-2">
                          <input
                            id="Text"
                            className="ft-check"
                            type="radio"
                            name="format"
                            checked={"Text" === format}
                            value="Text"
                            onClick={() => {
                              setFormat("Text");
                              handlefilter();
                            }}
                          />
                          Text &nbsp;
                          {formatelength[0]?.format == "Text"
                            ? formatelength.length
                            : null}
                        </Row>
                      </div>
                    </Col>

                    <Col lg="12" className="">
                      <div className="ft-type">
                        <Row className=" mb-3 mx-2"></Row>
                        <Row>
                          <Container>
                            {parentState === "Content Creators" ? (
                              <span></span>
                            ) : (
                              <>
                                <Label
                                  className="mt-3"
                                  style={{ font: "GT Walsheim Pro" }}
                                >
                                  <b style={{ fontSize: "19px" }}>
                                    Content Year
                                  </b>
                                </Label>
                                <select
                                  defaultValue="Select Year"
                                  value={contentyear}
                                  // checked={"Select Year" === contentyear}
                                  onChange={(e) => {
                                    setContentyear(e.target.value);
                                    handlefilter(e.target.value);
                                  }}
                                  className="form-control"
                                >
                                  <option>Select Year</option>
                                  {relyear?.map((yr) => {
                                    return (
                                      <option value={yr?._id} key={yr?._id}>
                                        {yr?.yrName}
                                      </option>
                                    );
                                  })}
                                </select>
                              </>
                            )}
                            <Label
                              className="mt-3"
                              style={{ font: "GT Walsheim Pro" }}
                            >
                              <b style={{ fontSize: "19px" }}>
                                Content Language
                              </b>
                            </Label>
                            <select
                              defaultValue="Select Language"
                              value={language}
                              onChange={(e) => {
                                setLanguage(e.target.value);
                                handlefilter(e.target.value);
                              }}
                              className="form-control"
                            >
                              <option>Select Language</option>
                              {lngage?.map((language) => {
                                return (
                                  <option
                                    key={language?._id}
                                    value={language?._id}
                                  >
                                    {language?.language}
                                  </option>
                                );
                              })}
                            </select>
                          </Container>
                        </Row>
                      </div>
                    </Col>

                    <Col lg="12" className="py-3">
                      <div className="ft-type">
                        <Button onClick={clearfilter} color="info">
                          Clear Filter
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="right-main mx-auto mx-md-0">
                <div className="right-side">
                  <h4>
                    Promotions
                    <span>
                      <Link to="/allpromotion">See All</Link>
                    </span>
                  </h4>

                  <Row className=" mb-2">
                    <Swiper
                      breakpoints={{
                        980: {
                          slidesPerView: 3,
                          direction: "horizontal",
                          spaceBetween: 20,
                        },
                        820: {
                          slidesPerView: 3,
                          direction: "horizontal",
                          spaceBetween: 20,
                        },
                        780: {
                          slidesPerView: 3,
                          direction: "horizontal",
                          spaceBetween: 20,
                        },

                        768: {
                          slidesPerView: 3,
                          direction: "horizontal",
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          direction: "horizontal",
                          spaceBetween: 28,
                        },
                        320: {
                          slidesPerView: 1,
                          direction: "horizontal",
                          spaceBetween: 25,
                        },
                      }}
                      spaceBetween={20}
                      // slidesPerView={3}
                      // centeredSlides={true}
                      // loop={true}
                      className="sld-1 justify-content-center swiper-button-show"
                      modules={[Navigation, Scrollbar, A11y]}
                      navigation
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      scrollbar={{ draggable: true }}
                    >
                      {promotion?.length > 0 ? (
                        <>
                          {promotion?.map((promotion) => (
                            <SwiperSlide>
                              <Col key={promotion?._id}>
                                <div class="product-grid8">
                                  <div class="product-image8">
                                    <Link
                                      key={promotion?._id}
                                      onClick={() =>
                                        handlepromotion(promotion?._id)
                                      }
                                    >
                                      {promotion?.link.match(
                                        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
                                      ) ? (
                                        <>
                                          {promotion?.link ? (
                                            <>
                                              <h2 style={{ color: "green" }}>
                                                {promotion[1]}
                                              </h2>
                                              <iframe
                                                allowfullscreen="true"
                                                width="100%"
                                                height="auto"
                                                style={{
                                                  borderRadius: "12px",
                                                }}
                                                src={`https://www.youtube.com/embed/${
                                                  promotion?.link?.split("=")[1]
                                                }`}
                                              ></iframe>
                                            </>
                                          ) : null}
                                        </>
                                      ) : (
                                        <img
                                          style={{ borderRadius: "10px" }}
                                          src={promotion?.img}
                                          alt="image"
                                          width="100%"
                                          height={160}
                                        />
                                      )}

                                      <Modal
                                        key={promotiondata?._id}
                                        className="mdlg"
                                        isOpen={modalone}
                                        toggle={toggleone}
                                        {...args}
                                      >
                                        <ModalBody key={promotiondata?._id}>
                                          <Row>
                                            <Col></Col>
                                            <Col
                                              lg="1"
                                              className="d-flex justify-content-right"
                                            >
                                              <MdCancelPresentation
                                                className="cancelbuttondata"
                                                onClick={handleclosepromotion}
                                                size={30}
                                              />
                                            </Col>
                                          </Row>
                                          <div className="main-content">
                                            <h2>
                                              {ReactHtmlParser(
                                                promotiondata?.resTitle?.slice(
                                                  0,
                                                  80
                                                )
                                              )}
                                            </h2>

                                            <Row className="top-icon">
                                              <Col lg="10">
                                                {" "}
                                                <Link to="#">
                                                  <img src={mdicon1} alt="" />
                                                </Link>
                                                <Link to="#">
                                                  <img src={mdicon2} alt="" />
                                                </Link>
                                              </Col>
                                              <Col
                                                style={{ textAlign: "right" }}
                                                lg="2"
                                                key={promotiondata?._id}
                                              >
                                                {handlebookmark === "true" ? (
                                                  <BsFillBookmarkCheckFill
                                                    size={35}
                                                    key={promotiondata?._id}
                                                    className="addbookmark  "
                                                    color="#5f56c6"
                                                    onClick={() =>
                                                      removebookmark(
                                                        promotiondata?._id
                                                      )
                                                    }
                                                  />
                                                ) : (
                                                  <BsBookmark
                                                    size={35}
                                                    key={promotiondata?._id}
                                                    onClick={() =>
                                                      addbookmark(
                                                        promotiondata?._id
                                                      )
                                                    }
                                                    className="addbookmark "
                                                    color="warning "
                                                  />
                                                )}
                                              </Col>
                                            </Row>
                                            <div className="tag-list">
                                              <div className="tag-1">
                                                <h5>
                                                  <span>
                                                    <img
                                                      src={icons}
                                                      alt=""
                                                      width="30px"
                                                    />
                                                  </span>
                                                  Topic:
                                                </h5>
                                              </div>
                                              <div className=" d-flex tag-2">
                                                {promotiondata?.topics?.map(
                                                  (val) => (
                                                    <Link
                                                      className="d-flex "
                                                      to="#"
                                                    >
                                                      {val}{" "}
                                                    </Link>
                                                  )
                                                )}
                                              </div>
                                            </div>

                                            <hr></hr>
                                          </div>

                                          <div className="mid">
                                            <h5>
                                              Link :
                                              <a
                                                style={{
                                                  wordBreak: "break-word",
                                                }}
                                                target="_blank"
                                                href={promotiondata?.link}
                                              >
                                                {promotiondata?.link}
                                              </a>
                                            </h5>
                                            <div className="mid-content">
                                              <Row>
                                                <Col lg="6" md="6">
                                                  <div className="mid-1 mb-3">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={createricon}
                                                        alt=""
                                                      />
                                                    </div>
                                                    <div className="mid-1-b">
                                                      <p>Creator:</p>
                                                      <h4>
                                                        {
                                                          promotiondata?.creatorName
                                                        }
                                                      </h4>
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="6" md="6">
                                                  <div className="mid-1 mb-3 ">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={usericon}
                                                        alt=""
                                                      />
                                                    </div>
                                                    <div className="mid-1-b">
                                                      <p>Submitted by:</p>
                                                      <h4>
                                                        {
                                                          promotiondata?.creatorName
                                                        }
                                                      </h4>
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="3" md="3">
                                                  <div className="mid-1 mb-3 tt-2">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={typeicon}
                                                        alt=""
                                                        width="35px"
                                                      />
                                                    </div>
                                                    <div className="mid-1-b tt-1">
                                                      <p>Type:</p>
                                                      <Link to="#">
                                                        {promotiondata?.type}
                                                      </Link>
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="3" md="3">
                                                  <div className="mid-1 mb-3 tt-2">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={formaticon}
                                                        alt=""
                                                        width="35px"
                                                      />
                                                    </div>
                                                    <div className="mid-1-b tt-1">
                                                      <p>Format:</p>
                                                      <Link to="#">
                                                        {promotiondata?.format}
                                                      </Link>
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="3" md="3">
                                                  <div className="mid-1 mb-3 tt-2">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={diffculty}
                                                        alt=""
                                                        width="35px"
                                                      />
                                                    </div>
                                                    <div className="mid-1-b tt-1">
                                                      <p>Category:</p>
                                                      <p to="#">
                                                        {
                                                          promotiondata
                                                            ?.category?.title
                                                        }
                                                      </p>
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="3" md="3">
                                                  <div className="mid-1 mb-3 tt-2">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={languageicon}
                                                        alt=""
                                                        width="35px"
                                                      />
                                                    </div>
                                                    <div className="mid-1-b tt-1">
                                                      <p>Language:</p>
                                                      {promotiondata?.language?.map(
                                                        (lang) => (
                                                          <span>
                                                            {lang?.language}{" "}
                                                          </span>
                                                        )
                                                      )}
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="3" md="3">
                                                  <div className="mid-1 mb-3 tt-2">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={yearicon}
                                                        alt=""
                                                        width="35px"
                                                      />
                                                    </div>
                                                    <div className="mid-1-b tt-1">
                                                      <p>Year:</p>
                                                      {promotiondata?.relYear?.map(
                                                        (year) => (
                                                          <Link to="#">
                                                            {year?.yrName}
                                                          </Link>
                                                        )
                                                      )}
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="3" md="3">
                                                  <div className="mid-1 mb-3 tt-2">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={
                                                          promotiondata?.ava_rating
                                                        }
                                                        alt=""
                                                        width="35px"
                                                      />
                                                    </div>
                                                    <div className="mid-1-b tt-1">
                                                      <p>Ratings:</p>
                                                      <Link to="#">
                                                        [
                                                        {
                                                          promotiondata?.ava_rating
                                                        }
                                                        ]
                                                      </Link>
                                                    </div>
                                                  </div>
                                                </Col>
                                                <Col lg="4" md="4">
                                                  <div className="mid-1 mb-3 tt-2">
                                                    <div className="mid-1-a">
                                                      <img
                                                        src={submiticon}
                                                        alt=""
                                                        width="35px"
                                                      />
                                                    </div>
                                                    <div className="mid-1-b tt-1">
                                                      <p>Submitted:</p>
                                                      <Moment format="ll">
                                                        {
                                                          promotiondata?.createdAt
                                                        }
                                                      </Moment>
                                                    </div>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </div>
                                          </div>

                                          <hr></hr>

                                          <div className="description mt-3">
                                            <h4>Description:</h4>
                                            <h5>
                                              {ReactHtmlParser(
                                                promotiondata?.desc?.slice(
                                                  0,
                                                  80
                                                )
                                              )}
                                            </h5>
                                          </div>

                                          <hr></hr>
                                          <div className="rating-box">
                                            <Row>
                                              <Col lg="6">
                                                <div className="rat-left">
                                                  <h4>Customer Rating</h4>
                                                  <div className="">
                                                    <PrettyRating
                                                      value={
                                                        promotiondata?.ava_rating
                                                      }
                                                      icons={icons.star}
                                                      colors={colors.star}
                                                    />{" "}
                                                  </div>
                                                  <div className="starratinginno">
                                                    {promotiondata?.ava_rating !=
                                                    0 ? (
                                                      <>
                                                        [
                                                        {
                                                          promotiondata?.ava_rating
                                                        }
                                                        ] of 5 Stars
                                                      </>
                                                    ) : null}
                                                  </div>
                                                  <div className="mt-3">
                                                    {getonecomment?.length}-
                                                    customers reviews
                                                  </div>
                                                </div>
                                              </Col>
                                              <Col lg="6">
                                                <h4>Write your review</h4>

                                                <ReactStars
                                                  {...secondExample}
                                                />
                                              </Col>
                                              <Row lg="12">
                                                <div
                                                  key={promotiondata?._id}
                                                  className="rat-right"
                                                >
                                                  <div className="">
                                                    <form>
                                                      <textarea
                                                        key={promotiondata?._id}
                                                        value={text}
                                                        name="text"
                                                        onChange={
                                                          onchangehandler
                                                        }
                                                        className="form-control st-taetarea"
                                                        placeholder=""
                                                      ></textarea>
                                                      <Button
                                                        onClick={(e) =>
                                                          handleSubmit(
                                                            e,
                                                            promotiondata._id
                                                          )
                                                        }
                                                        className=" bt-st reviewbutton mb-3 btn btn-primary"
                                                      >
                                                        Send
                                                      </Button>
                                                    </form>
                                                  </div>
                                                </div>
                                              </Row>
                                            </Row>
                                          </div>
                                          {/* <Row key={promotiondata?._id}>
                                        <Col lg="4"></Col>
                                        <Col lg="8" key={promotiondata?._id}>
                                          {handlebookmark === "true" ? (
                                            <button
                                              key={promotiondata?._id}
                                              className="addbookmark  btn btn-secondary"
                                              color="success"
                                              onClick={() =>
                                                removebookmark(
                                                  promotiondata?._id
                                                )
                                              }
                                            >
                                              Remove Bookmark
                                            </button>
                                          ) : (
                                            <button
                                              key={promotiondata?._id}
                                              onClick={() =>
                                                addbookmark(promotiondata?._id)
                                              }
                                              className="addbookmark  btn btn-secondary"
                                              color="warning "
                                            >
                                              Add Bookmark
                                            </button>
                                          )}
                                        </Col>
                                      </Row> */}
                                          <hr></hr>
                                          <div className="review-list">
                                            <h4>Reviews:</h4>

                                            {getonecomment?.map((value) => (
                                              <div className="re-list">
                                                <div className="re-listimg">
                                                  <img
                                                    src={
                                                      value?.userid?.profileImg
                                                    }
                                                    alt="UserImage"
                                                  />
                                                </div>
                                                <div className="re-listcont">
                                                  <h5>
                                                    {value?.userid?.username}
                                                    <span>
                                                      <Moment format="ll">
                                                        {value?.createdAt}
                                                      </Moment>
                                                    </span>
                                                  </h5>
                                                  <div className="star-1">
                                                    <PrettyRating
                                                      value={value?.rating}
                                                      icons={icons.star}
                                                      colors={colors.star}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="re-btext mt-3">
                                                  <Row>
                                                    <Col lg="10">
                                                      {" "}
                                                      {value?.comment}
                                                    </Col>
                                                    <Col lg="2">
                                                      {value?.userid?._id ==
                                                      localStorage.getItem(
                                                        "userId"
                                                      ) ? (
                                                        <>
                                                          <h6>
                                                            <AiFillEdit
                                                              onClick={() =>
                                                                handleeditcomment(
                                                                  value?._id
                                                                )
                                                              }
                                                              // onClick={
                                                              //
                                                              // }
                                                              size="25px"
                                                            />
                                                          </h6>
                                                          <Modal
                                                            isOpen={editmodal}
                                                            toggle={toggleedit}
                                                            {...args}
                                                          >
                                                            <ModalHeader
                                                              toggle={
                                                                toggleedit
                                                              }
                                                            >
                                                              Edit Your Comment
                                                            </ModalHeader>
                                                            <ModalBody>
                                                              <Row>
                                                                <Col>
                                                                  <Label>
                                                                    Edit Review
                                                                  </Label>
                                                                  <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder={
                                                                      value?.comment
                                                                    }
                                                                    value={
                                                                      upcom
                                                                    }
                                                                    onChange={(
                                                                      e
                                                                    ) =>
                                                                      setUpcom(
                                                                        e.target
                                                                          .value
                                                                      )
                                                                    }
                                                                    aria-describedby="inputGroupPrepend"
                                                                    required
                                                                  />
                                                                </Col>
                                                                <Col>
                                                                  <ReactStars
                                                                    style={{
                                                                      size: "25px",
                                                                    }}
                                                                    {...secondExample}
                                                                  />
                                                                </Col>
                                                              </Row>

                                                              <Col className="d-flex justify-content-center">
                                                                <button
                                                                  style={{
                                                                    color:
                                                                      "white",
                                                                  }}
                                                                  onClick={() => {
                                                                    editcomment(
                                                                      value?._id,
                                                                      promotiondata?._id,
                                                                      value?.rating
                                                                    );
                                                                  }}
                                                                  class="btn success"
                                                                >
                                                                  Edit your
                                                                  comment
                                                                </button>
                                                              </Col>
                                                            </ModalBody>
                                                            {/* <ModalFooter>
                                                              <Button
                                                                color="primary"
                                                                onClick={
                                                                  toggleedit
                                                                }
                                                              >
                                                                Do Something
                                                              </Button>{" "}
                                                              <Button
                                                                color="secondary"
                                                                onClick={
                                                                  toggleedit
                                                                }
                                                              >
                                                                Cancel
                                                              </Button>
                                                            </ModalFooter> */}
                                                          </Modal>
                                                        </>
                                                      ) : null}
                                                    </Col>
                                                  </Row>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </ModalBody>
                                      </Modal>
                                    </Link>
                                  </div>

                                  <div
                                    key={promotion?._id}
                                    onClick={() =>
                                      handlepromotion(promotion?._id)
                                    }
                                    class="product-content"
                                  >
                                    <ul class="rating">
                                      <li>
                                        {promotion?.topics?.map((topic) => (
                                          <Link className="btt">{topic}</Link>
                                        ))}
                                      </li>
                                    </ul>
                                    <h3>
                                      {ReactHtmlParser(
                                        promotion?.desc?.slice(0, 25)
                                      )}
                                    </h3>
                                    blogdescription
                                    <h5>
                                      <span>By -</span> {promotion?.creatorName}
                                    </h5>
                                    {/* <p>{promotion?.res_desc?.slice(0, 50)}</p> */}
                                    <h3>
                                      {ReactHtmlParser(
                                        promotion?.res_desc?.slice(0, 50)
                                      )}
                                    </h3>
                                    <div className="mt-2 mb-2">
                                      <Row>
                                        <Col lg="6">
                                          <PrettyRating
                                            // value={value?.rating}
                                            value={promotion?.ava_rating}
                                            icons={icons.star}
                                            colors={colors.star}
                                          />
                                        </Col>
                                        <Col
                                          className="justify-content-left"
                                          lg="6"
                                        >
                                          {promotion?.ava_rating == 0 ? null : (
                                            <>
                                              {" "}
                                              {promotion?.ava_rating}- Rating
                                            </>
                                          )}
                                        </Col>
                                      </Row>

                                      <ul class="rating">
                                        <li>
                                          <Link to="#" className="tag">
                                            {promotion?.relYear[0]?.yrName}
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </SwiperSlide>
                          ))}
                        </>
                      ) : (
                        <>
                          <div className="d-flex justify-content-center mb-2">
                            <h2>No Product found</h2>
                          </div>
                        </>
                      )}
                    </Swiper>
                  </Row>

                  <ContentCreators
                    updateParentState={updateParentState}
                    format={format}
                    type={type}
                    language={language}
                    searchdata={searchdata}
                    Filtertype={Filtertype}
                    category={catgry}
                    subcategory={sub_category}
                    contentyear={contentyear}
                    searchitem={searchitem}
                  />

                  {/* {console.log(parentState,"")} */}
                  {/* {console.log(parentState,"parentState")} */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="sec-bottom">
            <h4>
              Suggested Item */}
          {/* <span>
                <Link to="/">See All</Link>
              </span> */}
          {/* </h4> */}
        </div>
        {/* </div> */}
      </section>
    </>
  );
}

export default Productsearch;
