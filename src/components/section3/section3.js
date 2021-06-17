import React from 'react'
import "./section3.css"
import Disproject from "./disproject.js";
import { projects } from "../resource/projects.js";
function Section3(props) {
  return(
    <div className="section3" id="section3">
      <div className="container">
        <div>
          <div className="text-center">
            <h1 className="section3-h">My Proj<span className="h-span">e</span>cts</h1>
          </div>
        </div>
        
        <div className="list">
          <Disproject data={projects} />
        </div>
      </div>
    </div>
  )
}
export default Section3
