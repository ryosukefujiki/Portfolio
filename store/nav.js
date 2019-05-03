export const state = () => ({
    colorBlack: false,
    langEn: false,
    style: {
      'background-color': '#ffffff',
      'heading-color': '#272727',
      'text-color': '#9b9b9b',
      'workText-color': '#4a4a4a',

    }
  })
  
  export const getters = {
    colorBlack: state => state.colorBlack,
    langEn: state => state.langEn,
  }
  // 上記はアロー関数　stateを引数にとって、state.enteredの値をgetterからアクセスできるようにしている
  
  export const mutations = {
    colorBlackClick (state) {
      state.colorBlack = !state.colorBlack
      if(state.colorBlack == true){
        state.style['background-color'] = '#272727'
        state.style['heading-color'] = '#ffffff'
        state.style['text-color'] = '##9b9b9b'
        state.style['workText-color'] = '#e2e2e2'
      }else{
        state.style['background-color'] = '#ffffff'
        state.style['heading-color'] = '#272727'
        state.style['text-color'] = '#9b9b9b'
        state.style['workText-color'] = '#4a4a4a'
      }
      // console.log(state.style['heading-color'])
    },
    langEnClick(state){
      state.langEn = !state.langEn
    },
  }
  