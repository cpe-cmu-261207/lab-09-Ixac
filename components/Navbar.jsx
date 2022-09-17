import Link from "next/link";
import React from "react";
import Mainlayout from "../layout/Mainlayout";
import Todolist from "./Todolist";

export default function Navbar() {
  return (
    <div>
      <div style={{ maxWidth: "600px" }} className="mx-auto">
        <div className="d-flex justify-content-center gap-5 fs-4">
          <Link href="/Home">
            <a>Home</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

          <Link href="/Exp">
            <a>Experience</a>
          </Link>
          <Link href="/lab-07">
            <a>Lab 7</a>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}
