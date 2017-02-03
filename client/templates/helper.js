Template.Login.events({
	'submit .login-user': function(event){
		var username = event.target.username.value;
		var password = event.target.password.value;


		Meteor.loginWithPassword(username, password, function(err){
			if(err){
				event.target.username.value = username;
				event.target.password.value = password;
				FlashMessages.sendError(err.reason);
			} else{
				FlashMessages.sendSuccess('You are now logged in');
				Router.go('/admin/projects');
			}
		});

		event.target.username.value = '';
		event.target.password.value = '';

		return false;
	}
});

Template.Layout.events({
  'click .logout-user': function(event){
    Meteor.logout(function(event){
      Meteor.logout(function(err){
        if(err){
          FlashMessages.sendError(err.reason)
        } else {
          FlashMessages.sendSuccess('You are now logged out')
          Router.go('/')
        }
      })
    })
    return false
  }
})

Template.About.events({
  'click a[target=_blank]': function (event) {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  }
});
Template.registerHelper('formatDate', function(date){
	return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

Template.registerHelper('getSiteTitle', function(){
	return '() => {$}';
});

Template.registerHelper('getAdminName', function(){
	return 'Philip Tran';
});

Template.registerHelper('getAdminImage', function(){
	return '/assets/img/user.png';
});
