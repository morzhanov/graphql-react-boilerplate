declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}

export const API_ENDPOINT = 'http://localhost:4000';
