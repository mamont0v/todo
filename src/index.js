const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');


require('dotenv').config();
const db = require('./db');
const DB_HOST = process.env.DB_HOST;
db.connect(DB_HOST);


const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Hello Wor321l1d!'));




let notes = [
    {
        id: '1', content: 'This is a note', author: 'Adam Scott'
    },
    {
        id: '2', content: 'This is another note', author:
            'Harlow Everly'
    },
    {
        id: '3', content: 'Oh hey look, another note!', author:
            'Riley Harrison'
    }
];

//Schema using GraphQL
const typeDefs = gql`
type Note {
    id: ID!
    content: String!
    author: String!
   }
   
type Query {
    hello:String!
    notes: [Note!]!
    note(id: ID!): Note!
}

type Mutation {
    newNote(content: String!): Note!
   }
`;

//Provide reesolver unctions for our schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello World!',
        notes: () => notes,
        note: (parent, args) => {
            return notes.find(note => note.id === args.id);
        }

    },
    Mutation: {
        newNote: (parent, args) => {
            let noteValue = {
                id: String(notes.length + 1),
                content: args.content,
                author: 'Adam Scott'
            };
            notes.push(noteValue);
            return noteValue;
        }
    }
};
//Apollo server set-upo
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: '/api' });





app.listen(port, () => console.log(`Все окей! Port:${port} Server_GrapQL:${server.graphqlPath}`))
