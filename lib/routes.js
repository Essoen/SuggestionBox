/**
 * Created by esso on 30.07.15.
 */
Router.configure({
    layoutTemplate: 'MainLayout'
});

Router.route('/', function () {
    this.render('Frontpage');
});


Router.route('/projects/:_pid', function(){
    this.render('Project', {data: Projects.findOne({_id: this.params._pid}) });
});

Router.route('/projects/:_pid/:_sid', function(){
    this.render('Suggestion',{
        data:{
            Project: Projects.findOne({_id: this.params._pid}),
            Suggestion: Suggestions.findOne({_id: this.params._sid}),
            Comments: Comments.find({suggestionId: this.params._sid})
        }
    });
});
