import React from "react";
import image from "../Contact/contact.jpg"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header/>
      <section className="contact_us">
        <form className="left_contact">
          <div className="input_of_contact">
            <label htmlFor="">اپنا نام لکھیں</label>
            <input
              className="form_input"
              type="text"
              name="name"
              id="name"
              placeholder="اپنا نام لکھیں"
            />
          </div>
          <div className="input_of_contact">
            <label htmlFor="">اپنا نمبر لکھیں</label>
            <input
              className="form_input"
              type="number"
              name="phone"
              id="phone"
              placeholder="اپنا نمبر لکھیں"
            />
          </div>
          <div className="input_of_contact">
            <label htmlFor="">اپنا ای میل لکھیں</label>
            <input
              className="form_input"
              type="email"
              name="email"
              id="email"
              placeholder="اپنا ای میل لکھیں"
            />
          </div>
          <div className="input_of_contact">
            <label htmlFor="">اپنی رائے لکھیں</label>
            <textarea
              className="form_input"
              name="text"
              id="text"
              cols="18"
              rows="6"
              placeholder="اپنی رائے لکھیں"
            ></textarea>
          </div>
        </form>
        <div className="reight_contact">
          <img src={image} alt="" />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
