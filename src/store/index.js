import { createStore } from 'vuex'
import auth from '../modules/auth/store'
import journal from '../modules/daybook/store/journal'// se puede cambiar el nombre por defecto

const store = createStore({
    
    modules: {
        auth,
        journal,
    }
    
})

export default store