
Template.Projects.helpers({
   Project : function(){
       return Projects.find();
   }
});


Template.Projects.events({
    'change #selectedProject' : function(event, template){
        Session.set('selectedProject', template.find('#selectedProject').value);
    }
});



