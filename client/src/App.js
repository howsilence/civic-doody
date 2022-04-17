import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Map from './components/Map';
import LocationForm from './components/LocationForm';
import Header from './components/Header';
import UserSignUp from './components/UserSignUp';
import UserLogin from './components/UserLogin';
import LocationTable from './components/LocationTable';
import ReactionPage from './components/ReactionPage';

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
      .then((locationsObj) => setLocations(locationsObj));
  }, []);

  function handleAddLocation(newLocation) {
    const addedLocations = [...locations, newLocation];
    setLocations(addedLocations);
  }

  //delete locations
  function handleDelete(e){
    const id = e.target.id
      fetch('http://localhost:4000/locations/' + id, {
        method: 'DELETE',
      })
        .then(resp => resp.json())
         .then(() => handleUpdateLocations(e))
  }

  function handleUpdateLocations(e){
    const updatedLocations = locations.filter(location => {
      return location.id !== e.location.id
      })
    setLocations(updatedLocations)
  }

  //fetch comments
  // const [reactions, setReactions] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:4000/reactions/")
  //     .then((r) => r.json())
  //     .then((reactionsObj) => setReactions(reactionsObj));
  // }, []);

  // function handleAddReaction(newReaction) {
  //   const addedReactions = [...reactions, newReaction];
  //   setReactions(addedReactions);
  // }

  
  return (
    <BrowserRouter>
    <div className="container">
          <div className="controls">
            <h1>Civic Doody 💩</h1>
            <h2>{user ? `Welcome back! ${user.username}` : "You Must Have An Account To Contribute"}</h2>
            <Header logout={handleLogoutClick} user={user} onLogin={setUser} />
           {user ?
           <> 
              <LocationForm onAddLocation={handleAddLocation} />
              {/* <CommentForm onAddComment={handleAddReaction} />  */}
            </>
            :  <UserLogin  user={user} onLogin={setUser}/> }
          </div>
      
         
     
      <Switch>
      <Route path="/locationstable">
          <LocationTable locations={locations} handleDelete={handleDelete} />
        </Route>
        <Route path="/signup">
          <UserSignUp onAddUser={handleAddUser} />
        </Route>
        <Route path="/reactionpage">
          <ReactionPage />
        </Route>
        <Route path="/map">
          <Map locations={locations} handleDelete={handleDelete} className="map" />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
