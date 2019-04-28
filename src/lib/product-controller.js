export const addProduct = (arr, currentID, currentPrice, currentLabel) => {
  let product;

  if (arr.find((ele => ele.id === currentID))) {
    product = arr.map((ele) => {
      const newElem = { ...ele };
      if (newElem.id === currentID) {
        newElem.cant += 1;
      }
      return newElem;
    });
  } else {
    product = [
      ...arr,
      {
        id: currentID,
        label: currentLabel,
        cant: 1,
        price: currentPrice,
      },
    ];
  }
  return product;
};

export const removeProduct = (arr, currentID) => {
  let result = [...arr];
  if (arr.find(ele => ele.id === currentID && ele.cant === 1)) {
    result = arr.filter(e => e.id !== currentID);
  } else {
    result = arr.map((ele) => {
      const newElem = { ...ele };
      if (newElem.id === currentID && newElem.cant > 1) {
        newElem.cant -= 1;
      }
      return newElem;
    });
  }
  return result;
};

export const estimateAmount = arr => arr.reduce(
  (acum, ele) => acum + (ele.cant * ele.price),
  0,
);
