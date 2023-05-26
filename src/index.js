import React from "react";
import ReactDOM from "react-dom";

// Fonts
import "./assets/fonts/Arial/Arial.ttf";
import "./assets/fonts/Arial/Arial Bold.ttf";
import "./assets/fonts/DIN Alternate/DIN Alternate Bold.ttf";
import "./assets/fonts/DIN Condensed/DIN Condensed Bold.ttf";
import "./assets/fonts/Futura/Futura.ttc";
import "./assets/fonts/MyriadPro/MyriadPro-Regular.otf";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import ResetPassword from "./components/ResetPassword";
// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Landing from "./pages/index";
import CreateAccount from "./pages";
// import Myaccount from "../src/components/Myaccount.jsx";

// import UserAccountInfo from "./pages/UserAccountInfo";
import Service from "./pages/service";
import Logout from "./pages/logout";
import ResetPasswordComponent from "./components/ResetPasswordComponent";
import SendRequestResetPasswordComponent from "./pages/send-reset-password";
import MultiModule from "./components/homepages/MultiModule";
import Home from "./components/home/Home";
import Activity from "./components/Account";
import Blog from "./components/Blog";
import Bookmarks from "./components/Bookmarks";
import Points from "./components/Points";
import ProfileRouter from "./components/ProfileRouter";
import TopBar from "./components/TopBar";
import VideoPosted from "./components/VideoPosted";
import ProductList from "./components/filter/ProductList";
import AutoSearch from "./components/filter/AutoSearch";
import Privacy from "./components/Privacy";
import TermsConditions from "./components/TermsConditions";
import ContactUs from "./components/home/ContactUs";
import Work from "./components/Work";
import Allcategory from "./components/home/Allcategory";
import AllSubCategory from "./components/home/AllSubCategory";
import Notification from "./components/Notification";
import Paginationnew from "./components/Paginationnew";
import Blogdescription from "./components/Blogdescription";
import DemoPaginate from "./components/DemoPaginate";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import Allpromotion from "./components/filter/Allpromotion";
import Recblogdescription from "./components/Recblogdescription";
import Layout from "./components/Layout";
import LeaderBoard from "./components/home/LeaderBoard";
import NewSignup from "./components/NewSignup";
import Passwordhide from "./components/Passwordhide";
import Formvalidation from "./components/Formvalidation";
import OtpInputpage from "./pages/OtpInputpage";
// Import Context
import { MenuProvider } from "./context/MenuContext";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "reactstrap";
import Signup from "./components/Signup";
import Login from "./components/Login.jsx";
import Myaccount from "./components/Myaccount";
import Geolocation from "./components/filter/Golocation";

// import Searchfiltermodel from "./components/filter/Searchfiltermodel";
import FAQ from "./components/FAQ";
import SelectApp from "./components/SelectApp";
import Forgetpass from "./pages/Forgetpass";
import ResetForget from "./components/ResetForget";
import Productsearch from "./components/filter/Productsearch";
import ProductHastag from "./components/filter/ProductHastag";
import Loginplan from "./planable.io/Loginplan";
import ReactGA from "react-ga";
import App from "./App";



// const TRACKING_ID = "UA-250944909-1"; // OUR_TRACKING_ID

// ReactGA.initialize(TRACKING_ID);

// const location = useLocation();

// useEffect(() => {
//   ReactGA.pageview(window.location.pathname + window.location.search);
// }, []);
const rootElement = document.getElementById("root");
render(
  // <Router>
    <App />,
  // </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
