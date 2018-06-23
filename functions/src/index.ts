import * as functions from 'firebase-functions';

// firebase-admin SDK init
const admin = require('firebase-admin');
admin.initializeApp();

// Configure your environment
console.log('Config:', functions.config());

export const paypal_return = functions.https.onRequest((request, response) => {
  let newData = admin.database().ref('/paypal_logs').push();
  newData.set({
      params: request.params,
      raw: request.body
  })
  response.send("Payment response saved on realtime DB: " + newData.key);
});
