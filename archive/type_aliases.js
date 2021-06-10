"use strict";
var logDetails = function (user) { return console.log(user.name + " has the uid of " + user.uid); };
logDetails({ name: 'mama', uid: 10 });
logDetails({ name: 'papa', uid: '10' });
