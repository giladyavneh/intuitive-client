import React from 'react';
import './App.css';
import IntuitiveTile from './reusables/IntuitiveTile';
import Map from "./charts/Map"
import dotenv from "dotenv"
dotenv.config()

function App() {
  return (
    <div className="App">
      <IntuitiveTile color="teal" tileName="Tile">
        <Map height={800} width={400} events={[{
      "_id": "4-OSZ9CUUQy",
      "session_id": "7bea9e9c-7022-4b38-b36f-43b316ac361a",
      "name": "signup",
      "distinct_user_id": "n9i5RjJ8a",
      "date": 1601990113053,
      "os": "android",
      "browser": "safari",
      "geolocation": {
        "location": {
          "lat": -60,
          "lng": 103
        },
        "accuracy": 1446
      },
      "url": "http://localhost3000/signup"
    },]}/>
      </IntuitiveTile>
    </div>
  );
}

export default App;
