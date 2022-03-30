import axios from 'axios'
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAL0070yHWEN1Y0WJkO17Zz-sdjoPR-XqY'
    }
})

export default authApi