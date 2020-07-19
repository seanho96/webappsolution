import React, { useState } from "react";
import hero from "../hero.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {

  const [joined, setJoined] = useState("");
  const history = useHistory();

  const join = (e) => {
    e.preventDefault();
    if (joined !== "") {
      let today = new Date();
      let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      history.push(`/thanks/${joined}`, date)
    }
  }

  return (
    <React.Fragment>
      <header>
        <img src={hero} alt="hero" />
        <div>
          <h1>Need a quick & efficient <br />web app?</h1>
          <p>WebApp Solution has got you covered. We help our clients engineer custom web apps just like this one within 7 days post consultation.</p>
          <Link to="/contact">Get in touch</Link>
        </div>
      </header>

      <main>
        <section className="services">
          <h2>Why we should work together?</h2>

          <div className="service-container">
            <div className="services-card service-one"></div>
            <div className="service-description">
              <h3>SEO Friendly Apps</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae nisi modi tempora? Esse illum iure reiciendis delectus officia aspernatur, fuga dolore cupiditate. Cum aspernatur, autem tenetur non illo officiis quasi unde architecto sit molestiae corporis saepe odio dolore sunt deleniti quae quisquam. Provident reiciendis excepturi optio beatae ratione quisquam.</div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-two"></div>
            <div className="service-description">
              <h3>Clear &amp; Optimized Code</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae nisi modi tempora? Esse illum iure reiciendis delectus officia aspernatur, fuga dolore cupiditate. Cum aspernatur, autem tenetur non illo officiis quasi unde architecto sit molestiae corporis saepe odio dolore sunt deleniti quae quisquam. Provident reiciendis excepturi optio beatae ratione quisquam.</div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-three"></div>
            <div className="service-description">
              <h3>24 Hour Support</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae nisi modi tempora? Esse illum iure reiciendis delectus officia aspernatur, fuga dolore cupiditate. Cum aspernatur, autem tenetur non illo officiis quasi unde architecto sit molestiae corporis saepe odio dolore sunt deleniti quae quisquam. Provident reiciendis excepturi optio beatae ratione quisquam.</div>
            </div>
          </div>
        </section>

        <section>
          <h2>Join our newsletter to get the latest trends.</h2>

          <form className="newsletter" onSubmit={join}>
            <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
            <input type="submit" value="Join Now!" />
          </form>
        </section>



      </main>
    </React.Fragment>
  )
}

export default Main;