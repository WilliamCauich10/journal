// son sincronas y hacen la modificacion del state
// export const myMutation =  ( state) => {

// }

export const setEntries =  ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries]// crear un nuevo arreglo con los valos anteriores mas los nuevos
    state.isLoading = false
}

export const updateEntry =  ( state, entry ) => {
    const idx = state.entries.map( e => e.id).indexOf( entry.id )
    state.entries[idx] = entry
}

export const addEntry =  ( state, entry ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.entries = [ entry, ...state.entries  ]
}

export const deleteEntry =  ( state, id ) => {
    state.entries = state.entries.filter( entry => entry.id !== id )
}

export const clearEntry =  ( state ) => {
    state.entries = []
}