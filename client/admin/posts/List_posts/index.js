Template.List_posts.events({
  'click .delete_post': function(event){
    if(confirm("Are you sure to delete this post?")) {
      Posts.remove(this._id)
      FlashMessages.sendSuccess("Post Deleted")
      return false
    }
  }
})
