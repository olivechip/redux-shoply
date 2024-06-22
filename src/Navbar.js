import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import './Navbar.css';

const Navbar = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const countsArr = cart.cart.map(item => item.qty)
    const itemCount = countsArr.reduce((acc, val) => acc + val, 0)

    return (
        <div className="navbar">
            <a href="#home">Amazoff</a>
            <div>Your cart ({itemCount}) total is: {cart.totalPrice}</div>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
    );
};

export default Navbar;