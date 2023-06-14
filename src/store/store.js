import { createStore } from 'vuex'

const store = createStore ({
  state: {
    // name: "투케이",
    lang: ""
  },
  getters: { // [state의 변수들을 get 호출]
    // getUserInfo(state){
    //     return "이름 : " + state.name;
    // }
    readLang(state) {
      return state.lang
    }
  },
  mutations: { // [변수들을 조작하는 함수들]
    // setUserInfo(state, name){
    //     state.name = name;
    // },
    loadLang(state) {
      state.lang = localStorage.getItem('lang');
    },
    saveLang(state, value) {
      localStorage.setItem("lang", value);
      state.lang = value;
    }
  },
  actions: { // [비동기 처리를 하는 함수들]
  },
});

export default store;