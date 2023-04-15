import React, { useState } from 'react';
import './App.css';

const foodOptions = [
  { id: 1, name: 'Pizza', price: '$10.99', description: 'Delicious pizza with your choice of toppings.' },
  { id: 2, name: 'Burger', price: '$6.99', description: 'Juicy burger with all the fixings.' },
  { id: 3, name: 'Tacos', price: '$8.99', description: 'Tasty tacos with your choice of meat and toppings.' },
  { id: 4, name: 'Salad', price: '$5.99', description: 'Fresh salad with your choice of dressing.' },
  { id: 5, name: 'Sandwich', price: '$7.99', description: 'Delicious sandwich with your choice of meats and veggies.' },
];

function App() {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleSelectFood = (food) => {
    setSelectedFood(food);
  };

  return (
    <div className="App">
      <div className="food-options-container">
        <h2 className="food-options-title">Food Options</h2>
        {foodOptions.map((food) => (
          <div key={food.id} className="food-option">
            <img
              src={`https://via.placeholder.com/80x80?text=${food.name}`}
              alt={food.name}
              className="food-option-image"
            />
            <div className="food-option-info">
              <div className="food-option-name">{food.name}</div>
              <div className="food-option-price">{food.price}</div>
            </div>
            <button
              onClick={() => handleSelectFood(food)}
              className="food-option-add-button"
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0077cc')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#0059b3')}
            >
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="selected-food-container">
        {selectedFood && (
          <div className="selected-food">
            <img
              src={`https://via.placeholder.com/200x200?text=${selectedFood.name}`}
              alt={selectedFood.name}
              className="selected-food-image"
            />
            <div className="selected-food-info">
              <h2 className="selected-food-name">{selectedFood.name}</h2>
              <div className="selected-food-price">{selectedFood.price}</div>
              <p className="selected-food-description">{selectedFood.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

