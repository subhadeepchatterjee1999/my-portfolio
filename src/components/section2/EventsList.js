import React from "react";
import Card from "./Card";

export default function EventsList(props) {
  const eventsList = props.data.map(event => (

      <Card
        id={event.id}
        title={event.title}
        description={event.description}
      />

  ));

  return <div className="row">{eventsList}</div>;
}
