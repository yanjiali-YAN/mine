import {SYNC_UPDATE} from "./const"
export default{
    initCars(ctx){
        //获取
        let cars =getCar()
        ctx.commit(SYNC_UPDATE,cars)
    },
    addGoodIncars(ctx,msgs){
        setTimeout(()=>{
            console.log(5555555)
            //获取后台
            let cars =getCar()
           let isHas= cars.some(item=>{
                if(item.id === msgs.id){    
                    //说明同一个商品
                    item.num++ 
                    return true
                }
            })
            if(!isHas){
                //没有这个商品
                msgs.num =1
                cars.push(msgs)
            }
            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars)
            //前端
            ctx.commit(SYNC_UPDATE,cars)
        },100)
    },
    reduceGoodIncars(ctx,msgs){
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item.id===msgs.id){
                item.num--
                if(item.num<=0) return false;
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        ctx.commit(SYNC_UPDATE,cars)
    }
}


//本地存储模拟
function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}