import React from 'react';
import UserList from "./components/UserList";
import Card, { CardVariants } from "./components/Card";
import TodosPage from "./components/TodosPage/TodosPage";
import PhotosPage from "./components/Photos/PhotosPage";
import PhotoItemPage from "./components/Photos/PhotoItemPage";
import Events from "./components/Events";
import { Route, NavLink, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Card/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/users" element={<UserList/>}></Route>
      <Route path="/todos" element={<TodosPage/>}></Route>
      <Route path="/photos"element={<PhotosPage/>} ></Route>
      <Route path="/photos/:id" element={<PhotoItemPage/>} ></Route>

      </Routes>
      <div>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
        <NavLink to='/photos'>Photos</NavLink>
        <NavLink to='/photos/:id'>Photo</NavLink>
      </div>
    </div>   
  );
};

export default App;

