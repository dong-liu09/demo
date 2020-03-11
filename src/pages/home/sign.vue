<template>
	<div id="hbxq-sign">
		<div style="padding: 0rem .2rem;margin-top: .2rem;">
			<div class="hbxq-sign-bg">
				<!--标题-->
				<div class="hbxq-sign-signTitle">
					<img src="../../../static/sign/sign-title.png" class="hbxq-sign-signTitle-img"/>
				</div>
				<!--签到天数-->
				<div class="hbxq-sign-signNum">
					本月已累计签到 <span class="hbxq-sign-signday"> {{signNum}} </span> 天
				</div>
				<!--每月周签到数-->
				<div class="hbxq-sign-weekSign">
					<img src="../../../static/sign/0week.png" v-if="weekNum=='0'"/>
					<img src="../../../static/sign/1week.png" v-if="weekNum=='1'"/>
					<img src="../../../static/sign/2week.png" v-if="weekNum=='2'"/>
					<img src="../../../static/sign/3week.png" v-if="weekNum=='3'"/>
					<img src="../../../static/sign/4week.png" v-if="weekNum=='4'"/>
				</div>
				<!--每月日签到数-->
				<div class="hbxq-sign-daySign">
					<img src="../../../static/sign/0day.png" v-if="day=='0'"/>
					<img src="../../../static/sign/1day.png" v-if="day=='1'"/>
					<img src="../../../static/sign/2day.png" v-if="day=='2'"/>
					<img src="../../../static/sign/3day.png" v-if="day=='3'"/>
					<img src="../../../static/sign/4day.png" v-if="day=='4'"/>
					<img src="../../../static/sign/5day.png" v-if="day=='5'"/>
					<img src="../../../static/sign/6day.png" v-if="day=='6'"/>
					<img src="../../../static/sign/7day.png" v-if="day=='7'"/>
				</div>
				<!--签到规则-->
				<div class="hbxq-sign-signRule">
					<div style="font-size: .3rem;font-weight: bolder;">签到规则：</div>
					<div>1、每日签到必得一张扭蛋券。</div>
					<div>2、签到按照自然月作为周期。</div>
					<div>3、每自然月累计签到28天，领取最终奖励。</div>
				</div>
				<!--签到按钮-->
				<div class="hbxq-sign-signBtn"  @touchstart="start()" @touchend="move()" v-if="!isSign">
					<img src="../../../static/sign/signBtn1.png" v-show="!singnBtn"/>
					<img src="../../../static/sign/signBtn2.png" v-show="singnBtn"/>
				</div>
				<div class="hbxq-sign-signBtn" v-if="isSign">
					<img src="../../../static/sign/signBtn3.png" />
				</div>
				<!--签到奖励-->
				<van-popup v-model="show" style="background: transparent;" :close-on-click-overlay='overlay'>
					<div style="position: relative;">
						<div class="hbxq-signAward-title"></div>
						<img src="../../../static/sign/1dayA.png" class="hbxq-signAward-img" v-if="day=='1'"/>
						<img src="../../../static/sign/2dayA.png" class="hbxq-signAward-img" v-if="day=='2'"/>
						<img src="../../../static/sign/3dayA.png" class="hbxq-signAward-img" v-if="day=='3'"/>
						<img src="../../../static/sign/4dayA.png" class="hbxq-signAward-img" v-if="day=='4'"/>
						<img src="../../../static/sign/5dayA.png" class="hbxq-signAward-img" v-if="day=='5'"/>
						<img src="../../../static/sign/6dayA.png" class="hbxq-signAward-img" v-if="day=='6'"/>
						<img src="../../../static/sign/7dayA.png" class="hbxq-signAward-img" v-if="day=='7'"/>
						<div class="hbxq-signAward-awardText" align="center">获得  {{dayAwardname}} <span style="color: #ffffff;font-size: .5rem;">x{{dayAwardnum}}</span></div>
						<!--收下按钮-->
						<div class="hbxq-sign-lqBtn"  @touchstart="start1()" @touchend="move1()">
							<img src="../../../static/sign/lq1.png" class="hbxq-sign-lqBtn-img1" v-show="!lqBtn"/>
							<img src="../../../static/sign/lq2.png" class="hbxq-sign-lqBtn-img2" v-show="lqBtn"/>
						</div>
					</div>					
				</van-popup>
				<!--周奖励模板-->
				<van-popup v-model="weekShow" style="background: transparent;" :close-on-click-overlay='overlay'>
					<div style="position: relative;">
						<div class="hbxq-signAward-title"></div>
						<img src="../../../static/sign/7dayA.png" class="hbxq-signAward-img" v-if="weekNum=='1'"/>
						<img src="../../../static/sign/weekAward.png" class="hbxq-signAward-img" v-if="weekNum=='2'"/>
						<img src="../../../static/sign/3dayA.png" class="hbxq-signAward-img" v-if="weekNum=='3'"/>
						<img src="../../../static/sign/weekAward.png" class="hbxq-signAward-img" v-if="weekNum=='4'"/>						
						<div class="hbxq-signAward-awardText" align="center" v-if="weekAwardName=='现金红包'">获得 <span style="color: #ffffff;font-size: .5rem;">{{weekAwardNum}}元</span> {{weekAwardName}} </div>
						<div class="hbxq-signAward-awardText" align="center" v-else>获得 {{weekAwardName}}<span style="color: #ffffff;font-size: .5rem;">x{{weekAwardNum}}</span></div>
						<!--收下按钮-->
						<div class="hbxq-sign-lqBtn"  @touchstart="start2()" @touchend="move2()">
							<img src="../../../static/sign/lq1.png" class="hbxq-sign-lqBtn-img1" v-show="!lqBtn"/>
							<img src="../../../static/sign/lq2.png" class="hbxq-sign-lqBtn-img2" v-show="lqBtn"/>
						</div>
					</div>					
				</van-popup>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {getHomeInfo,sign} from '../../api/hbxq.js';
	export default {
		data() {
	        return { 
	        	overlay:false,
	        	singnBtn:false,
	        	lqBtn:false,
	        	isSign:'',//本日是否已经签到，
	        	
	        	dayAwardname:'钞票',//本日奖品名称
	        	dayAwardnum:'1000',//数量
	        	
	        	weekAwardName:'现金红包',
	        	weekAwardNum:'2',
	        	
				day:'7',//当周签到天数 
	        	signNum:'0',//本月签到了几天
	        	isWeekAward:false,//是否可以领取当前周奖励
	        	weekNum:'',//当前签到周数
	        	
	        	show:false, //日签到蒙版显示
	        	weekShow:false   ,//第七天模板展示,
	        	until:'',

	        	award:[
	        		{day:1,name:"钞票",num:10000,unit:'money'},{day:2,name:"钞票",num:20000,unit:'money'},{day:3,name:"钞票",num:30000,unit:'money'}
	        		,{day:4,name:"钞票",num:40000,unit:'money'},{day:5,name:"钞票",num:50000,unit:'money'},{day:6,name:"扭蛋券",num:2,unit:'ticket_egg'}
	        		,{day:7,name:"扭蛋券",num:3,unit:'ticket_egg'}
	        	],
	        	weekAward:[
	        		{week:1,name:"扭蛋券",num:5,unit:'ticket_egg'},{week:2,name:"现金红包",num:0.05,unit:'balance'},{week:3,name:"扭蛋券",num:5,unit:'ticket_egg'},{week:4,name:"现金红包",num:0.1,unit:'balance'}
	        	],
	        	reward:''
	        }
        },
        mounted: function(){
        	this.getInfo() 
        	
        	
        },
        methods:{
        	start(){
        		this.singnBtn = !this.singnBtn
        		
        	},
        	move(){//签到
        		this.singnBtn = !this.singnBtn;		
        		
      			sign().then((response)=>{//获取签到信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		
		      		if(code=='0'){
		      			this.reward = res.reward;
		      			this.getAward();

						      				
		      		}
		      	}).catch((response)=>{
						
			    }); 
        		
        	},
        	start1(){//开心收下按钮按下
        		this.lqBtn = !this.lqBtn
        	},
        	move1(){//开心收下按钮松开
        		this.lqBtn = !this.lqBtn
        		this.show = false;
        		console.log("ok")
        		if(this.isWeekAward==true){
        			this.weekShow = true
        			console.log("1")
        		}
        	},
        	start2(){//周签到弹窗开心收下按钮按下
        		this.lqBtn = !this.lqBtn
        	},
        	move2(){//周签到弹窗开心收下按钮松开
        		this.weekShow = false
        	},
        	getInfo(){
        		getHomeInfo().then((response)=>{//获取签到信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		this.data = res;
		      		if(code=='0'){
		      			this.isSign = res.todayIsSign
		      			this.signNum = res.signCount;
		      			console.log("本月签到天数："+this.signNum)
		      			//计算本周签到天数
		      			this.day = this.signNum%7
		      			console.log("本周签到天数："+this.day)
		      			this.weekNum = Math.floor(this.signNum/7)
		      			console.log("当前签到周："+this.weekNum)
		      			
		      		}
		      	}).catch((response)=>{
						
			    }); 
        	},
        	getAward(){
        		getHomeInfo().then((response)=>{//获取签到信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		this.data = res;
		      		if(code=='0'){
		      			this.isSign = res.todayIsSign
		      			this.signNum = res.signCount;
		      			console.log("本月签到天数："+this.signNum)
		      			//计算本周签到天数
		      			this.day = this.signNum%7
		      			console.log("本周签到天数："+this.day)
		      			this.weekNum = Math.floor(this.signNum/7)
		      			console.log("当前签到周："+this.weekNum)
		      			this.dayAwardnum = this.award[this.day-1].num;
		      			console.log(this.day-1)
		      			this.dayAwardname = this.award[this.day-1].name;
		      			this.show = true;
		      			if(this.signNum%7==0 && this.weekNum>0){//如果出现周奖励
		      				if(this.reward.length>0){
		      					this.reward.forEach((item)=>{
		      						if(item.unit=='balance'){
										this.weekAward[this.week-1].num = item.value;						
		      						}
		      					})
		      					this.isWeekAward = true;
				      			this.weekAwardNum = this.weekAward[this.weekNum - 1].num  //周奖励数量
				      			this.weekAwardName = this.weekAward[this.weekNum - 1].name
		      				}
		      			}
		      			
		      		}
		      	}).catch((response)=>{
					
			    }); 
        	}
        }
	}

