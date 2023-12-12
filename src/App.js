import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weather">
      <div className="container">
        <Weather />
        <footer>
          <p>
            <a href="https://github.com/jjean95/weather-app-react">
              Open-source
            </a>{" "}
            by Jia Ean
          </p>
        </footer>
      </div>
    </div>
  );
}
