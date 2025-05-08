import { useState } from "react";

// To solve this task using Redux instead of prop drilling:
// 1. Create a new slice called `productSlice.js` inside `store/product/productSlice.js`.
//    - It should include:
//      a) A `language` state (default: "English").
//      b) A `product` state (default: { name: "Laptop", price: "$999" }).
//      c) A reducer called `toggleLanguage` that switches between "English" and "Spanish".
//      d) A reducer called `setProduct` that allows you to update the product object.
//
// 2. In `store.js`, import the `productReducer` from `productSlice`.
//    - Add it to the `configureStore` call using a key of `product` (important!).
//
// 3. Fix the prop drilling in this file

export const BasicAppAlternative = () => {
  const [language, setLanguage] = useState("English");
  const product = { name: "Laptop", price: "$999" };

  // language => theme
  // product => user

  // toggleLanugage => toggleTheme
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Spanish" : "English"));
  };

  return (
    <Wrapper
      language={language}
      toggleLanguage={toggleLanguage}
      product={product}
    />
  );
};

function Wrapper({ language, toggleLanguage, product }) {
  return (
    <div className={`wrapper ${language === "English" ? "en" : "es"}`}>
      <Menu language={language} toggleLanguage={toggleLanguage} />
      <Main product={product} />
    </div>
  );
}

function Menu({ language, toggleLanguage }) {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
    </div>
  );
}

function LanguageSwitcher({ language, toggleLanguage }) {
  return (
    <button onClick={toggleLanguage}>
      Switch to {language === "English" ? "Spanish" : "English"}
    </button>
  );
}

function Main({ product }) {
  return (
    <div className="main">
      <h2>Product Info</h2>
      <ProductDetails product={product} />
    </div>
  );
}

function ProductDetails({ product }) {
  return (
    <div>
      <p>Product: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
