import React, { useState } from "react";
import Card from "./Card";
import './CardList.css';
function CardList({products, setProductsCardList}) {

    const [activeCategory, setActiveCategory] = useState("Все");


    const categories = ["Все", "Пицца", "Бургер", "Суши"];
    const filteredProducts = activeCategory === "Все"
        ? products
        : products.filter(product => product.categoryId.toString() === activeCategory);

    return (
        <div className="page-container">
            <div id = "menu"><h1 className="menu-title">Меню</h1></div>
            <div className="menu-quote">
                <span>“Cibus est vita.”</span>
                <span className="translation">(Еда — это жизнь.)</span>
            </div>
            <div className="categories">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-button ${activeCategory === category ? "active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="products-list">
                {filteredProducts.map((product) => (
                    <Card
                        product={product}
                        key={product.productId}
                        addProductToCard={()=>{
                            setProductsCardList((prev) => [...prev, product]);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardList;