import React, {useState} from 'react';
import {TbTruckDelivery} from "react-icons/tb";
import Cart from "../Cart/Cart";
import {FiShoppingCart} from "react-icons/fi";
import {NavLink, useNavigate} from "react-router-dom";
import "./../Header/header.css"

function Nav({isAuth}) {
    let history = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="nav_logo">
                <TbTruckDelivery/> {/* Используем иконку FiTruck для логотипа */}
                <span className="company_name">RomicFood</span> {/* Название компании */}
            </div>
            <div className="navigation">
                <div className="nav_search">
                    <input type="text" placeholder="Search"/>
                    <img src={`${process.env.PUBLIC_URL}/img/icons-reach.svg`} alt="search icon"/>
                </div>
                <div className={`nav_buttons ${isMenuOpen ? 'open' : ''}`}>
                    <a href="">Сообщество</a>
                    <a href="">Ресурсы</a>
                    <a href="">Контакты</a>
                </div>
                <a
                    id="cart_button"
                    className="cart-icon"
                    onClick={() => history("/cart")}
                >
                    <FiShoppingCart
                        style={{cursor: "pointer"}}
                    />
                </a>
                <div className={`nav_buttons 0{menuOpen ? 'open' : ''}`}>
                    <div className="nav_profile">
                        <NavLink
                            to="/profile"
                            id="profile_button"
                            className={isAuth ? "active" : ""}
                        >
                            Профиль
                        </NavLink>
                        <NavLink
                            to="/auth"
                            id="sign_in_button"
                            className={!isAuth ? "active" : ""}
                        >
                            Войти
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className={["burger-menu", isMenuOpen ? "active" : ""].join(" ")} onClick={toggleMenu}>
                <span className="burger-icon"></span>
            </div>
        </nav>
    );
}

export default Nav;