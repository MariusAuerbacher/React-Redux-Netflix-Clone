import React from "react";
import avatar from "../assets/avatar.png";
import RenderMusic from "./RenderMusic";

function Topbar() {

  return (
    <div class="container-fluid col-10" id="container">
      <div
        class="col-12 d-flex top-bar justify-content-between align-items-center mt-2 mb-3"
        id="header"
      >
        <div class="topbar-btn-col row d-flex justify-content-between">
          <div class="col-1 d-flex align-items-center arrow-bg">
            <i class="bi bi-chevron-left arrow" onclick="loadSections()"></i>
          </div>
          <div class="col-1 d-flex align-items-center arrow-bg">
            <i class="bi bi-chevron-right arrow" onclick="loadSections()"></i>
          </div>
          <div class="search-bar row col ml-4">
            <div class="input-group flex-nowrap d-none" id="input">
              <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping">
                  <i class="bi bi-search"></i>
                </span>
              </div>
              <input
                type="text"
                id="search-input"
                class="form-control rounded-pill"
                placeholder="What do you want to listen to?"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <div class="topbar-user row ">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle rounded-pill text-white"
              id="button"
              type="button"
              data-toggle="dropdown"
            >
              <img class="user-img mr-2 ml-n2" src={avatar} alt="" />
              <span class="text-white mml-2">John Doe</span>
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu bg-dark ">
              <li>Account</li>
              <li>Profile</li>
              <li>Sign Out</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid" id="good-morning-sec">
        <div class="row col-12 good-morning">
          <div class="col-12 d-flex ml-n3">
            <h3>Good Morning</h3>
          </div>
          <div
            class="row row-cols-2 row-cols-md-4 row-cols-lg-6  good-morning-div"
            id="good-morning"
          >
            <div class="col-2 p-0 good-morning-content d-flex align-items-center">
              <img class="col-5 pl-0 good-morning-img " src={avatar} alt="" />
              <div>Singer</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-4 d-none" id="search-result-sec">
        <div class="d-flex justify-content-between">
          <h4 class="mb-3 underline">Search Results</h4>
        </div>
        <div
          class="row row-cols-2 row-cols-md-4 row-cols-lg-5"
          id="search-result"
        ></div>
      </div>

      <RenderMusic />
    </div>
  );
}

export default Topbar;
