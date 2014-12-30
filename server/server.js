/**
 * Created by esso on 28.12.14.
 */

Suggestions = new Mongo.Collection("Suggestions");
if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    Suggestions.allow({
        'insert': function(object){
            return true;
        },
        'update': function(object) {
            return true;
        }
    })
}