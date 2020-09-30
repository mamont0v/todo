"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Note {\n    id: ID!\n    content: String!\n    author: String!\n   }\n   \ntype Query {\n    hello:String!\n    notes: [Note!]!\n    note(id: ID!): Note!\n}\n\ntype Mutation {\n    newNote(content: String!): Note!\n   }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var express = require('express');

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

require('dotenv').config();

var db = require('./db');

var DB_HOST = process.env.DB_HOST;
db.connect(DB_HOST);
var app = express();
var port = process.env.PORT || 4000;
app.get('/', function (req, res) {
  return res.send('Hello Wor321l1d!');
});
var _notes = [{
  id: '1',
  content: 'This is a note',
  author: 'Adam Scott'
}, {
  id: '2',
  content: 'This is another note',
  author: 'Harlow Everly'
}, {
  id: '3',
  content: 'Oh hey look, another note!',
  author: 'Riley Harrison'
}]; //Schema using GraphQL

var typeDefs = gql(_templateObject()); //Provide reesolver unctions for our schema fields

var resolvers = {
  Query: {
    hello: function hello() {
      return 'Hello World!';
    },
    notes: function notes() {
      return _notes;
    },
    note: function note(parent, args) {
      return _notes.find(function (note) {
        return note.id === args.id;
      });
    }
  },
  Mutation: {
    newNote: function newNote(parent, args) {
      var noteValue = {
        id: String(_notes.length + 1),
        content: args.content,
        author: 'Adam Scott'
      };

      _notes.push(noteValue);

      return noteValue;
    }
  }
}; //Apollo server set-upo

var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
server.applyMiddleware({
  app: app,
  path: '/api'
});
app.listen(port, function () {
  return console.log("\u0412\u0441\u0435 \u043E\u043A\u0435\u0439! Port:".concat(port, " Server_GrapQL:").concat(server.graphqlPath));
});