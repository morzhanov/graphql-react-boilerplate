class Guards {
  static mustBeAuthorized() {
    const token = localStorage.getItem('token')
    return !!token
  }

  static mustBeUnauthorized() {
    const token = localStorage.getItem('token')
    return !token
  }
}

export default Guards
