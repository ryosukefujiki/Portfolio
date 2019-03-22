export const state = () => ({
    aboutEntered: false,
    aboutMoved: false,
  })
  
  export const getters = {
    aboutEntered: state => state.aboutEntered,
    aboutMoved: state => state.aboutMoved,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    aboutClick (state) {
      state.aboutEntered = !state.aboutEntered
    },
    aboutMove (state) {
      state.aboutMoved= !state.aboutMoved
    },
  }
  