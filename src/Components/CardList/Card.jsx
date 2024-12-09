import React, { useState } from 'react';
import './Card.css'; // импортируем стили

function Card({product,addProductToCard}) {
    const [quantity, setQuantity] = useState(1); // состояние для количества товара

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <div className="card">

            <div className="card_image">
                <img src={product.image} alt={product.name} className="card-image"/>
            </div>

            <div className="card-content">
                <h2 className="card-title">{product.productName}</h2>
                <p className="card-price">${product.price}</p>

                <button className="add-to-cart"
                    onClick={()=>addProductToCard(product)}
                >Добавить</button>
            </div>
        </div>
    );
}

export default Card;
