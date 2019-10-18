import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import today from "./today"
import detail from "./detail"
import car from "./car"



export default new Router({
  routes: [
    today,detail,car
  
  ] 
})
