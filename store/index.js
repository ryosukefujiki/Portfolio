export const state = () => ({
    familybookEntered: false,
    homeEntered: false,
  })
  
  export const getters = {
    familybookEntered: state => state.familybookEntered,
    homeEntered: state => state.homeEntered,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    familybookClick (state) {
      state.familybookEntered = !state.familybookEntered
    },
    homeClick (state) {
      state.homeEntered = !state.homeEntered
    }
  }
  