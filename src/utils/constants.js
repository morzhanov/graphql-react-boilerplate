const apiPrefix = process.env.HTTPS ? 'https:' : 'http:'
const apiUrl = process.env.API_ENDPOINT || '//localhost:4000'

export const API_ENDPOINT = `${apiPrefix}${apiUrl}`
