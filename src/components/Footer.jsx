import { Row, Col, Container } from "react-bootstrap";
import logobottom from "../images/logobottom.png";
import "../styles/Footer.css";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useContextMenu } from "../context/MenuContext";
import { useAuth } from "../context/AuthContext";

import agreement_download from "../assets/files/Dispatch305-agreement.pdf";
import Logo from "../assets/logos/logo.png";
import brahmaaandpremium from "../images/brahmaaandpremium.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const { current_link, setCurrentLinkHelper } = useContextMenu();
  const { user, login, logout } = useAuth();

  useEffect(() => {
    // console.log(current_link);
  }, [current_link]);

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="6" className="text-center p-0 text-md-start">
            <div className="foot-1">
              <Link to="/">
                <img src={logobottom} alt="" width="150px" />
              </Link>
              <ul>
                <li>
                  <Link to="#">
                    <p>
                      {" "}
                      <b>Mobile</b>: (+91) 9958918811
                    </p>
                  </Link>
                </li>
                <li className="justify-content-left">
                  <Link to="#">
                    <b>Email</b> : contactus@brahmaand.space
                  </Link>
                </li>
                <li className="justify-content-left">
                  <Link to="#">
                    <b>Address</b> : Bengaluru, India
              
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="3" sm="6" className="text-center p-0 text-md-start">
            <div className="foot-1">
              <h4>Popular Categories</h4>
              <ul>
                <li>
                  <Link to="/subcategory/645796f3c4c9cb7557f39db6">Software Development</Link>
                </li>
                <li>
                  <Link to="/subcategory/646b3f1e29866f23e9ac1ecd">Health & Wellness</Link>
                </li>
                <li>
                  <Link to="/subcategory/646ef61f0fba31d8db059536">Fashion</Link>
                </li>
                <li>
                  <Link to="/leaderboard">LeaderBoard</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3" md="3" sm="6" className="text-center p-0 text-md-start">
            <div className="foot-1">
              <h4>Quick Liks</h4>
              <ul>
                <li>
                  <Link to="/work">How It Works</Link>
                </li>
                <li>
                  <Link to="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contact Us</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="2" md="2" sm="6" className="text-center p-0 text-md-start">
            <div className="foot-1">
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to="/termsConditions">Terms And Condition</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <div className="footer-bootom">
            <Row className="gap-3 gap-md-0 w-100">
              <Col md="6" className="d-flex justify-content-center justify-content-md-start align-items-center">
                <p className="text-center">© brahmaand.space 2023 -2024. All rights reserved</p>
              </Col>
              <Col md="6" className="d-flex justify-content-center justify-content-md-end">
                <div className="icon">
                  <Link to="#" >
                    <FaFacebook className="it-i" />
                  </Link>
                  <Link to="https://www.instagram.com/brahmaand.space/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                    <FaInstagram className="it-i" />
                  </Link>
                  <Link to="https://www.youtube.com/@Brahmaand.SpaceKnowledgeHindi" target="_blank">
                    <FaYoutube className="it-i" />
                  </Link>
                  <Link to="#">
                    <FaTwitter className="it-i" />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;