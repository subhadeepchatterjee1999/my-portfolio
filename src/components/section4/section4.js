import React from 'react'
import "./section4.css"
function Section4(props) {
  return(
    <div className="section4" id="section4">
      <div className="container">
        <div>
          <div className="text-center">
            <h1 className="section4-h">My Educa<span className="h-span">t</span>ion</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">School</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Year</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr className="bg-warning">
                  <th scope="row">1</th>
                  <td>St. Xavier's School</td>
                  <td>10th</td>
                  <td>2016</td>
                </tr>
                <tr className="bg-success">
                  <th scope="row">2</th>
                  <td>St. Xavier's School</td>
                  <td>12th</td>
                  <td>2018</td>
                </tr>
                <tr className="bg-info">
                  <th scope="row">3</th>
                  <td>Haldia Institute of Technology</td>
                  <td>Btech(Hons)</td>
                  <td>2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section4
