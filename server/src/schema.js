/**
 * No graph ql existem três tipos de queries:
 * Query = get
 * Mutation = Delete, Put, Post
 * Subscription = web socket
 * 
 * resolvers, métodos chamados no momento da query
 */

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

// rootQuery, rootMutation trás informações como fields, campos, queries...
import rootQuery from "./modules/rootQuery";
import rootMutation from "./modules/rootMutation";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...rootQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      ...rootMutation
    }
  })

})