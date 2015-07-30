/**
 * Created by esso on 28.12.14.
 */

Meteor.startup(function () {
    if(Projects.find({}).fetch().length == 0 ){
        insertTestData();
    }
});

function insertTestData(){
    Projects.insert({
        name: 'Project A',
        description: 'A great project',
        url: '',
        leader: 'The Great Leader'
    });
    Projects.insert({
        name: 'Project X',
        description: 'Some stupid project',
        url: '',
        leader: 'Mr R. Stupid'
    });
}