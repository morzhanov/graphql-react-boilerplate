import graphql from 'graphql'

export const graphqlRequestConfig = context => ({
  options: {
    context: {
      headers: {
        Authorization: 'Token'
      },
      ...context
    }
  }
})

export const gqlWithContext = (gql, context) => {
  return graphql(gql, graphqlRequestConfig(context))
}
