 <template>
 
    <div class="cars">
      <div v-if="cars.length===0">
          <img  height="100%" width="100%" src="http://hbimg.b0.upaiyun.com/e1b1467beea0a9c7d6a56b32bac6d7e5dcd914f7c3e6-YTwUd6_fw658" alt="">
          <router-link to='/detail'>点我返回</router-link>
      </div>
      <div v-else>
        <mt-cell
        :title="good.name"
        :label="'票价：'+'￥'+good.peakPrice+'*'+good.num"
        v-for="good in cars"
        :key="good.id"
        >
        <mt-button @click="addGoodIncars(good)" type="primary" size="small">+</mt-button>
        <mt-button @click="reduceGoodIncars(good)" type="primary" size="small">-</mt-button>
        <img slot="icon" :src="good.verticalPic" width="68" height="92">
        </mt-cell>
        <div class="zongji">
          <p>总价：{{computeTotal.price}}</p>
          <p>总数：{{computeTotal.num}}</p>
        </div>

      </div>


      <!-- 底部 -->
      <mt-tabbar fixed>
          <mt-tab-item
            class="mint-tab-item"
            v-for="nav in navs"
            :key="nav.id"

          >
            <router-link :to="{name:nav.name}">
              <i :class="['fa','fa-'+nav.icon]"></i>
              <p>{{nav.title}}</p>
            </router-link>
          </mt-tab-item>


        </mt-tabbar>

    </div>
 </template>

 <script>
 import {mapActions,mapState,mapGetters} from "vuex"

 export default {
   
    data() {
       return {
         navs:[
          //  {id:1,title:"大麦首页",icon:"home",name:"home"},
           {id:2,title:"返回详情",icon:"list",name:"detail"}, 
          //  {id:3,title:"立即购买",icon:"",name:"buy-soon"}
         ]
        
         
        }
    },
    methods: {
      ...mapActions(["addGoodIncars","reduceGoodIncars"])
    },
    computed: {
      // 直接当做普通属性调用不加括号
      // 任何data中数据变化立即重新计算
      // 计算属性会缓存
      
      ...mapState({
        cars:state=>state.myCar.cars
      }),
      ...mapGetters(["computeTotal"])
    },
 }
 </script>
<style lang="scss">
    .cars{
      .zongji{
        width: 100%;
        display: flex;
        position:fixed;
        bottom: 60px;
        justify-content: space-around;

      }
      .mint-button--small{
        margin: 0 5px;
      }
      .mint-cell-title{
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .mint-cell-text{
          padding-top: 10px;
          font-size: 18px;
          font-weight: 900;
          color: #ff2d79;
      }
      .mint-cell-label{
        margin-top: 0.5rem;
        font-size: 14px;
        font-weight: 700;
        color: #888;
      }
        img{
          margin-right: 10px;
          float: left;
        }
      }
        .navbar{
          position: relative;
          height: 50px;
          background:#fff;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 15px 0;
          .active{
            color:red;
          }
        }
        .mint-tab-item{
            
          display: flex;
          flex-flow: column;
          color: #888;
        }
        .mint-tab-item:nth-of-type(1){
          width: 25%;
          display: flex;
          justify-content: center;
        
          font-size: 0.23rem;
          line-height: 0.23rem;
          i{
            margin-bottom: 5px;
            font-size: 0.23rem;
            color:#888;
          }

        }
        .mint-tab-item:nth-of-type(2){
          display: flex;
          justify-content: center;
        
          font-size: 0.23rem;
          line-height: 0.23rem;
          i{
            margin-bottom: 5px;
            font-size: 0.23rem;
            color:#888;
          }

        }
       
        .mint-tab-item:nth-of-type(3){
          font-size: 2rem;
          line-height: 0.23rem;
          background-image: linear-gradient(90deg,#ff7f81,#ff2d79);
          p{
            font-size: 0.15rem;
            color: #fff;
            font-weight: 900;
          }
        }
        .mint-tabbar > .mint-tab-item.is-selected{
          color: #888;
        }
    }
    
</style>
