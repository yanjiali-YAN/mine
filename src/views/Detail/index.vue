 <template>
    <div class="detail">
        <MovieDetail></MovieDetail>


        <!-- <mt-tabbar fixed>
          <mt-tab-item @click="clickItem" class="mint-tab-item">
            <router-link to=''>
              <i class="fa fa-home"></i>
              <p>大麦首页</p>
            </router-link>
          </mt-tab-item>

          <mt-tab-item @click="clickItem" class="mint-tab-item">
            <router-link to="../car">
              <i class="fa fa-list"></i>
              <p>我的订单</p>
            </router-link>
          </mt-tab-item>

          <mt-tab-item @click="addGoodIncars(good)" class="mint-tab-item">
            <router-link to="">
              <p>立即购买</p>
            </router-link>
          </mt-tab-item>


        </mt-tabbar> -->

    </div>
 </template>

 <script>
 import MovieDetail from "./MovieDetail"
 export default {
     name:"detail",
     components:{
         MovieDetail
     },
    //  data() {
    //    return {
    //      navs:[
    //        {id:1,title:"大麦首页",icon:"home",name:"home"},
    //        {id:2,title:"我的订单",icon:"list",name:"car"},
    //        {id:3,title:"立即购买",icon:"",name:"buy-soon"}
    //      ]
         
    //    }
    //  },
     methods: {
       clickItem(){
         this.$router.push("./Detail/car")
       },
     },
     
 }
 </script>
<style lang="scss">
    .detail{
      margin-bottom: .6rem;
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
            line-height: 0.4rem;
            color: #fff;
            font-weight: 900;
          }
        }
        .mint-tabbar > .mint-tab-item.is-selected{
          color: #888;
        }
    }

</style>
