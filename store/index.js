export const state = () => ({
    homeEntered: false,
    homeMoved: false,
  })
  
  export const getters = {
    homeEntered: state => state.homeEntered,
    homeMoved: state => state.homeMoved,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    homeClick (state) {
      state.homeEntered = !state.homeEntered
    },
    homeMove(state){
      state.homeMoved = !state.homeMoved
    }
  }
  