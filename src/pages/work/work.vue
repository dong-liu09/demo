<template>
	<div id="hbxq-work">
		<div class="hbxq-work-bg">
		<!--顶部导航-->
		<div class="hbxq-return-btn" @click="returnLast()"></div>
		<headNav :data="data" @worklist='getWorklist($event)' @getPowerTc='getPowerTc($event)'></headNav>
		<!--人才市场-->
		<div class="hbxq-market-bg">
			
			<!--人才市场标题-->
			<div class="hbxq-market-title" align="center">
				<img src="../../../static/work/markey-title.png"/>
				<!--聚宝力-->
				<div class="hbxq-market-jbl">
					<span>聚宝力 {{jbl}}</span>
					<img src="../../../static/work/help.png" style="width:.25rem;height:.25rem;display:inline-block;position: relative;top: .03rem;"/>	
				</div>
			</div>
			<div></div>
			<!--打工地点-->
			<div class="hbxq-market-factoryBox">
				<div v-for="item,index in workList">
					<div class="hbxq-market-factoryItem">
						<div>
							<img src="../../../static/work/factory1.png" class="hbxq-market-factoryImg" v-if="item.id=='1'"/>	
							<img src="../../../static/work/factory2.png" class="hbxq-market-factoryImg" v-else-if="item.id=='2'"/>
							<img src="../../../static/work/factory3.png" class="hbxq-market-factoryImg" v-else-if="item.id=='3'"/>
							<img src="../../../static/work/factory4.png" class="hbxq-market-factoryImg" v-else-if="item.id=='4'"/>
							<img src="../../../static/work/factory5.png" class="hbxq-market-factoryImg" v-else="item.id=='5'"/>
						</div><!--背景-->
						<!--打工内容-->	
						<div class="hbxq-market-Info" >		
							<div class="hbxq-market-text1">	
								<img src="../../../static/work/money.png" class="hbxq-market-InfoMoney"/>
								<span style="margin-left: .1rem;">+{{item.secondIncome}}钞票/s</span>
							</div>
							<div class="hbxq-market-text2">	
								<img src="../../../static/work/time.png" class="hbxq-market-InfoTime"/>
								<span style="margin-left: .1rem;">4H收益: {{item.secondIncome * 14.4}}k</span>
							</div>
							<div v-if="!item.isWorking">
								<div class="hbxq-market-text3">
									<span style="margin-left: .1rem;">消耗 {{item.needPower}}</span>
									<img src="../../../static/work/power.png" class="hbxq-market-InfoPower"/>
								</div>
								<div class="hbxq-market-text4" @click="goWork(item.id,item.needPower)"> 
									<img src="../../../static/work/startWork1.png" class="hbxq-market-startWork1" />
									<!--<img src="../../../static/work/startWork2.png" class="hbxq-market-startWork1" v-show="!item.workBtn"/>-->
								</div>
							</div>
							<div v-else="item.isWorking">
								<div  v-if="item.workingTime<14400">
									<div class="hbxq-market-text6">
										<span style="color:#ffffff;font-size: .2rem;">剩余：</span>
										<van-count-down :time=" (14400-item.workingTime)*1000"  format="HH:mm:ss" style="color:#ffffff;font-size: .2rem;"/>
									</div>
									<div class="hbxq-market-text4" v-if="item.workingTime<14400">
										<img src="../../../static/work/working.png" class="hbxq-market-startWork1" />
									</div>
								</div>
								<div class="hbxq-market-text5" v-else>
										<img src="../../../static/work/dailq.png" class="hbxq-market-startWork1" />
									</div>
								
							</div>
							
						</div>
					</div>
				</div>
			</div>		
		</div>
		<!--能量弹窗-->
	    <van-popup v-model="powerTcShow" style="background: transparent;height: 100%;width: 100%;">
	        <div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">

	        	<div class="hbxq-powerTc-bg">
	        		<img src="../../../static/home/powerTc/x.png" style="position: absolute;right: 0;width: .9rem;top: 0;" @click="powerTcShow=false"/>
	        		<img src="../../../static/home/powerTc/nl2.png" class="hbxq-powerTc-bottomBg"/>
	        		<div class="hbxq-powerTc-btnBox">
	        			<div align="center" >
		        			<div class="hbxq-powerTc-bottomBtn" @touchstart="jump_task_start(1)" @touchend="jump_task_move(1)">
		        				<img src="../../../static/home/powerTc/qw2.png" style="width:1.5rem;height:.654rem;pointer-events: none;" v-show="!qwrwBtn1"/>
		        				<img src="../../../static/home/powerTc/qw.png" style="width:1.5rem;height:.654rem;pointer-events: none;" v-show="qwrwBtn1"/>
		        			</div>
		        			<div class="hbxq-powerTc-bottomBtn" @touchstart="jump_task_start(2)" @touchend="jump_task_move(2)">
		        				<img src="../../../static/home/powerTc/qw2.png" style="width:1.5rem;height:.654rem;pointer-events: none;" v-show="!qwrwBtn2"/>
		        				<img src="../../../static/home/powerTc/qw.png" style="width:1.5rem;height:.654rem;pointer-events: none;" v-show="qwrwBtn2"/>
		        			</div>
		        		</div>
	        		</div>
	        	</div>
	        </div>
	    </van-popup>
	    <!--新人引导-->
	      <van-popup v-model="isNewUser" style="background: transparent;height: 100%;width: 100%;">
	          <div style="position: relative;width: 96%;height: 100%;overflow-x: hidden;margin: 0 auto;">              		
	          		<div v-if="step==3">
	          			<div class="hbxq-step3-img1"></div>
	          			<div class="hbxq-step3-img2"></div>
	          			<div class="hbxq-step3-img3"></div>
	          			<div class="hbxq-step3-img4"></div>
	          			<div class="hbxq-step3-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
	          				<img src="../../../static/ydstep/3/next1.png" class="hbxq-step3-btn"  v-show="stepBtn"/>
	          				<img src="../../../static/ydstep/3/next2.png" class="hbxq-step3-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
	          			</div>	
	          		</div>	
	          </div>
	      </van-popup>
		</div>
	</div>
