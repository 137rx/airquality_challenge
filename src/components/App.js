import React, { useState } from "react";
import "./App.css";
import english from "../data/english.json";
import hindi from "../data/hindi.json";

import Header from "./Header/Header";
import Article from "./Article/Article.js";

function App() {
  let data = {};
  const [selectedLanguage, setSelectedLanguage] = useState();
  if (selectedLanguage === "hindi") {
    data = hindi;
  } else {
    data = english;
  }

  const articleParagraphs = Object.entries(data).filter((key) =>
    key[0].includes("p_")
  );

  const allCitiesData = Object.entries(data).filter((key) =>
    key[0].includes("compare-tabs_1_city")
  );

  const handleLanguageChange = (selectedLanguage) => {
    return setSelectedLanguage(selectedLanguage);
  };

  return (
    <div className="App">
      <select
        className="select-language"
        name="category"
        value={selectedLanguage}
        onChange={(event) => handleLanguageChange(event.target.value)}
      >
        <option id="0">Select language</option>
        <option id="1" value="english">
          English
        </option>
        <option id="2" value="hindi">
          Hindi
        </option>
      </select>
      <Header
        category={data["article-info_1_category"]}
        title={data["hero_1_title"]}
        by={data["article-info_1_byline"]}
        img={data["hero_1_image"]}
        date={data["article-info_1_date"]}
      />
      <Article
        paragraphs={articleParagraphs}
        allCitiesData={allCitiesData}
        cigaretteEquivalency={data["compare-tabs_1_method"]}
        totalCitites={data["total_cities_1_value"]}
      />
    </div>
  );
}

export default App;
