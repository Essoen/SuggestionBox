/**
 * Created by esso on 28.12.14.
 */

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

function insertTestData(){
    
}