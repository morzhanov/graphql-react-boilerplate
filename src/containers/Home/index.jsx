import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Query, graphql } from 'react-apollo'
import Header from '../../components/Header'
import Container from '../../components/Container'
import { RootStore } from '../../stores/RootStore'
import AUTH_QUERY from '../../graphql/queries/auth.gql'

@inject('rootStore')
@observer
class Home extends React.Component {
  render() {
    const { rootStore } = this.props
    return (
      <Query query={AUTH_QUERY}>
        {({ loading, error, data }) => (
          <>
            <Header title="Home" />
            <Container content="Home page content" />
            {rootStore.user.name || ''}
          </>
        )}
      </Query>
    )
  }
}

// const Home = ({ rootStore }) => (
//   <Query query={AUTH_QUERY}>
//     <>
//       <Header title="Home" />
//       <Container content="Home page content" />
//       {rootStore.user.name || ''}
//     </>
//   </Query>
// )

export default Home

// <Query query={LOGGED_IN_USER_QUERY}>
//     {/* variables={{ repoName: `${match.params.org}/${match.params.repoName}` }} */}
//     ssr={false}
//   >
//   </Query>

// {({ data: { currentUser, entry } = {}, subscribeToMore, loading }) => (
//   <Mutation mutation={SUBMIT_COMMENT_MUTATION}>
//     {mutate => (
//       <CommentsPage
//         currentUser={currentUser}
//         loading={loading}
//         entry={entry}
//         subscribeToMore={subscribeToMore}
//         submit={({ repoFullName, commentContent }) =>
//           mutate({
//             variables: { repoFullName, commentContent },
//             optimisticResponse: {
//               __typename: 'Mutation',
//               submitComment: {
//                 __typename: 'Comment',
//                 id: null,
//                 postedBy: currentUser,
//                 createdAt: +new Date(),
//                 content: commentContent,
//               },
//             },
//             update: (store, { data: { submitComment } }) => {
//               // Read the data from our cache for this query.
//               const data = store.readQuery({
//                 query: COMMENT_QUERY,
//                 variables: { repoName: repoFullName },
//               });
//               // Add our comment from the mutation to the beginning.
//               data.entry.comments.unshift(submitComment);
//               // Write our data back to the cache.
//               store.writeQuery({
//                 query: COMMENT_QUERY,
//                 variables: { repoName: repoFullName },
//                 data,
//               });
//             },
//           })
//         }
//       />
//     )}
//   </Mutation>
// )}
