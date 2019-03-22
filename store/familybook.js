export const state = () => ({
    familybookEntered: false,
  })
  
  export const getters = {
    familybookEntered: state => state.familybookEntered,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    familybookClick (state) {
      state.familybookEntered = !state.familybookEntered
    },
  }
  