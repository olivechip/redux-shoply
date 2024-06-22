import data from "./data.json";
import Item from "./Item";

const Shop = () => {
    const products = data.products;

    return (
        <div>
            <h1>Shop</h1>
            <ul>
                {Object.keys(products).map((key) => {
                    const product = products[key];
                    return (
                       <Item key={key} product={product}/>
                    );
                })};
            </ul>
        </div>
    );
};

export default Shop;