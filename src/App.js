import React, { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Library from "./components/Library";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Person from "./components/PersonHierarchy";

function App() {
  const [active, setActive] = useState("exp1");
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("person");
  const [extra, setExtra] = useState("");

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      img: "https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_800x.png?v=1750486829",
      price: 129.99,
      inStock: true,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      img: "https://images-cdn.ubuy.co.in/63400c68afe02d2b0c7aeb85-mechanical-gaming-keyboard-87-keys-small.jpg",
      price: 89.99,
      inStock: false,
    },
    {
      id: 3,
      name: "Smart Watch",
      img: "https://m.media-amazon.com/images/I/61pIzNaNRWL.jpg",
      price: 199.99,
      inStock: true,
    },
  ];

  const addToCart = (product) => {
    if (!product.inStock) return;
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const createPerson = () => {
    let newPerson;

    if (role === "student") {
      newPerson = new Student(name, age, extra);
    } else if (role === "teacher") {
      newPerson = new Teacher(name, age, extra);
    } else {
      newPerson = new Person(name, age);
    }

    setPeople([...people, newPerson]);

    setName("");
    setAge("");
    setExtra("");
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* NAVBAR */}
      <div className="nav">

        <div className="nav-left">
          <button onClick={() => setActive("exp1")}>Experiment 3.1</button>
          <button onClick={() => setActive("exp2")}>Experiment 3.2</button>
          <button onClick={() => setActive("exp3")}>Experiment 3.3</button>
        </div>

        {/* THEME TOGGLE */}
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

      {/* EXP 3.1 */}
      {active === "exp1" && (
        <>
          <div className="product-container">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                img={p.img}
                inStock={p.inStock}
                onAddToCart={() => addToCart(p)}
              />
            ))}
          </div>

          <div className="cart">
            <h3>🛒 Selected Items</h3>

            {cart.length === 0 ? (
              <p>No items selected</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))
            )}

            <hr />
            <h4>Total Bill: ${total.toFixed(2)}</h4>
          </div>
        </>
      )}

      {/* EXP 3.2 */}
      {active === "exp2" && <Library />}

      {/* EXP 3.3 */}
      {active === "exp3" && (
        <div className="hierarchy-container">
          <h2>👨‍🏫 Person Class Hierarchy</h2>

          <div className="form-box">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <select onChange={(e) => setRole(e.target.value)}>
              <option value="person">Person</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>

            {role === "student" && (
              <input
                placeholder="Major"
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
              />
            )}

            {role === "teacher" && (
              <input
                placeholder="Subject"
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
              />
            )}

            <button onClick={createPerson}>Add</button>
          </div>

          <div className="output-box">
            {people.map((p, i) => (
              <div key={i} className="card-box">
                <h3>{p.name}</h3>
                <p>Age: {p.age}</p>
                <p>{p.greet()}</p>

                {p.major && <p>Major: {p.major}</p>}
                {p.subject && <p>Subject: {p.subject}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;