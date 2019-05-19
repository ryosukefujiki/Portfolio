export const state = () => ({
    homeEntered: false,
    homeMoved: false,
    homeFadeIn: false,
    mouseHover: false,
  })
  
  export const getters = {
    homeEntered: state => state.homeEntered,
    homeMoved: state => state.homeMoved,
    homeFadeIn: state => state.homeFadeIn,
    mouseHover: state => state.mouseHover,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    homeClick (state) {
      state.homeEntered = !state.homeEntered
    },
    homeMove(state){
      state.homeMoved = !state.homeMoved
    },
    homeFadeIn(state){
      state.homeFadeIn = !state.homeFadeIn
    },
    mouseHover(state){
      state.mouseHover = true
      console.log(state.mouseHover)
    },
    mouseLeave(state){
      state.mouseHover = false
      console.log(state.mouseHover)
    },
  }
  