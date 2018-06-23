import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const paypal = require('paypal-rest-sdk');
// firebase-admin SDK init
const admin = require('firebase-admin');
admin.initializeApp();
// Configure your environment
console.log('Config:', functions.config());
paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: functions.config().paypal.sandbox.client_id,
  client_secret: functions.config().paypal.sandbox.client_secret
});

export const pay = functions.https.onRequest((request, response) => {
    response.send("Payment response!");
});
