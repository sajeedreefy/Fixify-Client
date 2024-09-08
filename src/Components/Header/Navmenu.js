import React, { useState } from 'react'
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navmenu = ({ item }) => {
    const [showcat, setShowCat] = useState(false);
    const location = useLocation();
    let arr = location.pathname?.split("/");
    let lastvalue = arr[arr.length - 1].trim().replace(/_/g, " ");
    let filt = item.subNav?.find((s) => s.subTitle === lastvalue);
  return (
    <>
      <li
        className={
          item.title === lastvalue || filt ? "nav-item active" : "nav-item"
        }
      >
        {!item?.subNav ? (
          <NavLink className="nav-link" to={item.path}>
            <div>{item.title}</div>
          </NavLink>
        ) : (
          <NavLink
            onMouseEnter={() => setShowCat(true)}
            onMouseLeave={() => setShowCat(false)}
            className="nav-link"
          >
            {item.title}
            <FaChevronDown />
            {showcat && (
              <ul className="dropdown-menu show">
                {item.subNav.map((e, i) => {
                  console.log(e.subTitle)
                  return (
                    <li key={i}>
                      <NavLink
                        className={e.subTitle === lastvalue ? "dropdownActive dropdown-item" : "dropdown-item "}
                        to={e.path}
                      >
                        {e.subTitle}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </NavLink>
        )}
      </li>
    </>
  )
}

export default Navmenu