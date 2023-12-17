import {React,useState, useEffect}from "react";
import "./Profile.css";
import axios from 'axios';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:8090/api/user/profile");
        if (response?.status === 200) {
          setProfileData(response.data);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
    console.log(profileData);
  }, []);
  return (
    <Sidebar>
      <Navbar/>
      <div className="house">
        <div>
          <div className="navbar-top">
            <div className="profile">
              <h1>Profile</h1>
            </div>
          </div>
          <div className="main">
            <div className="card">
              <div className="card-body">
                <i className="fa fa-pen fa-xs edit" />
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td>ImDezCode</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>imdezcode@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>Bali, Indonesia</td>
                    </tr>
                    <tr>
                      <td>Hobbies</td>
                      <td>:</td>
                      <td>Diving, Reading Book</td>
                    </tr>
                    <tr>
                      <td>Job</td>
                      <td>:</td>
                      <td>Web Developer</td>
                    </tr>
                    <tr>
                      <td>Skill</td>
                      <td>:</td>
                      <td>PHP, HTML, CSS, Java</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Profile;
