import firebase from 'firebase/app';
import 'firebase/firestore';
import asyncOnce from './asyncOnce';

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
    console.log('firebase initialized');
});

const logOrderInformation = async (order: any) => {
    return firebase
        .firestore()
        .collection('orders')
        .add({ ...order, timestamp: firebase.firestore.FieldValue.serverTimestamp() })
        .catch(function(error) {
            console.error('Error writing new message to database', error);
        });
};

export { initFirebase, logOrderInformation };
