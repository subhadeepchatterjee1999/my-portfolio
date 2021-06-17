import React from "react";
import Projcard from "./projcard.js";

export default function Disproject(props) {
  const projList = props.data.map(event => (

      <Projcard
        id={event.id}
        title={event.title}
        description={event.description}
        src = {event.src}
      />

  ));

  return <div className="row">{projList}</div>;
}
