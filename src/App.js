import "./App.css";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import Chat from "./components/Chat";
import { useState } from "react";
import { auth } from "./firebase/firebase-config";

function App() {
  const [user, setUser] = useState({});

  // firebase check if you was loggin and set the user, or this's new visit (sign up)
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return <div className="App">{user ? <Chat user={user} /> : <Login />}</div>;
}

export default App;
