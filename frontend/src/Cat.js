import React,{useEffect} from "react";
import dimg1 from './image/dimg1.jpg'
import dimg2 from './image/dimg2.jpg'
import {Link} from 'react-router-dom'

const Cat = () => {
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
    <center id="top"style={{fontSize:"70px", marginTop:"4%"}}><span style={{color:"#e67e22"}}><b>About</b></span> <span style={{color:"#130f40"}}>Cat Boarding</span></center>
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
          We understand that your feline friend is not just a pet but a beloved member of your family. When life's adventures take you away from home, you want a safe, cozy, and caring environment where your cat can relax and thrive. That's precisely what we offer.
          </p>
          <p className="mt-4">
            <div><b>Why Choose Our Cat Boarding Services:</b></div>
          </p>
          <p className="mt-4">
            <b>1. Private and Serene Spaces: </b> Each cat has its own private, climate-controlled enclosure, ensuring they have a quiet and comfortable place to call their own.
          </p>
          <p className="mt-5"> 
          <b>2. Experienced and Devoted Caretakers: </b>Our passionate staff members are cat enthusiasts who are dedicated to your cat's well-being and happiness. Your cat will receive the love and attention they deserve.
          </p>
          <p className="mt-5">
            <b>3. Playtime and Enrichment: </b>Cats need mental and physical stimulation. We provide daily playtime and enrichment activities to keep your cat entertained and engaged.
          </p>

          <p className="mt-5">
            <b>4. Personalized Care:  </b>We understand that every cat has its own unique preferences and needs. Whether your cat has dietary restrictions, special medications, or specific playtime requirements, we'll tailor our care to meet their individual needs.
          </p>

          <p className="mt-5">
            <b>5. Safety and Security: </b>  Our facility is designed with your cat's safety in mind. We have strict security measures in place to ensure a secure and comfortable environment for all our guests.
          </p>

          <p className="mt-5">
            <b>6. Regular Updates: </b> We know how much you miss your cat when you're apart. That's why we provide regular updates and photos so you can see how content and relaxed your cat is during their stay.
          </p>

          <p className="mt-5">
            <b>7. Convenient Location: </b> Our facility is conveniently located, making drop-off and pick-up easy for you.
          </p>
          <div style={{float:"right"}} className="m-3"><a href="#top">Back to top</a></div>
        </div>
      </div>
      </div>
  );
};
export default Cat;