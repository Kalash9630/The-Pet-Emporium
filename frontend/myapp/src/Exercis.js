import React,{useEffect} from "react";
import dimg1 from './image/dimg1.jpg'
import dimg2 from './image/dimg2.jpg'
import {Link} from 'react-router-dom'

const Exercis = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
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
    <center id="top"style={{fontSize:"70px", marginTop:"4%"}}><span style={{color:"#e67e22"}}><b>About</b></span> <span style={{color:"#130f40"}}>Activity Exercise</span></center>
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
          We believe that a healthy pet is a happy pet. Our goal is to inspire you and your furry companion to stay active, engaged, and energized. From exercise tips to exciting activities, we're here to help your pet live their best, most active life.
          </p>
          <p className="mt-4">
            <div><b>Why Choose Our Pet Activities and Exercises:</b></div>
          </p>
          <p className="mt-4">
            <b>1. Health and Wellness: </b>Regular physical activity is vital for your pet's overall health. It helps maintain a healthy weight, prevents obesity-related issues, and keeps their muscles and joints in top condition.
          </p>
          <p className="mt-5"> 
          <b>2. Mental Stimulation: </b>Exercise isn't just about the body; it's also about the mind. Engaging activities and exercises challenge your pet's intelligence, reduce boredom, and stimulate their cognitive abilities.
          </p>
          <p className="mt-5">
            <b>3. Bonding Time:  </b>Activities and exercises are an excellent way for you and your pet to strengthen your bond. Spending quality time together enhances your connection and mutual trust.
          </p>

          <p className="mt-5">
            <b>4. Outdoor Adventures:  </b>Explore the great outdoors with your pet! Find hiking trails, dog-friendly parks, and pet-friendly destinations to embark on memorable adventures together.
          </p>

          <p className="mt-5">
            <b>5. Exercise Ideas:  </b>Discover a wide range of exercise ideas and routines tailored to your pet's breed, age, and fitness level. Whether it's brisk walks, agility training, or interactive games, we've got something for every pet.
          </p>

          <p className="mt-5">
            <b>6. Socialization:   </b>Some pets love making new friends. Activities such as dog park visits or pet playdates provide opportunities for socialization, helping your pet develop healthy relationships with other animals.
          </p>

          <p className="mt-5">
            <b>7. Fun and Entertainment:  </b>Most importantly, staying active and engaged should be fun for both you and your pet. We offer a variety of enjoyable activities to keep tails wagging and whiskers twitching.
          </p>
          <div style={{float:"right"}} className="m-3"><a href="#top">Back to top</a></div>
        </div>
      </div>
      </>
  );
};
export default Exercis;