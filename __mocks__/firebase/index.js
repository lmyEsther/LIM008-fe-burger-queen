import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    dining: {
      __doc__: {
        Ag500mlSCH: {
          label: 'Agua 500ml',
          price: 7,
          type: 'd',
        },
      },
    },
    orders: {
      __doc__: {
        Pe357: {
          clientName: 'Pedro Perez',
          date: '12 de febrero de 2019, 09:56:40 UTC-5',
          products: [
            {
              cant: 1,
              id: 'Gas500mlSCH',
              label: 'Gaseosa 500ml',
              price: 10,
            },
          ],
        },
      },
    },
  },
};

const firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
const firestore = firebase.firestore();

export default {
  initializeApp: () => null,
  firestore: () => firestore,
};
