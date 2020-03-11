<template>
	<div id="hbxq-fenhong">
		
		<div class="hbxq-fenhong-bg">
			<!--顶部公用导航-->
			<div class="hbxq-return-btn2" @click="returnLast()"></div>
			<headNav></headNav>
			<div class="hbxq-fenhong-bg2">
				<!--标题-->
				<div class="hbxq-fh-fhTitle">
					<img src="../../../static/fh/fh-title.png" class="hbxq-fh-fhTitle-img"/>
					<img src="../../../static/fh/help.png" class="hbxq-fh-fhTitle-help"/>
				</div>
				<!--广告收益-->
				<div class="hbxq-fenhong-shouyiBox">
					<div class="clear">
						<div class="hbxq-fenhong-shouyiBox-left">广告收益</div>
						<div class="hbxq-fenhong-shouyiBox-right">每天中午12：00核算</div>
					</div>
					<div class="clear" style="margin-top: .25rem;">
						<div class="hbxq-fenhong-shouyiBox-left1">
							<div class="hbxq-fenhong-shouyiBox-ad">
								<div align="center">
									<span class="hbxq-fenhong-shouyiBox-ad-text1">{{adIncome}}</span> <br /> <span>昨日分红卡收益(元)</span>
								</div>
							</div>
						</div>
						<div class="hbxq-fenhong-shouyiBox-right1">
							<div class="hbxq-fenhong-shouyiBox-ad">
								<div align="center">
									<span class="hbxq-fenhong-shouyiBox-ad-text1">{{historyIncome}}</span> <br /> <span>历史收益(元)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--分红卡收益-->
				<div class="hbxq-fenhong-shouyiBox" style="margin-top:.7rem;">
					<div class="clear">
						<div class="hbxq-fenhong-shouyiBox-left">分红卡</div>
						<div class="hbxq-fenhong-shouyiBox-right"> 每天中午12:00自动分红</div>
					</div>
					<div class="hbxq-fenhong-shouyiBox-topBg hbxq-topBg-border">
						<div align="center">
							<span class="hbxq-fenhong-shouyiBox-ad-text1">{{profit}}</span> <br /> <span>昨日收益(元/张)</span>
						</div>
					</div>
					<div class="hbxq-fenhong-shouyiBox-bottom clear">
						<div class="hbxq-fenhong-shouyiBox-bottomLeft">
							<div align="center">
								<span class="hbxq-fenhong-shouyiBox-bottom-text1">{{cardNum}}</span> <br /> <span>全网总数(张)</span>
							</div>
						</div>
						<div class="hbxq-fenhong-shouyiBox-bottomMid">
							<div align="center">
								<span class="hbxq-fenhong-shouyiBox-bottom-text1">{{todayCardNum}}</span> <br /> <span>今日产出(张)</span>
							</div>
						</div>
						<div class="hbxq-fenhong-shouyiBox-bottomRight">
							<div align="center">
								<span class="hbxq-fenhong-shouyiBox-bottom-text1">{{surplusCardNum}}</span> <br /> <span>待产出(张)</span>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>	
	import headNav from '@/pages/home/headNav';
	import {getHomeInfo} from '../../api/hbxq.js';
	export default {
		data() {
	        return { 
	        	adIncome:'',//昨日广告收益
	        	historyIncome:'',//历史收益
	        	profit:'',//昨日分红卡收益
	        	cardNum:'',//分红卡总数
	        	todayCardNum:'',//今日产出分红卡
	        	surplusCardNum:''//分红卡剩余
	        }
        },
        components:{
		    'headNav':headNav
		},
        mounted: function(){
        	getHomeInfo().then((response)=>{//获取首页顶部钞票能量信息
	      		var dividend = response.data.data.dividend;
	      		var code = response.data.code;	
	      		if(code=='0'){      			
	      			this.adIncome = dividend.yesterday;	
	      			this.historyIncome = dividend.total;
	      			this.profit = dividend.avgEarn;
	      			this.cardNum = dividend.totalCount;
	      			this.todayCardNum = dividend.todayCount;
	      			this.surplusCardNum = dividend.wait;
	      		}
	      	}).catch((response)=>{
					
		    }); 
        },
        methods:{
        	returnLast(){
        		this.$router.push('/')
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
.hbxq-fenhong-bg{
	position: absolute;
	height: 100%;
	width: 100%;
	background: url(../../../static/work/bg3.png) no-repeat;
	background-size: 100% 100%;
	padding: 0 .1rem;
}
.hbxq-fenhong-bg2{
	background: url(../../../static/fh/fenhong-bg2.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	min-height: 10.3rem;
	width: 100%;
	margin-top: .6rem;
	padding-top: 1.2rem;
	padding-bottom: .5rem;
}
.hbxq-fh-fhTitle{
	position: absolute;
	left: 50%;
	top: -.3rem;
	transform: translateX(-50%);
}

.hbxq-fh-fhTitle-img{
	width: 5.5rem;
	height:0.985rem;
}
.hbxq-fh-fhTitle-help{
	position: absolute;
	left: 68%;
	top: .35rem;
	width: .375rem;
	height: .406rem;
}
.hbxq-fenhong-shouyiBox{
	padding: 0 .7rem;
}
.hbxq-fenhong-shouyiBox-left{
	float: left;
	font-size: .3rem;
	font-weight: bolder;
	color: #3e3a39;
}
.hbxq-fenhong-shouyiBox-right{
	float: right;
	color: #595757;
	font-weight: bolder;
	padding-top: .08rem;
}
.clear::after{
	content:'';
	display: block;
	clear: both;
}
.hbxq-fenhong-shouyiBox-ad{
	background:url(../../../static/fh/item-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 2.8rem;
	height:1.9796rem;
	color: #9c6b1d;
	padding-top: .55rem;
	font-weight: bolder;
}
.hbxq-fenhong-shouyiBox-left1{
	float: left;
}
.hbxq-fenhong-shouyiBox-right1{
	float: right;
}
.hbxq-fenhong-shouyiBox-ad-text1{
	color: #9c6b1d;
	font-size: .5rem;
}
.hbxq-fenhong-shouyiBox-topBg{
	margin-top: .25rem;
	font-weight: bolder;
	color: #9c6b1d;
	background: url(../../../static/fh/item-topBg.png) no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 1.5rem;
	/*border-bottom: 1px solid #CBA64E;*/
	padding-top: .29rem;
	position: relative;
}
.hbxq-fenhong-shouyiBox-bottom{
	background: url(../../../static/fh/bottomBg.png) no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 1.7rem;
	/*border-top: 1px solid #DCB455;*/
	color: #9c6b1d;
	font-weight: bolder;
	padding-top: .45rem;
	
}
.hbxq-fenhong-shouyiBox-bottom-text1{
	font-size: .35rem;
}
.hbxq-topBg-border::after{
	content: '';
	display: block;
	position:absolute;
	width: 100%;
	border-bottom: 1px solid #CBA64E;
	border-top: 1px solid #DCB455;
	bottom:-1px;
}
.hbxq-fenhong-shouyiBox-bottomLeft{
	display: inline-block;
	margin: 0;
	width: 33.333%;
	height: 1.6rem;
	float: left;	
}
.hbxq-fenhong-shouyiBox-bottomMid{
	display: inline-block;
	width: 33.333%;
	margin: 0;
	height: 1.6rem;
	float: left;
	padding-left: .08rem;
}
.hbxq-fenhong-shouyiBox-bottomRight{
	display: inline-block;
	width: 33.333%;
	margin: 0;
		height: 1.6rem;
	float: left;
}
</style>