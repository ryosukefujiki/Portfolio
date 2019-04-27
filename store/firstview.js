export const state = () => ({
  entered: false,
  completed: false,
  killed: false
})

export const getters = {
  entered: state => state.entered,
  completed: state => state.completed,
  killed: state => state.killed
}

export const mutations = {
  enter (state) {
    state.entered = true
  },
  complete (state) {
    state.completed = true
  },
  kill (state) {
    state.killed = true
  }
}
