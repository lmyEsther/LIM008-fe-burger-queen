import { addProduct, removeProduct, estimateAmount } from '../product-controller';

const input = [{
  cant: 1,
  id: 123,
  label: 'arroz',
  price: 5,
}];

const output = [
  {
    cant: 1,
    id: 123,
    label: 'arroz',
    price: 5,
  },
  {
    cant: 1,
    id: 234,
    label: 'caraota',
    price: 7,
  },
];

const output2 = [
  {
    cant: 2,
    id: 123,
    label: 'arroz',
    price: 5,
  },
];


describe('addProduct', () => {
  it('Debería ser una función', () => {
    expect(typeof addProduct).toBe('function');
  });
  it('Debería devolver un array con un objeto nuevo', () => {
    expect(addProduct(input, 234, 7, 'caraota')).toEqual(output);
  });
  it('Debería devolver un array con la cantidad aumentada', () => {
    expect(addProduct(input, 123, 7, 'caraota')).toEqual(output2);
  });
});

describe('removeProduct', () => {
  it('Debería ser una función', () => {
    expect(typeof removeProduct).toBe('function');
  });
  it('Debería devolver un array con un objeto nuevo', () => {
    expect(removeProduct(output, 234)).toEqual(input);
  });
  it('Debería devolver un array con la cantidad disminuida', () => {
    expect(removeProduct(output2, 123)).toEqual(input);
  });
});

describe('estimateAmount', () => {
  it('Debería ser una función', () => {
    expect(typeof estimateAmount).toBe('function');
  });
  it('Debería devolver la suma de las keys cantidades que hayan en un array de objetos', () => {
    expect(estimateAmount(output)).toBe(12);
  });
});
