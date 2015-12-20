/**
 * Created by esso on 03.08.15.
 */
Template.Suggestions.helpers({
    Suggestion: function() {
        return Suggestions.find({project: this.projectId}, {
            sort: {score: -1},
            limit: 30
        }).fetch();
    },

    NewSuggestion: function() {
        return Suggestions.find({project: this.projectId}, {
            sort: {time: -1},
            limit: 30
        })
    }
});

Template.Suggestion.events({
    'click .upvote-button' : function(event, template) {
        Suggestions.update({_id: this.Suggestion._id}, {
            $set: {
                score: this.Suggestion.score + 1
            }
        });
    },

    'click .downvote-button' : function(event, template){
        Suggestions.update({_id: this.Suggestion._id}, {
            $set: {
                score: this.Suggestion.score - 1
            }
        })
    }
});

Template.Suggest.events({
    'click #suggest': function (event, template) {
        Suggestions.insert({ // @todo if already in db, just increment score
            time: new Date(),
            title: template.find('#new-suggestion-title').value,
            content: template.find('#new-suggestion-content').value,
            score: 0,
            status: 'New',
            project: this.projectId
        });
        template.find('#new-suggestion-title').value = ''; // Empty field
        template.find('#new-suggestion-content').value = ''; // Empty field
    }
});


Template.PostComment.events({
   'click #save': function(event, template){
       Comments.insert({
           suggestionId: this.suggestionId,
           username: template.find('#username').value,
           comment: template.find('#comment').value
       });
   }
});