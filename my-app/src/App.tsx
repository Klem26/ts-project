import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import EventPage from "./components/InPage";
import TodosPage from "./components/TodosPage";
import CardPage from "./components/CardPage";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/" className="link">
          User
        </Link>
        <Link to="/events" className="link">
          Events
        </Link>
        <Link to="/todolist" className="link">
          Todo list
        </Link>
        <Link to="/card">Card</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UsersPage />}></Route>
        <Route path="/events" element={<EventPage />}></Route>
        <Route path="/todolist" element={<TodosPage />}></Route>
        <Route path="/card" element={<CardPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
