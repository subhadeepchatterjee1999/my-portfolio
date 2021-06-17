import React from 'react'

function Projcard(props) {
  return(
  <div className="col-lg-12">
    <div class="card border-danger">
      <h5 class="card-header">{props.id}</h5>
      <div class="card-body">
        <h5 class="card-title text-danger">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a target="_blank" href={props.src} class="btn btn-primary">Visit</a>
      </div>
    </div>
  </div>


  )
}
export default Projcard
