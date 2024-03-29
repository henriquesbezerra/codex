const { gql } = require('apollo-server');

const CommonSchemas = gql`

  interface customResponse {
    code: Int!
    message: String!
  }

  type DefaultResponse implements customResponse{
    code: Int!
    message: String!
  }

  type UpdateUserResponse implements customResponse{
    code: Int!
    message: String!
    user: User!
  }

  input Paginator{
    page: Int
    itensPerPage: Int
  }

`;

module.exports = CommonSchemas;