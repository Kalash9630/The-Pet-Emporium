import React,{useEffect} from "react";
import dimg1 from './image/dimg1.jpg'
import dimg2 from './image/dimg2.jpg'
import {Link} from 'react-router-dom'

const Health = () => {
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
    <center id="top"style={{fontSize:"70px", marginTop:"4%"}}><span style={{color:"#e67e22"}}><b>About</b></span> <span style={{color:"#130f40"}}>Health Care</span></center>
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
          We are dedicated to providing you with the information and resources you need to ensure your pet's health and well-being. We understand that your pet is not just an animal but a cherished member of your family, and their health is of utmost importance.
          </p>
          <p className="mt-4">
            <div><b>Why Choose Our Pet Health Care Resources:</b></div>
          </p>
          <p className="mt-4">
            <b>1. Comprehensive Health Information:   </b>We offer a wealth of information on a wide range of pet health topics. From common illnesses to preventive care, we cover it all to help you make informed decisions about your pet's health.
          </p>
          <p className="mt-5"> 
          <b>2. Expert Advice: </b>Our team of experienced veterinarians and pet health experts is committed to providing accurate and reliable guidance for your pet's health concerns. We are here to answer your questions and offer professional insights.
          </p>
          <p className="mt-5">
            <b>3. Preventive Care:  </b>We emphasize the importance of preventive care to keep your pet in the best possible health. Learn about vaccinations, flea and tick control, dental care, and more to ensure your pet lives a long and happy life.
          </p>

          <p className="mt-5">
            <b>4. Pet First Aid: </b>Learn how to respond to emergencies and administer basic first aid to your pet. Knowing what to do in a crisis can make a significant difference in your pet's outcome.
          </p>

          <p className="mt-5">
            <b>5. Common Health Issues:   </b>Get information on common health issues that affect pets, including symptoms to watch for, treatment options, and when to seek veterinary care.
          </p>

          <p className="mt-5">
            <b>6. Holistic and Alternative Therapies: </b>Explore holistic and alternative therapies that can complement traditional veterinary care to promote your pet's overall wellness.
          </p>

          <div style={{float:"right"}} className="m-3"><a href="#top">Back to top</a></div>
        </div>
      </div>
      </div>
  );
};
export default Health;