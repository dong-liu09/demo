<template>
	<div id="hbxq-home">
		<div class="hbxq-home-bg">
			<!--顶部导航-->
			<div class="hbxq-return-btn1" @click="returnFcw()"></div>
			<headNav :data="data" :moneydata="moneydata" @getPowerTc='getPowerTc($event)'></headNav>

			<!--聚宝力-->
			<!--<div>
				<div class="hbxq-jbl-bg">
					<div class="hbxq-jbl-bg-num">
						<span @click="jump_jbl()">聚宝力<span>{{jbl}}</span></span>

						<img src="../../../static/home/help.png" class="hbxq-jbl-bg-help"/>
					</div>
				</div>
			</div>-->
			<!--左边导航-->
			<div class="home-leftNav">

				<div style="" @click="jpbargainingZone()">
					<div class="home-right-navitemBox" >
						<img src="../../../static/home/huzhu.png" class="home-right-navitem"/>
						<div class="home-right-navitemText">互助赚钱</div>
					</div>
				</div>
				<div>
					<div class="home-right-navitemBox" @click="jptaskHall()">
						<img src="../../../static/home/xuanshang.png" class="home-right-navitem"/>
						<div class="home-right-navitemText">高价任务</div>
					</div>
				</div>

				<!--左边进入聚宝力-->
				<div style="width: 2.4rem;height: .7rem;position: relative;top:0;">
					<div class="home-right-navitemText" style="position: absolute;top:.8rem;width: .7rem;line-height: .3rem;">聚宝力</div>
					<div @click="jump_jbl()">
						<img src="../../../static/home/jblicon.png" class="home-right-navitem2" style="left: 0;"/>
					</div>


					<!--<div class="home-left-lqpower" >
						<div style="position:absolute;width: 2rem;height: .61rem;left: -1.4rem;top: .06rem;" :class="{'home-left-lq-dh':left_lq_dh}">
							<img src="../../../static/home/right-lq.png" class="home-left-lq"  />
							<div  class="home-left-lq-text">{{jbl}} <img src="../../../static/home/help.png" style="width: .28rem;height: .28rem;transform: translateY(+.03rem);" /></div>
						</div>

						<div style="position: relative;left:0rem;" class="home-right-lqBox-djdh3">
							<div class="home-right-lqwz">{{receiveTime}}点领取</div>
							<img src="../../../static/home/right-lq.png" class="home-right-lq"/>
						</div>
					</div>-->

				</div>
			</div>

			<!--首页大标题-->
			<div class="hbxq-home-titleBox">
				<div><img src="../../../static/home/title.png" class="hbxq-home-titleImg"/></div>

				<div class="hbxq-home-titleboardBox" align="center">
					<img src="../../../static/home/title-board.png" class="hbxq-home-titleboard" />
					<div class="hbxq-home-titleText" @click="jump_fh()">昨日总收益  <span style="color:#f3ed39;">{{lastProfit}}</span> 元人均分红 <span style="color:#f3ed39;">{{averageProfit}}</span> 元
						<img src="../../../static/home/right.png" style="width:.3rem;height:.3rem;position: relative;top: .05rem;"/>
					</div>
				</div>
			</div>
			<!--侧边导航-->
			<div class="home-rightNav">
				<div>
					<div class="home-right-navitemBox" @click="open_niudan()">
						<img src="../../../static/home/nd.png" class="home-right-navitem"/>
						<div class="home-right-navitemText">扭蛋</div>
					</div>
				</div>
				<div>
					<div class="home-right-navitemBox" @click="open_qiandao()">
						<img src="../../../static/home/qd.png" class="home-right-navitem"/>
						<div class="home-right-navitemText">签到</div>
					</div>
				</div>
				<div>
					<div class="home-right-navitemBox" @click="open_rule()">
						<img src="../../../static/home/gz.png" class="home-right-navitem"/>
						<div class="home-right-navitemText">规则</div>
					</div>
				</div>
				<div>
					<div class="home-right-navitemBox" @click="open_invite()">
						<img src="../../../static/home/yaoq.png" class="home-right-navitem"/>
						<div class="home-right-navitemText">助力</div>
					</div>
				</div>
				<!--侧边领取能量按键-->
				<div style="width: 2.4rem;height: .7rem;position: absolute;right: 0.28rem;bottom:-1rem;">
									<div v-if="isReceive"  @click="lqPower()">
										<img src="../../../static/home/lqpower.png" class="home-right-navitem2"  @click="tcdh()" v-show="tc_btn"/>
										<img src="../../../static/home/lqpower.png" class="home-right-navitem2" v-show="!tc_btn" />
									</div>
									<div v-else="isReceive">
										<img src="../../../static/home/lqpower1.png" class="home-right-navitem2"  @click="tcdh()" v-show="tc_btn"/>
										<img src="../../../static/home/lqpower1.png" class="home-right-navitem2" v-show="!tc_btn" />
									</div>
				<!--v-if="isReceive"-->
									<div class="home-right-lqpower" @click="lqPower()" >
										<div style="position: relative;left: 1.4rem;" v-if="!Djdh1" :class="{'home-right-lqBox-djdh':Djdh}">
											<div class="home-right-lqwz">{{receiveTime}}时领取</div>
											<img src="../../../static/home/right-lq.png" class="home-right-lq"/>
										</div>
										<div class="home-right-lqBox" v-if="Djdh1">
											<div class="home-right-lqwz">{{receiveTime}}时领取</div>
											<img src="../../../static/home/right-lq.png" class="home-right-lq" />
										</div>
									</div>

								</div>

			</div>
			<!--左边进度条-->
			<div class="home-left-ProgressBox" >
				<div style="display: inline-block;position: relative;">
					<div class="home-left-levelAward" v-if='lastIsAward'></div>
					<div class="home-left-levelbg" v-else>{{lastlevel}}</div>
					<img src="../../../static/home/p1.png" class="home-left-Progress" v-show="progress<=10"/>
					<img src="../../../static/home/p2.png" class="home-left-Progress" v-show="progress<=20 && progress>10"/>
					<img src="../../../static/home/p3.png" class="home-left-Progress" v-show="progress<=30 && progress>20"/>
					<img src="../../../static/home/p4.png" class="home-left-Progress" v-show="progress<=40 && progress>30"/>
					<img src="../../../static/home/p5.png" class="home-left-Progress" v-show="progress<=50 && progress>40"/>
					<img src="../../../static/home/p6.png" class="home-left-Progress" v-show="progress<=60 && progress>50"/>
					<img src="../../../static/home/p7.png" class="home-left-Progress" v-show="progress<=70 && progress>60"/>
					<img src="../../../static/home/p8.png" class="home-left-Progress" v-show="progress<=80 && progress>70"/>
					<img src="../../../static/home/p9.png" class="home-left-Progress" v-show="progress<=100 && progress>80"/>
					<!-- <img src="../../../static/home/p10.png" class="home-left-Progress" v-show="progress<=100 && progress>90"/> -->
					<div class="home-left-ProgressText">
						<span>已投资</span>
						<span style="color:#EDC990;">{{alreadyCost}}</span>
						<img src="../../../static/home/pmoney.png" style="width: .25rem;height: .26rem;"/>
					</div>
				</div>
			</div>

			<!--底部背景-->
			<div class="home-bottom-bg" >

				<div class="home-bottom-house">
					<img src="../../../static/home/house/1.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='1'"/>
					<img src="../../../static/home/house/2.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='2'"/>
					<img src="../../../static/home/house/3.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='3'"/>
					<img src="../../../static/home/house/4.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='4'"/>
					<img src="../../../static/home/house/5.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='5'"/>
					<img src="../../../static/home/house/6.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='6'"/>
					<img src="../../../static/home/house/7.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='7'"/>
					<img src="../../../static/home/house/8.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='8'"/>
					<img src="../../../static/home/house/9.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='9'"/>
					<img src="../../../static/home/house/10.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='10'"/>
					<img src="../../../static/home/house/11.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='11'"/>
					<img src="../../../static/home/house/12.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='12'"/>
					<img src="../../../static/home/house/13.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='13'"/>
					<img src="../../../static/home/house/14.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='14'"/>
					<img src="../../../static/home/house/15.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='15'"/>
					<img src="../../../static/home/house/16.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='16'"/>
					<img src="../../../static/home/house/17.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='17'"/>
					<img src="../../../static/home/house/18.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='18'"/>
					<img src="../../../static/home/house/19.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='19'"/>
					<img src="../../../static/home/house/20.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='20'"/>
					<img src="../../../static/home/house/21.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='21'"/>
					<img src="../../../static/home/house/22.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='22'"/>
					<img src="../../../static/home/house/23.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='23'"/>
					<img src="../../../static/home/house/24.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='24'"/>
					<img src="../../../static/home/house/25.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='25'"/>
					<img src="../../../static/home/house/26.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='26'"/>
					<img src="../../../static/home/house/27.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='27'"/>
					<img src="../../../static/home/house/28.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='28'"/>
					<img src="../../../static/home/house/29.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='29'"/>
					<img src="../../../static/home/house/30.png" class="home-house" :class="{'house-animation':house_animation,'house-sjAnimation':!house_animation}" @click="addAnimation($event)" v-if="level=='30'"/>
				</div>

				<div class="home-btnGrounp">
					<div class="home-btnGrounp-itembox">
						<div class="home-btnGrounp-item" @touchstart="start(1)" @touchend="move(1)">
							<img src="../../../static/home/cardBag1.png" class="home-btn-cardBag1" v-show="card_btn"/>
							<img src="../../../static/home/cardBag2.png" class="home-btn-cardBag1"v-show="!card_btn" />
						</div>
						<div class="home-btnGrounp-item" @touchstart="start(2)" @touchend="move(2)">
							<img src="../../../static/home/goWork1.png" class="home-btn-gowork" v-show="go_workBtn"/>
							<img src="../../../static/home/goWork2.png" style="height: 1.2rem;" class="home-btn-gowork" v-show="!go_workBtn"/>
						</div>
						<div class="home-btnGrounp-item" @touchstart="start(3)" @touchend="move(3)">
							<img src="../../../static/home/cash1.png" class="home-btn-cardBag1" v-show="cash_bnt"/>
							<img src="../../../static/home/cash2.png" class="home-btn-cardBag1" v-show="!cash_bnt"/>
						</div>
					</div>
				</div>

			</div>
			<!--钞票飞入房子动效-->
			<div class="home-money-flyInto">
				<img src="../../../static/home/pmoney.png" style="width:.5rem;height: .59rem;"/>
			</div>
			<div class="home-money-flyInto1">
				<img src="../../../static/home/pmoney.png" style="width:.5rem;height: .59rem;"/>
			</div>
			<div class="home-money-flyInto2">
				<img src="../../../static/home/pmoney.png" style="width:.5rem;height: .59rem;"/>
			</div>

		</div>
		<!--签到蒙版-->
		<div class="hbxq-home-signmb"  v-if="mbShow">
			<div class="hbxq-home-signmbClose" @click="mbShow=!mbShow;getInfo()"></div>
			<sign></sign>
		</div>
		<!--<sign></sign>-->
		<!--邀请蒙版-->
		<div class="hbxq-home-signmb"   v-if="yqShow">
			<div class="hbxq-home-signmbClose" @click="yqShow=!yqShow" style="top: 1.8rem;width: .9rem;height: .9rem;"></div>
			<invite></invite>
		</div>
		<!--背包蒙版-->
		<div class="hbxq-home-signmb" v-if="bbShow">
			<div class="hbxq-home-signmbClose" @click="bbShow=!bbShow" style="top: .4rem;width: .9rem;height: .9rem;"></div>
			<pack  @fkshow="hcfk($event)"></pack>
		</div>

		<div class="hbxq-home-signmb" v-show="eggMachineShow">
		  <img src="../../../static/invite/close.png" class="hbxq-eggMachine-closebtn" @click="eggMachineShow=false;getInfo()"/>
			<eggMachine :niudanNum="niudanNum"  @num="eggMachineupdate($event)"></eggMachine>
		</div>
    <div class="hbxq-home-signmb" v-show="lupshow==true">
    <img src="../../../static/home/lup.png" id="lup" class="home-lup"/>
    </div>
		<!--房子升级弹窗-->
		<van-popup v-model="level_tc" style="background: transparent;height: 100%;" :lazy-render="false">
			<div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
				<div class="hbxq-shengji-bg"></div>
				<div class="hbxq-shengji-redpacket1-box">
					<div class="hbxq-shengji-redpacket1-title">
						<div class="hbxq-shengji-redpacket1-text">再升<span style="color: #ffffff;font-size:.4rem;font-weight: bolder;">1</span>级可拆红包 </div>
					</div>
					<div class="hbxq-shengji-redpacket1"></div>
					<div class="hbxq-sign-lqBtn1"  @touchstart="start2()" @touchend="move2()">
						<img src="../../../static/home/zdl1.png" class="hbxq-sign-lqBtn1-img1" v-show="!lqBtn"/>
						<img src="../../../static/home/zdl2.png" class="hbxq-sign-lqBtn1-img2" v-show="lqBtn"/>
					</div>
				</div>
				<div class="hbxq-shengji-bg2"></div>
		    <img src="../../../static/home/cd.png" class="hbxq-shengji-cd-bg" />
			</div>
		</van-popup>

		<!--房子升级已达二级弹窗-->
		<van-popup v-model="redpackettc" style="background: transparent;height: 100%;" :lazy-render="false">
			<div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
				<div class="hbxq-shengji-bg"></div>
				<div class="hbxq-shengji-redpacket1-box">
					<div class="hbxq-shengji-redpacket1-title">
					</div>
					<!--@click="chbmove()"-->
          <div  v-if="openredpacket==false">
            <!---->
            <div class="hbxq-shengji-chaiBox" @touchstart="chbstart()" @touchend="chbmove()">
            	<img src="../../../static/home/chai2.png" class="hbxq-shengji-chai" v-show="chai"/>
            	<img src="../../../static/home/chai.png" class="hbxq-shengji-chai" v-show="!chai"/>
            </div>

            <div class="hbxq-redpacket-tc"></div>
          </div>
		      <div class="hbxq-redpacket-tc2" v-show="openredpacket">
		      	<img src="../../../static/home/logo.png" class="hbxq-redpacket-logo"/>
		      	<div class="hbxq-redpacket-logotext">已收到蜂巢玩发的红包</div>
		        <div class="hbxq-redpacket-tc2-val">
		          <span><span style="font-size: .6rem;">￥</span>{{respacketMoney/100}}</span>
		        </div>
		        <span class="hbxq-redpacket-ktx">可提现</span>
		        <div class="hbxq-redpacket-fcsj">发出时间： {{time}}</div>
		      </div>
					<!-- <div class="hbxq-sign-lqBtn1"  v-show="openredpacket==false">
						<img src="../../../static/home/chb1.png" class="hbxq-sign-lqBtn1-img1" v-show="!chbBtn"/>
						<img src="../../../static/home/chb2.png" class="hbxq-sign-lqBtn1-img2" v-show="chbBtn"/>
					</div> -->
		      <div class="hbxq-sign-lqBtn1"  v-show="openredpacket" @touchstart="ljlqstart()" @touchend="ljlqmove()">
		      	<img src="../../../static/home/zdl3.png" class="hbxq-sign-lqBtn1-img1" v-show="!ljlqBtn"/>
		      	<img src="../../../static/home/zdl4.png" class="hbxq-sign-lqBtn1-img2" v-show="ljlqBtn"/>
		      </div>
				</div>
				<div class="hbxq-shengji-bg2"></div>
		    <img src="../../../static/home/cd.png" class="hbxq-shengji-cd-bg" />
			</div>
		</van-popup>

		<!--财神转卡弹窗-->
		 <van-popup v-model="cscktcshow" style="background: transparent;height: 100%;" :lazy-render="false">
		 	<div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
		 		<div class="hbxq-shengji-bg"></div>
		    <img src="../../../static/invite/close.png" class="hbxq-cscktcshow-closebtn" @click="closecstc" v-show="cscktcclosebtnshow"/>
		 		<div class="hbxq-shengji-redpacket1-box">
		 			<div class="hbxq-cscktcshow-title">
		 			</div>
		 			<img src="../../../static/home/cs.png" class="hbxq-cscktcshow-cs"/>
		 		</div>
		    <div class="hbxq-cscktcshow-ck-bg-bg">
		      <div class="hbxq-cscktcshow-ck-bg" id="card1">
		        <img :src="csCardList[0].card" class="hbxq-cscktcshow-ck" @click="opencard(1)"/>
		        <img src="../../../static/home/cstc/gq.png" class="hbxq-cscktcshow-gq" v-show="csCardList[0].isopen"/>
		      </div>
		      <div class="hbxq-cscktcshow-ck-bg" id="card2">
		        <img :src="csCardList[1].card" class="hbxq-cscktcshow-ck" @click="opencard(2)"/>
		        <img src="../../../static/home/cstc/gq.png" class="hbxq-cscktcshow-gq" v-show="csCardList[1].isopen"/>
		      </div>
		      <div class="hbxq-cscktcshow-ck-bg" id="card3">
		        <img :src="csCardList[2].card" id="card3" class="hbxq-cscktcshow-ck" @click="opencard(3)"/>
		        <img src="../../../static/home/cstc/gq.png" class="hbxq-cscktcshow-gq" v-show="csCardList[2].isopen"/>
		      </div>
		    </div>
		 		<div class="hbxq-shengji-bg2"></div>
		     <img src="../../../static/home/cd.png" class="hbxq-shengji-cd-bg" />
		 	</div>
		 </van-popup>
     <!--财神转卡弹窗2-->
      <van-popup v-model="cscktcshow2" style="background: transparent;height: 100%;" :lazy-render="false">
      	<div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
      	 <div class="hbxq-shengji-bg"></div>
         <img src="../../../static/invite/close.png" class="hbxq-cscktcshow-closebtn" @click="closecstc2" v-show="cscktcclosebtnshow"/>
      		<div class="hbxq-shengji-redpacket1-box">
      			<div class="hbxq-cscktcshow-title">
      			</div>
      			<img src="../../../static/home/cs.png" class="hbxq-cscktcshow-cs"/>
      		</div>
         <div class="hbxq-cscktcshow-ck-bg-bg">
           <div class="hbxq-cscktcshow-ck-bg" id="card4">
             <img :src="csCardList[0].card" class="hbxq-cscktcshow-ck" @click="opencarded(1)"/>
             <img src="../../../static/home/cstc/gq.png" class="hbxq-cscktcshow-gq" v-show="csCardList[0].isopen"/>
           </div>
           <div class="hbxq-cscktcshow-ck-bg" id="card5">
             <img :src="csCardList[1].card" class="hbxq-cscktcshow-ck" @click="opencarded(2)"/>
             <img src="../../../static/home/cstc/gq.png" class="hbxq-cscktcshow-gq" v-show="csCardList[1].isopen"/>
           </div>
           <div class="hbxq-cscktcshow-ck-bg" id="card6">
             <img :src="csCardList[2].card" id="card3" class="hbxq-cscktcshow-ck" @click="opencarded(3)"/>
             <img src="../../../static/home/cstc/gq.png" class="hbxq-cscktcshow-gq" v-show="csCardList[2].isopen"/>
           </div>
         </div>
      		<div class="hbxq-shengji-bg2"></div>
          <img src="../../../static/home/cd.png" class="hbxq-shengji-cd-bg" />
      	</div>
      </van-popup>
      <van-popup v-model="zlcgtc" style="background: transparent;height: 100%;" :lazy-render="false">
        <div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
          <div class="hbxq-zlcg">
            <img src="../../../static/home/zlcgtitle.png" class="hbxq-zlcgtc-title" />
            <div class="hbxq-zlcg-val">
              <div class="hbxq-zlcg-val-img">
                <img :src="zltx" />
              </div>
              <div class="hbxq-zlcg-val-name">
                <span>{{zlname}}</span>
              </div>
            </div>
            <img src="../../../static/home/zlcg.png" class="hbxq-zlcgtc-zlcg" />
            <div class="hbxq-zlcg-zdlBtn"  @touchstart="zlstart()" @touchend="zlmove()">
            	<img src="../../../static/home/zl-zdl1.png" class="hbxq-zl-lqBtn1-img1" v-show="!zlBtn"/>
            	<img src="../../../static/home/zl-zdl2.png" class="hbxq-zl-lqBtn1-img2" v-show="zlBtn"/>
            </div>
          </div>
        </div>
      </van-popup>
      <van-popup v-model="yzltc" style="background: transparent;height: 100%;" :lazy-render="false">
        <div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
          <div class="hbxq-zlcg">
            <img src="../../../static/home/zlsbtitle.png" class="hbxq-zlcgtc-title" />
            <img src="../../../static/home/yzl.png" class="hbxq-zlcgtc-zlcg" />
            <div class="hbxq-zlcg-zdlBtn" style="margin-left: 26%;"  @touchstart="yzlstart()" @touchend="yzlmove()">
            	<img src="../../../static/home/mtzlbtn1.png" class="hbxq-zl-lqBtn1-img1" v-show="!yzlBtn"/>
            	<img src="../../../static/home/mtzlbtn2.png" class="hbxq-zl-lqBtn1-img2" v-show="yzlBtn"/>
            </div>
          </div>
        </div>
      </van-popup>
      <van-popup v-model="zlymtc" style="background: transparent;height: 100%;" :lazy-render="false">
        <div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
          <div class="hbxq-zlcg">
            <img src="../../../static/home/zlsbtitle.png" class="hbxq-zlcgtc-title" />
            <img src="../../../static/home/zlym.png" class="hbxq-zlymtc-zlcg" />
            <div class="hbxq-zlym-zdlBtn"  @touchstart="zlymstart()" @touchend="zlymmove()">
            	<img src="../../../static/home/wdzlbtn1.png" class="hbxq-zl-lqBtn1-img1" v-show="!zlymBtn"/>
            	<img src="../../../static/home/wdzlbtn2.png" class="hbxq-zl-lqBtn1-img2" v-show="zlymBtn"/>
            </div>
          </div>
        </div>
      </van-popup>
      <!--封禁弹窗-->
      <van-popup v-model="ftShow" style="background: transparent;height: 100%;width: 100%;">
          <div style="position: relative;width: 100%;height: 100%;overflow-x: hidden;">
            <img src="../../../static/home/fT.png" style="width: 100%;height:auto;" />
            <img src="../../../static/home/fhsy.png" style="width:3.5rem;height:1.1rem;position: absolute;bottom: 1.7rem;left:50%;transform: translateX(-50%);" @click="returnFcw()"/>
          </div>
      </van-popup>
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
          <div style="position: relative;width: 96%;height: 100%;margin: 0 auto;">     
          		<div v-if="step==1">
          			<div class="hbxq-step1-img1"></div>
	          		<div class="hbxq-step1-img2"></div>
	          		<div class="hbxq-step1-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
	          		<!--<div class="hbxq-step1-btnBox" @click="steps()">-->
	          			<img src="../../../static/ydstep/1/3.png" class="hbxq-step1-btn" v-show="stepBtn"/>
	          			<img src="../../../static/ydstep/1/4.png" class="hbxq-step1-btn" v-show="!stepBtn" style="height: 1.19rem;"/>
	          		</div>
          		</div>	
          		<div v-if="step==2">
          			<div class="hbxq-step2-img1"></div>
          			<div class="hbxq-step2-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
          				<img src="../../../static/ydstep/2/3.png" class="hbxq-step2-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/2/2.png" class="hbxq-step2-btn" v-show="!stepBtn"/>
          			</div>	
	          		<!--<div class="hbxq-step2-img2" @click=""></div>-->
          		</div>	
          		<!--步骤3在打工页面-->
          		<div v-if="step==4">
          			<div class="hbxq-step4-img1"></div>
	          		<div class="hbxq-step4-img2" ></div>
	          		<div class="hbxq-step4-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
          				<img src="../../../static/ydstep/4/next1.png" class="hbxq-step4-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/4/next2.png" class="hbxq-step4-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
          			</div>	
          		</div>
          		<div v-if="step==5">
          			<div class="hbxq-step5-img1"></div>
	          		<div class="hbxq-step5-img2" ></div>
	          		<div class="hbxq-step5-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
          				<img src="../../../static/ydstep/4/next1.png" class="hbxq-step5-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/4/next2.png" class="hbxq-step5-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
          			</div>	
          		</div>
          		<div v-if="step==6">
          			<div class="hbxq-step6-img1"></div>
	          		<div class="hbxq-step6-img2" ></div>
	          		<div class="hbxq-step6-img3"></div>
	          		<div class="hbxq-step6-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
          				<img src="../../../static/ydstep/4/next1.png" class="hbxq-step5-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/4/next2.png" class="hbxq-step5-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
          			</div>	
          		</div>
          		<div v-if="step==7">
          			<div class="hbxq-step7-img3" ></div>
			        <div class="hbxq-step7-img1"></div>
			        <div class="hbxq-step7-img2"></div>
			        <img src="../../../static/ydstep/7/3.png" class="hbxq-cscktcshow-cs" style="top:1.1rem;left:1rem;width: 5rem;height: 5rem;z-index: 5;"/>
			         
			        <!--<div style="position:absolute;background-color: rgba(0,0,0,.7);z-index:10;left: 0;right: 0;bottom: 0;top: 0;"></div>  -->
	          		<div class="hbxq-step7-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
          				<img src="../../../static/ydstep/4/next1.png" class="hbxq-step5-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/4/next2.png" class="hbxq-step5-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
          			</div>	
          		</div>
          		<div v-if="step==8">
			        <div class="hbxq-step8-img1"></div>
			        <div class="hbxq-step8-img2"></div>
	          		<div class="hbxq-step8-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
          				<img src="../../../static/ydstep/4/next1.png" class="hbxq-step5-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/4/next2.png" class="hbxq-step5-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
          			</div>	
          		</div>
          		<div v-if="step==9">
			        <div class="hbxq-step9-img1"></div>
			        <div class="hbxq-step9-img2"></div>
	          		<div class="hbxq-step9-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd();">
          				<img src="../../../static/ydstep/4/next1.png" class="hbxq-step5-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/4/next2.png" class="hbxq-step5-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
          			</div>	
          		</div>
          		<div v-if="step==10">
			        <div class="hbxq-step10-img1"></div>
			        <div class="hbxq-step10-img2"></div>
	          		<div class="hbxq-step10-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;stepAdd()">
          				<img src="../../../static/ydstep/4/next1.png" class="hbxq-step5-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/4/next2.png" class="hbxq-step5-btn" v-show="!stepBtn" style="height: 1.101rem;"/>
          			</div>	
          		</div>
          		<div v-if="step==11" >
			        <div class="hbxq-step11-img1"></div>
			        <div class="hbxq-step11-img2"></div>
			        <div class="hbxq-step11-img3"></div>
			        <div class="hbxq-step11-img4"></div>
			        <div class="hbxq-step11-img5"></div>
			        <div class="hbxq-step11-img6"></div>
			        <div class="hbxq-step11-img7"></div>
			        <div class="hbxq-step11-img8"></div>
			        <div class="hbxq-step11-img9"></div>
			        <div class="hbxq-step11-img10"></div>
			        <div class="hbxq-step11-img11"></div>
			        <div class="hbxq-step11-img12"></div>
	          		<div class="hbxq-step11-btnBox" @touchstart="stepBtn=!stepBtn" @touchend="stepBtn=!stepBtn;isNewUser=false;toGuideFinish()">
          				<img src="../../../static/ydstep/11/13.png" class="hbxq-step11-btn"  v-show="stepBtn"/>
          				<img src="../../../static/ydstep/11/14.png" class="hbxq-step11-btn" v-show="!stepBtn" style="height: 1.196rem;"/>
          			</div>	
          		</div>
          </div>
      </van-popup>
   			<div v-if="step==7" style="position: relative;width: 100%;height: 100%;margin: 0 auto;overflow-x: hidden;">
   				<div class="hbxq-shengji-bg" style="width: 8rem;height: 8rem;margin-right: 1rem;position: relative;right: .25rem;z-index: 4;"></div>
		         <img src="../../../static/invite/close.png" class="hbxq-cscktcshow-closebtn" @click="closecstc2" v-show="cscktcclosebtnshow"/>
		      		<div class="hbxq-shengji-redpacket1-box">		
		      		</div>
		         
		      	 <div class="hbxq-shengji-bg2" style="left: 3.5%;"></div>
		          <img src="../../../static/home/cd.png" class="hbxq-shengji-cd-bg" style="left: 6%;"/>
   			</div>
   			<div v-if="step==10" style="position:relative;z-index: 10;width: 96%;margin: 0 auto;top:1.2rem;position: relative;right: .18rem;">
   				<img src="../../../static/ydstep/10/3.png" style="width: 7.5rem;height:9.6175rem;"/>
   			</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import {getHomeInfo,upgradeHouse,receivePower,upgradeRound,assist,guideFinish} from '../../api/hbxq.js';
	import headNav from '@/pages/home/headNav';
	import sign from '@/pages/home/sign';
	import invite from '@/pages/home/invite';
	import eggMachine from '@/pages/eggMachine/eggMachine';
  import pack from '@/pages/package/package';
  import { Toast } from 'vant';
  import xt from '../home/xt.vue'

	export default {
		data() {
	        return {
	        stepBtn:true,
	        isNewUser:false,
	        step:1,
            noonIsDraw:'',
            nightIsDraw:'',
            zlymBtn:false,
            zlymtc:false,
            yzlBtn:false,
            yzltc:false,
            wfzltc:false,
            zlname:'',
            zltx:'http://img.fengchaowan.com/uploads/20190803/kii58469iz5031t2c8917lxefudv473o',
            zlBtn:false,
            zlcgtc:false,
            refereeId:'',
            cscktcshow2:false,
          hcfkjl:'',
        lupshow:false,
        cscktcclosebtnshow:false,
        respacketMoney:0,
				chbBtn:false,
				ljlqBtn:false,
				openredpacket:false,
				redpackettc:false,
				eggMachineShow:false,
				canopen:true,
				cardList:[{img:'../../../static/home/cstc/fhk.png'},{img:'../../../static/home/cstc/fss.png'},{img:'../../../static/home/cstc/fmeng.png'},{img:'../../../static/home/cstc/fgg.png'},{img:'../../../static/home/cstc/fmm.png'},{img:'../../../static/home/cstc/fcc.png'}
                ,{img:'../../../static/home/cstc/fsk.png'},{img:'../../../static/home/cstc/flk.png'},{img:'../../../static/home/cstc/jbk.png'},{img:'../../../static/home/cstc/jyb.png'}],
				csCardList:[{card:'../../../static/home/kbm.png',isopen:false},{card:'../../../static/home/kbm.png',isopen:false},{card:'../../../static/home/kbm.png',isopen:false}],
				cscktcshow:false,
	        	data:{},
            moneydata:{money:'',power:''},
	        	isShengJi:true,//是否可以升级
	        	lqBtn:false,
	        	level_tc:false,
	        	mbShow:false,
	        	yqShow:false,
            bbShow:false,
	        	card_btn:true,
	        	go_workBtn:true,
	        	cash_bnt:true,
	        	Djdh:false,  //点击弹出动画
	        	Djdh1:true,  //点击弹出动画
	        	tc_btn:true,
	        	flyInto:true,
	        	house_animation:true,
	        	left_lq_dh:false,
	        	changeAmount:123,//升级后的账户余额
	        	houseImg:'',//房子图片路径
            jblcount:0,//聚宝力图标点击次数，大于0时候才进入

            niudanNum:'',//扭蛋卷数量
	        	jbl:'',//聚宝力
	        	lastProfit:'',//昨日收益
	        	averageProfit:'',//平均分红
	        	lastlevel:21,//下一等级
	        	level:'',//当前等级
	        	lastIsAward:true,//下一等级是否有红包
	        	alreadyCost:'',//已投资
	        	progress:'20', //当前进度
	        	receiveTime:'12', //当前可以领取或下次领取能量的时间
	        	isReceive:'', //当前是否可以领取能量
	        	chai:false,//拆红包按键切换
            time:'',
            ftShow:false,
            powerTcShow:false,
            qwrwBtn1:false,
            qwrwBtn2:false,
            click_count:0

	        }
        },
        watch:{
        	level(val,oldVal){

        	},
          openredpacket(val,oldVal){
              console.log(val)
        	},
        },
        components:{
		    'headNav':headNav,
		    'sign':sign,
		    'invite':invite,
			'eggMachine':eggMachine,
      		'pack':pack
		},
        mounted: function(){
          var rId = this.$route.query.refereeId;
          if(rId){
          	this.refereeId = rId;
            assist(this.refereeId).then((response)=>{//获取首页顶部钞票能量信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		if(code=='0'){
		      			this.zlcgtc = true;
                this.zlname = res.nickname;
		      		}else if(code==20005||code==20007){
                this.zlymtc = true;
              }else if(code==20003){
                this.yzltc = true;
              }
		      	}).catch((response)=>{

            });
          }
          if(this.$route.query.step){
	        this.step = this.$route.query.step;
	        
	      }
          this.getInfo()     
        },
        methods:{
			eggMachineupdate: function (data) {
			        // childValue就是子组件传过来的值
			   this.getInfo()
			 },
       hcfk: function (data) {
               // childValue就是子组件传过来的值
          this.cscktcshow2 = true;
          console.log(data)
          this.hcfkjl = data;
        },
        	start(index){
        		console.log(this.tc_btn)
        		if(index=='1'){
        			this.card_btn = !this.card_btn
        		}else if(index=='2'){
        			this.go_workBtn = !this.go_workBtn;

        		}else if(index=='3'){
        			this.cash_bnt = !this.cash_bnt;
        		}
        	},
        	move(index){
        		if(index=='1'){
        			this.card_btn = !this.card_btn
              this.bbShow = true;

        		}else if(index=='2'){
        			this.go_workBtn = !this.go_workBtn;
        			this.$router.push('/work')
        		}else if(index=='3'){
        			this.cash_bnt = !this.cash_bnt;
        			this.$router.push('/cash')
        		}
        	},
        	tcdh(){//领取能量按钮弹出动画
        		this.Djdh1 = false
        		this.tc_btn = false;
				this.Djdh = !this.Djdh;
        		setTimeout(()=>{
	      			this.tc_btn = true;
	      			this.Djdh = false;
	      		},4000)
        	},
        	addAnimation(e){//点击房子升级动画
            this.house_animation = false;
    		setTimeout(()=>{
    			this.house_animation = true;
    		},300)
            var orderHight = document.body.clientHeight;
            var orderWidth = document.body.clientWidth;
            var bottom = orderHight-e.y;
            var left = e.x;
            var right = orderWidth - left;
            
            this.click_count++;
        	if(this.click_count > 5){
        		this.isShengJi = true
        	}
        	
            
            //取随机数播放钞票飞入房子动画
            var random_num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            if(random_num=='1'){
            	var clone = $(".home-money-flyInto").eq(0).clone().appendTo($('body')).animate({
            		'bottom':bottom,'left':left},600
            	);
            	clone.animate({'opacity': 0,'width':0,'height':0}, function() {$(this).detach()});

            }else if(random_num=='2'){
            	var clone = $(".home-money-flyInto1").eq(0).clone().appendTo($('body')).animate({
            		'bottom':bottom,'right':right},500
            	);
            	clone.animate({'opacity':0,'width':0,'height':0}, function() {$(this).detach()});
            } else if(random_num =='3'){
            	var clone = $(".home-money-flyInto2").eq(0).clone().appendTo($('body')).animate({
            		'bottom':bottom,'right':right},500
            	);
            	clone.animate({'opacity':0,'width':0,'height':0}, function() {$(this).detach()});
            }
            
        		if(this.isShengJi==true){
        			this.isShengJi = false;
        			upgradeHouse().then((response)=>{
			      		var res = response.data.data;
			      		var code = response.data.code;
			      		if(code=='0'){
                  this.moneydata = res;
                  this.progress = res.build.upgradePercent;
                  this.alreadyCost = res.build.investMoney;
				  this.click_count = 0

                if(res.build.level > this.level){
                console.log(this.level)
                  this.lupshow = true;
                  var obj = document.getElementById("lup");
                  obj.style.animation= "lup 1.5s 0s forwards linear";
                  this.level = res.build.level;
                  this.countlastIsAward();

                  // Toast.loading({
                  //   mask: true,
                  //   message: '房子升级中'
                  // });
                  var that = this;
                  setTimeout(function(){
                    that.lupshow = false;
                    // Toast.clear();
                    if(res.midas==false){
                      if(res.reward.length==0){
                        that.level_tc = true;
                      }else{
                        that.redpackettc = true;
                        that.respacketMoney = res.reward[0].value;
                      }
                    }else{
                      that.cscktcshow = true;
                    }
                    obj.style.animation= "";
                  },1500);
                }else{
                  this.isShengJi=true
                }


                // this.data.bonus = res.bonus;
                this.level = res.build.level;
                this.alreadyCostChange();
                }else{
                  this.isShengJi=true
                }
			      	}).catch((response)=>{

				    });
        		}
        	},
        	returnFcw(){//返回蜂巢玩首页
        		
	            if(xt.newldurl=='m2.fengchaowan.com'){
	              top.location.href = 'https://w.url.cn/s/AiBtp6x';
	            }else{
	              top.location.href = 'https://w.url.cn/s/AAYIw0P';
	            }
        	},
        	open_niudan(){//打开扭蛋页面
            this.eggMachineShow = true;
        	},
        	open_qiandao(){//打开签到页面
        		this.mbShow = true;
        	},
        	open_rule(){//打开规则页面
        		this.$router.push('/hbxqRule')
        	},
        	open_invite(){//打开邀请页面
        		this.yqShow = true;
        	},
        	jbl_dh(){

            if(this.jblcount == 0){
              this.jblcount = 1
              this.left_lq_dh = true;
              setTimeout(()=>{
                    this.left_lq_dh = false;
                  },4000)
            }else if(this.jblcount == 1){
              this.jump_jbl()
            }

        	},
        	jump_jbl(){
        		this.$router.push('/jbl')
        	},
        	jump_fh(){
        		this.$router.push('/fh')
        	},
        	start2(){
            console.log(123)
        		this.lqBtn = !this.lqBtn
        	},
        	move2(){
        		this.lqBtn = !this.lqBtn
        		this.level_tc = false
            this.isShengJi = true;
        	},
          zlstart(){
          	this.zlBtn = !this.zlBtn
          },
          zlmove(){
          	this.zlBtn = !this.zlBtn
          	this.zlcgtc = false
          },
          yzlstart(){
          	this.yzlBtn = !this.yzlBtn
          },
          yzlmove(){
          	this.yzlBtn = !this.yzlBtn
          	this.yzltc = false
          },
          zlymstart(){
          	this.zlymBtn = !this.zlymBtn
          },
          zlymmove(){
          	this.zlymBtn = !this.zlymBtn
          	this.zlymtc = false
          },
			chbstart(){
        this.getTime()
				this.chai = !this.chai
			},
			chbmove(){
        		this.chai = !this.chai
        		setTimeout(()=>{
        			this.openredpacket = true;
        		},300)
        		this.chbBtn = !this.chbBtn
        		this.isShengJi = true;
			},
			ljlqstart(){
				this.ljlqBtn = !this.ljlqBtn
			},
			ljlqmove(){
				this.ljlqBtn = !this.ljlqBtn
			  this.redpackettc = false;
        var that =this;
        setTimeout(function(){
          that.openredpacket = false;
        },500);
        this.isShengJi = true;
			},
        	alreadyCostChange(){//已投金额转换
        		this.alreadyCost = parseInt(this.alreadyCost)
	      		if(this.alreadyCost > '999' && this.alreadyCost < '1000000'){
	      			this.alreadyCost = this.alreadyCost/1000;
	      			this.alreadyCost = Number(this.alreadyCost.toFixed(1)) + 'K';
	      		}else if(this.alreadyCost > '999999' && this.alreadyCost < '1000000000'){
	      			this.alreadyCost = this.alreadyCost/1000000;
	      			this.alreadyCost = Number(this.alreadyCost.toFixed(1)) + 'M'
	      		}else if(this.alreadyCost > '999999999'  && this.alreadyCost < '1000000000000'){
	      			this.alreadyCost = this.alreadyCost/1000000000;
	      			this.alreadyCost = Number(this.alreadyCost.toFixed(1)) + 'B';
	      		}else if(this.alreadyCost > '999999999999'   && this.alreadyCost < '1000000000000000'){
	      			this.alreadyCost = this.alreadyCost/1000000000000;
	      			this.alreadyCost = Number(this.alreadyCost.toFixed(1)) + 'T';
	      		}

        	},
        	getHouseImg(){
        		this.houseImg = '../../../static/home/house/'+this.level+'.png'
        	},
        	lqPower(){
        		receivePower().then((response)=>{//获取首页顶部钞票能量信息
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		if(code=='0'){
		      			this.$toast('领取成功')
		      			this.getInfo()
		      		}
		      	}).catch((response)=>{

			    });

        	},
        	getInfo(){
        		getHomeInfo().then((response)=>{//获取首页顶部钞票能量信息
        	  		var res = response.data.data;
        	  		var code = response.data.code;  		
        	  		if(code=='0'){
        	  			this.data = res;
		                this.moneydata.money = res.money;
		                this.moneydata.power = res.power;
						console.log(this.data)
//						this.isNewUser = !res.guide;
						this.isNewUser = true;
        	  			this.lastProfit = res.dividend.yesterday;
        	  			this.averageProfit = res.dividend.avgEarn;
        	  			this.progress = res.build.upgradePercent;
        	  			this.alreadyCost = res.build.investMoney;
        	  			this.isReceive = res.supply.canDraw;
        	  			this.jbl = res.bonus;
        	  			this.niudanNum = res.package.ticket_egg;
        	  			this.level = res.build.level;
						this.noonIsDraw =  res.supply.noonIsDraw;
						this.nightIsDraw =  res.supply.nightIsDraw;
        	  			this.alreadyCostChange()//处理已投资的数据
        	  			this.getHouseImg()
        	  			this.countlastIsAward()
                  		this.getReceiveTime();
	                    if(res.midas==true){
	                      this.cscktcshow = true;
	                    }
        	  		}else if(code=='-2'){
        	  			this.ftShow = true;
        	  		}
        	  	}).catch((response)=>{

        	    });
        	},
        	shenJiDongHua(){

        	},
          countlastIsAward(){//计算下一等级是否有红包
            if(this.level<30){
              this.lastlevel = this.level + 1;
              console.log(this.lastlevel)
              if( this.lastlevel%2 == 0 ){
                this.lastIsAward = true
              }else{
                this.lastIsAward = false
              }
            }
          },
			opencard(index){
			  if(this.canopen==true){
          // this.zhuancard(index,1)
			    upgradeRound().then((response)=>{//获取首页信息
			    		var data = response.data.data;
			    		var code = response.data.code;
			        var num = 1;
			    		if(code==0){
			          var unit = data.reward[0].unit;
			          if(unit=='card_ff_1'){
			            num=1
			          }else if(unit=='card_ff_2'){
			            num=2
			          }else if(unit=='card_ff_3'){
			            num=3
			          }else if(unit=='card_ff_4'){
			            num=4
			          }else if(unit=='card_ff_5'){
			            num=5
			          }else if(unit=='card_fs_1'){
			            num=6
			          }else if(unit=='card_fs_2'){
			            num=7
			          }else if(unit=='card_bouns_card'){
			            num=8
			          }
			    			this.zhuancard(index,num)
			    		}
			    	}).catch((response)=>{

			    });
			  }else{

			  }
			},
      opencarded(index){
        if(this.canopen==true){
                var num = 1;
                var unit = this.hcfkjl;
                console.log(unit)
                if(unit=='card_ff_1'){
                  num=1
                }else if(unit=='card_ff_2'){
                  num=2
                }else if(unit=='card_ff_3'){
                  num=3
                }else if(unit=='card_ff_4'){
                  num=4
                }else if(unit=='card_ff_5'){
                  num=5
                }else if(unit=='card_fs_1'){
			            num=6
			          }else if(unit=='card_fs_2'){
			            num=7
			          }else if(unit=='card_bouns_card'){
			            num=8
			          }else if(unit=='card_bouns_pen'){
			            num=9
			          }
          			this.zhuancard2(index,num)
        }else{

        }
      },
			zhuancard:function(index,number){
			  this.canopen=false
			  var obj = document.getElementById("card1");
			  var obj2 = document.getElementById("card2");
			  var obj3 = document.getElementById("card3");
			  var num = this.GetRandomNum(2,3);
			  var num2 = this.GetRandomNum(1,5);
        var number = number;
			  if(index==1){
			    obj.style.animation= "cardzhuan 3s ease";
			    var that = this;
			    setTimeout(function(){　　
			    	that.csCardList[0].card = that.cardList[number].img;
			      that.csCardList[0].isopen = true;
			    },1500);
			    if(num==2){
			      setTimeout(function(){
			        obj2.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[1].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[2].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }else{
			      setTimeout(function(){
			        obj2.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[2].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[1].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }
			  }else if(index==2){
			    obj2.style.animation= "cardzhuan 3s ease";
			    var that = this;
			    setTimeout(function(){　　
			    	that.csCardList[1].card = that.cardList[number].img;
			      that.csCardList[1].isopen = true;
			    },1500);
			    if(num==2){
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[0].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[2].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }else{
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[2].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[0].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }
			  }else if(index==3){
			    obj3.style.animation= "cardzhuan 3s ease";
			    var that = this;
			    setTimeout(function(){　　
			    	that.csCardList[2].card = that.cardList[number].img;
			      that.csCardList[2].isopen = true;
			    },1500);
			    if(num==2){
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj2.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[0].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[1].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }else{
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj2.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[1].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[0].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }
			}
			},
			zhuancard2:function(index,number){
        console.log(number)
			  this.canopen=false
			  var obj = document.getElementById("card4");
			  var obj2 = document.getElementById("card5");
			  var obj3 = document.getElementById("card6");
			  var num = this.GetRandomNum(2,3);
			  var num2 = this.GetRandomNum(1,5);
        var number = number;
			  if(index==1){
			    obj.style.animation= "cardzhuan 3s ease";
			    var that = this;
			    setTimeout(function(){　　
			    	that.csCardList[0].card = that.cardList[number].img;
			      that.csCardList[0].isopen = true;
			    },1500);
			    if(num==2){
			      setTimeout(function(){
			        obj2.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[1].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[2].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }else{
			      setTimeout(function(){
			        obj2.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[2].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[1].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }
			  }else if(index==2){
			    obj2.style.animation= "cardzhuan 3s ease";
			    var that = this;
			    setTimeout(function(){　　
			    	that.csCardList[1].card = that.cardList[number].img;
			      that.csCardList[1].isopen = true;
			    },1500);
			    if(num==2){
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[0].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[2].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }else{
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj3.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[2].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[0].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }
			  }else if(index==3){
			    obj3.style.animation= "cardzhuan 3s ease";
			    var that = this;
			    setTimeout(function(){　　
			    	that.csCardList[2].card = that.cardList[number].img;
			      that.csCardList[2].isopen = true;
			    },1500);
			    if(num==2){
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj2.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[0].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[1].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }else{
			      setTimeout(function(){
			        obj.style.animation= "cardzhuan 3s ease";
			        obj2.style.animation= "cardzhuan 3s ease";
			        setTimeout(function(){
			          that.csCardList[1].card = "../../../static/home/cstc/fhk.png";
			          that.csCardList[0].card = that.cardList[num2].img;
                that.cscktcclosebtnshow = true;
			        },1500);
			      },2500);
			    }
			}
			},
			//随机数
			GetRandomNum:function(Min, Max) {
			  var Range = Max - Min;
			  var Rand = Math.random();
			  return(Min + Math.round(Rand * Range));
			},
			closecstc:function(){
			  this.cscktcshow =false;
        this.cscktcshow2 =false;
        this.cscktcclosebtnshow = false;
        this.canopen=true;
        this.isShengJi = true;
        this.getInfo()
			  var obj = document.getElementById("card1");
			  var obj2 = document.getElementById("card2");
			  var obj3 = document.getElementById("card3");
			  obj.style.animation= "";
			  obj2.style.animation= "";
			  obj3.style.animation= "";
			  for(var i=0;i<this.csCardList.length;i++){
			    this.csCardList[i].card='../../../static/home/kbm.png';
			    this.csCardList[i].isopen = false;
			  }
        },
			closecstc2:function(){
        this.cscktcshow2 =false;
        this.cscktcclosebtnshow = false;
        this.canopen=true;
        this.isShengJi = true;
        this.getInfo()
			  var obj = document.getElementById("card4");
			  var obj2 = document.getElementById("card5");
			  var obj3 = document.getElementById("card6");
			  obj.style.animation= "";
			  obj2.style.animation= "";
			  obj3.style.animation= "";
			  for(var i=0;i<this.csCardList.length;i++){
			    this.csCardList[i].card='../../../static/home/kbm.png';
			    this.csCardList[i].isopen = false;
			  }
			},
      jptaskHall:function(){
        if(xt.newldurl=='m2.fengchaowan.com'){
          top.location.href = 'https://w.url.cn/s/A2mnl0o';
        }else{
          top.location.href = 'https://w.url.cn/s/AjbSPwy';
        }
      },
      jpbargainingZone:function(){
        if(xt.newldurl=='m2.fengchaowan.com'){
          top.location.href = 'https://w.url.cn/s/AMrTSO4';
        }else{
          top.location.href = 'https://w.url.cn/s/AypL45q';
        }
      },
      getReceiveTime(){//12.11
        	var now = new Date();
        	var hour = now.getHours();
        	var noonHour = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,22,23,24]
        	var nightHour = [16,17,18,19,20,21]

        	if(noonHour.indexOf(hour)>-1){
        		this.receiveTime = 12;

        	}else if(nightHour.indexOf(hour)>-1){
        		this.receiveTime = 18;

        	}
      			console.log(this.noonIsDraw)
        	if(this.noonIsDraw == true && this.receiveTime==12){
        		this.isReceive = false
        		this.receiveTime = 18;
        		console.log('3')
        	}

        	if(this.nightIsDraw == true && this.receiveTime==18){
        		this.isReceive = false
        		this.receiveTime = 12;
        		console.log('4')
        	}
       },
       getTime(){//获取当前时间
       	var now = new Date();
       	var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var strDate = now.getDate();
        var hh = now.getHours();
        var mm = now.getMinutes();
        var ss = now.getSeconds();
        this.time = year + '-' + month +'-' +strDate +' ' +hh +':'+mm+':'+ss
        console.log(this.time)
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
	       		console.log(this.step)
	       		if(this.step == 3){
	       			this.step_jump_work()
	       		}
	       	},200)
       },
       step_jump_work(){
	       	this.$router.push({
	          path: '/work',
	          query: {
	            step: this.step,
	          }
	        })
       },
       toGuideFinish(){
//	       	guideFinish().then((response)=>{//完成新手引导
//		  		
//		  	}).catch((response)=>{
//	
//		    });
       }
		

        }
	}
</script>

<style>
  .hbxq-zlym-zdlBtn{
          position: relative;
          width: 5rem;
          z-index: 99;
          padding-right: .8rem;
          margin-top: .5rem;
          height: 1.327rem;
          margin-left: 19%;
          cursor: pointer;
  }
  .hbxq-zlymtc-zlcg{
    width: 6.5rem;
    margin-left: .25rem;
    margin-top: .5rem;
  }
.hbxq-shengji-chai{
    width: 1.5rem;
	pointer-events: none;
    /*top: 3.6rem;
    left: 36%;*/
    /*animation: chaibtu 1s infinite;*/
  }
  .hbxq-shengji-chaiBox{
  	cursor: pointer;
  	z-index: 3;
    width: 1.5rem;
    position: absolute;
    top: 3.6rem;
    left: 36%;
    animation: chaibtu 1s infinite;
  }
  @keyframes chaibtu{
    	0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
  .hbxq-zlcg-val{
    text-align: center;
    color: #ffefc9;
    width: 100%;
    font-size: .35rem;
    display: inline-flex;
    padding-left: 36%;
  }
  .hbxq-zlcg-val-name{
    margin-top: .2rem;
    margin-left: .1rem;
  }
  .hbxq-zlcg-val-img img{
    width: .8rem;
    border-radius: 50px;
  }
  .hbxq-zlcg-val-img{

  }
  .hbxq-zl-lqBtn1-img1{
    pointer-events: none;
  	width: 3.8rem;
  	height: 1.327rem;
  	bottom: 0;
  }
  .hbxq-zl-lqBtn1-img2{
    pointer-events: none;
  	width: 3.8rem;
  	height: 1.236rem;
  	bottom: 0;
  }
  .hbxq-zlcg-zdlBtn{
  	position: relative;
  	    width: 3.8rem;
  	    z-index: 99;
  	    height: 1.327rem;
  	    margin-top: -1.2rem;
  	    margin-left: 24%;
  	    cursor: pointer;
  }
  .hbxq-zlcgtc-title{
    width: 5rem;
    height:1.3rem;
    margin-top: .2rem;
  }
  .hbxq-zlcgtc-zlcg{
  	width: 7.5rem;
    margin-left: .15rem;
    margin-top: -1rem;
  }
  .hbxq-zlcg{
  	position: relative;
  	top: 5%;
    z-index: 3;
  	width: 100%;
  	text-align: center;
  }
  .home-lup{
    width: 3rem;
    position: absolute;
    top: 50%;
    left: 33%;
    z-index: 9;
    /* animation: lup 0.8s 0s forwards linear; */
  }
  @keyframes lup{
  		0%{
  			top: 50%;
  		}
  		100%{
  			top: 30%;
        opacity: 0;
  		}
  	}
.hbxq-eggMachine-closebtn{
        width: 1rem;
        position: absolute;
        z-index: 9;
        right: 5%;
        top: 2%;
  }
  .hbxq-redpacket-tc2-val{
    color: #FEE3AB;
    font-size: 1rem;
    position: absolute;
    font-weight: bolder;
    top: 2.95rem;
    width: 100%;
    text-align: center;
  }
  .hbxq-redpacket-tc{
    background: url(../../../static/home/hb.png) no-repeat;
    background-size: 100% 100%;
    width: 4.3rem;
    height: 5.72rem;
    margin: 0 auto;
    margin-top: .5rem;
  }
  .hbxq-redpacket-tc2{
    background: url(../../../static/home/openhb.png) no-repeat;
    background-size: 100% 100%;
    width: 4.5rem;
    height: 6.421rem;
    position: relative;
    margin: 0 auto;
    margin-top: .5rem;
  }
  .hbxq-redpacket-logo{
  	width: 1.2rem;
    height: 1.314rem;
    position: absolute;
    left: 1.65rem;
    top: .5rem;
  }
  .hbxq-redpacket-logotext{
  	position: absolute;
    width: 100%;
    text-align: center;
    top: 2rem;
    color: #FEE3AB;
    font-size: .25rem;
  }
  .hbxq-redpacket-ktx{
  	padding: .05rem .12rem;
    color: #FEE3AB;
    top: 4.2rem;
    border: 1px solid #FEE3AB;
    position: absolute;
    left: 1.8rem;
    font-weight: bolder;
    font-size: .25rem;
  }
  .hbxq-redpacket-fcsj{
  	position: absolute;
    width: 100%;
    text-align: center;
    bottom: .4rem;
    color: #FEE3AB;
  }
  .hbxq-cscktcshow-closebtn{
    width: 1rem;
    position: absolute;
    z-index: 9;
    right: 11%;
    top: 2%;
  }
  .hbxq-cscktcshow-gq{
    position: absolute;
    width: 2.35rem;
    top: -.2rem;
    left: -0.5%;
    opacity: 0.8;
  }
  @keyframes cardzhuan{
  		0%{
  			transform: rotateY(0deg);
  		}
  		100%{
  			transform: rotateY(360deg);
  		}
  	}
  .hbxq-cscktcshow-ck{
    width: 2.3rem
  }
  .hbxq-cscktcshow-ck-bg{
    width: 33.3%;
    position: relative;
    text-align: center;
  }
  .hbxq-cscktcshow-ck-bg-bg{
    display: inline-flex;
    padding-right: 12%;
    padding-left: 12%;
    position: relative;
    margin-top: -12%;
    z-index: 9;
        width: 100%;
  }
  .hbxq-cscktcshow-cs{
    width: 6.5rem;
    height: 6.558rem;
    position: absolute;
    left: -16%;
    top: 66%;
  }
.hbxq-cscktcshow-title{
  background: url(../../../static/home/cstitle.png) no-repeat;
  background-size: 100% 100%;
  width: 5rem;
  height:1.3rem;
  margin-top: .2rem;
}
.hbxq-home-bg{
	position: absolute;
	width:7.5rem;
	/*width: 100%;*/
	height: 100%;
	background: url(../../../static/home/home-bg1.png) no-repeat;
	background-size: 100% 100%;
	overflow-x: hidden;
}
.hbxq-top-nav{
	padding: .2rem;
}
.hbxq-top-nav div{
	display: inline-block;
}
.hbxq-return-btn1{
	background: url(../../../static/home/go-fcw.png) no-repeat;
	background-size: 100% 100%;
	width: 1.5rem;
	height:0.58rem;
	margin-top: .2rem;
	margin-left: .2rem;
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
    line-height: .5rem;
    top: .61rem;
    text-align: center;
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
.hbxq-jbl-bg{
	margin-top: .3rem;
	margin-left: .2rem;
	background: url(../../../static/home/jbl.png) no-repeat;
	background-size: 100% 100%;
	width: 2rem;
	height: 1.2rem;
	color: #7c501f;
	position: relative;
}
.hbxq-jbl-bg-num{
	position:relative;
	font-weight: bolder;
	top: .45rem;
	text-align: center;
	font-size: .27rem;
}
.hbxq-jbl-bg-help{
	width:.23rem;
	height:.23rem;
}
.hbxq-home-titleBox{
	margin-top: 1rem;
	position: relative;
      width: 5rem;
      margin-left: 18%;
}
.hbxq-home-titleImg{
	pointer-events: none;
	width: 4.5rem;
	height: 2.71rem;
	margin: 0 auto;
	display: block;
}
.hbxq-home-titleboardBox{
	margin: 0 auto;
	position: relative;
	top: -.35rem;
}
.hbxq-home-titleboard{
	margin: 0 auto;
	pointer-events: none;
	width:5rem;
	height: .61rem;
}
.hbxq-home-titleText{
	color: #FFFFFF;
	position: absolute;
	bottom: .21rem;
	width:5rem;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
}
.home-bottom-bg{
	position: absolute;
	left: 0;
	right: 0;
	height:5.5rem;
	bottom: 0;
	background: url(../../../static/home/home-bg2.png) no-repeat;
	background-size: 100% 100%;
}
.home-btn-cardBag1{
	width:1.2rem;
	height: 1.4rem;
	height: auto;
	display: block;
	pointer-events: none;
}
.home-bottom-house{
	position: absolute;
	bottom: 2rem;
	width: 100%;
}
.home-btnGrounp{
	position: relative;
	height: 1.5rem;
}
.home-btnGrounp-itembox{
	cursor: pointer;
	text-align: center;
    width: 100%;
	position: absolute;
	bottom: 0;
	z-index: 2;
}
.home-btnGrounp-item{
	display: inline-block
}
.home-btn-gowork{
	pointer-events: none;
	width:3.3rem;
	height: 1.3rem;
	display: block;
	margin: 0 .3rem;
}
.home-btnGrounp{
	width: 100%;
	position: absolute;
	bottom: .3rem;
}
.home-right-navitem{
	pointer-events: none;
	width: .7rem;
	height: .7rem;
}
.home-right-navitemText{
	text-align: center;
	color: #a26a2c;
	font-weight: bolder;
	position: relative;
	top: 0rem;
}
.home-right-navitemBox{
	width: .7rem;
	line-height: .3rem;
	display: inline-block;
	margin-bottom: .15rem;

}

.home-rightNav{
	position: absolute;
	right: .2rem;
	top: 1.3rem;
}
.home-leftNav{
	position: absolute;
	left: .2rem;
	top: 1.3rem;
}
.home-left-ProgressBox{
	left: .3rem;
    bottom: 1.9rem;
    position: absolute;
    z-index: 2;
}
.home-left-Progress{
	width: 1.35rem;
	height: auto;
}
.home-house{
	width: 3.5rem;
	height: 3.45rem;
	display: block;
	margin: 0 auto;
}
.house-animation{
	animation: 2s houseAnimation infinite;
	transform-origin: center bottom;
}
.house-sjAnimation{
	animation: .2s sjAnimation forwards;
	transform-origin: center bottom;
}

@keyframes houseAnimation{
	0 {transform: scale(1);}
    50% {transform: scale(1.07);}
    100% {transform: scale(1);}

}
@keyframes sjAnimation{
	0% {transform: scale(.9);}
    50% {transform: scale(1.07);}
    100% {transform: scale(1);}

}

.home-left-ProgressText{
  color: #FFFFFF;
  font-weight: bolder;
  position: absolute;
  height: 2rem;
  text-align: center;
  bottom: 50%;
  transform: translateY(40%);
  -webkit-writing-mode: vertical-rl;
   writing-mode: vertical-rl;
  right: .15rem;
}

.home-left-levelbg{
	position: absolute;
	top: -.3rem;
	left: .25rem;
	background: url(../../../static/home/levelBg.png) no-repeat;
	background-size: 100% 100%;
	height: .6rem;
    width: .6rem;
    line-height: .6rem;
    text-align: center;
    color: #ffed8f;
    font-weight: bolder;
}
.home-left-levelAward{
	position: absolute;
	top: -.3rem;
	left: .25rem;
	background: url(../../../static/home/levelAward.gif) no-repeat;
	background-size: 100% 100%;
	height: .65rem;
    width: .6rem;
    line-height: .6rem;
    text-align: center;
    color: #ffed8f;
    font-weight: bolder;
}
.home-right-lqpower{
	position: absolute;
	width: 2.4rem;
	height: .734rem;
	overflow-x: hidden;
	z-index: 3;
}
.home-left-lqpower{
	position: absolute;
	left: .14rem;
	width: 2.5rem;
	height: .7rem;
	overflow-x:hidden ;
}
.home-right-lqBox{
	animation: lqBox1 1s forwards;
	animation-delay: 2s;
	position: relative;
	left: 0;
}
@keyframes lqBox1
{
	from {left:0;}
	to {left:1.4rem;}
}
.home-right-lqBox-djdh{
	animation: lqBox2 4s forwards;
	position: relative;
}
@keyframes lqBox2
{
	0% {left:1.4rem;}
	25% {left:0rem;}
	75% {left:0rem;}
	100% {left:1.4rem;}
}

.home-right-lqBox-djdh3{
	position: absolute;
	left: 0;
	animation: lqBox3 4s ;
	position: relative;
}
@keyframes lqBox3
{
	0% {left:1.4rem;}
	25% {left:0rem;}
	75% {left:0rem;}
	100% {left:1.4rem;}
}

.home-right-lq{
	right: -.2rem;
    position: absolute;
    width: 2rem;
    height: .61rem;
    top: .04rem;
}

.home-left-lq{
	position: absolute;
    width: 2rem;
    height: .61rem;
}
.home-left-lq-text{
	position: absolute;
	left: .7rem;
	color: #A26A2C;
	font-size: .3rem;
	top: .12rem;
	font-weight: bolder;
}

.home-left-lq-dh{
	animation: lqBox3 4s forwards;
}

@keyframes lqBox3
{
	0% {left:-1.4rem;}
	25% {left:0rem;}
	75% {left:0rem;}
	100% {left:-1.4rem;}
}


.home-right-lqwz{
	position: absolute;
	width: 1.3rem;
	text-align: center;
	top: .16rem;
	left: 30%;
	color: #A26A2C;
	z-index: 2;
	font-weight: bolder;
}
.home-right-navitem2{
	/*pointer-events: none;*/
    width: .7rem;
    height: .7rem;
    position: absolute;
    z-index: 4;
    right: -.3rem;
}
.home-money-flyInto{
	left: -.5rem;
	position: absolute;
	bottom:0;

	z-index: 5;
}
.home-money-flyInto1{
	right: -.5rem;
	position: absolute;
	bottom:3rem;
	z-index: 5;
}
.home-money-flyInto2{
	right: -.5rem;
	position: absolute;
	bottom:5rem;
	z-index: 5;
}
.hbxq-home-signmb{
	background:rgba(0,0,0,.7);
	position: absolute;width: 100%;
	height: 100%;
	z-index: 5;
	padding-top: .8rem;
  overflow-y: auto;

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
.hbxq-shengji-bg{
	background:url(../../../static/home/light.png) no-repeat;
	background-size: 100% 100%;
	width: 9rem;
	height: 9rem;
	position: relative;
	z-index: 2;
  animation: gbj linear 8s infinite;
}
@keyframes gbj{
    	0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
        }
    }

.hbxq-shengji-redpacket1-box{
	position: absolute;
	top: 5%;
	z-index: 3;
	left: 50%;
	transform: translateX(-50%);
}
.hbxq-shengji-redpacket1{
	background: url(../../../static/home/redpacket1.png) no-repeat;
	background-size: 100% 100%;
	width: 4rem;
	height: 6.058rem;
	margin: 0 auto;

}
.hbxq-shengji-redpacket1-title{
	background: url(../../../static/home/redPacket-title.png) no-repeat;
	background-size: 100% 100%;
	width: 5.5rem;
	height: 1.43rem;
	margin-top: .3rem;
}
.hbxq-shengji-redpacket1-text{
	color: #fcdc95;
	position: absolute;
	bottom:1.2rem;
	left: 50%;
	transform: translateX(-50%);
	font-size: .3rem;
}
.hbxq-sign-lqBtn1{
	cursor: pointer;
	position: absolute;
	bottom:-2rem;
	width: 3.8rem;
	height: 1.327rem;
	left: 50%;
	transform: translateX(-50%);
  z-index: 99;

}
.hbxq-sign-lqBtn1-img1{
	pointer-events: none;
	width: 3.8rem;
	height: 1.327rem;
	position: absolute;
	bottom: 0;
}
.hbxq-sign-lqBtn1-img2{
	pointer-events: none;
	width: 3.8rem;
	height: 1.236rem;
	position: absolute;
	bottom: 0;
}
.hbxq-shengji-bg2{
	background: url(../../../static/home/shengji-bg2.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 7rem;
	height: 10.598rem;
	top: 1rem;
	z-index: 2;
	left: 12%;
  animation: hb 0.8s 0s forwards linear;
}
@keyframes hb{
  0%{
    transform: scale(.3);
  }
  100%{
    transform: scale(1);
  }
}
.hbxq-shengji-cd-bg{
  width: 6.5rem;
  position: absolute;
  top: 16%;
  left: 15%;
  animation: cd 2s ease infinite;
}
@keyframes cd{
    	0%, 100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            top: 16%;
        }
        50% {
           -webkit-transform: scale(1.05);
           transform: scale(1.05);
           top: 18%;
        }
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
.hbxq-step1-img1{
	background: url(../../../static/ydstep/1/1.png) no-repeat;
	background-size: 100% 100%;
	width: 1.5rem;
	height: 1.743rem;
	position: absolute;
	top: 35%;
}
.hbxq-step1-img2{
	background: url(../../../static/ydstep/1/2.png) no-repeat;
	background-size: 100% 100%;
	width: 6rem;
	height: 2.901rem;
	position: absolute;
	top: 32%;
	right: 0;
}
.hbxq-step1-btnBox{
	display: inline-block;
	position: absolute;
	bottom: 1.5rem;
	left:2.35rem;
	cursor: pointer;
}
.hbxq-step1-btn{
	pointer-events: none;
	width:2.5rem;
	height: 1.25rem;	
}
.hbxq-step2-img1{
	background: url(../../../static/ydstep/2/1.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 5.5rem;
	height: .399rem;
	bottom: 3rem;
	left: .85rem;
}
.hbxq-step2-img2{
	background: url(../../../static/ydstep/2/2.png) no-repeat;
	background-size: 100% 100%;
	width: 4rem;
	height: 2.44rem;
	position: absolute;
	bottom:.3rem;
	left:1.6rem;
}
.hbxq-step2-btnBox{
	cursor:pointer;
	width:4rem;
	height: 2.443rem;
	display: inline-block;
	position: absolute;
	bottom: .15rem;
	left: 1.6rem;
}
.hbxq-step2-btn{
	pointer-events: none;
	width:4rem;
	height: 2.443rem;
}
.hbxq-step4-img1{
	background: url(../../../static/ydstep/4/1.png) no-repeat;
	background-size: 100% 100%;
	width: 2rem;
	height: 1.551rem;
	position: absolute;
	left:3.4rem;
	top:.65rem;
}
.hbxq-step4-img2{
	background: url(../../../static/ydstep/4/2.png) no-repeat;
	background-size: 100% 100%;
	width: 5rem;
	height: .3923rem;
	position: absolute;
	left:1.1rem;
	top:2.5rem;
}
.hbxq-step4-btnBox{
	display: inline-block;
	position: relative;
	top:3.5rem;
	left:2.5rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step4-btn{	
	width: 2.3rem;
	height: 1.158rem;
	position: absolute;
	bottom: 0;
	pointer-events: none;
}
.hbxq-step5-img1{
	background: url(../../../static/ydstep/5/2.png) no-repeat;
	background-size: 100% 100%;
	width: 4.8rem;
	height:5.161rem;
	position: absolute;
	bottom:1.6rem;
	left:1.1rem;
}
.hbxq-step5-img2{
	background: url(../../../static/ydstep/5/1.png) no-repeat;
	background-size: 100% 100%;
	width: 3.498rem;
	height: .4rem;
	position: absolute;
	bottom:7rem;
	left:1.8rem;
}
.hbxq-step5-btnBox{
	display: inline-block;
	position:absolute;
	bottom: .1rem;
	left:2.5rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step5-btn{	
	width: 2.3rem;
	height: 1.158rem;
	position: absolute;
	bottom:.2rem;
	pointer-events: none;
}
.hbxq-step6-img1{
	background: url(../../../static/ydstep/6/t.png) no-repeat;
	background-size: 100% 100%;
	width: 4.5rem;
	height:1.173rem;
	position: absolute;
	left:1.3rem;
	top:.65rem;
}
.hbxq-step6-img2{
	background: url(../../../static/ydstep/6/1.png) no-repeat;
	background-size: 100% 100%;
	width: 4rem;
	height:5.847rem;
	position: absolute;
	left:1.55rem;
	top:1.8rem;
}
.hbxq-step6-img3{
	background: url(../../../static/ydstep/6/2.png) no-repeat;
	background-size: 100% 100%;
	height:1.47rem;
	width: 5rem;
	position: absolute;
	left:1.3rem;
	top:7.7rem;
}
.hbxq-step6-btnBox{
	display: inline-block;
	position:absolute;
	top:9.8rem;
	left:2.5rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step7-img1{
	background: url(../../../static/ydstep/7/4.png) no-repeat;
	background-size: 100% 100%;
	height:2.5rem;
	width: 5.697rem;
	position: absolute;		
	top:5.6rem;
	left:.7rem;
}
.hbxq-step7-img2{
	background: url(../../../static/ydstep/7/2.png) no-repeat;
	background-size: 100% 100%;
	height:1.862rem;
	width:5rem;
	position: absolute;	
	top:8.15rem;
	left: 1.1rem;
}
.hbxq-step7-img3{
	background: url(../../../static/ydstep/7/t.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;	
	width:4rem;
	height:1.057rem;
	top: .5rem;
	left:1.6rem;
}
.hbxq-step7-btnBox{
	display: inline-block;
	position:absolute;
	top:10.4rem;
	left:2.5rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step8-img1{
	background: url(../../../static/ydstep/8/1.png) no-repeat;
	background-size: 100% 100%;
	height:.646rem;
	width:5.2rem;
	position: absolute;	
	top: 4.5rem;
	left: 1rem
}
.hbxq-step8-img2{
	background: url(../../../static/ydstep/8/2.png) no-repeat;
	background-size: 100% 100%;
	height:2.491rem;
	width:5.5rem;
	position: absolute;	
	top: 5.35rem;
	left: 1rem
}
.hbxq-step8-btnBox{
	display: inline-block;
	position:absolute;
	top:8.5rem;
	left:2.5rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step9-img1{
	background: url(../../../static/ydstep/9/1.png) no-repeat;
	background-size: 100% 100%;
	height:1.698rem;
	width:1rem;
	position: absolute;	
	right:-.06rem;
	top: 2.35rem;
}
.hbxq-step9-img2{
	background: url(../../../static/ydstep/9/2.png) no-repeat;
	background-size: 100% 100%;
	height:.397rem;
	width:3rem;
	position: absolute;	
	right:1rem;
	top: 3.6rem;
}
.hbxq-step9-btnBox{
	display: inline-block;
	position:absolute;
	top:4.4rem;
	right:1.3rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step10-img1{
	background: url(../../../static/ydstep/10/2.png) no-repeat;
	background-size: 100% 100%;
	height:2.2014rem;
	width:4.5rem;
	position: absolute;	
	top: 7.5rem;
	left:1.38rem
}
.hbxq-step10-img2{
	background: url(../../../static/ydstep/10/1.png) no-repeat;
	background-size: 100% 100%;
	height:.8157rem;
	width:5.5rem;
	position: absolute;	
	top: 6.5rem;
	left:1.1rem
}
.hbxq-step10-btnBox{
	display: inline-block;
	position:absolute;
	top:10.2rem;
	left:2.5rem;
	width: 2.3rem;
	height: 1.158rem;
	cursor: pointer;
}
.hbxq-step11-img1{
	background: url(../../../static/ydstep/3/1.png) no-repeat;
	background-size: 100% 100%;
	width: 2rem;
	height: 1.095rem;
	position: absolute;
	right:-.03rem;
	top:.05rem;	
}
.hbxq-step11-img2{
	background: url(../../../static/ydstep/11/2.png) no-repeat;
	background-size: 100% 100%;
	width: 4.5rem;
	height: 1.136rem;
	position: absolute;
	right:2rem;
	top:.3rem;	
}
.hbxq-step11-img3{
	background: url(../../../static/ydstep/11/3.png) no-repeat;
	background-size: 100% 100%;
	width:.9rem;
	height:.9rem;
	position: absolute;
	right:-.02rem;
	top:1.22rem;	
}
.hbxq-step11-img4{
	background: url(../../../static/ydstep/11/4.png) no-repeat;
	background-size: 100% 100%;
	width:3rem;
	height:2.4rem;
	position: absolute;
	right:.2rem;
	top:1.5rem;	
}
.hbxq-step11-img5{
	background: url(../../../static/ydstep/11/5.png) no-repeat;
	background-size: 100% 100%;
	width:.9rem;
	height:.9rem;
	position: absolute;
	left:-.05rem;
	top:4.2rem;	
}
.hbxq-step11-img6{
	background: url(../../../static/ydstep/11/6.png) no-repeat;
	background-size: 100% 100%;
	width:2.5rem;
	height:1.944rem;
	position: absolute;
	left:.1rem;
	top:4.5rem;	
}
.hbxq-step11-img7{
	background: url(../../../static/ydstep/11/7.png) no-repeat;
	background-size: 100% 100%;
	width:.9rem;
	height:.9rem;
	position: absolute;
	right:-.05rem;
	top:4.8rem;	
}
.hbxq-step11-img8{
	background: url(../../../static/ydstep/11/8.png) no-repeat;
	background-size: 100% 100%;
	width:2.5rem;
	height:2.555rem;
	position: absolute;
	right:.4rem;
	top:5.2rem;	
}
.hbxq-step11-img9{
	background: url(../../../static/ydstep/11/9.png) no-repeat;
	background-size: 100% 100%;
	width:1.5rem;
	height:1.5rem;
	position: absolute;
	left:.22rem;
	bottom:.4rem;	
}
.hbxq-step11-img10{		
	background: url(../../../static/ydstep/11/10.png) no-repeat;
	background-size: 100% 100%;
	width:2.5rem;
	height:2.476rem;
	position: absolute;
	left:.2rem;
	bottom:2rem;	
}
.hbxq-step11-img11{
	background: url(../../../static/ydstep/11/11.png) no-repeat;
	background-size: 100% 100%;
	width:1.5rem;
	height:1.5rem;
	position: absolute;
	right:.22rem;
	bottom:.4rem;		
}
.hbxq-step11-img12{
	background: url(../../../static/ydstep/11/12.png) no-repeat;
	background-size: 100% 100%;
	width:3rem;
	height:1.781rem;
	position: absolute;
	right:.5rem;
	bottom:1.5rem;		
}
.hbxq-step11-btnBox{
	width: 2.5rem;
	height: 1.259rem;
	position: absolute;
	bottom: 0;
	display: inline-block;
	left: 2.3rem;
	bottom: .5rem;
	cursor: pointer;
}
.hbxq-step11-btn{
	pointer-events:none;
	position: absolute;
	bottom: 0;
	width: 2.5rem;
	height: 1.259rem;
}
</style>
