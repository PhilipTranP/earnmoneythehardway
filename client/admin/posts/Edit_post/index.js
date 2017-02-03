Template.Edit_post.events({
  'submit .edit_post_form': function(event){
    let title = event.target.title.value
    let body = event.target.body.value
    //Update Post

    Posts.update({
      _id: this._id
    }, {
      $set:{
        title: title,
        body: body
      }
    })
    FlashMessages.sendSuccess("Post Updated")
    Router.go('/admin/posts')

    return false
  }
})
