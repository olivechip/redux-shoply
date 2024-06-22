import { render } from "@testing-library/react";
import { act } from 'react';
import Item from "./Item";

test('renders w/ out crashing', () => {
    const product = {
        id: "123",
        name: "Test Product",
        price: 99.99,
        description: "This is a test product",
        image_url: "https://via.placeholder.com/150"
    };
    
    act(() => {
        render(<Item product={product}/>);
    });
});