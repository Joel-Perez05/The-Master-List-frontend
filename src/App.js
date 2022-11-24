import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import ZeldaForm from "./components/ZeldaForm";
import ZeldaHome from "./components/ZeldaHome";
import ZeldaList from "./components/ZeldaList";
import Update from "./components/Update";
import Detail from "./components/Detail";
import { ThemeContext } from "./ThemeContext";
import ThemeButton from "./components/ThemeButton";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <BrowserRouter>
    <div style={{height: "1655px"}} className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <Header />
      <ThemeButton />
      <Routes>
        <Route element={<ZeldaHome />} path="/" />
        <Route element={<ZeldaForm />} path="/zelda/list/new" />
        <Route element={<ZeldaList />} path="/zelda/lists" />
        <Route element={<Update />} path="zelda/list/edit/:id" />
        <Route element={<Detail />} path="game/details/:id" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
