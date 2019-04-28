import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    dining: {
      __doc__: {
        HDobP345: {
          label: 'Hamburguesa Doble de Pollo',
          price: 7,
          type: 'burger',
        },
        Ag500mlSCH: {
          label: 'Agua 500ml',
          price: 5,
          type: 'bebida',
        },
        Gas500mlSCH: {
          label: 'Gaseosa 500ml',
          price: 10,
          type: 'bebida',
        },
        Hue347: {
          label: 'Huevos',
          price: 1,
          type: 'adicional',
        },
        PapF867: {
          label: 'Papas Fritas',
          price: 5,
          type: 'adicional',
        },
        ArCeb456: {
          label: 'Aros de Cebolla',
          price: 5,
          type: 'adicional',
        },
      },
    },
    orders: {
      __doc__: {
        Pe357: {
          clientName: 'Pedro Perez',
          date: 14567380,
          products: [
            {
              cant: 1,
              id: 'Gas500mlSCH',
              label: 'Gaseosa 500ml',
              price: 10,
              type: 'bebida',
            },
          ],
          status: 'cook',
          timeFinished: 0,
        },
        CaRtoD34: {
          clientName: 'Carlos Lara',
          date: 1556416400578,
          products: [
            {
              cant: 1,
              id: 'Gas500mlSCH',
              label: 'Gaseosa 500ml',
              price: 10,
              type: 'bebida',
            },
          ],
          status: 'serve',
          timeFinished: 0,
        },
        HeTed89: {
          clientName: 'Helen',
          date: 12409556,
          products: [
            {
              cant: 1,
              id: 'HDobP345',
              label: 'Hamburguesa Doble de Pollo',
              price: 15,
              type: 'burger',
            },
          ],
          status: 'finished',
          timeFinished: 120995,
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
