import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function Exp() {
  return (
    <div>
      <Mainlayout>
        <div>
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

              {/* EXPERIENCE INFOMATION */}
              <div className="expinfoposition">
                <div className="contentfont">
                  <div className="flexexp">
                    <div className="vstack gap-2">
                      {/* Scratch project    */}
                      <div className="hstack">
                        <div className="mainexp">
                          <div className="expcon">
                            <img
                              style={{
                                width: "200px",
                                height: "200px",
                                objectFit: "fill",
                              }}
                              src="/ex.png"
                            />
                          </div>
                        </div>
                        <div style={{ padding: "30px" }}>
                          <div className="expcon">
                            <p>
                              Basic com project I have a god to carry me to do
                              this and I also help them to complete this game
                              and you can try to play our game.
                            </p>
                            <a
                              href="https://scratch.mit.edu/projects/567557912"
                              target="_blank"
                            >
                              TRY OUR GAME!
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* master auto chess TFT  */}
                      <div className="hstack">
                        <div className="mainexp">
                          <div className="expcon">
                            <img
                              style={{
                                width: "200px",
                                height: "200px",
                                objectFit: "fill",
                              }}
                              src="/master.png"
                            />
                          </div>
                        </div>
                        <div style={{ padding: "30px" }}>
                          <div className="expcon">
                            <p>
                              I am a auto chess player . I had played 12 winning
                              streaks games on the 1st place in hyper roll set7
                              and now I get rank2 on TH-server(date28/6/2565).
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Cpp file management project */}
                      <div className="hstack">
                        <div className="mainexp">
                          <div className="expcon">
                            <img
                              style={{
                                width: "200px",
                                height: "200px",
                                objectFit: "fill",
                              }}
                              src="/sppro.png"
                            />
                          </div>
                        </div>
                        <div style={{ padding: "30px" }}>
                          <div className="expcon">
                            <p>
                              This project is useful it can clone file backup
                              file seperate file by type,date and also can
                              search file by space that it use(e.g. /clone
                              filepath.. /search path... 2Gb).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* in this */}
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
