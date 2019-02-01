"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const typeDefs_1 = require("./graphql/typeDefs");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: resolvers_1.default,
    middlewares: [typeDefs_1.logInput, typeDefs_1.logResult]
});
server.start(() => console.log('Server is running on localhost:' + process.env.PORT));
//# sourceMappingURL=app.js.map