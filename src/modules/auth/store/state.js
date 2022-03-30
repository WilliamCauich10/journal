// es reactivo y cuando se modifique se llamaran a todos los que usen el state

export default () => ({
    status:'authenticating', // 'authenticated, 'not-authenticating'authenticated, 'authenticating
    user: null,
    idToken: null,
    refreshToken: null
})