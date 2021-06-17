import React from 'react'
import "./section2.css"
import EventsList from "./EventsList.js";
import { fortelist } from "../resource/forte.js";
function Section2(props) {
  return(
    <div className="section2" id="section2">
      <div className="container align-middle">
        <div>
          <div className="text-center">
            <h1 className="section2-h">My For<span className="h-span">t</span>e</h1>
          </div>
        </div>
        <div className="list">
          <EventsList data={fortelist} />
        </div>

      </div>
    </div>

  )
}
export default Section2
