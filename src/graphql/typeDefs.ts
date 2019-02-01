const typeDefs = `
  type Query {
    hello(name: String): String!
    input(name: String): String!
    output(name: String): String! 
  }

  type Mutation {
    what(name: String): String!  
  }
`
const logInput = async (resolve: any, root: any, args: any, context: any, info: any) => {
  console.log(`1. logInput: ${JSON.stringify(args)}`);
  const result = await resolve(root, args, context, info);
  console.log(`5. logInput`);
  return result;
}

const logResult = async (resolve: any, root: any, args: any, context: any, info: any) => {
  console.log(`2. logResult`);
  const result = await resolve(root, args, context, info);
  console.log(`4. logResult: ${JSON.stringify(result)}`);
  return result;
}

export { typeDefs, logInput, logResult };

