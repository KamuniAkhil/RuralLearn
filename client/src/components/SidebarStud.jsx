import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SidebarStud = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const iconSize = {
    width: '24px',
    height: '24px',
  };

  const menuItem = [
    {
      path: "/student/home",
      name: "Home",
      icon: <img src="https://media.istockphoto.com/id/535920749/photo/3d-home-icon.jpg?s=170667a&w=0&k=20&c=yI1JMp7SkV8tRu971govlvxulhY3mzMOhUCg3F3sLyU=" style={iconSize} />,
    },
    {
      path: "/student/courses",
      name: "My Courses",
      icon: <img src="https://cdn3d.iconscout.com/3d/premium/thumb/online-education-7211073-5888806.png?f=webp" style={iconSize} />
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <img src="https://www.shutterstock.com/image-illustration/logout-eyeball-glossy-elegant-blue-260nw-2031358139.jpg" style={iconSize} />
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "220px" : "50px" }} className={`sidebar ${isOpen ? "open" : "closed"}`}>
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
      <main style={{ marginLeft: isOpen ? "200px" : "0px", transition: "margin 0.1s" }}>{children}</main>
    </div>
  );
};

export default SidebarStud;

