"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `
  type Query {
    hello(name: String): String!
    input(name: String): String!
    output(name: String): String! 
  }

  type Mutation {
    what(name: String): String!  
  }
`;
exports.typeDefs = typeDefs;
const logInput = (resolve, root, args, context, info) => __awaiter(this, void 0, void 0, function* () {
    console.log(`1. logInput: ${JSON.stringify(args)}`);
    const result = yield resolve(root, args, context, info);
    console.log(`5. logInput`);
    return result;
});
exports.logInput = logInput;
const logResult = (resolve, root, args, context, info) => __awaiter(this, void 0, void 0, function* () {
    console.log(`2. logResult`);
    const result = yield resolve(root, args, context, info);
    console.log(`4. logResult: ${JSON.stringify(result)}`);
    return result;
});
exports.logResult = logResult;
//# sourceMappingURL=typeDefs.js.map