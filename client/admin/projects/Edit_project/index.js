Template.Edit_project.events({
  'submit .edit_project_form': function(event){
    let name = event.target.name.value
    let type = event.target.type.value
    let client = event.target.client.value
    let description = event.target.description.value
    let projectDate = event.target.projectDate.value

    var file = $('#projectImage').get(0).files[0];

    if(file){
      fsFile = new FS.File(file)
      ProjectImages.insert(fsFile, function(err, result){
        if(!err){
          var projectImage = '/cfs/files/ProjectImages/' + result. _id
          //Project Update
          Projects.update({
            _id: this._id
          }, {
            $set:{
              name: name,
              description: description,
              type: type,
              client: client,
              projectDate: projectDate,
              projectImage: projectImage
            }
          })
        }
      })
    } else {
      //Update project without IMAGES
      Projects.update({
        _id: this._id
      }, {
        $set:{
          name: name,
          description: description,
          type: type,
          client: client,
          projectDate: projectDate
        }
      })
    }

    FlashMessages.sendSuccess("Project Updated")
    Router.go('/admin/projects')
    //Prevent auto submit
    return false
  }
})

Template.Layout.onRendered(function() {
    this.$('.datetimepicker').datetimepicker()
})
