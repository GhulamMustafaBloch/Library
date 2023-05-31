import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight,FaShareAlt} from "react-icons/fa";
import { basicUrl } from "../assats/config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../show_content_books/Show_Conten.css';
import Footer from "../Footer/Footer";
import './_globalClasses.css';
import MyContext from "../contextAPI/MyContext";
import axios from "axios";
import Loader from "../Lodding/Loader";
const ShowContent = () => {
  const location = useLocation();
  const perams = location.pathname.split("/book")[1].split("/");
  const [NumberInput, setNumberInput] = useState(perams[2]);
  const [SingleBook, setSingleBook] = useState(null);
  const [PageNumber, setPageNumber] = useState(perams[2])
  const fetch = async () =>{
    const result =await axios(`${basicUrl}/book/${perams[1]}`);
    setSingleBook(result.data)
  }
  useEffect(() => {
    fetch()
  }, []);
  const navigate = useNavigate()
  const newLocation = (act = "inputValue") => `/book/${perams[1]}/${act === "+" ? parseInt(perams[2])+1 : act === "-" ? parseInt(perams[2]) - 1 : NumberInput}`;
// this function will change page index
const changeCurrentIndex = (event) => {
  event.preventDefault();
  if (SingleBook && NumberInput <= SingleBook.pages.length) {
    navigate(newLocation());
  }
}; // ends change current index

const incrementPageNumber = () => {
  // this will handle next page functionality
  if (SingleBook && NumberInput < SingleBook.pages.length) {
    setNumberInput(parseInt(perams[2])+1)
    navigate(newLocation("+"))
  }
} // ends incrementPageNumber method

// 
const dicrementPageNumber = () =>{
  if (SingleBook && NumberInput > 1) {
    setNumberInput(parseInt(perams[2])-1)
    navigate(newLocation("-"))
  }
}
  return (
      SingleBook ? <>
      <div>
    <section className="show_content_nav">
      <div className="left_page content_book_pera book_name_and_share ">
        <p>{SingleBook.name} </p>
        <button className="next_page"><FaShareAlt /> Share </button>
      </div>
      <div className="left_page left_page_bottom">
        <button onClick={incrementPageNumber} className="next_page"><FaAngleRight style={{cursor:"pointer"}} /> اگلا صفحہ</button>
        <form onSubmit={(e) => changeCurrentIndex(e)}>
          <span>{SingleBook.pages.length} /</span>
          <input type="number" name="" id="" value={NumberInput} onChange={(e) => setNumberInput(e.target.value)} />
        </form>
        <button onClick={dicrementPageNumber} style={{direction:"ltr"}} className="next_page"><FaAngleLeft /> پچھلا صفحہ</button>
      </div>
    </section>
      <section className="books">
        <div className="books_content" 
        dangerouslySetInnerHTML={{
          __html: SingleBook.pages[perams[2]-1].content
        }}
        />
      </section>
    <Footer/>
  </div>
      </>: <Loader />
  
  )
}

export default ShowContent
