<template>
	<div id="hbxq-cash">

		<div class="hbxq-cash-bg">
			<!--顶部公用导航-->
			<div class="hbxq-return-btn2" @click="returnLast()"></div>
			<headNav></headNav>
			<!--提现页面-->
			<div class="hbxq-cash-bg2">
				<!--标题-->
				<div class="hbxq-cash-cashTitle">
					<img src="../../../static/cash/cashTitle.png" />
				</div>


					<!--可提现金额-->
					<div class="hbxq-ketixian-bg">
						<span style="color:#f1d76d;">可提金额</span>
						<span>{{canCash}}</span>
					</div>
					<!--提现列表-->
					<div class="hbxq-tixian-listBg" align="center">
						<div class="hbxq-tixian-imglistBox" v-for="item,index in cashMoneyList">
							<img :src="item.imgUrl1" class="hbxq-tixian-imglist" v-show="!item.active" @touchstart="start(index,item.id)" @touchend="move(index,item.id)"/>
							<img :src="item.imgUrl2" class="hbxq-tixian-imglist" v-show="item.active"/>
							<img src="../../../static/cash/dagou.png" class="hbxq-tixian-dagou"  :class="{'hbxq-tixian-dagouDH':cashMoneyList_index == index}" v-show="cashMoneyList_index == index"/>
						</div>

					</div>
					<!--提现规则-->
					<div class="hbxq-tixian-ruleBox">
						<div style="color:#a67629;font-weight: bolder;font-size: .3rem;margin-bottom: .2rem;">提现规则 : </div>
						<p>1、提现将在周一至周五工作日24小时内审批到账，周末不处理提现审批，请耐心等待。</p>
						<p>2、提现手续费为3%</p>
						<p>3、提现不到账，提现失败，请查看  <span class="hbxq-cash-cashshuoming" @click="jump_cashRule()">提现说明</span></p>
					</div>
					<!--提现按钮-->
					<div class="hbxq-tixianBtn" align="center">
						<div class="hbxq-tixianBtn-box" @touchstart="tixianStart()" @touchend="tixianMove()">
							<div style="" >
								<img src="../../../static/cash/txBtn1.png" class="hbxq-tixianBtn-txBtn1" v-show="!tixianBtn"/>
								<img src="../../../static/cash/txBtn2.png" class="hbxq-tixianBtn-txBtn2" v-show="tixianBtn"/>
							</div>


						</div>

					</div>


				<!--未绑定B号弹窗-->
				<van-popup v-model="cashTcShow1" style="background: transparent;width: 100%;height: 100%;" >
					<img src="../../../static/cash/tcClose.png" class="hbxq-cash-tcClose" @click="cashTcShow1=false"/>
					<!--未绑定微信号-->
					<div style="position: relative;width: 100%;height: 100%;overflow: hidden;">
						<div class="hbxq-cash-bindTcBox">
							<img src="../../../static/cash/tc.png" class="hbxq-cash-bindTc"/>
							<!--<img src="../../../static/cash/tc1.png" class="hbxq-cash-tcimg"/>-->
						</div>
					</div>
				</van-popup>
				<!--提现结果弹窗-->
				<van-popup v-model="cashTcShow3" style="background: transparent;" >
					<div style="position: relative;">
						<img src="../../../static/cash/zdl.png" class="hbxq-cash-tcZdl" @click="cashTcShow3 = false"/>
						<img src="../../../static/cash/tc2.png" class="hbxq-cash-tcimg"/>
					</div>
				</van-popup>
				<!--提现结果弹窗 余额不足 -->
				<van-popup v-model="cashTcShow2" style="background: transparent;" >
					<div style="position: relative;">
						<img src="../../../static/cash/zdl.png" class="hbxq-cash-tcZdl" @click="cashTcShow2 = false"/>
						<img src="../../../static/cash/tc1.png" class="hbxq-cash-tcimg"/>
					</div>
				</van-popup>
	
				
			</div>
		</div>
	</div>
</template>

