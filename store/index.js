export const state = () => ({
    entered: false,
  })
  
  export const getters = {
    entered: state => state.entered,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    click (state) {
      state.entered = !state.entered
      console.log("Vuex Store")
      // this.$router.push("/familybook")
    }
  }
  