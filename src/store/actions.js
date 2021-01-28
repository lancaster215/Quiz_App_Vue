export default {
    next: ({ commit }) => {
        commit('next')
    },
    increment: ({ commit }, payload) => {
        commit('increment', payload)
    },
    selected: ({ commit }, payload) => {
        commit('selected', payload)
    },
    final: ({ commit }, payload) => {
        commit('final', payload)
    }
}