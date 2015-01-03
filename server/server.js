/**
 * Created by esso on 28.12.14.
 */

Suggestions = new Mongo.Collection('Suggestions');
Projects = new Mongo.Collection('Projects');

if (Meteor.isServer) {
    Meteor.startup(function () {
        return Meteor.methods({ // dev
            removeAllProjects: function () {
                return Projects.remove({});
            },
            removeAllSuggestions: function(){
                return Suggestions.remove({});
            },
            insertProject : function(projectName){
                return Projects.insert({
                    name: projectName,
                    description: '',
                    url: '',
                    leader: ''
                });
            }
        });
    });

    Suggestions.allow({
        'insert': function(object){
            return true;
        },

        'update': function(object) {
            return true;
        }
    });

    Projects.allow({
       'insert' : function(object) { return true; },
       'remove' : function(object) { return true; }
    })
}