// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACdc5f132a3c49700934481addd5ce1659';
var authToken = "{{ auth_token }}";
var client = require('twilio')(accountSid, authToken);

client.keys("SK2a0747eba6abf96b7e3c3ff0b4530f6e").get(function(err, key) {
    console.log(key.friendlyName);
});
