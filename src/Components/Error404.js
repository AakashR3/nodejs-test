import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();
   
    const handleButtonClick = () => {
        navigate('/');
      };

  return (
    <>
    <div
      style={{
        position: "relative", 
        width: "100%", 
        height: "100%",
      }}
    >
      <img
        src="https://w3-lab.com/wp-content/uploads/2022/09/FOR-WEB-404-astronaut-1024x465.jpg"
        alt="404 Astronaut"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", 
         
        }}
      />
      <button
        style={{
          position: "absolute", 
          top: "80%", 
          left: "35%", 
          transform: "translate(-50%, -50%)", 
          padding: "10px 20px", 
          background: "#FDD336", 
          color: "#212528", 
          border: "none",
          fontSize: "30px",
          fontWeight: "bold",
          borderRadius: "50px", 
          cursor: "pointer",
          width:"300px",
          height: "75px"
        }}
        onClick={() => {
            handleButtonClick()
       
        }}
      >
        Back to Home
      </button>
    </div>
    </>
  );
};

export default Error404;
