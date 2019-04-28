import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import NavChoice from '../NavChoice';

beforeEach(cleanup);

describe('<NavChoice />', () => {
  it('Debería mostrar la sección de hamburguesas', () => {
    const { getByTestId } = render(<NavChoice setType={
        type => expect(type).toBe('burger')}
    />);
    const choice = getByTestId('choice-burger');
    fireEvent.click(choice);
  });
  it('Debería mostrar la sección de bebidas', () => {
    const { getByTestId } = render(<NavChoice setType={
        type => expect(type).toBe('bebida')}
    />);
    const choice = getByTestId('choice-bebida');
    fireEvent.click(choice);
  });
  it('Debería mostrar la sección de Extras', () => {
    const { getByTestId } = render(<NavChoice setType={
        type => expect(type).toBe('adicional')}
    />);
    const choice = getByTestId('choice-adicional');
    fireEvent.click(choice);
  });
});
