Template.Add_post.events({
  'submit .add_post_form': function(event){
    var title = event.target.title.value
    var body = event.target.body.value

    var file = $('#postImage').get(0).files[0];

    if(file){
      fsFile = new FS.File(file)
      PostImages.insert(fsFile, function(err, result){
        if(!err){
          var postImage = '/cfs/files/PostImages/' + result. _id
          //Insert Project
          Posts.insert({
            title: title,
            body: body,
            postImage: postImage
          })
        }
      })
    } else {
      //Insert project without IMAGES
      Posts.insert({
        title: title,
        body: body,
      })
    }
    FlashMessages.sendSuccess("Post Added")
    Router.go('/admin/posts')
    //Prevent auto submit
    return false
  }
})
