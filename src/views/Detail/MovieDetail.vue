 <template>
    <div class="movie-detail">
       <div class="content">
           <div class="HcentenT">
               <div class="hleft">
                   <img :src="msgs.verticalPic" alt="">
               </div>
               <div class="hright">
                   <div class="h-top">
                       <p class="h-title">{{msgs.name}}</p>                       
                   </div>
                   <div class="h-bot">
                        <div class="h-price">
                            <div><span class="sp-price">￥{{msgs.peakPrice}}</span></div>
                        </div>
                        <div class="hb-right">
                            <div class="zhekou">
                                <span>限时折扣</span>
                            </div>
                            <!-- <div class="xiangqing">
                                <span>详情</span>
                                <i class="fa fa-angle-right"></i>
                            </div> -->
                        </div>

                   </div>

               </div>
           </div>
           <!-- 服务 -->
            <div class="fuwu">
                <div class="fw">服务</div>
                <div>不支持退，可选座，纸质发票，电子发票</div>
                <i class="fa fa-angle-right"></i>
            </div>
            <!-- 地点时间 -->
            <div class="show-date">
                <div class="show-time">
                    <span>{{msgs.showTime}}</span>
                    <i class="fa fa-angle-right"></i>
                </div>
                <div class="show-news">
                   {{msgs.showDuration}}
                </div>
            </div>
            <div class="show-date">
                <div class="show-time  dizhi">
                    <span>{{msgs.venueName}}</span>
                    <i class="fa fa-location-arrow" fa-3x></i>
                </div>
                <div class="show-news">
                    {{msgs.venueAddr}}
                </div>
            </div>
            <div class="js-box">
                <div class="js-top">
                    <h1>介绍</h1>
                </div>
                <div class="js-concent">
                    暂无
                </div>
            </div>
            <div class="xz-box">
                <div class="xz-top">
                    <h1>购票须知</h1>
                </div>
                <div class="xz-concent">
                    <ul>
                        <li v-for="a in msgs.icketPolicy" :key="a.tittle">
                            <span class="ts">{{a.title}}</span>
                            <span class="ts-content">{{a.content}}</span>
                        </li>
                        <!-- <li>
                            <span class="ts">{{msgs.icketPolicy[1].title}}</span>
                            <span class="ts-content">{{msgs.icketPolicy[1].content}}</span>
                        </li>
                        <li>
                            <span class="ts">{{msgs.icketPolicy[2].title}}</span>
                            <span class="ts-content">{{msgs.icketPolicy[2].content}}</span>
                        </li>
                        <li>
                            <span class="ts">{{msgs.icketPolicy[3].title}}</span>
                            <span class="ts-content">{{msgs.icketPolicy[3].content}}</span>
                        </li> -->
                    </ul>

                </div>
            </div>
       </div>











        <mt-tabbar fixed>
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

          <mt-tab-item class="mint-tab-item">
           
              <p  @click="addGoodIncars(msgs)">立即购买</p>
           
          </mt-tab-item>


        </mt-tabbar>

    </div>
 
 </template>

 <script>
import {mapActions} from "vuex"
 export default {
     data(){
         return {
             msgs:Object,
             msg:null
         }
     },
     methods: {
        clickItem(){
            this.$router.push("./Detail/car")
       },
        ...mapActions(["addGoodIncars"])
     },
     created(){
//     //获取数据
         this.$http.get("/api/home/all"
    //    ,{
    //         params:{
    //             limit:1
    //         }
    //     }
         ).then(res=>{
              this.msg= res.data.data.object_list; 
              console.log(this.msg)
             for(var i=0;i<this.msg.length;i++){
                if(this.msg[i].id==4){
                 this.msgs = this.msg[i]
                } 
            }  
        })     
      }
    }
 </script>
