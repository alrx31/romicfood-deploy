import './App.css';
import Header from "./Components/Header/Header";
import Auth from "./Components/Auth/Auth";
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import {Profile} from "./Components/Profile/Profile";
import Card from "./Components/CardList/Card";
import CardList from "./Components/CardList/CardList";
import Cart from "./Components/Cart/Cart";
import Nav from "./Components/Nav/Nav";

function App() {
    const [user, setUser] = useState({
        id: null,
        login: null,
        name: null,
        email: null,
        address: null
    });



    const [products,setProducts] = useState([
        {
            productId: 1,
            productName: "Пицца",
            price: 10,
            productDescription: "Delicious pizza",
            categoryId: 1,
            image: "https://kykagroup.com/wp-content/uploads/2023/07/IMG-Worlds-of-Adventure.jpg",
        },
        {
            productId: 2,
            productName: "Бургер",
            price: 8,
            productDescription: "Juicy burger",
            categoryId: 2,
            image: "https://kykagroup.com/wp-content/uploads/2023/07/IMG-Worlds-of-Adventure.jpg",
        },
        {
            productId: 3,
            productName: "Сущи",
            price: 15,
            productDescription: "Fresh sushi",
            categoryId: 3,
            image: "https://kykagroup.com/wp-content/uploads/2023/07/IMG-Worlds-of-Adventure.jpg",
        },
    ]);
    const [cartProductsList, setCartProductsList] = useState([...products]);

  return (
    <div className="App">
        <Nav isAuth={user?.id !== null}/>

        <Routes>
            <Route path="/" element={
                <>
                    <Header isAuth={user?.id !== null}/>
                    <CardList
                        products={products}
                        setProductsCardList={setCartProductsList}
                    />
                </>
            } />
            <Route path="/auth" element={<Auth setUser={setUser}/>} />
            <Route path={"/profile"} element={< Profile user={user}/>} />
            <Route path={"/cart"} element={
                <Cart
                    list={cartProductsList}
                    setList = {setCartProductsList}
                />
            } />
        </Routes>

    </div>
  );
}

export default App;
