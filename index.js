const firebaseConfig = {
    apiKey: "AIzaSyBYR_J6_4RfiLDcGpQcbMEInl4O8ZAVwTA",
    authDomain: "test-firebase-web-1b221.firebaseapp.com",
    databaseURL: "https://test-firebase-web-1b221.firebaseio.com",
    projectId: "test-firebase-web-1b221",
    storageBucket: "test-firebase-web-1b221.appspot.com",
    messagingSenderId: "163799128909",
    appId: "1:163799128909:web:5b5ec1fb07c96b82f83504"
};
const app = firebase.initializeApp(firebaseConfig);

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
    let dataDiv = document.getElementById('data');
    let users = [];
    db.collection('users').get()
        .then(snapShot => {
            snapShot.forEach(doc => {
                users = doc.data();
                // update the DOM
                dataDiv.innerHTML = users;  
            });
        })
        .catch(err => {
            console.log(err);
        })
}


// authetication

const createUserWithEmailAndPassword = () => {
    // get the input fields
    const email = document.getElementById('email').value;

    const pass = document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}