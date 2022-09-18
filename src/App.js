import logo from './logo.svg';
import './App.css';
import React from 'react'
import Food from './component/Food';
import FoodItem from './component/FoodItem'

function App() {
  return (
    <div className="App">
      <Food foodItem={FoodItem} />
    </div>
  );


  }

export default App;
