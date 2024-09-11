import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Header_Logo.svg";
import { HeaderData } from "./HeaderData";
import Navmenu from "./Navmenu";
import mail from "../../images/Top_header_mail.png";
import call from "../../images/top_header_call.png";
import { fetchNavItems } from '../../api/navigation_items/navigationItemsAPI'
import AdvancedSkeletonLoader from '../AdvancedSkeletonLoader';


import { fetchTopMenuData } from '../../api/top_menu/topMenuAPI'; // Corrected the import path

const Header = () => {
  const navigate = useNavigate();
  const navbar_ref = useRef();
  const [loading, setLoading] = useState(true);

  const [topMenuData, setTopMenuData] = useState(null);
  const [topNavItems, setTopNavItems] = useState(null);

  useEffect(() => {
    const loadTopNavItems = async () => {
      try {
        const data = await fetchNavItems();
        setTopNavItems(data);
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadTopNavItems();
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
      if (navbar_ref.current) {
        navbar_ref.current.style.top = "0px";
      }
    } else {
      if (navbar_ref.current) {
        navbar_ref.current.style.top = "-150px";
      }
    }
  }

  useEffect(() => {
    const loadTopMenuData = async () => {
      try {
        const data = await fetchTopMenuData();
        setTopMenuData(data);
      } catch (error) {
        console.error('Error loading user data:', error);
      }finally {
        setLoading(false);
      }
    };

    loadTopMenuData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (loading) {
  //   return <AdvancedSkeletonLoader />;
  // }

  return (
    <>
      <header className="show_nav" ref={navbar_ref}>
        <Navbar expand="lg">
          <div className="container">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav ">
                {topNavItems &&
                  topNavItems
                    .slice(0, 6)
                    .map((item, i) => <Navmenu key={i} item={item} />)}
              </ul>

              <div className="header_btn">
                {HeaderData.slice(-1).map((e, i) => (
                  <button
                    type="button"
                    className="btn btn-primary"
                    key={i}
                    onClick={() => navigate(e.path)}
                  >
                    {e.title}
                  </button>
                ))}
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
      
      <section className="troo_da_top_header_wrapper">
        <div className="container">
          <div className="troo_da_top_header_outer d-flex align-items-center justify-content-between">
            <div className="troo_da_top_header_left">
              <div className="troo_da_top_header_social_icon">
                <div className="troo_da_top_header_inner d-flex">
                  <span>Connect with us</span>
                  <ul className="top_header_list d-flex">
                    {topMenuData?.social_media_links?.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name1 === "Facebook" && <FaFacebookF />}
                          {link.name1 === "X" && <FaTwitter />}
                          {link.name1 === "Linkedin" && <FaLinkedinIn />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="troo_da_top_header_right d-flex">
              {topMenuData?.contact_informations?.map((contact, index) => (
                <div
                  className="troo_da_top_header_right_inner d-flex"
                  key={index}
                >
                  <div className={contact.type === "Phone" ? "call" : "mail"}>
                    <img
                      src={contact.type === "Phone" ? call : mail}
                      alt={contact.type}
                    />
                  </div>
                  <div
                    className={
                      contact.type === "Phone" ? "call_detail" : "mail_detail"
                    }
                  >
                    <span>
                      {contact.type === "Phone" ? "Call Us on" : "Email Us"}
                    </span>
                    <div className="number">
                      <a
                        href={
                          contact.type === "Phone"
                            ? `tel:${contact.value}`
                            : `mailto:${contact.value}`
                        }
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <header>
        <Navbar expand="lg">
          <div className="container">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul className="navbar-nav ">
                {topNavItems &&
                  topNavItems
                    .slice(0, 6)
                    .map((item, i) => <Navmenu key={i} item={item} />)}
              </ul>

              <div className="header_btn">
                {HeaderData.slice(-1).map((e, i) => (
                  <button
                    type="button"
                    className="btn btn-primary"
                    key={i}
                    onClick={() => navigate(e.path)}
                  >
                    {e.title}
                  </button>
                ))}
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
