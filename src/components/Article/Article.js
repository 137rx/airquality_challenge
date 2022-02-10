import React from "react";
import SelectCity from './SelectCity.js'
import './article.css'

const Article = ({ paragraphs, allCitiesData, cigaretteEquivalency, totalCitites }) => {
  const generateParagraphs = (start, end) => {
    const paragraphsIndex = [];
    for (let i = start - 1; i < end; i++) {
      paragraphsIndex.push(i);
    }


    return paragraphsIndex.map((i) => (
      <p className={paragraphs[i][0]}>{paragraphs[i][1]}</p>
    ));
  };

  return (
    <main>
      <p className={paragraphs[0][0]}>{paragraphs[0][1]}</p>


      {generateParagraphs(2, 5)}
        <SelectCity citiesData = {allCitiesData} comparison = {cigaretteEquivalency} totalCitites = {totalCitites} />
      {generateParagraphs(6, 10)}
    </main>
  );
};

export default Article;
