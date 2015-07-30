/**
 * Created by esso on 30.07.15.
 */
Router.configure({
    layoutTemplate: 'MainLayout'
});

Router.route('/', function () {
    this.render('Suggestions');
});