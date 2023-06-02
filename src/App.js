import React, { useState } from "react";
import './App.css';
import cat1 from "./images/cat1.jpg"
import cat2 from "./images/cat2.jpg"
import cat3 from "./images/cat3.avif"
import cat4 from "./images/cat4.webp"
import cat5 from "./images/cat5.avif"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  return (
    <div className="slider">
      <div className="cats">
        <img className="cat1" src={cat1} alt="альтернативный_текст" style={{ display: currentSlide === 0 ? "block" : "none" }} />
        <img className="cat2" src={cat2} alt="альтернативный_текст" style={{ display: currentSlide === 1 ? "block" : "none" }} />
        <img className="cat3" src={cat3} alt="альтернативный_текст" style={{ display: currentSlide === 2 ? "block" : "none" }} />
        <img className="cat4" src={cat4} alt="альтернативный_текст" style={{ display: currentSlide === 3 ? "block" : "none" }} />
        <img className="cat5" src={cat5} alt="альтернативный_текст" style={{ display: currentSlide === 4 ? "block" : "none" }} />
      </div>
      <div className="buttons">
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
}
