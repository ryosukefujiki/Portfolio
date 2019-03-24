export const state = () => ({
    enter: false,
    fadeIn: false,
    move: false,
  })
  
  export const getters = {
    enter: state => state.enter,
    move: state => state.move,
    fadeIn: state => state.fadeIn,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    click (state) {
      state.enter = !state.enter
    },
    move(state){
      state.move = !state.move
    },
    fadeIn(state){
        state.fadeIn = !state.fadeIn
    }
  }
  