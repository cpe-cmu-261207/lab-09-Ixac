import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function Contact() {
  return (
    <div>
      <Mainlayout>
        {/* HEAD (me) */}
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
            <div className="aboutmeposition">
              <div
                className="flex-box"
                style={{ backgroundColor: "Grey", padding: "10px" }}
              >
                <div className="box1">
                  <div className="content" style={{ alignItems: "center" }}>
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
            </div>

            {/* CONTACT INFOMATION */}
            <div className="flexcon">
              <div className="contactinfoposition">
                <div className="contentfont">
                  {/* Name  */}
                  <div className="hstack">
                    <div className="maincon">
                      <div className="concon">
                        <h5 className="fw-bold">Name</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <div className="concon">
                        <h6>Haris Saema</h6>
                      </div>
                    </div>
                  </div>
                  {/* NICKNAME  */}
                  <div className="hstack">
                    <div className="maincon">
                      <div className="concon">
                        <h5 className="fw-bold">Nickname</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <div className="concon">
                        <h6>Ris</h6>
                      </div>
                    </div>
                  </div>
                  {/* Address  */}
                  <div className="hstack">
                    <div className="maincon">
                      <div className="concon">
                        <h5 className="fw-bold">Address</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <div className="concon">
                        <h6>Fang Chiangmai</h6>
                      </div>
                    </div>
                  </div>
                  {/* Facebook  */}
                  <div className="hstack">
                    <div className="maincon">
                      <div className="concon">
                        <h5 className="fw-bold">Facebook</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <div className="concon">
                        <a
                          style={{ fontSize: "12px" }}
                          href="https://www.facebook.com/haris.saema/" rel="noreferrer"
                          target="_blank"
                        >
                          https://www.facebook.com/haris.saema/
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* IG  */}
                  <div className="hstack">
                    <div className="maincon">
                      <div className="concon">
                        <h5 className="fw-bold">Instagram</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <div className="concon">
                        <a
                          style={{ fontSize: "12px" }}
                          href="https://www.instagram.com/ix_a_c/"
                          target="_blank"
                        >
                          IG pom aeng kub
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Email  */}
                  <div className="hstack">
                    <div className="maincon">
                      <div className="concon">
                        <h5 className="fw-bold">Email</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <div className="concon">
                        <a href="mailto:ixacarrows@gmail.com" target="_blank">
                          mail me
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Phone num  */}
                  <div className="hstack">
                    <div className="maincon">
                      <div className="concon">
                        <h5 className="fw-bold">Phone</h5>
                      </div>
                    </div>
                    <div style={{ padding: "10px" }}>
                      <div className="concon">
                        <h6>0841267712</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* in this */}
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
