import React from 'react'
import "./section5.css"
import {Link} from 'react-scroll'
function Section5(props) {
  return(
    <div className="section5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div class="card border-danger">
              <div class="card-body">
                <i class="arrow right"></i><h1>Download My Resume</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 down">
            <a href="https://github.com/subhadeepchatterjee1999/my-portfolio/raw/gh-pages/files/myfile.pdf" className="btn btn-success btn-lg btn-block" download> Download Here </a>


          </div>
        </div>
      </div>
      <div className="footer text-white">
        <div className="container-fluid f-cont">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec5-card">
                <div class="card" style={{width: "18rem;"}}>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fas fa-envelope-open-text"></i> Email : subhadeepchatt99erjee@gmail.com</li>
                    <li class="list-group-item"><i class="fas fa-mobile-alt"></i> Phone : +91 8250657753</li>
                  </ul>
                </div>
              </div>

              <div className="link">
                <Link className="text-secondary" activeClass="active" to="section1" spy={true} smooth={true}>Home </Link><br/>
                <Link className="text-secondary"  to="section2" spy={true} smooth={true}>Forte </Link><br/>
                <Link className="text-secondary"  to="section3" spy={true} smooth={true}>Projects </Link><br/>
                <Link className="text-secondary"  to="section4" spy={true} smooth={true}>Education</Link>
              </div>

            </div>
            <div className="col-lg-6">
              <a href='https://www.linkedin.com/in/subhadeep-chatterjee-3846b6171/'
              target="_blank" type="button" class="btn btn-info btn-block"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/subhadeepchatterjee1999" type="button" class="btn btn-info btn-block" target="_blank"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section5
