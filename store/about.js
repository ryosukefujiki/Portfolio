export const state = () => ({
    aboutEntered: false,
    aboutMoved: false,
    profileOpened: false,
    profileHiddened: false,
  })
  
  export const getters = {
    aboutEntered: state => state.aboutEntered,
    aboutMoved: state => state.aboutMoved,
    profileOpened: state => state.profileOpened,
    profileHiddened: state => state.profileHiddened,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    aboutClick (state) {
      state.aboutEntered = !state.aboutEntered
    },
    aboutMove (state) {
      state.aboutMoved= !state.aboutMoved
    },
    profileOpen (state) {
      state.profileOpened= !state.profileOpened
    },
    profileHidden (state) {
      state.profileHiddened= !state.profileHiddened
    },
  }
  