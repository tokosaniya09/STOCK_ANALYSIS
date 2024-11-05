import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [_, setSearchParams] = useSearchParams();
  
  const handleClick = () => {
    handleSearch(searchTerm);
    if (searchTerm) {
      setSearchParams({
        search: searchTerm,
      });
    }
    setSearchTerm("");
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

  const componentsArray = new Array(4).fill(null);

  return (
    <header className="main_header">
      {/* <div>
        {componentsArray.map((_, index) => (
            <Card key={index}/>
          // <MyComponent  />
        ))}
      </div> */}
      <div className="text-container">
      <h1 className="header-title">
          Chase the <span className="span">Stock</span> Thrill
        </h1>
        {/* <h1 className="header-title">
          Chase the <span className="span">Stock</span> Thrill
        </h1> */}
        <p className="header-description">
          Invest smarter, profit faster—your journey starts here
          {/* Unlock the market's secrets with real-time insights and powerful analysis tools. From trends to data-driven predictions, our platform equips you to make confident, informed investment moves. Dive into the latest market pulse, spot the next big opportunity, and take your investment journey to the next level! */}
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Search a stock..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        
        <div className="main_img">
          <img src={images[currImgIdx]} alt="slideshow"/>
        </div>
        {/* <img
          src="https://i.pinimg.com/564x/f7/0d/43/f70d43854cfb93b70e3610883f46f4e8.jpg"
          alt=""
          className="main_img"
        /> */}
      </div>
    </header>
  );
}

export default Header;