import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weather">
      <h1> Weather App ⛅</h1>
      <div className="container">
        <Weather defaultCity="Kuala Lumpur" />
        <footer>
          <p>
            <a href="https://github.com/jjean95/weather-app-react">
              Open-source
            </a>{" "}
            by Jia Ean, created using HTML, CSS, React (JavaScript), hosted
            using Netlify
          </p>
        </footer>
      </div>
    </div>
  );
}
