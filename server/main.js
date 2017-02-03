import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.users.find().count() === 0){
    Accounts.createUser({
      username: 'admin',
      password: 'abc123'
    })
  }
});
