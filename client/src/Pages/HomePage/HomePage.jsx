import React, { useState, useEffect } from "react";
import SidebarHome from "../../components/SidebarHome";
import NavbarHome from "./../../components/NavbarHome";
// import AboutUs from "../../components/AboutUs.Jsx";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
const HomePage = () => {
    const navigate = useNavigate();
  
  const [arr, setArr] = useState([]);
  const [auth, setAuth] = useAuth();
  
  useEffect(() => {
    const getAllCourses = async () => {
      const res = await axios.get("https://rural-learn-api.vercel.app/api/v1/allcourses");
      if (res?.status === 200) {
        const { data } = res;
        console.log(data);
        setArr(data);
      }
    };

    getAllCourses();
  }, []);

  
  const handleBuy = async (id) => {
    try {
      console.log(auth?.user);
      if (!auth?.user) {
        navigate("/login");
        return;
      }
      const res = await axios.put(
        `https://rural-learn-api.vercel.app/api/v1/updateEnroll/${id}?studId=${auth?.user?._id}`
      );

      if (res?.status === 200) {
        alert("Congratulations, you are enrolled in this course");
        window.location.replace("/student/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SidebarHome>
      <NavbarHome id="header"/>
      <br></br>
      <br></br>
      <h1 className="heading" align="center">All courses</h1>
      <div className="house">
        {arr?.map((obj) => (
          <div className="card" key={obj._id}>
            <div className="card__title">
              <div className="icon">
                <a href="#">
                  <i className="fa fa-arrow-left"></i>
                </a>
              </div>
              <h3>New Courses</h3>
            </div>
            <div className="card__body">
              <div className="half">  
                <div className="featured_text">
                  <p>Course Name:</p>
                  <h1>{obj.title}</h1>
                </div>
                <div className="image">
                  <img
                    src={`https://rural-learn-api.vercel.app/uploads/${obj.coverImage.filename}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="half">
                <div className="description">
                  <h2>Description:</h2>
                  <p>
                    {obj.description}
                  </p>
                </div>
                <div className="reviews">
                  No. of enrolls:
                  <span>{obj.enrol.length} Enrolls</span>
                </div>
              </div>
            </div>
            <div className="card__footer">
              <div className="recommend">
                <p>Course Provided By:</p>
                <h3>{obj?.authorId?.name}</h3>
              </div>
              <div className="action">
                {obj.enrol.includes(auth?.user?._id) ? (
                  <button type="button">Enrolled</button>
                ) : (
                  <button type="button" onClick={() => handleBuy(obj._id)}>
                    Enroll now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <AboutUs/>
      <br></br>
      <br></br>
    </SidebarHome>
  );
};

export default HomePage;
