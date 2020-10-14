import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

// Definindo os tipos de comentários, os campos que serão usados.

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime)
    }
  }
})