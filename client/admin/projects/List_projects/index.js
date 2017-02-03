Template.List_projects.events({
	'click .delete_project': function(event){
		if(confirm("Are you sure?")) {
            Projects.remove(this._id);
            FlashMessages.sendSuccess("Project Deleted");
            // Prevent Submit
            return false;
        }
	}
});
