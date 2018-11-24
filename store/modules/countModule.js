const state=()=> ({
    counter: 0
})

const mutations = {
    increment(state){
        state.counter++
    }
}

export default {
    namespaced:true,
    state,
    mutations
}