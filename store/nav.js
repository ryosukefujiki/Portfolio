export const state = () => ({
    colorBlackEnter: false,
    colorBlack: false,
    langEn: false,
    langEnEnter: false,
    style: {
      'background-color': '#ffffff',
      'nav-background-color': 'rgba(255, 255, 255, 0.8)',
      'mouse-color': 'rgba(0, 0, 0, 0.8)',
      'heading-color': '#272727',
      'text-color': '#9b9b9b',
      'workText-color': '#4a4a4a',
    }
  })
  
  export const getters = {
    colorBlackEnter: state => state.colorBlackEnter,
    colorBlack: state => state.colorBlack,
    langEn: state => state.langEn,
    langEnEnter: state => state.langEnEnter
  }

  export const mutations = {
    colorBlackEntered(state){
      state.colorBlackEnter = !state.colorBlackEnter
      // console.log(state.colorBlackEnter)
    },
    colorBlackClick (state) {
      state.colorBlack = !state.colorBlack
      if(state.colorBlack == true){
        state.style['background-color'] = '#272727'
        state.style['nav-background-color'] = 'rgba(0, 0, 0, 0.8)'
        state.style['heading-color'] = '#ffffff'
        state.style['text-color'] = '#9b9b9b'
        state.style['workText-color'] = '#e2e2e2'
        state.style['mouse-color']= 'rgba(255, 255, 255, 0.8)'
      }else{
        state.style['background-color'] = '#ffffff'
        state.style['nav-background-color'] = 'rgba(255, 255, 255, 0.8)'
        state.style['heading-color'] = '#272727'
        state.style['text-color'] = '#9b9b9b'
        state.style['workText-color'] = '#4a4a4a'
        state.style['mouse-color']= 'rgba(0, 0, 0, 0.8)'
      }
      // console.log(state.style['heading-color'])
    },
    langEnEntered(state){
      state.langEnEnter = !state.langEnEnter
    },
    langEnClick(state){
      state.langEn = !state.langEn
    },
  }
  