import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";

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
          Chase the <span>Stock</span> Thrill
        </h1>
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
        <img
          src="https://i.pinimg.com/564x/f7/0d/43/f70d43854cfb93b70e3610883f46f4e8.jpg"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
