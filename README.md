# suggest
A webapp that lets users suggest things for different projects.

The aim is to be a channel for communication between developers and users,
in organizations where the users aren't familiar with GitHub Issues and other trackers,
but still want a simple way to have an impact on what's being developed.

## Installation
1. Install [Meteor](https://www.meteor.com/) 
2. Get all the files and start the server:
```bash
$ git clone git@github.com:Essoen/suggest.git
$ cd suggest
$ meteor
```
## Data model
We operate around the entities Project, Suggestion and Comment. 
A project can have suggestions, and suggestions can have comments.

The `_id` attribute is automatically assigned by [MongoDB](https://www.mongodb.org/), which is the database system Meteor is built on.

A `Project`:

    {
        _id: String ID
        name: String,
        description: String,
        url: String,
        leader: String
    }

A `Suggestion`:

    {
        _id: String ID
        time: Date,
        title: String,
        content: String,
        status: String
        score: Integer,
        project: String ID
    }

A `Comment`:

    {
        _id: String ID
        username: String,
        comment: String,
        suggestionId: String id
    }
