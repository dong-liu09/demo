<template>
	<div>
		<!--公用头部导航-->
		<!--顶部导航-->
		<div class="hbxq-top-nav">

			<div class="hbxq-top-money" >
				<span class="hbxq-top-money-total">{{money}}</span>
				<div class="hbxq-top-money-s">
					<div v-if='perSecondGet>0 || uncollected>0' style="display: block;width: 2rem;text-align: center;">
						<span>待领取 <span style="color:#FEEE9A;">{{uncollectedShow}}</span></span>
						<img src="../../../static/home/lingqu.png" style="width:.8rem;height: .4rem;position: absolute;top: 0.1rem;right: .4rem;" @click="lingqu()"/>
					</div>
					<div v-else='' style="margin-top: .03rem;position: absolute;left: 50%;transform: translateX(-50%);">休息中</div>
				</div>
			</div>
			<div class="hbxq-top-power" @click="transPowerTc()">
				<span class="hbxq-top-power-x">X</span>
				<span class="hbxq-top-power-nl">{{power}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import TWEEN from '@tweenjs/tween.js'
	import {getHomeInfo,receiveBill} from '../../api/hbxq.js';
	export default {
		props:["data","moneydata"],
		data() {
	        return {
	        	uncollectedShow:'0',//展示用的钞票
	        	uncollected:'', //未领取的钞票
	        	power:'',//能量
	        	money:'', //当前钞票
	        	isWork:'',//是否在打工
	        	perSecondGet:'123',//每秒获得钞票
	        	request:false,
	        	factoryInfo:'',
	        	powerTcShow:false
	        }
        },
        watch:{
        	data:function(newData,oldData){
        		if(newData!=''){
        			var res = newData;
        			this.power = res.power;
	      			this.uncollected = res.work.watingRewardMoney;
	      			this.perSecondGet = res.work.secondIncome;
	      			this.money = res.money;
        		}
        	},
	        moneydata:function(newData,oldData){
        		if(newData!=''){
        			var res = newData;
	        		this.money = res.money;
	      			this.power = res.power;
        		}
        	},
            uncollected (newValue, oldValue) {
				new TWEEN.Tween({
					number: oldValue
				})
				.to({
					number: newValue
				}, 1000)
				.onUpdate(tween => {
					this.uncollectedShow = tween.number.toFixed(0)
				})
				.start()
				function animate() {
						if (TWEEN.update()) {
								requestAnimationFrame(animate);
						}
				}
				animate()
			}
        },
        mounted: function(){
        	this.count_account()
        	this.getInfo()

        },
        methods:{
        	lingqu(){//领取钞票
        		
        		receiveBill().then((response)=>{//获取首页顶部钞票能量信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		if(code=='0'){
		      			this.$toast('领取成功')
		      			this.getInfo()	
		      			console.log(this.factoryInfo)
		      			this.$emit('worklist',this.factoryInfo)
		      		}
		      	}).catch((response)=>{

			    });
        	},
        	count_account(){//动态计算当前账户钞票
        		this.uncollected = parseInt(this.uncollected);
		        this.perSecondGet =	parseInt(this.perSecondGet);
		        setInterval(()=>{
		        	this.uncollected = this.uncollected + (this.perSecondGet/1)
		        },1000)
        	},
        	getInfo(){
        		getHomeInfo().then((response)=>{//获取首页顶部钞票能量信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		if(code=='0'){
		      			this.money = res.money;
		      			this.power = res.power;
		      			this.uncollected = res.work.watingRewardMoney;
		      			this.perSecondGet = res.work.secondIncome;
		      			this.factoryInfo =  res.work.list
		      			console.log(this.factoryInfo)
		      		}
		      	}).catch((response)=>{

			    });
        	},
        	transPowerTc(){
        		this.powerTcShow = true
        		this.$emit('getPowerTc',this.powerTcShow)
        	}
        }
	}

</script>

<style>
	.hbxq-work-bg{
	position: absolute;
	height: 100%;
	width: 100%;
	background: url(../../../static/work/bg3.png) no-repeat;
	background-size: 100% 100%;
}
.hbxq-top-nav{
	padding: .2rem;
}
.hbxq-top-nav div{
	display: inline-block;
}

.hbxq-top-money{
	position: absolute;
	top:.12rem;
	left: 1.85rem;
	background: url(../../../static/home/money.png) no-repeat;
	background-size: 100% 100%;
	width: 3.6rem;
	height:1.188rem;
	color: #ffffff;
}
.hbxq-top-money-total{
	position: absolute;
	font-size:.3rem;
	left:50%;
	top: .2rem;
	transform: translateX(-38%);
}
.hbxq-top-money-s{
	position: absolute;
    width: 100%;
    height: .5rem;
    line-height:.6rem;
    top: .61rem;
    text-align:left;
    padding-left: .4rem;
    font-size: .25rem;
}
.hbxq-top-power{
	top: .15rem;
	right: .2rem;
	background: url(../../../static/home/power.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 1.6rem;
	height:0.624rem;
	color: #ffffff;
	font-weight: bolder;
}
.hbxq-top-power-x{
	position: absolute;
	font-size:.3rem;
	left: .7rem;
	top: .15rem;
}
.hbxq-top-power-nl{
	position: absolute;
	font-size:.3rem;
	left: .9rem;
	top: .15rem;
}
</style>
