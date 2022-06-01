import adminDatabase from 'firebase-admin';

const serviceAccount = require('../private/firebase/next-demo-2c4ea-firebase-adminsdk-he2zq-911c7bf360.json');

if (!adminDatabase.apps.length) {
    adminDatabase.initializeApp({
        credential: adminDatabase.credential.cert(serviceAccount),
        databaseURL: "https://next-demo-2c4ea-default-rtdb.firebaseio.com"
    });
}

export { adminDatabase };
