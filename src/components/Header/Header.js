import React from "react";
import './header.css'

const Header = ({ category, title, by, img, date }) => {
  return (
    <header className="App-header">
      <h1 className="category">{category}</h1>
      <h2 className="title">{title}</h2>
      <h3 className="by">{by}</h3>
      <h4 className="date">{date}</h4>
      <img
        src={img}
        className="hero-image"
        alt="two men wearing medical masks outdoors in a smoky environment"
      />
    </header>
  );
};

export default Header;
