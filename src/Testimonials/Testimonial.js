import React from "react";

import "./testimonial.scss";

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h1 className="testimonialsHeader">Testimonials</h1>
        <div className="testimonialsAll">
          <div className="testimonialsDetails">
            <img className="bgImg" src="./assets/user/a.jpg" alt="" />
            <h1>Dipesh</h1>
            <p>
              The Food we had enjoyed at the time of dinner. It was really
              delicious taste with great quality.Everything had unique taste
              which we had ordered.And,The best and unique part is QR order system.
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src="./assets/user/b.jpg" alt="" />
            <h1>Kaka</h1>
            <p>
              Although we didn't go into the onsite restaurant, we ordered some
              food with QR from own table a very first time and it was easy and fast. The lobby were nice and
              open.Good place to relax and meet friends.
            </p>
          </div>

          <div className="testimonialsDetails">
            <img className="bgImg" src="./assets/user/c.jpg" alt="" />
            <h1>Ashutosh</h1>
            <p>
              The food was fresh, properly prepared and a great value for the
              price. We highly recommend it. The breakfast buffet on Sunday was
              equally as good and last not least food order system with QR from own table without waiter was awsome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
