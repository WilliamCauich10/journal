import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-913fc-default-rtdb.firebaseio.com'
})

export default journalApi