<template>
    <div class="connectbox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
      <router-link 
        v-for="music in musics"
        :key="music.id"
        tag="div" 
        :to="{name:'moviedetail',params:{id:music.id}}"
      >
     
        <div class="connect">
          <img v-lazy="music.verticalPic" alt="">
          <div class="right">
            <p class="title">{{music.name}}</p>
            <p class="jianjie">{{music.showTime}}/{{music.cityName}}/{{music.showDuration}}</p>
            <!-- <div><span class="sel">需抢座</span></div> -->
            <span class="salary">￥{{music.floorPrice}}-{{music.peakPrice}}</span>
          </div>
      </div>
      </router-link>
    </div>
</template>

<script>

export default {
    data(){
        return{
            musics:[],
            type:"",
            limit:6,
            page:1,
            hasmore:true
        }
    },
    methods:{
        getmuics(music){
            music.filter((item,index,array)=>{
                return item ==this.type;
            });
        },
        loadMore(){
            if(!this.hasmore){
                return false
            }
            this.getmuics()
        },
        getmuics(){
            let {limit,page}=this;
            this.$http.get("/api/home/all",{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                this.musics =this.musics.concat(res.data.data.object_list)
                if(this.page*this.limit >= res.data.total){
                    this.hasmore =false;
                    return false;
                }
                this.page++
            })
        }
        
        
    },
    created(){
        
    }
}
</script>

<style lang="scss">
    .connectbox{
        width: 100%;
        margin-top: 80px;
        .connect{
            display: flex;
            width: 100%;
            padding:.18rem;
            padding-bottom: 0;
            img{
                height:1.2rem;
                width:.9rem;
            }
            .right{
                width: 70%;
                position: relative;
                padding-left: 0.12rem;
                .title{
                    font-size: .16rem;
                    color: #111;
                    font-weight: 700;
                }
                .jianjie{
                    width: 100%;
                    font-size: .12rem;
                    color: #aaa;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                .sel{
                    background: #eee;
                    border-radius: 10px 10px;
                    padding:0 10px;
                }
                .salary{
                    position: absolute;
                    bottom:5px;
                    color:#f563db;  
                }
            }
        }
    }
</style>
//        switch (this.type) {
    //             case "全部":
    //                this.musics=music;
    //                break;
    //             case "演唱会":
    //                this.musics=getmuics(music);
    //                //var res = [88,69,92,77,90,96,98,99].filter(function(item, index, array){ 
    //                 //     return item>80; //找出所有大于80的元素 
    //                 // }); 结果：[88,92,90,96,98,99]
    //                break;
    //             case "话剧歌剧":
    //                 this.musics=getmuics(music);
    //                break;
    //             case "音乐会":
    //                 this.musics=getmuics(music);
    //                break;
    //             case "曲苑杂坛":
    //                 this.musics=getmuics(music);
    //                break;
    //             case "舞蹈芭蕾":
    //                 this.musics=getmuics(music);
    //                break;
    //             case "体育比赛":
    //                 this.musics=getmuics(music);
    //                break;
    //             case "儿童亲子":
    //                this.musics=getmuics(music);
    //                break;
    //             case "展览休闲":
    //                this.musics=getmuics(music);
    //                break;
    //             case "二次元":
    //                 this.musics=getmuics(music);
    //                break;
    //             case "旅游展览":
    //                 this.musics=getmuics(music);
    //                break;
    //             default:
    //                break;
    //        }  