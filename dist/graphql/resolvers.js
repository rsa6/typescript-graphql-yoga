"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
        input: (root, args, context, info) => {
            console.log(`3. resolver: hello`);
            return `Hello ${args.name ? args.name : 'world'}!`;
        },
        output: (root, args, context, info) => {
            console.log(`3. resolver: bye`);
            return `Bye ${args.name ? args.name : 'world'}!`;
        },
    },
    Mutation: {
        what: (_, { name }) => `Hello ${name || 'World'}`,
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map