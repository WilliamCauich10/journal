import { createStore } from 'vuex'
import journal from '../modules/daybook/store/journal'// se puede cambiar el nombre por defecto

const store = createStore({
    
    modules: {
        journal
    }
    
})

export default store