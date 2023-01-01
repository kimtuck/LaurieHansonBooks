import firebase from 'firebase/app';
import 'firebase/firestore';
import asyncOnce from './asyncOnce';

let db: any;

const initFirebase = asyncOnce(() => {
    const firebaseConfig = {
        apiKey: 'AIzaSyD28ZiJOOSaUh6nMeVIo2Q4jjV169snOO4',
        authDomain: 'lauriehansonbooks-5a053.firebaseapp.com',
        databaseURL: 'https://lauriehansonbooks-5a053.firebaseio.com',
        projectId: 'lauriehansonbooks-5a053',
        storageBucket: 'lauriehansonbooks-5a053.appspot.com',
        messagingSenderId: '488330511435',
        appId: '1:488330511435:web:927ee5c09acf421d5779ce'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
});

const logOrderInformation = async (orderId: any, order: any) => {
    return db
        .collection('orders')
        .doc(order.orderId)
        .set({ ...order, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
        .catch(function(error: any) {
            // eslint-disable-next-line
            console.error('Error writing new message to database', error);
        });
};

const logCompletedOrderInformation = async (orderId: any, orderState: any, details: any) => {
    return db
        .collection('orders')
        .doc(orderId)
        .update({ orderState, details });
};

const logCancelledOrderInformation = async (orderId: any, orderState: any) => {
    return db
        .collection('orders')
        .doc(orderId)
        .update({ orderState });
};

export { initFirebase, logOrderInformation, logCompletedOrderInformation, logCancelledOrderInformation };