<style lang="scss">
    .movie-detail{
        background-color: #f7f7f7;
        .content{
            display: flex;
            flex: 1;
            flex-flow: column;
            // margin-bottom: 4rem;
            width: 100%;
            .fuwu{
                justify-content: space-between;
                display: flex;
                width: 100%;
                flex-direction: row;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
                position: relative;
                z-index: 1;
                height: .396rem;
                background-color: #f8f8f8;
                border-top-left-radius: .053rem;
                border-top-right-radius: .053rem;
                margin-top: -.045rem;
                padding: 0  8px;
                .fw{
                    color: #ff2d79;
                }
            }
            
        }
        .HcentenT{
            display: flex;
            background: rgb(204, 183, 183);
        }
        .hleft{
            width: 2rem;
            height: 1.66rem;
            margin:.15rem 0.1rem 0.15rem .15rem;
           
            background: hsla(0,0%,100%,.1) no-repeat;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .hright{
            margin-top:.15rem;
            display: flex;
            flex-direction:column;
            flex-wrap: wrap;
            .h-top{
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                flex-direction: column;
                .h-title{
                    font-weight: 700;
                    font-size: .163rem;
                    letter-spacing: 0;
                    line-height: .0.163rem;
                    text-align: justify;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    color: #fff;
                }
            }
            .h-bot{
                margin-top: 55px;
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                -webkit-box-direction: normal;
                width: 100%;
                -webkit-box-orient: vertical;
                -webkit-flex-direction: column;
                flex-direction: column;
                .h-price{
                    -webkit-box-orient: horizontal;
                    -webkit-flex-direction: row;
                    flex-direction: row;
                    display: flex;
                    span{
                        font-size:0.16rem;
                        line-height: 0.16rem;
                        color: #fff;
                       
                    }
                }

                .hb-right{
                    height: 0.5rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-top: 15px;
                    .zhekou{
                        margin-top:20px;
                        width: 0.8rem;
                        height: 0.15rem;
                        margin-right: .0025rem;
                        display: inline-block;
                        border-radius: .015rem;
                        font-size: .06rem;
                        line-height: .15rem;
                        text-align: center;
                        color: #fff;
                        background-image: linear-gradient(-90deg,#ff2d79,#ff7f81); 
                    }
                    .xiangqing{
                       margin:20px 0 0 0;
                        width: 0.6rem;
                        height: 0.2rem;
                    }
                }
            }
            
        }
        .show-date{
            background-color: #fff;
            display: flex;
            flex-wrap: wrap;
            padding-left: 15px;
            border-bottom: 1px solid #f5f5f5;
            .show-time{
                width: 100%;
                display: flex;
                flex-direction: row;
                font-size: .158rem;
                line-height: .158rem;
                color: #000;
                font-weight: 700;
                margin-top: .2rem;
                -webkit-box-align: center;
                -webkit-align-items: center;
                align-items: center;
                &.dizhi{ 
                    justify-content: space-between;
                    margin: 0 50px 0 0 ;
                    i{
                        margin-top: 20px;
                    }
                }
                i{
                        padding-left: 8px;
                                       
                }
            }
            .show-news{
                display: flex;
                flex-direction: row;
                width: 100%;
                height: .0.13rem;
                font-size: .0.13rem;
                color: #999;
                margin-top: .1rem;
                margin-bottom: .2rem;
                line-height: .0.13rem;
            }
        }
        .js-box{
            padding-top: 5px;
            margin:7px 0;
            background: #fff;
            h1{
                margin: 10px;
                font-size: .15rem;
                font-weight: 700;
                color: #222; 
            }
            .js-concent{
                padding: 8px 0;
                margin-left: 14px;
                margin-right: 10px;
            }

        }
        .xz-box{
            
            margin: 7px 0;
            background: #fff;
            h1{
                padding-top:10px;
                margin: 15px;
                font-size: .15rem;
                font-weight: 700;
                color: #222; 
            }
            .xz-concent{
                float: left;
                margin-left: 14px;
                margin-right: 10px;
                .ts{
                    min-width: 0.6rem;
                    margin-right: 5px;
                    color: red;
                    font-size: 14px;
                    font-weight: 900;
                }
                .ts-content{
                    display: block;
                }
            }


        }
    }
</style>
