export const state = () => ({
    components: []
})
export const getters = {
    components(state) {
        return state.components
    }
}

export const mutations = {
    addComponent(state, payload) {
        state.components.push[payload]
    }
}

export const actions = {

}