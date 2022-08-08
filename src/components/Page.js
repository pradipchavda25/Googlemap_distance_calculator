import React from "react";
import { useState } from 'react'
import logo from './images/logo.png';
export default function Page() {

  const [fromData, setDatafrom] = useState(null)
  function fromdata(val) {
    setDatafrom(val.target.value)
  }
  const [toData, setDatato] = useState(null)
  function todata(val) {
    setDatato(val.target.value)
  }
  
  return (
    <>
      <div className="header">
        <img src={logo} width="100" height="100" alt="" />
        <h3>Graviti</h3>
      </div>
      <div class="container-fluid h-100 main">
        <div class="container-fluid  bg-light h-100 ">
          <h5 class="d-flex justify-content-center p-6 title">
            Lets calculate &nbsp; <strong> distance </strong> &nbsp; from google map
          </h5>
          <div class="row container-fluid">
            <div class="col-sm-6 p-3 text-dark order-1 map-data">
              <form action="">
                <div class="container p-3 ">
                  <label htmlFor="from" class="label">Origin</label><br />
                  <input type="text" class="form-control col-6 input-city" id="from" placeholder=" Origin" onChange={fromdata} /> <br />
                  <button
                    type="submit"
                    class="btn btn-primary rounded-pill float-right cl-button">
                    Calculate
                  </button> <br /><br />
                  <label htmlFor="to" class="label label2">Destination</label><br />
                  <input type="text" class="form-control col-6 input-city" id="to" placeholder=" Destination" onChange={todata} /> <br />
                  <div className="distance-bar input-city" placeholder="Distance">
                    <div className="text">
                      Distance
                    </div>
                    <div className="distance">
                      1427 kms
                    </div>
                  </div> <br />
                  <p class="text-line">the distance between &nbsp; <strong>{fromData}</strong> &nbsp; and &nbsp; <strong>{toData}</strong> &nbsp; is <strong>1427 kms.</strong></p>
                </div>
              </form>
            </div>
            <div class="col-sm-6 p-3 text-white order-2" id="googleMap">
              <iframe width="100%" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=surat&key=AIzaSyBNZ-87YnYHrSDwgHrJDFpaCmKd9cls0GM"></iframe>
              <div id="output"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
