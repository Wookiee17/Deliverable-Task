import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");        
        userData = await response.json();
        console.log("response",userData);
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name}`.toLowerCase().includes(value)) ||`${user.email}`.toLowerCase().includes(value)||`${user.phone}`.includes(value));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <h1>User Data</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
