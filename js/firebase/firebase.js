
// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyDWl5F3AgMLP9BVzffO4Lg21M56OXJHVdY",
  authDomain: "crud-firebase-akemizinha.firebaseapp.com",
  databaseURL: "https://crud-firebase-akemizinha-default-rtdb.firebaseio.com/",
  projectId: "crud-firebase-akemizinha",
  storageBucket: "crud-firebase-akemizinha.appspot.com",
  messagingSenderId: "158076972993",
  appId: "1:158076972993:web:89ecbdb1e52eb9f8704940"
};


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    "clientes":{
    ".read": "auth != null",
    ".write": "auth != null"
  },
    "usuarios":{
    ".read": "auth != null",
    ".write": "auth != null"
  }
 }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
// Crie uma referência para o Realtime Database do Firebase
const database = firebase.database();
// Crie uma referência para o armazenamento do Firebase
const storageRef = firebase.storage().ref();
