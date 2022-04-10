import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Map from './components/Map';
import LocationForm from './components/LocationForm';
import Header from './components/Header';
import UserSignUp from './components/UserSignUp';

function App() {
  //test code making sure our server and client are talking
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((r) => r.json())
      .then((usersArr) => {
        console.log(usersArr)
        setUsersList(usersArr);
      });
  }, []);
  console.log(usersList)



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





  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


















  
  return (
    <BrowserRouter>
    <div className="App">
    <Header logout={handleLogoutClick} user={user} setUser={setUser} />
    <h1>Page Count: {count}</h1>
     
      <LocationForm />
      <Map />
    
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
