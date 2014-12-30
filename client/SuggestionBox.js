Suggestions = new Mongo.Collection("Suggestions");

if (Meteor.isClient) {
    Template.Suggestions.helpers({
        Suggestion: function() {
            return Suggestions.find({}, {
                sort: {score: -1},
                limit: 30
            }).fetch();
        },

        NewSuggestion: function() {
            return Suggestions.find({}, {
                sort: {time: -1},
                limit: 30
            })
        }
    });

    Template.Suggestions.events({
        'click #upVote' : function(event, template) {
            Suggestions.update({_id: this._id}, {
                $set: {
                    score: this.score + 1
                }
            });
        },

        'click #downVote' : function(event, template){
            Suggestions.update({_id: this._id}, {
                $set: {
                    score: this.score-1
                }
            })
        }
    });

    Template.Suggest.events({
        'click button, keypress.message': function (event, template) {
            if(event.type === 'keypress'  && event.which !== 13)
                return;
            Suggestions.insert({ // @todo if already in db, just increment score
                time: new Date(),
                text: template.find("#newSuggestion").value,
                score: 0,
                category: null // for later
            });
            template.find("#newSuggestion").value = ""; // Empty field
        }
    });

}


