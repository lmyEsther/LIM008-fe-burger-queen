import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import NavChoice from '../NavChoice';

beforeEach(cleanup);

describe('<NavChoice />', () => {
  it('Debería mostrar la sección Ordernes en Preparación', () => {
    const { getByTestId } = render(<NavChoice setStatus={
        status => expect(status).toBe('cook')}
    />);
    const choice = getByTestId('choice-cook');
    fireEvent.click(choice);
  });
  it('Debería mostrar la sección de Ordenes Listas para Servir', () => {
    const { getByTestId } = render(<NavChoice setStatus={
        status => expect(status).toBe('serve')}
    />);
    const choice = getByTestId('choice-serve');
    fireEvent.click(choice);
  });
  it('Debería mostrar la sección de Extras', () => {
    const { getByTestId } = render(<NavChoice setStatus={
        status => expect(status).toBe('finished')}
    />);
    const choice = getByTestId('choice-finished');
    fireEvent.click(choice);
  });
});
