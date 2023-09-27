import React,{useEffect} from "react";
import aimg1 from './image/aimg1.png'
import aimg2 from './image/aimg2.png'
import {Link} from 'react-router-dom'

const Rabout = () => {
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
    <center style={{fontSize:"70px", marginTop:"4%"}}><span style={{color:"#130f40"}}>About</span><b> <span style={{color:"#e67e22"}}>Us</span> </b></center>
    <div className="row">
      <div>
          <div className="row container-fluid">
            <div className="col-lg-6">
              <img src={aimg1} className="mb-5" style={{height:"70%",width:"50%",marginLeft:"35%",marginTop:"5%"}}/>
            </div>
            <div className="col-lg-6">
              <img src={aimg2} className="mb-5"  style={{height:"70%",width:"50%",marginTop:"5%"}}/>
            </div>
            
          </div>

        </div>
        <div className="col-md-8 container-fluid mt-5" style={{fontSize:"20px"}}>
          <p>
          At The Pet Emporium , we understand that your furry family members deserve the very best. That's why we've created a one-stop destination for all your pet's needs. Whether you're looking for premium pet food or a comfortable and loving environment for your pet while you're away, we've got you covered.
          </p>
          <p>
          <div><b>Our Products:</b></div>

          High-Quality Pet Food: We offer a carefully curated selection of premium pet food brands that prioritize your pet's health and well-being. From kibble to canned food, we have options to suit every dietary need and taste preference.
          </p>
          <p>
          <div><b>Our Services:</b></div>

          We Offer many service like the dog Boarding, Cat Boarding, Spa and Grooming, Healthy Meal, Activity Exercis and Health Care.
          </p>
          <p>
          <div><b>Why Choose Us:</b></div>

          Experienced and Caring Staff: Our team is made up of passionate pet lovers who are dedicated to providing the best care possible for your furry friends.
          </p>
          <p>
          <b>Convenient Location: </b> Our location is easily accessible, making drop-off and pick-up a breeze for busy pet owners.
          </p>
          <p>
          <b>Clean and Safe Facilities: </b> We maintain a clean and secure environment to ensure your pet's safety and comfort at all times.
          </p>
          <div style={{float:"right"}} className="m-3"><a href="#top">Back to top</a></div>
        </div>
      </div>
      </div>
  );
};
export default Rabout;