</script>

<style>
.hbxq-sign-bg{
	background: url(../../../static/sign/bg.png) no-repeat;
	background-size: 100% 100%;
	width: 100%;
	min-height: 10rem;
	margin-top: 1rem;
	position: relative;
	padding-top: 1.1rem;
	padding-bottom: .55rem;
}
.hbxq-sign-signTitle{
	position: absolute;
	left: 50%;
	top: -.3rem;
	transform: translateX(-50%);
}

.hbxq-sign-signTitle-img{
	width: 5.5rem;
	height:1.22rem;
}
.hbxq-sign-signNum{
	background: url(../../../static/sign/signNumBg.png) no-repeat;
	background-size: 100% 100%;
	height: .604rem;
	width: 4rem;
	margin: 0 auto;
	line-height: .604rem;
	text-align: center;
	color: #feeece;
	font-weight: bolder;
}
.hbxq-sign-signday{
	color: #fffb9c;
	font-weight: bolder;
	font-size: .35rem;
}
.hbxq-sign-weekSign{
	margin-top: .4rem;
}
.hbxq-sign-weekSign img{
	width: 5.7rem;
	height: 1.425rem;
	margin: 0 auto;
	display: block;
}
.hbxq-sign-daySign{
	margin-top: .4rem;
}
.hbxq-sign-daySign img{
	width: 5.7rem;
	height: 3.00rem;
	margin: 0 auto;
	display: block;
}
.hbxq-sign-signRule{
	margin-top: .2rem;
	color: #feeece;
	padding: 0 .65rem;
}
.hbxq-sign-signBtn{
	cursor: pointer;
	width: 3.8rem;
	height: 1.14rem;
	margin: 0 auto;
	margin-top: .4rem;
}
.hbxq-sign-signBtn img{
	pointer-events: none;
	width: 3.8rem;
	height: 1.14rem;
	display: block;
	margin: 0 auto;
}
.hbxq-signAward-title{
	background: url(../../../static/sign/awardTitle.png) no-repeat;
	background-size: 100% 100%;
	width: 5rem;
	height:1.3rem;
	margin: 0 auto;
	position: absolute;
	top: 1.2rem;
	left: 50%;
	transform: translateX(-50%);
}
.hbxq-signAward-img{
	width:8rem;
	height: 10.08rem;
}
.hbxq-signAward-awardText{
	position: absolute;
	color: #FFFFFF;
	bottom:2.75rem;
	left: 50%;
	transform: translateX(-50%);
	font-size: .4rem;
	color: #FEEECE;
}
.hbxq-sign-lqBtn{
	cursor: pointer;
	position: absolute;
	bottom:.7rem;
	width: 3.8rem;
	height: 1.327rem;
	left: 50%;
	transform: translateX(-50%);
	
}
.hbxq-sign-lqBtn-img1{
	pointer-events: none;
	width: 3.8rem;
	height: 1.327rem;
	position: absolute;
	bottom: 0;
}
.hbxq-sign-lqBtn-img2{
	pointer-events: none;
	width: 3.8rem;
	height: 1.236rem;
	position: absolute;
	bottom: 0;
}
</style>