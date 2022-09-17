import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function Home() {
  return (
    <div>
      <Mainlayout>
        {" "}
        <div
          className="d-none d-sm-flex d-flex mx-auto align-items-center p-3"
          style={{ maxWidth: "800px" }}
        >
          <div
            className="vstack gap-2 border border-2 rounded-3 p-4"
            style={{ backgroundColor: "white" }}
          >
            {/* HEADER */}
            <div className="d-flex">
              <img
                className="rounded-circle"
                src="https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/talon_12.jpg"
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
              />

              {/* Name */}
              <div className="d-flex  mx-auto  align-items-center">
                <span className="namefont " style={{ fontSize: "50px" }}>
                  Ixac Clarke
                </span>

                {/* nickname  */}

                <span className="nicknamefont" style={{ fontSize: "25px" }}>
                  CPE sophomore
                </span>
              </div>
            </div>

            {/* FLEX */}

            <div
              className="flex-box "
              style={{ backgroundColor: "Grey", padding: "10px" }}
            >
              <div>
                <div className="content ">
                  {/* ABOUT ME */}
                  <p
                    className="aboutmefont fw-bold"
                    style={{ fontSize: "25px", marginLeft: "40%" }}
                  >
                    ABOUT ME
                  </p>
                </div>
              </div>
              <div className="box2">
                <div className="content">
                  {/* INFOMATION  */}
                  <p className="profilefont">
                    Hi my name is Haris Saema. I'm studying at Chiangmai
                    university. study Computer Engineering. I interested in
                    programming but I am goot at at mathematic.
                  </p>
                </div>
              </div>
            </div>

            {/* HOME INFOMATION */}
            <div className=" flex-box mx-auto p-3 ">
              {/* MY SKILL  */}
              <div>
                <span
                  className="namefont"
                  style={{ fontSize: "30px", marginLeft: "40%" }}
                >
                  MY SKILL
                </span>
              </div>
              {/* C++ image  */}
              <div className="cppimposition" style={{ marginLeft: "41%" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png"
                  width="100px"
                  height="100px"
                />
              </div>
              {/* C++  */}
              <div
                className="cppinfoposition card"
                style={{ width: "500px", padding: "10px", marginTop: "10px" }}
              >
                <div className="contentfont">
                  <div>
                    <div
                      className="fw-bold"
                      style={{ fontSize: "20px", marginLeft: "220px" }}
                    >
                      C++
                    </div>
                    <span>
                      I have studied C++ last summer so I can use C++ to solve a
                      problem
                    </span>
                  </div>
                </div>
              </div>
              {/* Scratch image  */}
              <div style={{ marginLeft: "38%" }}>
                <img
                  src="https://play-lh.googleusercontent.com/WBtAyvthIoidqggdyWcaZX8YRPAgjijLiHkyRQ5kvwceSecUyjA2Vo5DnOc7wI2MOA"
                  width="130px"
                  height="130px"
                  border-radius="5px"
                />
              </div>
              {/* Scratch  */}
              <div style={{ width: "500px", padding: "15px" }}>
                <div className="contentfont">
                  <div>
                    <div
                      className="fw-bold"
                      style={{ fontSize: "20px", marginLeft: "202px" }}
                    >
                      Scratch
                    </div>
                    <span>
                      I learned Scratch in the first semester when I am freshman
                      . Scratch seems be easy but if programmer can't handle
                      this then they are not a good programmer, so I have this
                      talents. :D
                    </span>
                  </div>
                </div>
              </div>
              {/* EDUCATION  */}
              <div className="contentfont">
                <div className="educationposition">
                  <span
                    className="namefont"
                    style={{ fontSize: "30px", marginLeft: "35%" }}
                  >
                    EDUCATION
                  </span>
                </div>
                <div className="eduinfoposition vstack gap-2">
                  <div className="hstack gap-1">
                    <p
                      className="fw-bold"
                      style={{ fontSize: "20px", marginLeft: "17%" }}
                    >
                      Graduate from
                    </p>
                    <p>- Rangseevittaya School</p>
                  </div>
                  <div className="hstack gap-1 ">
                    <p
                      className="fw-bold"
                      style={{ fontSize: "20px", marginLeft: "24%" }}
                    >
                      Study at
                    </p>
                    <p>- Chiangmai University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
