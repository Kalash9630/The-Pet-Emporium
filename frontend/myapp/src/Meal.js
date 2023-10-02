import React,{useEffect} from "react";
import dimg1 from './image/dimg1.jpg'
import dimg2 from './image/dimg2.jpg'
import {Link} from 'react-router-dom'

const Meal = () => {
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
    <center id="top"style={{fontSize:"70px", marginTop:"4%"}}><span style={{color:"#e67e22"}}><b>About</b></span> <span style={{color:"#130f40"}}>Healthy Meal</span></center>
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
          We're on a mission to make healthy eating not just a choice, but a delightful lifestyle. We believe that food should be not only nutritious but also delicious, and we've curated a menu that embodies this philosophy.
          </p>
          <p className="mt-4">
            <div><b>Why Choose Our Healthy Meals:</b></div>
          </p>
          <p className="mt-4">
            <b>1. Nutrient-Rich Ingredients:  </b>Our chefs select the freshest, highest-quality ingredients to create meals that are packed with essential nutrients, vitamins, and minerals. We prioritize wholesome, real foods.
          </p>
          <p className="mt-5"> 
          <b>2. Chef-Crafted Creations: </b>Our culinary team is passionate about creating healthy meals that excite the taste buds. We use innovative techniques and flavorful seasonings to make every bite a delight.
          </p>
          <p className="mt-5">
            <b>3. Dietary Variety:  </b>Whether you're vegan, gluten-free, following a low-carb plan, or have specific dietary preferences, our menu offers a wide range of options to suit your needs.
          </p>

          <p className="mt-5">
            <b>4. Portion Control:  </b>We understand the importance of balanced portion sizes. Our meals are designed to provide the right amount of sustenance without excessive calories.
          </p>

          <p className="mt-5">
            <b>5. Convenience:  </b>Healthy eating should be easy. We take the hassle out of meal prep by delivering our delicious meals straight to your door. No more shopping, chopping, or cooking required.
          </p>

          <p className="mt-5">
            <b>6. Customization:  </b> Personalize your meals with our easy customization options. Swap ingredients, add extra protein, or adjust portion sizes to fit your dietary goals.
          </p>

          <p className="mt-5">
            <b>7. Health Education:  </b>We believe that knowledge is power. That's why we provide information about the nutritional value of each meal, helping you make informed choices about what you eat.
          </p>
          <div style={{float:"right"}} className="m-3"><a href="#top">Back to top</a></div>
        </div>
      </div>
      </div>
  );
};
export default Meal;