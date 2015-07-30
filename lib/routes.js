/**
 * Created by esso on 30.07.15.
 */
Router.configure({
    layoutTemplate: 'MainLayout'
});

Router.route('/', function () {
    this.render('Frontpage');
});


Router.route('/projects/:_id', function(){
    this.render('Project', {data: Projects.findOne({_id: this.params._id}),
    });
});
