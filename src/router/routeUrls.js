export const Urls = {
  home: {
    route: '/',
    link: '/',
    children: {
      posts: {
        route: '/posts',
        link: '/posts'
      },
      profile: {
        route: '/profile',
        link: '/profile'
      }
    }
  },
  auth: {
    route: '/auth',
    link: '/auth',
    children: {
      login: {
        route: 'login',
        link: '/auth/login'
      },
      register: {
        route: 'register',
        link: '/auth/register'
      },
    }
  }
  error: {
    route: '404',
    link: '/404'
  }
}
