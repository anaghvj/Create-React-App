import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
      </p>
      
    </div>
    
  );
};

export default HomePage;
