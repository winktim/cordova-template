import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        splitter: {
            namespaced: true,
            state: {
                open: false
            },
            mutations: {
                toggle(state, shouldOpen) {
                    state.open = Boolean(shouldOpen)
                }
            }
        }
    }
})
