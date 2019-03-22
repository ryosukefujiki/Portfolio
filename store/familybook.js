export const state = () => ({
    familybookEntered: false,
    familybookMoved: false,
  })
  
  export const getters = {
    familybookEntered: state => state.familybookEntered,
    familybookMoved: state => state.familybookMoved,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    familybookClick (state) {
      state.familybookEntered = !state.familybookEntered
    },
    familybookMove(state){
        state.familybookMoved = !state.familybookMoved
    }
  }
  