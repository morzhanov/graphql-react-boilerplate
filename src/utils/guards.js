class Guards {
  static mustBeAuthorized() {
    const token = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    return !!token & !!refreshToken
  }

  static mustBeUnauthorized() {
    const token = localStorage.getItem('accessToken')
    return !token
  }
}

export default Guards
