<template>
	<div id="cashRule" class="cashRule" style="margin-top: .7rem;">
		<div id="bar" class="navbar"><van-nav-bar title="红包星球提现规则" :fixed="true" @click-left="onClickLeft" left-arrow/></div>	
		<div id="nr" class="content">
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<!--<div class="title2">一、红包星球规则</div>-->
				<p></p>
				<p class="suojin">1、提现额度分为0.3元、30元、50元、100元、300元、500元、1000元六档，每次提现时您可以选择所需的一档提现额度，剩余余额可在下次满足前述提现额度时申请提现。</p>
				<p class="suojin">2、账户每日可提现1次，每日最多提现1000元。</p>
				<p class="suojin">3、用户在首页升级商铺获得拆红包机会，拆开金额累计现金余额，还可继续升级商铺累计现金，冲向30级分红卡瓜分每日广告收益大奖。</p>
				<p class="suojin">4、为保证用户顺利提现，提现需用户按照提现页面规范操作，如用户未按提现要求操作或不符合第三方支付平台的要求等原因导致不能收款（如未通过微信账号登陆蜂巢玩、用户微信账号未进行实名认证等），所获得的红包将无法提现，蜂巢玩无需承担任何责任。</p>
				<p class="suojin">5、如用户以任何不正当手段或舞弊方式参与本活动，一经发现，蜂巢玩有权对该用户得账号限制奖励发放或清空账号、封闭账号等，并追究该用户责任的权利。如因此给用户造成损失，蜂巢玩不进行任何赔偿或补偿。</p>
				<p class="supjin">6、如因不可抗力或情势变更（包括但不限于重大自然灾害事件、活动遭受严重网络攻击或系统故障等）导致本活动无法继续举办的，则蜂巢玩可决定暂停或终止本活动，并可依相关法律法规的规定主张免责。</p>
			</div>
			
				
			<!--右下角图标-->	
			<!--<div class="icon-right"><img src="../../../../static/my/img1.png"/></div>-->
			<div class="icon-right"><img src="../../../static/My/img1.png"/></div>
			<!--左下角图标-->
			<!--<div class="icon-left"><img src="../../../../static/my/img2.png"/></div>-->
			<div class="icon-left"><img src="../../../static/My/img2.png"/></div>
		</div>
		</div>
	</div>
</template>

<script>	
//	import fc from '../../Rwxq/imgShared'
//	import {wxshare} from '../../../api/share.js' 
	export default {
        data() {
        	return {
        	
        	}
        },
        mounted:function(){
        	
        },
        methods:{
        	onClickLeft(){
        		this.$router.go(-1)
        	}
        }
    }
</script>

<style>	
	.contents p{
	    text-align: left;
	    line-height: 2;
	    margin: 0;
	    color: #696969;
	}
   	.contents{
	  	width: 88%;
	    margin: 0 auto;
	    font-size: .25rem;
	}
	.contents .title{
	    font-weight:bold;
	    text-align: center;
	}
	.contents .title2{
	    font-weight:bold;
	    margin-top: 0.1rem;
	    margin-bottom: 0.1rem;
	    color: #5f5e5e;
	}
	.icon-right{
	    position: fixed;
	    right: 0;
	    bottom: 1rem;
	}
	.icon-left{
	    position: fixed;
	    left: 0;
	    top: 1rem;
	}
	#cashRule{
		background-color: #FFF;
		overflow: auto;
		height: 100%;
		padding-bottom: 1.5rem;
	}
	#cashRule .suojin{
		text-indent: .4rem;
	}
</style>