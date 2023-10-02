import React, { useEffect } from "react";
import dimg1 from './image/dimg1.jpg'
import dimg2 from './image/dimg2.jpg'
import { Link } from 'react-router-dom'

const Dog = () => {
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
          <div className="collapse navbar-collapse mt-3 mb-2" style={{ paddingLeft: "85%" }} id="mynavbar">
          <Link className="btn-login" to="/" style={{textDecoration:"none",color:'#130f40 '}}>Back to Home Page</Link>
          </div>
        </div>
      </nav>
      <center style={{ fontSize: "70px", marginTop: "4%" }}><span style={{ color: "#e67e22" }}><b>About</b></span> <span style={{ color: "#130f40" }}>Dog Boarding</span></center>
      <div className="row">
        <div>
          <div className="row container-fluid">
            <div className="col-lg-6">
              <img src={dimg1} className="mb-5" style={{ height: "70%", width: "50%", marginLeft: "35%", marginTop: "7%" }} />
            </div>
            <div className="col-lg-6">
              <img src={dimg2} className="mb-5" style={{ height: "70%", width: "50%", marginTop: "7%" }} />
            </div>

          </div>

        </div>
        <div className="col-md-8 container-fluid mt-5" style={{ fontSize: "20px" }}>
          <p>
            we understand that your four-legged companion is not just a pet but a cherished member of your family. When you can't be with them, you want the very best care, comfort, and attention for your furry friend. That's where we come in.
          </p>
          <p className="mt-4">
            <div><b>Why Choose Our Dog Boarding Services:</b></div>
          </p>
          <p className="mt-4">
            <b>1. Comfortable Accommodations:  </b> We provide spacious and cozy accommodations for your dog. Each dog has their own private area where they can relax, sleep, and feel at home.
          </p>
          <p className="mt-5">
            <b>2. Professional and Caring Staff:  </b>Our experienced staff members are passionate about dogs and committed to ensuring your pet's well-being. We treat every dog as if they were our own.
          </p>
          <p className="mt-5">
            <b>3. Playtime and Exercise:  </b> Dogs need physical activity and mental stimulation to stay happy and healthy. That's why we offer ample playtime and exercise in our secure, supervised outdoor areas.
          </p>

          <p className="mt-5">
            <b>4. Customized Care:  </b> We understand that every dog is unique. Whether your dog has special dietary needs, medication requirements, or simply prefers a certain type of play, we tailor our care to meet their specific needs.
          </p>

          <p className="mt-5">
            <b>5. Safety First: </b> If your dog enjoys the company of other dogs, they'll have plenty of opportunities to socialize and make new friends during their stay.
          </p>

          <p className="mt-5">
            <b>6. Regular Updates: </b> We know how important it is to stay connected with your dog while you're apart. We provide regular updates and photos so you can see how much fun your furry friend is having.
          </p>

          <p className="mt-5">
            <b>7. Convenient Location: </b> Our facility is conveniently located, making drop-off and pick-up easy for you.
          </p>
          <div style={{ float: "right" }} className="m-3"><a href="#top">Back to top</a></div>
        </div>
      </div>
    </>
  );
};
export default Dog;