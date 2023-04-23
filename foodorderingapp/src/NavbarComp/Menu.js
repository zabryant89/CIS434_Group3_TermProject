import { useState } from 'react';


const foodOptionsData = [  { id: 1, name: 'Pizza', price: '$10.99', description: 'Delicious pizza with your choice of toppings.' },  { id: 2, name: 'Burger', price: '$6.99', description: 'Juicy burger with all the fixings.' },  { id: 3, name: 'Tacos', price: '$8.99', description: 'Tasty tacos with your choice of meat and toppings.' },  { id: 4, name: 'Salad', price: '$5.99', description: 'Fresh salad with your choice of dressing.' },  { id: 5, name: 'Sandwich', price: '$7.99', description: 'Delicious sandwich with your choice of meats and veggies.' },];


function Menu() {
  const [foodOptions, setFoodOptions] = useState(foodOptionsData);
  const [selectedFood, setSelectedFood] = useState(null);
  const [order, setOrder] = useState([]);

  const handleSelectFood = (food) => {
    setSelectedFood(food);
  };

  const handleAddToOrder = (food) => {
    setOrder((prevOrder) => [...prevOrder, food]);
    setSelectedFood(null);
  };

  const calculateOrderTotal = () => {
    return order.reduce((total, food) => total + parseFloat(food.price.slice(1)), 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    alert(`Your order of ${order.length} items has been placed for a total of $${calculateOrderTotal()}. Thank you for your business!`);
    setOrder([]);
  };

  const handleRemoveFromOrder = (food) => {
    setOrder(order.filter((item) => item.id !== food.id));
  };

  return (
    <div className="App">
      <div className="food-options-container">
        <h2 className="food-options-title">Food Options</h2>
        {foodOptions.map((food) => (
          <div key={food.id} className="food-option">
            <img src={`https://via.placeholder.com/80x80?text=${food.name}`} alt={food.name} className="food-option-image" />
            <div className="food-option-info">
              <div className="food-option-name">{food.name}</div>
              <div className="food-option-price">{food.price}</div>
            </div>
            <button onClick={() => handleSelectFood(food)} className="food-option-add-button">
              Select
            </button>
          </div>
        ))}
      </div>
      {selectedFood && (
        <div className="selected-food-container">
          <div className="selected-food">
            <img src={`https://via.placeholder.com/200x200?text=${selectedFood.name}`} alt={selectedFood.name} className="selected-food-image" />
            <div className="selected-food-info">
              <div className="selected-food-name">{selectedFood.name}</div>
              <div className="selected-food-price">{selectedFood.price}</div>
              <div className="selected-food-description">{selectedFood.description}</div>
              <input type="text" placeholder="Enter special instructions" onChange={(e) => setSelectedFood({ ...selectedFood, instructions: e.target.value })} />
              <button onClick={() => handleAddToOrder(selectedFood)} className="food-option-add-button">
                Add to Order
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="order-container">
        <h2 className="order-title">Your Order</h2>
        <ul className="order-list">
          {order.map((food, index) => (
            <li key={index} className="order-item">
              <div className="order-item-info">
              <div className="order-item-name"style={{color:'black'}}>{food.name}</div>
            <div className="order-item-price" style={{color:'black'}}>{food.price}</div>
            {food.instructions && <div className="order-item-instructions">Special Instructions: {food.instructions}</div>}
          </div>
          <div className="order-item-actions">
            <button onClick={() => handleRemoveFromOrder(index)} className="order-item-remove-button">
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
    <div className="order-total">Total: ${calculateOrderTotal()}</div>
    <button onClick={handlePlaceOrder} className="place-order-button">
      Place Order
    </button>
  </div>
</div>

);
}

export default Menu;
