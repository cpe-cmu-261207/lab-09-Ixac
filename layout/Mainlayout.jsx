import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
export default function Mainlayout(props) {
  return (
    <div>
      <div>
        <Navbar />
        {props.children}
      </div>
    </div>
  );
}