<script>
	import headNav from '@/pages/home/headNav';
	import {getHomeInfo,withdraw} from '../../api/hbxq.js';
	export default {
		data() {
	        return {
	        	cashTcShow3:false,
	        	cashTcShow2:false,
	        	cashTcShow1:false,
	        	cashMoneyList:[
	        		{id:1,imgUrl1:'../../../static/cash/0.3-1.png',imgUrl2:'../../../static/cash/0.3-2.png',money:'0.3',active:false},
	        		{id:2,imgUrl1:'../../../static/cash/30-1.png',imgUrl2:'../../../static/cash/30-2.png',money:'30',active:false},
	        		{id:3,imgUrl1:'../../../static/cash/50-1.png',imgUrl2:'../../../static/cash/50-2.png',money:'50',active:false},
	        		{id:4,imgUrl1:'../../../static/cash/100-1.png',imgUrl2:'../../../static/cash/100-2.png',money:'100',active:false},
	        		{id:5,imgUrl1:'../../../static/cash/300-1.png',imgUrl2:'../../../static/cash/300-2.png',money:'300',active:false},
	        		{id:6,imgUrl1:'../../../static/cash/500-1.png',imgUrl2:'../../../static/cash/500-2.png',money:'500',active:false},
	        		{id:7,imgUrl1:'../../../static/cash/1000-1.png',imgUrl2:'../../../static/cash/1000-2.png',money:'1000',active:false}
	        	],
	        	cashMoneyList_index:'-1',
	        	tixianBtn:false,
	        	id:'',
	        	canCash:'',
	        	withdraws:'',
	        	isBindB:''
	        }
        },
        components:{
		    'headNav':headNav
		},
        mounted: function(){
        	this.getInfo()
        },
        methods:{
        	returnLast(){
        		this.$router.push('/')
        	},
          jump_cashRule(){
          	this.$router.push('/cashRule')
          },
        	start(index,id){
        		this.cashMoneyList_index = index;
        		this.cashMoneyList[index].active = !this.cashMoneyList[index].active;
        		this.id = id;

        	},
        	move(index,id){
        		this.cashMoneyList[index].active = !this.cashMoneyList[index].active
        	},
        	tixianStart(){
        		this.tixianBtn = !this.tixianBtn
        	},
        	tixianMove(){//确认提现
        		this.tixianBtn = !this.tixianBtn
        		if(this.isBindB == false){
        			this.cashTcShow1 = true;
        		}else{
        			withdraw(this.id).then((response)=>{
			      		var res = response.data.data;
			      		var code = response.data.code;
			      		if(code=='0'){
			      			this.canCash = res.balance
			      			this.cashTcShow3 = true
			      			this.getInfo()	
			      		}else if(code=='10004'){//余额不足
			      			this.cashTcShow2 = true;
			      		}else{
			      			this.$toast("提现失败,请稍后再试~")
			      		}
			      	}).catch((response)=>{

				    });
        		}



        	},
        	getInfo(){
        		getHomeInfo().then((response)=>{
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		if(code=='0'){
		      			this.canCash = res.balance;
		      			this.withdraws = res.withdraw;
		      			this.isBindB = res.bonusOther.canWithdraw;
		      			console.log(this.isBindB)
		      			if(this.withdraws==true){
		      				this.cashMoneyList = [
				        		{id:2,imgUrl1:'../../../static/cash/30-1.png',imgUrl2:'../../../static/cash/30-2.png',money:'30',active:false},
				        		{id:3,imgUrl1:'../../../static/cash/50-1.png',imgUrl2:'../../../static/cash/50-2.png',money:'50',active:false},
				        		{id:4,imgUrl1:'../../../static/cash/100-1.png',imgUrl2:'../../../static/cash/100-2.png',money:'100',active:false},
				        		{id:5,imgUrl1:'../../../static/cash/300-1.png',imgUrl2:'../../../static/cash/300-2.png',money:'300',active:false},
				        		{id:6,imgUrl1:'../../../static/cash/500-1.png',imgUrl2:'../../../static/cash/500-2.png',money:'500',active:false},
				        		{id:7,imgUrl1:'../../../static/cash/1000-1.png',imgUrl2:'../../../static/cash/1000-2.png',money:'1000',active:false}
				        	]

		      			}else{
		      				this.cashMoneyList = [
		      					{id:1,imgUrl1:'../../../static/cash/0.3-1.png',imgUrl2:'../../../static/cash/0.3-2.png',money:'0.3',active:false},
				        		{id:2,imgUrl1:'../../../static/cash/30-1.png',imgUrl2:'../../../static/cash/30-2.png',money:'30',active:false},
				        		{id:3,imgUrl1:'../../../static/cash/50-1.png',imgUrl2:'../../../static/cash/50-2.png',money:'50',active:false},
				        		{id:4,imgUrl1:'../../../static/cash/100-1.png',imgUrl2:'../../../static/cash/100-2.png',money:'100',active:false},
				        		{id:5,imgUrl1:'../../../static/cash/300-1.png',imgUrl2:'../../../static/cash/300-2.png',money:'300',active:false},
				        		{id:6,imgUrl1:'../../../static/cash/500-1.png',imgUrl2:'../../../static/cash/500-2.png',money:'500',active:false}
				        	]
		      			}
		      		}
		      	}).catch((response)=>{

			    });
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
.hbxq-cash-bg{
	position: absolute;
	height: 100%;
	width: 100%;
	background: url(../../../static/work/bg3.png) no-repeat;
	background-size: 100% 100%;
	padding: 0 .1rem;
  overflow-y: auto;
}
.hbxq-cash-bg2{
	background: url(../../../static/work/market-bg2.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	padding: 0 .5rem;
    padding-bottom: .4rem;
    padding-top: .7rem;
    min-height: 10.3rem;
    margin-top: .6rem;
}
/* .hbxq-cash-bg2{
	background: url(../../../static/work/market-bg2.png) no-repeat;
	background-size: 100% 100%;
	position:absolute;
	top: 1.8rem;
	left: .2rem;
	right: .2rem;
	bottom: 1rem;
	padding: 0 .5rem;
	padding-top: .7rem;

} */
.hbxq-cash-contentBox{
	position: absolute;
	top: 0;
	left: .5rem;
	right:.5rem;
	bottom: 0rem;
	overflow-y: auto;
}
.hbxq-ketixian-bg{
	font-size: .32rem;
	font-weight: bolder;
	line-height: .84rem;
	color: #ffe7bf;
	text-align: center;
	background: url(../../../static/cash/tixian-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 3.2rem;
	height: .83rem;
	margin: 0 auto;
	margin-top: .1rem;
}
.hbxq-tixian-listBg{
	padding-top: .5rem;
	padding-bottom: .25rem;
	margin-top: .2rem;
	background: url(../../../static/cash/tixian-bg2.png) no-repeat;
	background-size: 100% 100%;
	width: 100%;
	min-height:4rem;

}
.hbxq-tixian-imglistBox{
	width: 45%;
	display:inline-block;
	position: relative;
}
.hbxq-tixian-imglist{
	width: 100%;
	height: auto;
	min-height:1.1rem;
}
.hbxq-tixian-ruleBox{
	color: #a67629;
	margin-top: .2rem;
	font-weight: bolder;
}
.hbxq-tixian-dagou{
	cursor: pointer;
	position: absolute;
	width: .5rem;
	height: .525rem;
	right: 0;
	top: -.1rem;
}
.hbxq-tixian-dagouDH{
	animation: .3s dagouDH forwards;

}
@keyframes dagouDH{
	from{opacity: 0;transform: scale(1.3);}
	to{opacity: 1;transform: scale(1);}
}
.hbxq-tixianBtn{
	margin-top: .3rem;
	margin-bottom: .3rem;
}
.hbxq-tixianBtn-box{
	position: relative;
	height: 1.29rem;
	width: 3rem;
	margin: 0 auto;
	cursor: pointer;

}
.hbxq-tixianBtn-txBtn1{
	pointer-events: none;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	width: 3rem;
	height: 1.29rem;
}
.hbxq-tixianBtn-txBtn2{
	pointer-events: none;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 0;
	width: 3rem;
	height: 1.21rem;
}
.hbxq-cash-cashTitle{
	position: absolute;
	left: 50%;
	top: -.3rem;
	transform: translateX(-50%);
	z-index: 1;
}
.hbxq-cash-cashTitle img{
	width: 5.5rem;
	height:0.984rem;
}
.hbxq-cash-cashshuoming{
	background: #a37326;
	color: #FFFFFF;
	border-radius:5px;
	padding: .04rem .2rem;
}
.hbxq-cash-tcimg{
	width:7rem;
	height:5.591rem;
}
.hbxq-cash-bindTcBox{
	position: relative;
	width: 90%;
	height: 90%;
	padding-bottom: .2rem;
	padding: .2rem 0;
	margin-top: .2rem;
	border-radius: 20px;
	overflow-y: auto;
	background-color: #FFF;
	margin-left: 5%;
	overflow-x: hidden;
}
.hbxq-cash-bindTc{
	width:7rem;
	height: 30.756rem;
	display: block;
	margin: 0 auto;
  margin-left: -.05rem;
}
.hbxq-cash-tcClose{
	z-index: 1;
	width: .6rem;
	height: .6rem;
	position: absolute;
	right: .6rem;
	top: .5rem;
}
.hbxq-cash-tcZdl{
	position: absolute;
	width: 3.5rem;
	display: block;
	height: 1.061rem;
	margin: 0 auto;
	bottom: 1rem;
	left: 1.75rem;
}

</style>
