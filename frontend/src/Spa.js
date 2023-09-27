import React,{useEffect} from "react";
import dimg1 from './image/dimg1.jpg'
import dimg2 from './image/dimg2.jpg'
import {Link} from 'react-router-dom'

const Spa = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mt-3 mb-2" style={{paddingLeft:"85%"}} id="mynavbar">
    <Link className="btn-login" to="/" style={{textDecoration:"none",color:'#130f40 '}}>Back to Home Page</Link>
    </div>
  </div>
</nav>
    <center id="top"style={{fontSize:"70px", marginTop:"4%"}}><span style={{color:"#e67e22"}}><b>About</b></span> <span style={{color:"#130f40"}}>Spa & Grooming</span></center>
    <div className="row">
      <div>
          <div className="row container-fluid">
            <div className="col-lg-6">
              <img src={dimg1} className="mb-5" style={{height:"70%",width:"50%",marginLeft:"35%",marginTop:"7%"}}/>
            </div>
            <div className="col-lg-6">
              <img src={dimg2} className="mb-5"  style={{height:"70%",width:"50%",marginTop:"7%"}}/>
            </div>
            
          </div>

        </div>
        <div className="col-md-8 container-fluid mt-5" style={{fontSize:"20px"}}>
          <p>
          We believe that every pet deserves to look and feel their best. Our spa and grooming services are designed to pamper your furry friend, leaving them refreshed, rejuvenated, and looking fabulous.
          </p>
          <p className="mt-4">
            <div><b>Why Choose Our Spa and Grooming Services:</b></div>
          </p>
          <p className="mt-4">
            <b>1. Experienced Grooming Professionals:  </b>Our team of skilled and compassionate grooming professionals has years of experience working with pets of all breeds and sizes. We understand that each pet has unique grooming needs, and we're here to cater to them.
          </p>
          <p className="mt-5"> 
          <b>2. Personalized Spa Treatments: </b>We offer a range of spa treatments tailored to your pet's individual needs. From luxurious baths and soothing massages to breed-specific haircuts and creative styling, we'll make sure your pet's spa experience is customized to perfection.
          </p>
          <p className="mt-5">
            <b>3. Top-Quality Products:  </b>We use only the finest grooming products, ensuring that your pet's coat and skin receive the best care possible. Our products are gentle, hypoallergenic, and suitable for pets with sensitive skin.
          </p>

          <p className="mt-5">
            <b>4. Stress-Free Environment: </b>We create a calm and stress-free environment for your pet's grooming experience. Our spa is designed to minimize anxiety and discomfort, making the process as enjoyable as possible.
          </p>

          <p className="mt-5">
            <b>5. Safety and Hygiene:  </b> Your pet's safety and health are our top priorities. We follow strict hygiene protocols and use sanitized equipment for each pet, ensuring a clean and safe grooming experience.
          </p>

          <p className="mt-5">
            <b>6. Spa Extras:  </b> Treat your pet to some extra TLC with our spa extras. We offer nail trims, teeth cleaning, de-shedding treatments, and more to keep your pet looking and feeling their best.
          </p>

          <p className="mt-5">
            <b>7. Convenient Scheduling: </b> We offer flexible scheduling options to accommodate your busy lifestyle. Whether you need a quick touch-up or a full grooming session, we're here to make it convenient for you.
          </p>
          <div style={{float:"right"}} className="m-3"><a href="#top">Back to top</a></div>
        </div>
      </div>
      </div>
  );
};
export default Spa;