import "./Item.css";

const Item = ({ product }) => {
    return (
        <div>
            <li key={product.key}>
            <h2>{product.name}</h2>
            <img src={product.image_url} alt={product.name}></img>
            <p>{product.description}</p>
            <p>${product.price}</p>
            </li>
        </div>
    );
};

export default Item;