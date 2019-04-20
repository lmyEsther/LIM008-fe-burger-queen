// eslint-disable-next-line import/prefer-default-export
export const useCollection = (ref) => {
  // eslint-disable-next-line no-underscore-dangle
  const data = ref._data.__doc__;
  const docs = Object.keys(data).map(id => ({ id, data: () => data[id] }));
  return {
    error: 'Error505',
    loading: true,
    value: { docs },
  };
};
