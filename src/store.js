import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {
            id:0,
            userName: "",
            email: "",
            password: "",
            urlPhoto: "",
            isAuthor: false
        },
        isAuthenticated: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setIsAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit('setUser', user)
        },
        setIsAuthenticated({ commit }, isAuthenticated) {
            commit('setIsAuthenticated', isAuthenticated)
        }
    }
})