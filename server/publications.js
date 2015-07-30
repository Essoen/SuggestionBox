/**
 * Created by esso on 30.07.15.
 */
Suggestions.allow({
    'insert': function(object){
        return true;
    },

    'update': function(object) {
        return true;
    }
});

Meteor.publish(null, function(){
    return Suggestions.find({})
});

Projects.allow({
    'insert' : function(object) { return true; },
    'remove' : function(object) { return true; }
});

Meteor.publish(null, function(){
    return Projects.find({})
});