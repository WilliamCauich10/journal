// es reactivo y cuando se modifique se llamaran a todos los que usen el state

export default () => ({
    status:'authenticating', // 'authenticated, 'not-authenticating', 'authenticating
    user: null,
    idToken: null,
    refreshToken: null
})