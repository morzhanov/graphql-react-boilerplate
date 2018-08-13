class Guards {
  static mustBeAuthorized(nextState, replace, callback) {
    console.log('in guard')
    const { mustBeRedirectedTo } = nextState.routes[nextState.routes.length - 1]
    const token = localStorage.getItem('token')

    if (!token && mustBeRedirectedTo) {
      replace({
        pathname: mustBeRedirectedTo,
        state: {
          nextPathname: nextState.location.pathname
        }
      })
    }

    callback()
  }

  static mustBeUnauthorized(nextState, replace, callback) {
    const { mustBeRedirectedTo } = nextState.routes[nextState.routes.length - 1]
    const token = localStorage.getItem('token')

    if (token && mustBeRedirectedTo) {
      replace({
        pathname: mustBeRedirectedTo,
        state: {
          nextPathname: nextState.location.pathname
        }
      })
    }

    callback()
  }
}

export default Guards
