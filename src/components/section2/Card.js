import React from 'react'

function Card(props) {
  return(
  <div className="col-lg-6">
    <div className="card border-danger mb-3">
      <div className="card-header">{props.id}</div>
      <div className="card-body">
        <h5 className="card-title text-danger">{props.title}</h5>
        <p className="card-text ">{props.description}</p>
      </div>
    </div>
  </div>


  )
}
export default Card
