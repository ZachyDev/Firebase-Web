const firebaseConfig = {
    apiKey: "AIzaSyBYR_J6_4RfiLDcGpQcbMEInl4O8ZAVwTA",
    authDomain: "test-firebase-web-1b221.firebaseapp.com",
    databaseURL: "https://test-firebase-web-1b221.firebaseio.com",
    projectId: "test-firebase-web-1b221",
    storageBucket: "test-firebase-web-1b221.appspot.com",
    messagingSenderId: "163799128909",
    appId: "1:163799128909:web:5b5ec1fb07c96b82f83504"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// function to add users to firestore
const addUser = () => {
    db.collection('users').add({
        firstName: 'Zachary',
        lastName: 'Moseti',
        age: 20,
    })
     .then(docRef => {
         console.log(`Data storefd in document id: ${ docRef.id }`);
     })
     .catch(err => {
         console.log(err);
     })
}

// fetch data from firestore

const getData = (docId) => {
    db.collection('users').get()
        .then(snapShot => {
            snapShot.forEach(doc => {
                console.log(doc.data());
                docId = doc.id;
                console.log(docId)
            });
        })
        .catch(err => {
            console.log(err);
        })
}
