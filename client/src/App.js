import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Map from './components/Map';
// import Header from './components/Header';
// import UserSignUp from './components/UserSignUp';
// import UserLogin from './components/UserLogin';
// import LocationPage from './components/LocationPage';
// import ReactionPage from './components/ReactionPage';
// import CombinedLocReac from './components/CombinedLocReac';
import Sidebar from './components/DesignComponents/Sidebar';

function App() {
  // handles users and auth
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((r) => r.json())
      .then((usersArr) => setUsersList(usersArr));
  }, []);

  function handleAddUser(newUser) {
    const updatedUsersArray = [...usersList, newUser];
    setUsersList(updatedUsersArray);
  }
  //setting state for our user session
  const [user, setUser] = useState(null);

  //FOR TESTING ONLY: AUTO LOGIN FUNCTION
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);

  // //logout function
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  //start location fetching info
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/locations/")
    .then((r) => r.json())
    .then((locationsArr) => setLocations(locationsArr));
  }, []);
  //update locations state to include new location 
  function handleAddLocation(newLocation){
    const updatedLocationsArray = [...locations, newLocation];
    setLocations(updatedLocationsArray);
  }

  //delete locations
  // E.TARGET.id IS THE CULPRIT, GOTTA STOP PROPAGATIONS
  function handleDelete(e){
    const id = e.target.id
    fetch('http://localhost:4000/locations/' + id, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => handleUpdateLocations(e))
  }
  //update locations state to exclude deleted
  function handleUpdateLocations(e){
    const updatedLocations = locations.filter(location => {
      return location.id !== e.location.id
      })
    setLocations(updatedLocations)
    }

  
  return (
    <BrowserRouter>
     <Sidebar 
     logout={handleLogoutClick} user={user} onLogin={setUser} handleAddUser={handleAddUser}
     locations={locations} handleDelete={handleDelete} handleAddLocation={handleAddLocation}
     />
    <div className="container">
   
      <Switch>
        <Route path="/">
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
