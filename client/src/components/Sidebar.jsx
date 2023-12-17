import React, { useState } from "react";
import { FaBars, FaRegChartBar } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const iconSize = {
    width: '24px',  
    height: '24px', 
  };
  const menuItem = [
    {
      path: "/teacher/home",
      name: "Profile",
      icon: <img src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-8331006-6647759.png?f=webp" style={iconSize}/>
    },
    {
      path: "/teacher/create",
      name: "Add Course",
      icon: <CgAdd />,
    },
    {
      path: "/teacher/quiz",
      name: "Add Quiz",
      icon: <img src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-vector-quiz-icon-qcm-blue-logo-vector-png-image_13830408.png" style={iconSize}/>
    },
    {
      path: "/teacher/courses",
      name: "View All-Courses",
      icon:<img src="https://cdn3d.iconscout.com/3d/premium/preview/list-9866048-8000536.png?f=webp&h=700" style={iconSize}/>
    },
    {
      path: "/teacher/analytics",
      name: "Analytics",
      icon: <img src="https://cdn3d.iconscout.com/3d/premium/preview/data-analytics-6248680-5115852.png?f=webp&h=700" style={iconSize}/>
    },
    {
      path: "/logout",
      name: "Logout",
      icon:<img src="https://www.shutterstock.com/image-illustration/logout-eyeball-glossy-elegant-blue-260nw-2031358139.jpg" style={iconSize}/>
    },
    

    
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "220px" : "50px" }} className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top_section">
          <h3 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Rural Learn Teacher Portal
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
      <main style={{ marginLeft: isOpen ? "200px" : "40px", transition: "margin 0.1s" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
