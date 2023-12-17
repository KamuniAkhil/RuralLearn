import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthProvider";
import Navbar from "./../../components/Navbar";

const Addcourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [videos, setVideos] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("coverImage", coverImage);

      videos.forEach((video) => {
        formData.append("videos", video);
      });

      notes.forEach((note) => {
        formData.append("notes", note);
      });

      const response = await axios.post(
        `https://rural-learn-api.vercel.app/api/user/addCourse?authId=${auth?.user?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.status === 200) {
        alert("Course added Successfully");
        navigate("/teacher/courses");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const handleVideoChange = (e) => {
    const videoFiles = Array.from(e.target.files);
    setVideos([...videos, ...videoFiles]);
  };

  const handleNoteChange = (e) => {
    const NoteFiles = Array.from(e.target.files);
    setNotes([...notes, ...NoteFiles]);
  };

  return (
    <Sidebar>
      <Navbar />
      <h1
        style={{
          paddingTop:"90px",
          fontSize:"40px",
          paddingLeft:"40%"
        }}
      >Add New Course</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f5f5f5",
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "1rem",
          }}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "1rem",
          }}
        ></textarea>
        <label htmlFor="coverImage">Cover Image:</label>
        <input
          type="file"
          id="coverImage"
          onChange={(e) => setCoverImage(e.target.files[0])}
          required
          style={{ marginBottom: "1rem" }}
        />

        <label htmlFor="videos">Videos:</label>
        <input
          type="file"
          id="videos"
          onChange={handleVideoChange}
          multiple
          style={{ marginBottom: "1rem" }}
        />

        <label htmlFor="notes">Notes:</label>
        <input
          type="file"
          id="notes"
          onChange={handleNoteChange}
          multiple
          style={{ marginBottom: "1rem" }}
        />

        <button
          type="submit"
          style={{
            padding: "1rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Add Course
        </button>
      </form>
    </Sidebar>
  );
};

export default Addcourse;
