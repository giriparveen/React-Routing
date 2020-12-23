import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail() {
  useEffect(() => {}, []);
  const [item, setItem] = useState([]);

  return (
    <div className="App">
      <h1>Details Page</h1>
    </div>
  );
}

export default ItemDetail;
