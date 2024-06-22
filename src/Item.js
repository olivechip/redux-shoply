import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';
import "./Item.css";

const Item = ({ id, product }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart({
            id,
            price: product.price
        }));
    };
    const handleRemove = () => {
        dispatch(removeFromCart({
            id,
            price: product.price
        }));
    };

    return (
            <li key={id}>
                <h2>{product.name}</h2>
                {/* <img src={product.image_url} alt={product.name}></img>
                <p>{product.description}</p>
                <p>${product.price}</p> */}
                <button onClick={handleAdd}>Add to Cart</button>
                <button onClick={handleRemove}>Remove from Cart</button>
            </li>
    );
};

export default Item;