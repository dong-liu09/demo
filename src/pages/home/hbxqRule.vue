<template>
	<div id="agreement" class="agreement" style="margin-top: .7rem;">
		<div id="bar" class="navbar"><van-nav-bar title="红包星球规则" :fixed="true" @click-left="onClickLeft" left-arrow/></div>	
		<div id="nr" class="content">
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<div class="title2">一、红包星球玩法</div>
				<p></p>
				<p class="suojin">在红包星球内，玩家可以通过打工赚取钞票，赚取的钞票可以升级商铺；商铺每升2级，可以获得一个最高8元的现金红包，拆开可立刻提现；当商铺升到30级时，还能抽到分红卡，每日根据分红卡的数量瓜分万元现金。</p>
				
			</div>
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<div class="title2">二、如何打工</div>
				<p></p>
				<p class="suojin">点击“去打工”按钮，前往蜂巢人才市场进行打工，打工需要消耗能量，从低到高一共有5种不同等级的打工岗位，消耗的能量分别为1/2/3/5/10点，每秒获得钞票为10/21/32/55/120点；打工时间持续4小时，可以同时打多份工，每秒钞票获取速度会叠加哦。</p>
				<p class="suojin">打工可以邀请朋友帮忙加速，打开首页的“助手邀请”，选择邀请后长按海报分享，朋友识别二维码进入平台后，即可成为助手为玩家增加赚钱速度，最高可以增加225%的赚钱速度。</p>
			</div>
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<div class="title2">三、如何升级商铺</div>
				<p></p>
				<p class="suojin">有了钞票，玩家就可以点击商铺进行升级，升级进度可以在左边的进度条看到；商铺每升2级，可以获得一个最高8元的现金红包，拆开可立刻提现；当玩家将商铺升到30级时，除了拆红包得现金，还能触发“财神降临”活动，玩家可以从财神的手中抽卡，一共有5种卡片，分别为[分红卡]、[蜂蜂卡]、[红包卡]、[福神卡]、[聚宝卡]。</p>
				<p class="suojin">“财神降临”结束后财神将会把玩家的30级商铺回收，同时赠送[聚宝盆]（增加打工赚的钞票）。玩家可以重新升级商铺获得红包，升级到30级可再次召唤“财神降临”</p>
			</div>
			
			
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<div class="title2">四、如何获得能量</div>
				<p class="title2">能量的获取方式如下：</p>
				<p class="suojin">1、[每日更新]：每日0点系统自动增加2点能量，当天未使用能量将被清空。</p>
				<p class="suojin">2、[能量补给站]：每日12点到15点、18点到21点各能领取2点能量，超过领取时间能量将消失，当天未使用能量将被清空。</p>
				<p class="suojin">3、[任务大厅]：玩家前往任务大厅做任务，收益结算时将获得3点能量，每日最高能获得9点能量，能量可累计。</p>
				<p class="suojin">4、[互助大厅]：在互助大厅成功互助1次后将获得1点能量，每日最高能获得9点能量。能量可累计</p>
				<p class="suojin">5、拥有蜂巢plus特权的玩家将获得双倍能量。</p>
			</div>
			
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<div class="title2">五、卡片功能</div>
				<p class="title2">1、分红卡</p>
				<p class="suojin">拥有分红卡，玩家账号即获得蜂巢玩分红权，（分红收益 = 蜂巢玩广告收益 / 当日分红卡总数），分红卡是红包星球的终极目标。获得方式为：“财神降临”活动、集齐5张蜂蜂卡合成。</p>
				<p class="title2">2、蜂蜂卡</p>
				<p class="suojin">蜂蜂卡一共有五张，分别为：帅帅卡、萌萌卡、乖乖卡、美美卡、钱钱卡，集齐5张后，在卡包页面点击合成，就能够合成分红卡。
可以消耗两张相同的蜂蜂卡重新召唤“财神降临”进行抽卡。</p>
				<p class="title2">3、红包卡</p>
				<p class="suojin">使用红包卡，将直接获得超级现金红包，可立刻提现。</p>
				<p class="title2">4、福神卡</p>
				<p class="suojin">福神卡一共有2张，分别为：小福神卡、福禄卡，集齐2张后，在卡包页面点击合成，就能过获得福神卡，使用福神卡可以获得188元的红包现金。</p>
				<p class="title2">5、聚宝卡</p>
				<p class="suojin">聚宝卡能够增加200聚宝力，聚宝力可以增加打工赚钞票的速度哦。</p>				
			</div>
			
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<div class="title2">六、扭蛋功能</div>
				<p class="suojin">通过扭蛋券可以启动神秘的扭蛋机，扭蛋机的奖品包含钞票、现金红包、实物奖励、还有最终的大奖IPHONE11哦；扭蛋券可以通过签到、看广告两种方式获得。</p>				
			</div>
			
			<div class="contents">
				<div class="title" style="margin-top:.5rem;"> </div>
				<div class="title2">七、注意事项</div>
				<p class="suojin">1、钞票不能自动到账，需要点击才能领取。</p>		
				<p class="suojin">2、钞票不能自动到账，2、聚宝力加成在打工结束前一秒加上。</p>		
				<p class="suojin">3、每日能量未使用当日0点将清空。</p>		
				<p class="suojin">4、每次升级商铺一次消耗当前拥有钞票的10%。</p>		
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
	#agreement{
		background-color: #FFF;
		overflow: auto;
		height: 100%;
		padding-bottom: 1.5rem;
	}
	#agreement .suojin{
		text-indent: .4rem;
	}
</style>