import React from "react";
import cigarette from "../../img/ciggrette_icon.png";
import './selectCity.css'

const SelectCity = ({ citiesData, comparison, totalCities }) => {
  const arrayNames = citiesData.filter((data) => data[0].includes("name"));
  const arrayAqi = citiesData.filter((data) => data[0].includes("aqi"));
  const arrayCigg = citiesData.filter((data) => data[0].includes("cigg"));

  const [selectedName, setSelectedName] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleCityChange = (selectedName) => {
    setSelectedName(selectedName);
    setSelectedIndex(arrayNames.findIndex((name) => name[1] === selectedName));
  };

  return (
    <section>
      <select
        name="category"
        value={selectedName}
        onChange={(event) => handleCityChange(event.target.value)}
      >
        <option>Select city</option>
        {arrayNames.map((city) => (
          <option
            value={city[1]}
            onClick={(e) => {
              return setSelectedName(e);
            }}
          >
            {city[1]}
          </option>
        ))}
      </select>

      {selectedName === "Select city" ? (
        <p className ="comparison">{comparison}</p>
      ) : (
        <>
        <ul className="selectionDetails">
          <li className="city">{arrayNames[selectedIndex][1]}</li>
          <li className="aqi">{arrayAqi[selectedIndex][1]}</li>
          <li className="cigatrettes">
            {arrayCigg[selectedIndex][1]} x <img className="cigarette-img" src={cigarette} />
          </li>
        </ul>
        <p className ="comparison">{comparison}</p>

        </>



      )

      }
    </section>
  );
};

export default SelectCity;
