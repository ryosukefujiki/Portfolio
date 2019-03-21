export const state = () => ({
    familybookEntered: false,
    aboutEntered: false,
    homeEntered: false,
  })
  
  export const getters = {
    familybookEntered: state => state.familybookEntered,
    aboutEntered: state => state.aboutEntered,
    homeEntered: state => state.homeEntered,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    familybookClick (state) {
      state.familybookEntered = !state.familybookEntered
    },
    aboutClick (state) {
      state.aboutEntered = !state.aboutEntered
    },
    homeClick (state) {
      state.homeEntered = !state.homeEntered
    }
  }
  