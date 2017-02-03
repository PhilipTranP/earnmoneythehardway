Router.configure({
  layoutTemplate: 'Layout'
})

Router.map(function(){
  this.route('home', {
    path: '/',
    template: 'Home',
    data: function(){
            templateData = {
                projects: Projects.find()
            };
            return templateData;
        }
  })

  this.route('about', {
    path: '/about',
    template: 'About',
    data: function(){
      templateData = {
        aboutPosts: AboutPosts.find({}, {
          sort: { sequence: 1}
        })
      }
      return templateData
    }
  })

  this.route('About_post', {
    path:'/about/about_posts/:_id',
    template:'About_post',
    data: function(){
            var currentAboutPost = this.params._id;
            return AboutPosts.findOne({_id: currentAboutPost});
        }
  })

  //Admin about post

  this.route('about_posts', {
    path:'/admin/about_posts',
    template:'about_posts',
    data: function(){
      templateData = {
        aboutPosts: AboutPosts.find()
      }
      return templateData
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })
  this.route('add_about_post', {
    path:'/admin/about_posts/add',
    template:'add_about_post',
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })
  this.route('edit_about_post', {
    path:'/admin/about_posts/:_id/edit',
    template:'edit_about_post',
    data: function(){
      var currentAboutPost = this.params._id
      return AboutPosts.findOne({_id: currentAboutPost})
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })

  this.route('work',{
    path:'/work',
    template: 'Work',
    data: function(){
            templateData = {
                projects: Projects.find()
            };
            return templateData;
        }
  })
  this.route('blogs',{
    path: '/blogs',
    template: 'Blogs',
    data: function(){
            templateData = {
                posts: Posts.find()
            };
            return templateData;
        }
  })
  this.route('blog_post', {
    path:'/blogs/post/:_id',
    template:'Blog_post',
    data: function(){
            var currentPost = this.params._id;
            return Posts.findOne({_id: currentPost});
        }
  })

  this.route('list_posts', {
    path:'/admin/posts',
    template:'List_posts',
    data: function(){
      templateData = {
        posts: Posts.find()
      }
      return templateData
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })
  this.route('add_post', {
    path:'/admin/posts/add',
    template:'Add_post',
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })
  this.route('edit_post', {
    path:'/admin/posts/:_id/edit',
    template:'Edit_post',
    data: function(){
      var currentPost = this.params._id
      return Posts.findOne({_id: currentPost})
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })

  this.route('contact')
  //for projects

  this.route('list_projects', {
    path:'/admin/projects',
    template:'List_projects',
    data: function(){
      templateData = {
        projects: Projects.find()
      }
      return templateData
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })
  this.route('add_project', {
    path:'/admin/projects/add',
    template:'Add_project',
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })
  this.route('edit_project', {
    path:'/admin/projects/:_id/edit',
    template:'Edit_project',
    data: function(){
      var currentProject = this.params._id
      return Projects.findOne({_id: currentProject})
    },
    onBeforeAction: function(){
      if(!Meteor.userId() || Meteor.userId() === null){
         Router.go('/')
      }
      this.next()
    }
  })
  this.route('login', {
    path:'/admin',
    template:'Login',
  })
})
