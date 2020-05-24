import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js"

Vue.use(VueRouter);

//로그인 네이게이션가드
const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true){
    //이미로그인된유저니까 막아야함
    alert('이미로그인을 하였습니다.')
    next("/")
  }else{
    next()  //입장허용
  }
}

//로그인을 안햇으면 mypage 접속안되게
const onlyAuth = (to, from, next) => {
  if(store.state.isLogin === false){
    //이미로그인된유저니까 막아야함
    alert('아직 로그인이 안된 유저입니다.')
    next("/")
  }else{
    next()  //입장허용
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
        import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser,
    component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: onlyAuth,
    component: () =>
        import(/* webpackChunkName: "mypage" */ "../views/Mypage.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
