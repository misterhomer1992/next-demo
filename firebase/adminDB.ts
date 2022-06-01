import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('./next-demo-2c4ea-firebase-adminsdk-he2zq-911c7bf360.json');

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: "https://next-demo-2c4ea-default-rtdb.firebaseio.com"
    });
}

export { firebaseAdmin };
