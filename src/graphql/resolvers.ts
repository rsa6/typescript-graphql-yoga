const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
    input: (root: any, args: any, context: any, info: any) => {
      console.log(`3. resolver: hello`);
      return `Hello ${args.name ? args.name : 'world'}`
    },
    
    output: (root: any, args: any, context: any, info: any) => {
      console.log(`3. resolver: bye`);
      return `Bye ${args.name ? args.name : 'world'}`
    },
  },
  Mutation: {
    what: (_: any, { name }: any) => `Hello ${name || 'World'}`,
  },
}

export default resolvers;
