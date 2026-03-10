import React, { useState } from "react";
import "./styles.css";

const initialProducts = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 }
];

function App() {
  const [products] = useState(initialProducts);
  const [layout, setLayout] = useState("grid");
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleLayout = () => {
    setLayout(layout === "grid" ? "list" : "grid");
  };

  return (
    <div className="container">
      <h2>Product List</h2>

      
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <button onClick={toggleLayout}>
        Switch to {layout === "grid" ? "List" : "Grid"}
      </button>

      {/* Conditional Rendering */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className={layout === "grid" ? "grid" : "list"}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className={`card ${
                hoveredId === product.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;