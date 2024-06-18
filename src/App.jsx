import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Line from "./Components/line/Line"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyStory from "./Components/MyStory/MyStory"
import Experience from "./Components/Experience/Experience"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"

function App() {
  return (
      // <div className=" flex gap-10">
      //   <div className="flex gap-9">
      //     <Navbar/>
      //     <Line/>
      //   </div>
      //   <div>
      //     <Home/>
      //   </div>
      // </div>
      <div className="lg:flex">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route element = {<Home/>} path="/"/>
            <Route element = {<MyStory/>} path="/story"/>
            <Route element = {<Experience/>} path="/experience"/>
            <Route element = {<Skills/>} path="/skills"/>
            <Route element = {<Projects/>} path="/projects"/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
