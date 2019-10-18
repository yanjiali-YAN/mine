import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./stylesheets/main.scss"
import "./modules/rem"
// import "swiper/css/swiper.min.css"

import axios from "axios"
Vue.prototype.$http = axios
Vue.config.productionTip = false


//navbar
import { Tabbar,Navbar, TabItem,Cell,Button} from 'mint-ui';
Vue.component("mt-navbar", Navbar);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);
Vue.component("mt-button", Button);


new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
