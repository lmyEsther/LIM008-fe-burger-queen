import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Order from '../Order';

beforeEach(cleanup);

describe('<Order />', () => {
  it('Pinta bien el label, la cantidad y el sub-total', () => {
    const { getByTestId } = render(<Order id="pro1" label="Cafe" cant={2} subTotal={18} />);
    const label = getByTestId('pro1-label');
    expect(label.textContent).toBe('Cafe [2] Sub-Total: ./S 18');
  });
});
