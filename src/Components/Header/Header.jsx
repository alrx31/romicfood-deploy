import React, { useState } from 'react';
import './header.css';
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiTruck } from "react-icons/fi"; // Добавляем иконку для логотипа
import { TbTruckDelivery } from "react-icons/tb";
import Cart from "../Cart/Cart";

function Header({ isAuth }) {



    return (
        <header>

            <div className="header_content">
                <div className="header_content_text">
                    <h1>Абсолютно бесплатная еда</h1>
                    <h3>бесплатная еда каждый час</h3>
                    <a href="#menu">Меню</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
