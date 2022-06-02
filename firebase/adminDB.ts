import adminDatabase from 'firebase-admin';

const serviceAccount = require('../private/firebase/firebase-adminsdk.json');

if (!adminDatabase.apps.length) {
    adminDatabase.initializeApp({
        credential: adminDatabase.credential.cert(serviceAccount),
        databaseURL: "https://next-demo-2c4ea-default-rtdb.firebaseio.com"
    });
}

export { adminDatabase };
