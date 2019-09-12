import { createClient } from 'contentful'
//access token and the  reached space allowed
export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})
