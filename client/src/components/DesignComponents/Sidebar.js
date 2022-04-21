import React, { useState } from "react";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
import "./Sidebar.css";
import LocationPage from "../LocationPage";
import ReactionPage from "../ReactionPage";
import Map from "../Map";
import UserAuthPage from "../UserAuthPage";
// import LI-In-Bug from './LI-In-Bug'

export default function Sidebar({logout, user, handleAddUser, onLogin, locations, handleDelete, handleAddLocation}) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [rtl, setRTL] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`layout has-sidebar ${rtl ? "rtl" : ""}`}>
      <aside
        id="sidebar"
        className={`sidebar break-point-md ${collapsed ? "collapsed" : ""} ${
          toggled ? "toggled" : ""
        }`}
      >
        
        <div className="nav-items">
	    		<div className="form-inline">
			
						{(user) ?  
            <a href="!#" className="btn" id="sidebar-btn" onClick={() => setShowLocations(!showLocations)}>{(showLocations) ? "Hide Locations" : "Show Locations"}</a> : null}{(showLocations) ? <LocationPage locations={locations} handleDelete={handleDelete} handleAddLocation={handleAddLocation}/> : null}

            {(user) ?  <a href="!#" id="sidebar-btn" className="btn" onClick={() => setShowReactions(!showReactions)}>{(showReactions) ? "Hide Reactions" : "Show Reactions"}</a> : null}
            {(showReactions) ? <ReactionPage locations={locations} user={user} /> : null}

					</div>
				</div>
      </aside>
      <div className="overlay" onClick={() => setToggled(false)}></div>
      <div className="layout">
        <header className="header">
        <div>
            <a
              href="!#"
              className="btn"
              onClick={() => setCollapsed(!collapsed)}
            >
              Collapse
            </a>
          </div>
          <div>
            <a href="!#" className="btn" onClick={() => setRTL(!rtl)}>
              RTL
            </a>
          </div>
          <div>
           { (user) ? <a href="!#" className="btn"  onClick={logout} >
              Log Out
            </a> : null}
          </div>
          <h1>Civic Doody 💩</h1>
          <a href="!#" className="btn" onClick={() => setShowMap(!showMap)}>{(showMap) ? "Hide Map" : "Show Map"}</a>
          <a href="!#" className="btn" onClick={() => setToggle(!toggle)}>
              {(toggle) ? "Dark Mode" : "Light Mode"}
            </a>
          </header>
        <main className="content">
          <div className="sidebar-toggler break-point-md">
          </div>
            {(user) ? null : <UserAuthPage user={user} handleAddUser={handleAddUser} onLogin={onLogin}  />}
            {(showMap) ? <Map locations={locations} handleDelete={handleDelete} onAddLocation={handleAddLocation} toggle={toggle} setToggle={setToggle} className="map" /> : null}
        </main>
        <footer className="footer">
          <a href="https://github.com/howsilence" ><img id="footer-links" src={ require ("./Octocat.png")} alt="Github"></img></a>
          <a href="https://www.linkedin.com/in/steve-tatton-aa0937233/"><img id="footer-links" src={ require ("./LI-In-Bug.png")} alt="LinkedIn"></img></a>
        </footer>
      </div>
    </div>
  );
}
