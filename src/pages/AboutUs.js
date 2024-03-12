import production from "../Images/production.mp4";
import labbanner from "../Images/Labbanner.png"

import React from 'react'

export default function AboutUs() {
  return (
    <div>
<div className="carousel-inner" role="listbox">
 

  
    <div className="carousel-item active">
  <video width="100%" autoPlay="autoplay" height="100%">
      <source src={production} type="video/mp4"/>
     </video>
    </div> 
  </div>
  
  <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={labbanner} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">ADVENTURE</h5>
        <p className="card-text">
Over the years, the appetite for adventure sports has
been on the rise. It is the spirit of adventure that
defines Woodland. A spirit that is willing to stretch
the levels of human endurance; a spirit that desires
to reach the furthest frontiers; a spirit that craves to
venture into the unknown.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={labbanner} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> OUR PRODUCTS</h5>
        <p className="card-text">
       
Woodland's parent company, Aero Group, has been a
well known name in the outdoor shoe industry since
the early 50s. Founded in Quebec, Canada, it entered
the Indian market in 1992. Before that, Aero Group
was majorly exporting its leather shoes to Russia.
After the division of Russia into various states known
as the USSR, the group decided to launch some of
its products in India. Hence, the first hand-stitched
leather shoe was launched, which took the entire
shoe market by storm. That shoe made the brand
'Woodland'.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={labbanner} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Technology & Innovation</h5>
        <p className="card-text">
        
The increasing diversity of outdoor activity requires
creative solutions that meet the quest for adventure.
That's where Woodland's expertise comes into
picture. It combines activity focused designs and
technologically advanced materials available,
created in the most innovative and effective manner
possible.
.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
