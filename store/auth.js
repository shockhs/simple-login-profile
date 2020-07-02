import mock from '../utils/mockServer'




const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
    user: null,
    status: false
})

export const getters = {
    status: state => state.status,
    user: state => state.user,
}

export const mutations = {
    SET_USER(state, user) {
        state.user = user
        state.status = true
    },
    REMOVE_USER(state) {
        state.user = null
        state.status = false
    }
}

export const actions = {
    async login({ commit }, username) {
        try {
            await sleep(1000)
            let user = mock.getUser(username)
            if (!user) user = mock.addUser(username)
            await commit('SET_USER', user)
        } catch (err) {
            console.log(err)
            throw new Error('Внутреняя ошибка сервера, сообщите администратору')
        }
    },
    async logout({ commit }) {
        await sleep(1000)
        await commit('REMOVE_USER')
    }
}