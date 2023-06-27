import "./App.css";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";

// Fonts
import "./assets/fonts/Arial/Arial.ttf";
import "./assets/fonts/Arial/Arial Bold.ttf";
import "./assets/fonts/DIN Alternate/DIN Alternate Bold.ttf";
import "./assets/fonts/DIN Condensed/DIN Condensed Bold.ttf";
import "./assets/fonts/Futura/Futura.ttc";
import "./assets/fonts/MyriadPro/MyriadPro-Regular.otf";

import "./index.css";
import ResetPassword from "./components/ResetPassword";
// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Service from "./pages/service";
import Logout from "./pages/logout";
import ResetPasswordComponent from "./components/ResetPasswordComponent";
import SendRequestResetPasswordComponent from "./pages/send-reset-password";
import MultiModule from "./components/homepages/MultiModule";
import Home from "./components/home/Home";
import Blog from "./components/Blog";
import Bookmarks from "./components/Bookmarks";
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
import TrendingWarzone from "./pages/TrendingWarzone";
import Category from "./pages/Category";
import ContentCreators from "./pages/ContentCreators";
import NewDesign from "./pages/NewDesign";
import ProductsearchNew from "./pages/Productsearch";

ReactGA.initialize("UA-250944909-1");
// ReactGA.initialize("UA-250944909-1");
function App() {
  const [path,setPath] = useState("")
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  // console.log(location.pathname)
  const getPath = (e) =>{
    setPath(e)
  }
const metaTag = document.querySelector("#metaData")
if (location.pathname === path) {
  metaTag.setAttribute("content","width=1500")
} else {
  metaTag.setAttribute("content","width=device-width, initial-scale=1")
}

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>

    <AuthProvider>
      <MenuProvider>
        <Layout>
          {/* <GoogleAnalytics trackingId="UA-250944909-1" /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/myaccount" element={<Myaccount />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/multiModule" element={<MultiModule />} />
            <Route exact path="/navbar" element={<Navbar />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/topBar" element={<TopBar />} />
            <Route exact path="/videoPosted" element={<VideoPosted />} />
            <Route exact path="/profileRouter" element={<ProfileRouter />} />
            <Route exact path="/Bookmark" element={<Bookmarks />} />
            <Route exact path="/demopaginate" element={<DemoPaginate />} />
            <Route exact path="/pagination" element={<Pagination />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/paginationnew" element={<Paginationnew />} />
            <Route exact path="/allpromotion" element={<Allpromotion />} />
            <Route exact path="/selectapp" element={<SelectApp />} />
            <Route exact path="/otpinputpage" element={<OtpInputpage />} />
            <Route exact path="/resetpassword" element={<ResetPassword />} />
            <Route exact path="/forgetpassword" element={<Forgetpass />} />
            <Route exact path="/resetforget" element={<ResetForget />} />
            <Route
              exact
              path="/productsearch/:id"
              element={<ProductsearchNew />} 
              //  ProductsearchNew   Productsearch
            />
            <Route
              exact
              path="/producthastag/:id"
              element={<ProductHastag />}
            />

            <Route
              exact
              path="/recblogdesription/:id"
              element={<Recblogdescription />}
            />
            <Route exact path="/passwordhide" element={<Passwordhide />} />
            <Route exact path="/formvalidation" element={<Formvalidation />} />
            <Route
              exact
              path="/blogdescription/:id"
              element={<Blogdescription />}
            />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/leaderBoard" element={<LeaderBoard />} />
            <Route exact path="/productList/:id" element={<ProductList />} />
            <Route exact path="/autoSearch" element={<AutoSearch />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/allcategory" element={<Allcategory />} />
            <Route exact path="/subcategory/:id" element={<AllSubCategory />} />
            <Route exact path="/contactUs" element={<ContactUs />} />
            <Route exact path="/notification" element={<Notification />} />
            <Route
              exact
              path="/termsConditions"
              element={<TermsConditions />}
            />
            <Route
              path="reset-password/:uid/:token"
              element={<ResetPasswordComponent />}
            />
            <Route path="geolocation" element={<Geolocation />} />
            <Route
              path="send-reset-password-request"
              element={<SendRequestResetPasswordComponent />}
            />
            <Route path="/loginplan" element={<Loginplan />} />
            <Route path="/category" element={<Category />} />
            <Route path="/trending-warzone/:id" element={<TrendingWarzone getPath={getPath} />} />
            <Route path="/content-creators" element={<ContentCreators />} />
            <Route path="/newdesign" element={<NewDesign />} />
            <Route path="/productsearch" element={<ProductsearchNew />} />
          </Routes>
        </Layout>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
