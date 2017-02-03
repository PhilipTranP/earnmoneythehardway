Template.add_about_post.events({
  'submit .add_about_post_form': function(event){
    var title = event.target.title.value
    var body = event.target.body.value
    var tip = event.target.tip.value
    var sequence = event.target.sequence.value

    var file = $('#aboutPostImage').get(0).files[0];

    if(file){
      fsFile = new FS.File(file)
      AboutPostImages.insert(fsFile, function(err, result){
        if(!err){
          console.log(AboutPosts.title)
          var aboutPostImage = '/cfs/files/AboutPostImages/' + result. _id
          //Insert about post
          AboutPosts.insert({
            sequence: sequence,
            title: title,
            body: body,
            tip: tip,
            aboutPostImage: aboutPostImage
          })
        }
      })
    } else {
      console.log(AboutPosts)
      //Insert project without IMAGES
      AboutPosts.insert({
        sequence: sequence,
        title: title,
        body: body,
        tip: tip
      })
    }
    FlashMessages.sendSuccess("About Post Added")
    Router.go('/admin/about_posts')
    //Prevent auto submit
    return false
  }
});

Template.edit_about_post.events({
	'submit .edit_about_post_form': function(event){
		    var title = event.target.title.value;
        var body = event.target.body.value;
        var tip = event.target.tip.value
        var sequence = event.target.sequence.value

        var file = $('#aboutPostImage').get(0).files[0];

        if(file){
          fsFile = new FS.File(file)
          AboutPostImages.insert(fsFile, function(err, result){
            if(!err){
              var aboutPostImage = '/cfs/files/AboutPostImages/' + result. _id

              //About Post Update

              AboutPosts.update({
                _id: this._id
              }, {
                $set:{
                  sequence: sequence,
                  title: title,
                  body: body,
                  tip: tip,
                  aboutPostImage: aboutPostImage
                }
              })
            }
          })
        } else {

          //Update about post without changing the image

          AboutPosts.update({
            _id: this._id
          }, {
            $set:{
              sequence: sequence,
              title: title,
              body: body,
              tip: tip
            }
          })
        }

        FlashMessages.sendSuccess("About Post Updated");
        Router.go('/admin/about_posts');

        // Prevent Submit

        return false;
	}
});

Template.about_posts.events({
	'click .delete_about_post': function(event){
		if(confirm("You should create a new post to replace this one before deleting. Are you sure to delete?")) {
            AboutPosts.remove(this._id);
            FlashMessages.sendSuccess("About Post Deleted");
            // Prevent Submit
            return false;
        }
	}
});
