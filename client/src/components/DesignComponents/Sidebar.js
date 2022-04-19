import React, { useState } from "react";
import "css-pro-layout/dist/css/css-pro-layout.min.css";
import "./Sidebar.css";
import LocationPage from "../LocationPage";
import ReactionPage from "../ReactionPage";
import Map from "../Map";
import UserAuthPage from "../UserAuthPage";

export default function Sidebar({logout, user, handleAddUser, onLogin, locations, handleDelete, handleAddLocation}) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [rtl, setRTL] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [showMap, setShowMap] = useState(false);

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
            <a href="!#" className="btn" onClick={() => setShowLocations(!showLocations)}>{(showLocations) ? "Hide Locations" : "Show Locations"}</a> : null}{(showLocations) ? <LocationPage locations={locations} handleDelete={handleDelete} handleAddLocation={handleAddLocation}/> : null}

            {(user) ?  <a href="!#" className="btn" onClick={() => setShowReactions(!showReactions)}>{(showReactions) ? "Hide Reactions" : "Show Reactions"}</a> : null}
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
            <a href="!#" className="btn"  onClick={logout} >
              {(user) ? "Logout" : "Header"}
            </a>
          </div>
          <h1>Civic Doody 💩</h1>
          <a href="!#" className="btn" onClick={() => setShowMap(!showMap)}>{(showMap) ? "Hide Map" : "Show Map"}</a>
          <a href="!#" className="btn" onClick={() => setToggled(!toggled)}>
              Toggle
            </a>
          </header>
        <main className="content">
          <div className="sidebar-toggler break-point-md">
          
          </div>
            {(user) ? null : <UserAuthPage user={user} handleAddUser={handleAddUser} onLogin={onLogin}  />}
            {(showMap) ? <Map locations={locations} handleDelete={handleDelete} onAddLocation={handleAddLocation} className="map" /> : null}
        </main>
        <footer className="footer">Footer</footer>
      </div>
    </div>
  );
}
