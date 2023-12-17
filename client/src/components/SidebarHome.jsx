import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SidebarHome = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const iconSize = {
    width: '24px',
    height: '24px',
  };

  const menuItem = [
    {
      path: "/login",
      name: "Student",
      icon: <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-male-student-icon-png-image_4255019.jpg" style={iconSize} />,
    },
    {
      path: "/login",
      name: "Teacher",
      icon: <img src="https://png.pngtree.com/png-vector/20191119/ourmid/pngtree-teacher-vector-illustration-with-black-and-white-design-teacher-icon-png-image_1996068.jpg" style={iconSize} />
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "215px" : "50px" }} className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top_section">
          <h3 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Rural Learn Student Portal
          </h3>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ marginLeft: isOpen ? "200px" : "35px", transition: "margin 0.1s" }}>{children}</main>
    </div>
  );
};

export default SidebarHome;

