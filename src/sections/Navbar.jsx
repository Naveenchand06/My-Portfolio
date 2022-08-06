import React from "react";
import code from "../assets/code.png";

function Navbar() {
  return (
    <div>
      <nav className="container mx-auto px-28">
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <a class="make-hero-title btn btn-ghost normal-case text-xl">
              <img src={code} alt="" height={15} width={40} />
            </a>
            <a className="make-hero-title" href="">
              Naveenchand
            </a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Experience</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>
        </div>{" "}
      </nav>
    </div>
  );
}

export default Navbar;
