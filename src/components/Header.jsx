import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [_, setSearchParams] = useSearchParams();
  
  const handleClick = () => {
    if (searchTerm) {
      handleSearch(searchTerm);
      setSearchParams({ search: searchTerm });
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const images = [
    'https://i.pinimg.com/564x/f3/3a/6c/f33a6c59bdb26fcfc885c001c0ac88a5.jpg',
    'https://i.pinimg.com/564x/4b/36/ab/4b36ab68b620383dc87698126aa578a0.jpg', 
    'https://i.pinimg.com/564x/df/e5/40/dfe54014b62ae9a52456c5b8615850d6.jpg',
    'https://i.pinimg.com/564x/49/e3/52/49e35203907c7688fc7f945e93e9b1f6.jpg'
  ];

  const [currImgIdx, setCurrImgIdx] = useState(0);
  const delay = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImgIdx((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <header className="main_header">
      <div>
        <h1 className="header-title">
          Chase the <span className="span">Stock</span> Thrill
        </h1>
        <p className="header-description">
          Invest smarter, profit faster—your journey starts here
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Search a stock..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            onKeyDown={handleKeyDown}
          />
          <button 
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
      <div className="main_img-container">
        <img 
          src={images[currImgIdx]} 
          alt="slideshow" 
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
