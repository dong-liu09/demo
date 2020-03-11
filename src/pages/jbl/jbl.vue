<template>
	<div id="hbxq-Addition">
		
		<div class="hbxq-Addition-bg">
			<!--顶部公用导航-->
			<div class="hbxq-return-btn2"  @click="returnLast()"></div>
			<headNav></headNav>
			
			<div class="hbxq-Addition-bg2">
				<!--标题-->
				<div class="hbxq-Addition-cashTitle">
					<img src="../../../static/jbl/jbl-title.png" />
				</div>
				<!--签到图标-->
				<div class="hbxq-qiandao-box" @click="open_qiandao()">
					<img src="../../../static/home/qd.png" class="home-qiandao-img"/>
					<div class="hbxq-qiandao-text">签到</div>
				</div>
				
				<!--聚宝力-->
				<div>
					<div class="hbxq-Addition-AdditionBox">				
						<div class="hbxq-Addition-AdditionBox-text1">{{jbl}}</div>
						<div class="hbxq-Addition-AdditionBox-text2">聚宝力</div>
					</div>
					<div class="hbxq-Addition-Additionshuoming">
						聚宝力越高，打工赚取钞票速度越快，拆红包数量越多!
					</div>
				</div>
				<!--聚宝力信息-->
				<div class="hbxq-Addition-info">
					<div class="hbxq-Addition-infoBox">
						<div class="hbxq-Addition-infoBoxTitle">每日任务</div>
						<div class="hbxq-Addition-infoBoxItem clear">
							<div class="hbxq-Addition-infoBoxItem-left">签到奖励</div>
							<div class="hbxq-Addition-infoBoxItem-right">+1聚宝力/日</div>
						</div>
						<div class="hbxq-Addition-infoBoxItem clear">
							<div class="hbxq-Addition-infoBoxItem-left">邀请好友</div>
							<div class="hbxq-Addition-infoBoxItem-right">+20聚宝力/次</div>
						</div>
						<div class="hbxq-Addition-infoBoxItem clear" >
							<div class="hbxq-Addition-infoBoxItem-left">完成高价任务 <br /><div>(每天最多10次)</div></div>
							<div class="hbxq-Addition-infoBoxItem-right">+5聚宝力/次</div>
						</div>	
						<div class="hbxq-Addition-infoBoxItem clear" style="border: none;">
							<div class="hbxq-Addition-infoBoxItem-left">完成互助任务<br /><div>(每天最多10次)</div></div>
							<div class="hbxq-Addition-infoBoxItem-right">+1聚宝力/次</div>
						</div>
					</div>
					<div class="hbxq-Addition-infoBox">
						<div class="hbxq-Addition-infoBoxTitle">其他方式</div>
						<div class="hbxq-Addition-infoBoxItem clear">
							<div class="hbxq-Addition-infoBoxItem-left">关注公众号</div>
							<div class="hbxq-Addition-infoBoxItem-right" v-if="isFocus">已完成</div>
							<div class="hbxq-Addition-infoBoxItem-right" v-else="isFocus">+10聚宝力</div>
						</div>
						<div class="hbxq-Addition-infoBoxItem clear">
							<div class="hbxq-Addition-infoBoxItem-left">绑定手机号</div>
							<div class="hbxq-Addition-infoBoxItem-right" v-if="isBindPhone">已完成</div>
							<div class="hbxq-Addition-infoBoxItem-right" v-else="isBindPhone">+5聚宝力</div>
						</div>
						<div class="hbxq-Addition-infoBoxItem clear" >
							<div class="hbxq-Addition-infoBoxItem-left">下载蜂巢玩APP </div>
							<div class="hbxq-Addition-infoBoxItem-right" v-if="isDownApp">已完成</div>
							<div class="hbxq-Addition-infoBoxItem-right" v-else="isDownApp">+5聚宝力</div>
						</div>
						<div class="hbxq-Addition-infoBoxItem clear" style="border: none;">
							<div class="hbxq-Addition-infoBoxItem-left">首次提现 </div>
							<div class="hbxq-Addition-infoBoxItem-right" v-if="isFirstCash">已完成</div>
							<div class="hbxq-Addition-infoBoxItem-right" v-else="isFirstCash">+5聚宝力</div>
						</div>
					</div>
				</div>
				
			</div>
		
			
		</div>
		<!--签到蒙版-->
		<div class="hbxq-home-signmb" :style="{display:mbShow}">
			<div class="hbxq-home-signmbClose" @click="mbShow='none'"></div>
			<sign></sign>
		</div>
	</div>
</template>