</template>

<script>	
	import {getHomeInfo,startWork} from '../../api/hbxq.js';
	import headNav from '@/pages/home/headNav';
	import xt from '../home/xt.vue';
	export default {
		data() {
	        return { 
	        	stepBtn:true,
	        	isNewUser:false,
	        	step:'',
	        	data:{},
	        	factoryInfo:[],
	        	workList:''	,
	        	workBtn:true,
	        	jbl:'500',
	        	power:'',
	        	powerTcShow:false,
	        	qwrwBtn1:false,
	        	qwrwBtn2:false
	        	
	        }
        },
        components:{
		    'headNav':headNav
		},
        mounted: function(){       
        	this.getInfo()
        	if(this.$route.query.step){
	        	this.step = this.$route.query.step
	        	console.log(this.step)
	        }
        },
        watch:{
        	factoryInfo:function(newData,oldData){
        		this.getInfo()
        	}
        },
        methods:{
//      	start(index,id){//前往打工，id工厂id 
//      		this.factoryInfo[index].workBtn = !this.factoryInfo[index].workBtn
//      	},
//      	move(index,id){
//      		this.factoryInfo[index].workBtn = !this.factoryInfo[index].workBtn
//      	},
        	returnLast(){
        		this.$router.push('/')
        	},
        	goWork(id,needPower){//开始打工
        		if(this.power<needPower){
        			this.powerTcShow = true
        		}else{
        			startWork(id).then((response)=>{//获取首页顶部钞票能量信息
			      		var res = response.data.data;
			      		var code = response.data.code;
			      		if(code=='0'){
			      			this.getInfo()
			      		}
			      	}).catch((response)=>{
							
				    }); 
        		}
        		
        	},
        	getInfo(){
        		getHomeInfo().then((response)=>{//获取首页顶部钞票能量信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		this.data = res;
		      		console.log(res)
		      		if(code=='0'){
		      			this.isNewUser = true;
		      			//this.isNewUser = !res.guide;
		      			this.power = res.power;
		      			this.workList = res.work.list
		      			this.jbl = res.bonus
		      		}
		      	}).catch((response)=>{
						
			    }); 
        	},
        	getWorklist(data){//获取子组件领取钞票后打工页面的信息
        		this.factoryInfo = data
        		
        	},
        	jptaskHall:function(){
		        if(xt.newldurl='m2.fengchaowan.com'){
		          top.location.href = 'https://w.url.cn/s/A2mnl0o';
		        }else{
		          top.location.href = 'https://w.url.cn/s/AjbSPwy';
		        }
		      },
		      jpbargainingZone:function(){
		        if(xt.newldurl='m2.fengchaowan.com'){
		          top.location.href = 'https://w.url.cn/s/AMrTSO4';
		        }else{
		          top.location.href = 'https://w.url.cn/s/AypL45q';
		        }
		      },
	        jump_task_start(index){
		       	if(index==1){
		       		this.qwrwBtn1 = !this.qwrwBtn1
		       	}else if(index==2){
		       		this.qwrwBtn2 = !this.qwrwBtn2
		       	}
		       },
		       jump_task_move(index){
		       	if(index==1){//前往任务大厅
		       		this.qwrwBtn1 = !this.qwrwBtn1
					this.jptaskHall()  
		        		
		       	}else if(index==2){//前往互助大厅
		       		this.qwrwBtn2 = !this.qwrwBtn2
		       		this.jpbargainingZone()
		       		
		       	}
		    },
		    getPowerTc(data){
		       	this.powerTcShow = data;
		    },
		    stepAdd(){
	       		setTimeout(()=>{
		       		this.step++;
		       		this.$router.push({
			          path: '/',
			          query: {
			            step: this.step,			       
			          }
			        })
		       		
		       	},200)
	        },
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
.hbxq-return-btn{
	background: url(../../../static/home/return.png) no-repeat;
	background-size: 100% 100%;
	width: 1.5rem;
	height:0.58rem;
	margin-top: .2rem;
	margin-left: .2rem;
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
/*顶部导航结束*/
.hbxq-market-bg{
	background: url(../../../static/work/market-bg2.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	
	left: .2rem;
	right: .2rem;
	bottom: .4rem;
	top: 1.65rem;
}
.hbxq-market-title{
	position: relative;
	top: -.25rem;
	width: 100%;
	margin: 0 auto;
	z-index: 1;
}
.hbxq-market-title img{
	display: block;
	width: 5rem;
	height: 1.25rem;
}
.hbxq-jbl-bg-help{ 
	
}
.hbxq-market-jbl{
	width: 100%;
	text-align: center;
	font-weight: bolder;
	color: #f6e1d2;
	position: absolute;
	padding-left: .1rem;
	bottom: .08rem;
	/*left: 50%;
	transform: translateX(-50%);*/
}
.hbxq-market-factoryBox{
	border-radius: 5px;
	overflow-y: auto;
	position: absolute;
	/*background: #42B983;*/
	top: .8rem;
	left: .45rem;
	right: .45rem;
	bottom: .75rem;
}
.hbxq-market-factoryItem{
	position: relative;
}
.hbxq-market-factoryImg{
	width: 100%;
	height: auto;
	min-height: 1.7rem;
}
.hbxq-market-Info{
	position: absolute;
	top: .55rem;
	left: 2rem;
	bottom: 0;
	right: 0;
	color: #ffffff;
}
.hbxq-market-text1{
	display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: absolute;
    left: 0;
    top: 0;
    font-weight: bolder;
    font-size:.3rem;
	
}
.hbxq-market-InfoMoney{
	width: .4rem;
	height: .436rem;
}
.hbxq-market-text2{
	display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: absolute;
    left: 0;
    top: .5rem;
    font-size:.25rem;
    color: #f6c19b;
}
.hbxq-market-InfoTime{
	width: .4rem;
	height: .4rem;
}
.hbxq-market-text3{
	display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: absolute;
    right: .6rem;
    top: 0rem;
    font-size:.2rem;
    color: #ffffff;
}
.hbxq-market-text6{
	display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: absolute;
    right: .3rem;
    top: 0rem;
    font-size:.2rem;
    color: #ffffff;
}
.hbxq-market-InfoPower{
	width: .2rem;
	height: .25rem;
	margin-left: .05rem;
}
.hbxq-market-text4{
	position: absolute;
    right: .2rem;
    top: .3rem;
}
.hbxq-market-startWork1{
	width: 1.5rem;
	height: .645rem;
}
.hbxq-market-text5{
	position: absolute;
    right: .2rem;
    top: .2rem;
}
.hbxq-market-working{
	width: 1.5rem;
	height: .645rem;
}

.hbxq-powerTc-bg{
	position: relative;
	background: url(../../../static/home/powerTc/nl.png) no-repeat;
	background-size: 100% 100%;
	margin: 0 auto;
	width: 6.5rem;
	height: 9.630rem;
	top: 50%;
	transform: translateY(-50%);
}    
.hbxq-powerTc-bottomBg{
	width: 5rem;
	height: 2.77rem;
	position: absolute;
	bottom:.9rem;
	left:.75rem;
}
.hbxq-powerTc-btnBox{
	position: absolute;
	bottom: 1.15rem;
	left:.9rem;
}
.hbxq-powerTc-bottomBtn{
	cursor: pointer;
	margin: 0 .4rem;
	display: inline-block;
}
.hbxq-step3-img1{
	background: url(../../../static/ydstep/3/1.png) no-repeat;
	background-size: 100% 100%;
	width: 2rem;
	height: 1.095rem;
	position: absolute;
	right:-.03rem;
	top:.05rem;	
}
.hbxq-step3-img2{
	background: url(../../../static/ydstep/3/2.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width:4rem;
	height: 1.07rem;
	top: 1rem;
	left:2rem;
}
.hbxq-step3-img3{
	background: url(../../../static/ydstep/3/3.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 1.85rem;
	height: 1.649rem;
	right:.55rem;
	top:3.1rem;
}
.hbxq-step3-img4{
	background: url(../../../static/ydstep/3/4.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width:4.5rem;
	height:.969rem;
	top:4.3rem;
	left:.6rem;
}
.hbxq-step3-btnBox{
	display: inline-block;
	position: relative;
	top:5.8rem;
	left:2.5rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step3-btn{	
	width: 2.3rem;
	height: 1.158rem;
	position: absolute;
	bottom: 0;
	pointer-events: none;
}
</style>