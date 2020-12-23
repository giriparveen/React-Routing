import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://localhost:44345/api/weatherforecast");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div className="App">
      <h1>Shop Page</h1>
      {items.map(item => (
        <h1 key={item.temperatureC}>
          {/* <Link to={"/shop/${item.temperatureC}"}>{item.temperatureF}</Link> */}
          <a className="btn btn-light" href={"/shop/" + item.temperatureC}>
            {item.temperatureF}
          </a>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
