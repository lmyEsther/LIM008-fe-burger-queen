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
  },
};

const firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
const firestore = firebase.firestore();

export default {
  initializeApp: () => null,
  firestore: () => firestore,
};
