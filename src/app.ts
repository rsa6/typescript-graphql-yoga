import { GraphQLServer } from 'graphql-yoga';
import  { typeDefs, logInput, logResult } from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({ 
  typeDefs,
  resolvers,
  middlewares: [logInput, logResult]
});

server.start(() => console.log('Server is running on localhost:' + process.env.PORT));