<script>	
	import headNav from '@/pages/home/headNav';
	import sign from '@/pages/home/sign';
	import {getHomeInfo} from '../../api/hbxq.js';
	export default {
		data() {
	        return { 
	        	mbShow:'none',
	        	isFocus:'',//是否关注公众号
	        	isBindPhone:'',//是否绑定的手机号
	        	isDownApp:'',//是否下载了APP 
	        	isFirstCash:'',//是否第一次提现 	
//	        	focusNum:200,//关注公众号获得的聚宝力
//	        	bindPhoneNum:200,//绑定手机号获得的聚宝力
//	        	downAppNum:200,//下载了APP 获得的聚宝力
//	        	firstCashNum:200,//第一次提现 	获得的聚宝力
	        	jbl:''//当前聚宝力
	        }
        },
        components:{
		    'headNav':headNav,
		    'sign':sign
		},
        mounted: function(){     	
        	getHomeInfo().then((response)=>{//获取聚宝力信息
        		var jbl = response.data.data.bonus;
	      		var bonusOther = response.data.data.bonusOther;
	      		var code = response.data.code;
	      		
	      		if(code=='0'){	
	      			this.isFocus = bonusOther.wechat;
	      			this.isBindPhone = bonusOther.phone;
	      			this.isDownApp = bonusOther.app;
	      			this.isFirstCash = bonusOther.withdraw;	      			
	      			this.jbl = jbl;
	      			
	      		}
	      	}).catch((response)=>{
					
		    }); 
        },
        methods:{
        	returnLast(){
        		this.$router.push('/')
        	},
        	open_qiandao(){//打开签到页
        		this.mbShow = '';
        	}
        }
	}
</script>

<style>
.hbxq-return-btn2{
	background: url(../../../static/home/return.png) no-repeat;
	background-size: 100% 100%;
	width: 1.5rem;
	height:0.58rem;
	margin-top: .2rem;
	margin-left: .1rem;
}
.hbxq-Addition-bg{
	position: absolute;
	height: 100%;
	width: 100%;
	background: url(../../../static/work/bg3.png) no-repeat;
	background-size: 100% 100%;
	padding: 0 .1rem;
	overflow-y: auto;
}
.hbxq-Addition-bg2{
	background: url(../../../static/jbl/jbl-bg2.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	min-height: 10.3rem;
	width: 100%;
	margin-top: .6rem;
	padding-top: 1rem;
	padding-bottom: .5rem;
}
.hbxq-Addition-cashTitle{
	position: absolute;
	left: 50%;
	top: -.25rem;
	transform: translateX(-50%);
}
.hbxq-Addition-cashTitle img{
	width: 5.5rem;
	height:1.15rem;
}
.hbxq-Addition-AdditionBox{
	
	margin: 0 auto;
	text-align: center;
	background: url(../../../static/jbl/round.png) no-repeat;
	background-size: 100% 100%;
	width: 3.1rem;
	height: 2.39rem;
	
}
.hbxq-Addition-AdditionBox-text1{
	padding-top: .75rem;
	color: #a67629;
	font-size: 1rem;  
	font-weight: bolder;
	margin-bottom: .1rem;
}
.hbxq-Addition-AdditionBox-text2{
	color: #c27a3b;
	font-size: .3rem;  
	line-height: 0rem;
}
.hbxq-Addition-Additionshuoming{
	color: #cf915c;
	text-align: center;
	width: 55%;
	margin: 0 auto;
	font-weight: bolder;
	margin-top: .2rem;
}
.hbxq-Addition-infoBox{
	padding: 0 1.4rem;
	margin-top: .2rem;
}
.hbxq-Addition-infoBoxTitle{
	color: #a67629;
	font-weight: bolder;
	font-size: .33rem;
}
.hbxq-Addition-infoBoxItem{
	color: #cf915c;
	font-size: .28rem;
	border-bottom: 1px solid #f0dab8;
	padding: .1rem 0;
}
.hbxq-Addition-infoBoxItem-left{
	float: left;
}
.hbxq-Addition-infoBoxItem-right{
	float: right;
}
.clear::after{
	content: '';
	display: block;
	clear: both;
}
.hbxq-qiandao-box{
	width: .6rem;
	height: 1rem;
	text-align: center;
	color: #a26a2c;
	font-weight: bolder;
	position: absolute;
	right:1.4rem;
	top: 1.2rem;	
}
.home-qiandao-img{
	/*pointer-events: none;*/
    width: .7rem;
    height: .7rem;
    
}
.hbxq-qiandao-text{
	width: .7rem;
	text-align: center;
	position: relative;
	top: -.08rem;
}

.hbxq-home-signmb{
	background:rgba(0,0,0,.7);
	position: absolute;width: 100%;
	height: 100%;
	z-index: 5;
	padding-top: .8rem;
	
}
.hbxq-home-signmbClose{
	background: url(../../../static/sign/signClose.png) no-repeat;
	background-size: 100% 100%;
	width:1rem;
	height:1rem;
	position: absolute;
	right:.2rem;
	top:1.5rem;
	z-index: 1;
	
}
.hbxq-Addition-info{
	max-height: 6.3rem;
	overflow-y: auto;
}
</style>