import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Map from './components/Map';
import LocationForm from './components/LocationForm';
import Header from './components/Header';
import UserSignUp from './components/UserSignUp';

function App() {
  // handles users and auth
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((r) => r.json())
      .then((usersArr) => {
        console.log(usersArr)
        setUsersList(usersArr);
      });
  }, []);

  function handleAddUser(newUser) {
    const updatedUsersArray = [...usersList, newUser];
    setUsersList(updatedUsersArray);
  }
  //setting state for our session, auto login
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);
  //logout function
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  //start location fetching info
  const [locationsArr, setLocationsArr] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/locations/")
      .then((r) => r.json())
      .then((locationsObj) => {
        console.log(locationsObj)
        setLocationsArr(locationsObj);
      });
  }, []);
  function handleAddLocation(newLocation) {
    const updatedLocationsArray = [...locationsArr, newLocation];
    setLocationsArr(updatedLocationsArray);
  }
  
  return (
    <BrowserRouter>
    <div className="container">
          <div className="controls">
            <h1>Civic Doody</h1>
            <h2>{user ? `Welcome back! ${user}` : "Feel free to look around"}</h2>
            <Header logout={handleLogoutClick} user={user} setUser={setUser} />
            <LocationForm />
          </div>
      
        <Map array={locationsArr} setState={setLocationsArr} className="map" />
     
      <Switch>
        <Route path="/signup">
          <UserSignUp onAddUser={handleAddUser} />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
