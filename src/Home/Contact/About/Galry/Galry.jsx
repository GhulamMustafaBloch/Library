import React, { useState,useEffect } from 'react'
import Header from '../../../../Header/Header'
import Footer from '../../../../Footer/Footer'
import axios from 'axios';
import './Gallery.css';

const Galry = () => {
  const [bookCover, setBookCover] = useState([]);
  useEffect(() => {
    axios.get(`https://api.library.haqnawaz.org/book/meta`).then((res) => {
      setBookCover(res.data);
    });
    console.log(bookCover);
}, []);
  return (
    <div>
      <Header/>
      <section className="gallery_container">
        <h1>گیلری</h1>
        <div className="gallery_container_box">
          {
            bookCover.map((val,ind) =>{
              const {bookCover} = val;
              return(
                <div className="gallery_img" key={ind}>
            <img src={bookCover} alt="bookCover" />
          </div>
              )
            })
          }
        </div>
      </section>
      <Footer/>
    </div>
  )
}
export default Galry
