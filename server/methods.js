/**
 * Created by esso on 30.07.15.
 */

Meteor.methods({ // dev
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