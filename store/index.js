export const state = () => ({
    homeEntered: false,
  })
  
  export const getters = {
    homeEntered: state => state.homeEntered,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    homeClick (state) {
      state.homeEntered = !state.homeEntered
    }
  }
  