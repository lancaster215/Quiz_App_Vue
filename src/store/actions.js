export default {
    next: ({ commit }) => {
        commit('next')
    },
    increment: ({ commit }, payload) => {
        commit('increment', payload)
    }
}