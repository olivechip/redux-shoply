import { render } from "@testing-library/react";
import { act } from 'react';
import Shop from "./Shop";


test('renders w/ out crashing', () => {
    act(() => {
        render(<Shop />);
    });
});