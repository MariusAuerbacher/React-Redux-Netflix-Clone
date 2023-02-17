import React from 'react'
import './MainPage.css'
import avatar from '../assets/avatar.png'

function MainPage() {
  return (
    <div className="container-fluid col-10" id="container">
      <div className="col-12 d-flex top-bar justify-content-between align-items-center mt-2 mb-3" id="header">
        <div className="topbar-btn-col row d-flex justify-content-between">
            <div className="col-1 d-flex align-items-center arrow-bg">
                <i className="bi bi-chevron-left arrow" onclick="loadSections()"></i>
            </div>
            <div className="col-1 d-flex align-items-center arrow-bg">
                <i className="bi bi-chevron-right arrow" onclick="loadSections()"></i>
            </div>
            <div className="search-bar row col ml-4">
                <div className="input-group flex-nowrap d-none" id="input">
                   <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                    <input type="text" id="search-input" className="form-control rounded-pill"
                        placeholder="What do you want to listen to?" aria-label="Username"
                        aria-describedby="addon-wrapping"/>
                </div>
            </div>
        </div>
        <div className="topbar-user row ">
            <div className="dropdown">
                <button className="btn dropdown-toggle rounded-pill text-white" id="button" type="button"
                    data-toggle="dropdown"> <img className="user-img mr-2 ml-n2" src={avatar}
                        alt=""/><span className="text-white mml-2">John Doe</span>
                    <span className="caret"></span></button>
                <ul className="dropdown-menu bg-dark ">
                    <li>Account</li>
                    <li>Profile</li>
                    <li>Sign Out</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="container-fluid" id="good-morning-sec">
        <div className="row col-12 good-morning">
            <div className="col-12 d-flex ml-n3">
                <h3>Good Morning</h3>
            </div>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6  good-morning-div" id="good-morning">
                <div className="col-2 p-0 good-morning-content d-flex align-items-center">
                    <img className="col-5 pl-0 good-morning-img " src={avatar} alt=""/>
                    <div>Singer</div>
                </div> 
            </div>
        </div>
    </div>
    </div>
  


  )
}

export default MainPage