<template>
	<div id="hbxq-invite" style="padding: 0.2rem;">
		<div class="hbxq-invite-bg">
			<!--标题-->
			<div class="hbxq-invite-inviteTitle">
				<img src="../../../static/invite/invite-title.png" class="hbxq-invite-inviteTitle-img"/>
			</div>
			<!--规则-->
			<div class="hbxq-invite-ruleBg" @click="ruleShow=true"></div>
			<!--关闭按钮-->
			<!--<div class="hbxq-invite-closeBg"></div>-->
			<!--邀请好友/帮助好友 -->
			<div class="hbxq-invite-inviteFriendsBg1" v-show="invite=='1'" @click="invite='2'"></div>
			<div class="hbxq-invite-inviteFriendsBg2" v-show="invite=='2'" @click="invite='1'"></div>
			<!--邀请好友列表-->
			<div class="hbxq-invite-inviteBox">
				<!--邀请说明 -->
				<div class="invite-invite-inviteShuoming">
					<div style="font-weight: bolder;font-size: .3rem;margin-bottom: .1rem;">邀请说明：</div>
					<div>邀请一名好友助力增加当前打工25%的钞票获取速度，最高增加200%的钞票增加。</div>
				</div>
				<!--邀请-->
				<div align="center" style="margin-top: .3rem;" v-if="invite=='1'">
					<!--官方助手-->
					<div class="hbxq-invite-item">
						<div class="hbxq-invite-itemBg1" v-if="robot.todayIsHelp && robot.surplusTime>0"></div>
						<div class="hbxq-invite-itemBg2" v-if="!robot.todayIsHelp || robot.surplusTime==0"></div>
						<div class="hbxq-invite-itemZs"></div>
						<div class="hbxq-invite-time" v-if="robot.surplusTime>0"><van-count-down :time="robot.surplusTime * 1000"  format="HH时mm分ss秒" style="color:#935534;font-weight: bolder;font-size: .23rem;"/></div>
						<div class="hbxq-invite-progress" v-if="robot.surplusTime>0 && robot.todayIsHelp">
							<img src="../../../static/invite/p1.png" v-if="robot.progress<=10" />
							<img src="../../../static/invite/p2.png" v-if="robot.progress<=20 && robot.progress>10"/>
							<img src="../../../static/invite/p3.png" v-if="robot.progress<=30 && robot.progress>20"/>
							<img src="../../../static/invite/p4.png" v-if="robot.progress<=40 && robot.progress>30"/>
							<img src="../../../static/invite/p5.png" v-if="robot.progress<=50 && robot.progress>40"/>
							<img src="../../../static/invite/p6.png" v-if="robot.progress<=60 && robot.progress>50"/>
							<img src="../../../static/invite/p7.png" v-if="robot.progress<=70 && robot.progress>60"/>
							<img src="../../../static/invite/p8.png" v-if="robot.progress<=80 && robot.progress>70"/>
							<img src="../../../static/invite/p9.png" v-if="robot.progress<=90 && robot.progress>80"/>
							<img src="../../../static/invite/p10.png" v-if="robot.progress<100 && robot.progress>90"/>
							<img src="../../../static/invite/p11.png" v-if="robot.progress==100" />
						</div>
						<div class="hbxq-invite-inviteBtn3" v-if="!robot.todayIsHelp" @click="robotHelps()"></div>
						<div class="hbxq-invite-inviteBtn2" v-if="robot.surplusTime==0 && robot.todayIsHelp"></div>
						<!-- <div class="hbxq-invite-jiaBtn" v-if="!robot.todayIsHelp"></div> -->
						<div class="hbxq-invite-working" v-if="robot.surplusTime>0 && robot.todayIsHelp"></div>
					</div>


					<!--好友-->
					<div class="hbxq-invite-item" v-for="item in inviteInfo">
						<div class="hbxq-invite-itemBg1" v-if="item.invite && item.surplusTime>0"></div>
						<div class="hbxq-invite-itemBg2" v-if="!item.invite || item.surplusTime==0"></div>
						<div class="hbxq-invite-time" v-if="item.invite && item.surplusTime>0"><van-count-down :time="item.surplusTime * 1000"  format="HH时mm分ss秒" style="color:#935534;font-weight: bolder;font-size: .23rem;"/></div>
						<div class="hbxq-invite-progress" v-if="item.invite && item.surplusTime>0">
							<img src="../../../static/invite/p1.png" v-if="item.progress<10"/>
							<img src="../../../static/invite/p2.png" v-if="item.progress<=20 && item.progress>10"/>
							<img src="../../../static/invite/p3.png" v-if="item.progress<=30 && item.progress>20"/>
							<img src="../../../static/invite/p4.png" v-if="item.progress<=40 && item.progress>30"/>
							<img src="../../../static/invite/p5.png" v-if="item.progress<=50 && item.progress>40"/>
							<img src="../../../static/invite/p6.png" v-if="item.progress<=60 && item.progress>50"/>
							<img src="../../../static/invite/p7.png" v-if="item.progress<=70 && item.progress>60"/>
							<img src="../../../static/invite/p8.png" v-if="item.progress<=80 && item.progress>70"/>
							<img src="../../../static/invite/p9.png" v-if="item.progress<=90 && item.progress>80"/>
							<img src="../../../static/invite/p10.png" v-if="item.progress<100 && item.progress>90"/>
							<img src="../../../static/invite/p11.png" v-if="item.progress==100" />
						</div>

						<div class="hbxq-invite-inviteBtn2" v-if="item.invite && item.surplusTime==0"></div>
						<div class="hbxq-invite-inviteBtn1" v-if="!item.invite" @click="qrcode()"></div>
						<div class="hbxq-invite-jiaBtn" v-if="!item.invite"></div>
						<div class="hbxq-invite-working" v-if="item.invite && item.surplusTime>0"></div>
					</div>
					<div class="hbxq-invite-inviteInfo">
						<img src="../../../static/invite/hy1Icon.png" style="width: .4rem;height: .448rem;margin-right:.15rem;transform: translateY(-.05rem);"/>
						{{inviteNum}}/5
					</div>
				</div>
				<!--帮助-->
				<div align="center" style="margin-top: .3rem;" v-if="invite=='2'">
					<!--好友-->
					<div class="hbxq-invite-item" v-for="item in helpInfo">
						<div class="hbxq-invite-itemBg3" v-if="item.invite && item.surplusTime>0"></div>
						<div class="hbxq-invite-itemBg4" v-if="!item.invite || item.surplusTime==0"></div>
						<div class="hbxq-invite-time" v-if="item.invite && item.surplusTime>0"><van-count-down :time="item.surplusTime * 1000"  format="HH时mm分ss秒" style="color:#935534;font-weight: bolder;font-size: .23rem;"/></div>
						<div class="hbxq-invite-progress" v-if="item.invite && item.surplusTime>0">
							<img src="../../../static/invite/p1.png" v-if="item.progress<10"/>
							<img src="../../../static/invite/p2.png" v-if="item.progress<=20 && item.progress>10"/>
							<img src="../../../static/invite/p3.png" v-if="item.progress<=30 && item.progress>20"/>
							<img src="../../../static/invite/p4.png" v-if="item.progress<=40 && item.progress>30"/>
							<img src="../../../static/invite/p5.png" v-if="item.progress<=50 && item.progress>40"/>
							<img src="../../../static/invite/p6.png" v-if="item.progress<=60 && item.progress>50"/>
							<img src="../../../static/invite/p7.png" v-if="item.progress<=70 && item.progress>60"/>
							<img src="../../../static/invite/p8.png" v-if="item.progress<=80 && item.progress>70"/>
							<img src="../../../static/invite/p9.png" v-if="item.progress<=90 && item.progress>80"/>
							<img src="../../../static/invite/p10.png" v-if="item.progress<100 && item.progress>90"/>
							<img src="../../../static/invite/p11.png" v-if="item.progress==100" />
						</div>

						<div class="hbxq-invite-inviteBtn2" v-if="item.invite && item.surplusTime==0"></div>
						<!--<div class="hbxq-invite-inviteBtn1" v-if="!item.invite" @click="qrcode()"></div>
						<div class="hbxq-invite-jiaBtn" v-if="!item.invite"></div>-->
						<div class="hbxq-invite-working" v-if="item.invite && item.surplusTime>0"></div>
					</div>

					<div class="hbxq-invite-inviteInfo">
						<img src="../../../static/invite/hy2Icon.png" style="width: .4rem;height: .448rem;margin-right:.15rem;transform: translateY(-.05rem);"/>
						{{helpNum}}/5
					</div>

				</div>
			</div>
			<!--邀请好友弹出层-->
			<van-popup v-model="show" style='background: transparent;'>
				<div class="hbxq-invite-inviteBg2">
					<img src="../../../static/invite/close.png" class="hbxq-invite-inviteRuleClose" style="top: .7rem;" @click="show=false"/>
					<div class="hbxq-invite-imgBg">
						<div ref='box1' style="width:3.6rem;margin: 0 auto;" v-if="show">

							<div ref="qrcode1" class="hbxq-invite-qrcode1 " >
								<img src="../../../static/invite/text.png" style="width: 1rem;height: 0.1875rem;position: absolute;top:-.25rem;left:50%;transform:translateX(-50%);z-index: 1;"/>
							</div>
							<img src="../../../static/invite/img1.png" class="hbxq-invite-imgBg-img1"/>
						</div>

					</div>
					<div align="center" style="position: relative;top: -.2rem;">
						<div @touchstart="start(1)" @touchend="move(1)" style="display: inline-block;cursor: pointer;">
							<img src="../../../static/invite/invitebnt1.png" alt="" class="hbxq-invite-Btn"  v-show="invitebnt"/>
							<img src="../../../static/invite/invitebtn2.png" alt="" class="hbxq-invite-Btn"  v-show="!invitebnt"/>
						</div>
						<div @touchstart="start(2)" @touchend="move(2)" style="display: inline-block;z-index: 9;cursor: pointer;"  v-clipboard:copy="anval" v-clipboard:success="onCopy" v-clipboard:error="onError">
							<img src="../../../static/invite/klBtn1.png" alt="" class="hbxq-invite-Btn"  v-show="klBtn"/>
							<img src="../../../static/invite/klBtn2.png" alt="" class="hbxq-invite-Btn"  v-show="!klBtn"/>
						</div>
					</div>
				</div>
			</van-popup>

			<van-popup v-model="imgshow" style='background: transparent;'>
				<img :src="imgUrl" class="hbxq-shengcheng-img"/>
			</van-popup>

			<van-popup v-model="ruleShow" style='background: transparent;'>
				<div class="hbxq-invite-inviteRuleBg">
					<img src="../../../static/invite/close.png" class="hbxq-invite-inviteRuleClose" @click="ruleShow=false"/>
					<div style="font-weight: bolder;font-size: .3rem;">我的助手：</div>
					<p>1、在“红包星球”首页点击“助手邀请”按钮展开弹窗，选择邀请后长按海报分享至不同群，朋友长按识别海报内二维码即可进入红包星球成为助手加快您工作效率。</p>
					<p>2、您最多可同时邀请4位朋友当助手，每位助手将持续1小时，为您增加25%的打工效率，最高可获得225%的打工效率加成，时间到了自动解除。</p>
					<p>3、每天将有一次官方助手为您加速，官方助手加速时间持续1小时，增加25%工作效率。</p>

					<div style="font-weight: bolder;font-size: .3rem;">如何当助手：</div>
					<p>1、长按朋友分享的红包星球海报，识别海报内二维码后即可开始为朋友的工作加速。</p>
					<p>2、每天您只能为同一个朋友加速一次；您最多可同时成为5位朋友的助手。</p>
				</div>
			</van-popup>

		</div>
	</div>
</template>

<script>
  import {getInviteUrl,getHomeInfo,robotHelp} from '../../api/hbxq.js';
	import QRCode from 'qrcodejs2';
	import html2canvas from 'html2canvas';
	export default {
		data() {
	        return {
            anval:'',
	        	ruleShow:false,
	        	invitebnt:true,
	        	imgshow:false,
	        	imgUrl:'',
	        	klBtn:true,
	        	invite:'1',
	        	isInvite:false,//是否邀请了官方助手助力
	        	show:false,
	        	robot:{}, //todayIsHelp:true,surplusTime:7000000,time:7200000,progress:90
	        	url:'',
	        	inviteInfo:[ //邀请状况
	        		{invite:false,time:14400,progress:0},
	        		{invite:false,time:14400,progress:0},
	        		{invite:false,time:14400,progress:0},
	        		{invite:false,time:14400,progress:0}
	        	],
	        	inviteNum:0,
	        	helpInfo:[
	        		{invite:false,time:14400,progress:0},
	        		{invite:false,time:14400,progress:0},
	        		{invite:false,time:14400,progress:0},
	        		{invite:false,time:14400,progress:0},
	        		{invite:false,time:14400,progress:0}
	        	],
	        	helpNum:0
	        }
        },
        created(){

        },
        mounted: function(){
           getInviteUrl().then((response)=>{
               var code = response.data.code;
               if(code==0){
                 this.url = response.data.data.url;
                 this.anval = this.fxwa();
               }
             }).catch((response)=>{

           });
	        getHomeInfo().then((response)=>{
	        	var code = response.data.code;
	        	var res = response.data.data;

	        	if(code==0){
	        		this.robot = res.assist.robot;
	        		this.robot.time = 14400
	        		this.robot.progress = Math.round((this.robot.time-this.robot.surplusTime)/this.robot.time * 100);

	        		var behelpData = res.assist.behelp;
	        		var helpData = res.assist.help;
					if(this.robot.todayIsHelp == true ){
						this.inviteNum ++ 
					}
	        		if(behelpData.length>0 ){
	        			behelpData.forEach((item,index)=>{
	        				this.inviteInfo[index].surplusTime = item.surplusTime
	        			})

	        		}

	        		if(helpData.length>0){
	        			helpData.forEach((item,index)=>{
	        				this.helpInfo[index].surplusTime = item.surplusTime
	        			})
	        		}

	        console.log(this.robot)
	        	}
	        	}).catch((response)=>{

	        });
//        	console.log(this.inviteInfo)
        	this.inviteHandle()
        	this.helpHandle()
        },
        methods:{
        	create_qrcode1(id){
				var qrcode = new QRCode(id,{
	    			text:this.url,
	    			width:50,
	    			height:50,
	    			colorDark: '#000000',
	    			colorLight: '#ffffff',
	    			correctLevel: QRCode.CorrectLevel.H
	    		})

        	},
        	qrcode(){//打开邀请蒙版
            if(this.url==''){
              getInviteUrl().then((response)=>{
                  var code = response.data.code;
                  if(code==0){
                    this.url = response.data.data.url;
                    this.anval = this.fxwa();
                  }
                }).catch((response)=>{

              });
            }else{
              this.show = true
              setTimeout(()=>{
                this.create_qrcode1(this.$refs.qrcode1)
              },100)
            }
        	},
        	start(index){
        		if(index==1){
        			this.invitebnt = !this.invitebnt;
        		}else if(index==2){
        			this.klBtn = !this.klBtn
        		}
        	},
        	move(index){
        		if(index==1){
        			this.invitebnt = !this.invitebnt;
        			var element = this.$refs.box1;
        			setTimeout(() => {
	        			html2canvas(element,{
	        				scale: window.devicePixelRatio
	//      				useCORS: true,
	//                      allowTaint: false
	        			}).then((canvas)=>{
	        				let url = canvas.toDataURL('image/png')
							this.imgUrl = url
							this.imgshow = true

							this.$toast({
		                        message: '图片已生成，长按保存分享给你的好友吧',
		                        position: 'middle',
		                        duration: 2000
		                    });
		                    this.loadingShow = false;
		        		})
				  	}, 500);
        		}else if(index==2){
        			this.klBtn = !this.klBtn

        		}
        	},
        	onCopy(){//复制成功
          this.$toast('123')
        		this.$toast({
                    message: '邀请链接已生成，快去分享给你的好友吧',
                    position: 'middle',
                    duration: 2000
                });
        	},
        	onError(){//复制失败
        		this.$toast({
                    message: '复制失败请稍后再试QAQ',
                    position: 'middle',
                    duration: 2000
                });
        	},
          robotHelps(){//机器人助力
            robotHelp().then((response)=>{
             var code = response.data.code;
             var res = response.data.data;
             if(code==0){//邀请活动助手助力
              this.$toast("邀请助力成功")
              this.robot = res.assist.robot
              this.robot.time = 14400
              this.robot.progress = Math.round((this.robot.time-this.robot.surplusTime)/this.robot.time * 100);
             }
            }).catch((response)=>{
            });
         },
        	inviteHandle(){
        		setTimeout(()=>{
        			this.inviteInfo.forEach((item,index)=>{
	        			console.log(item)
	        			console.log(item.surplusTime)
	        			if(item.surplusTime || item.surplusTime>0){
	        				item.invite = true
	        				item.progress =  Math.round((item.time-item.surplusTime)/item.time * 100);
	        				this.inviteNum++;
	        			}
        			})
        		},500)
        	},
        	helpHandle(){
        		setTimeout(()=>{
	        		this.helpInfo.forEach((item,index)=>{
	        			if(item.surplusTime || item.surplusTime>=0){
	        				item.invite = true
	        				item.progress =  Math.round((item.time-item.surplusTime)/item.time * 100);
	        				this.helpNum++;

	        			}

	        		})
	        	},500)
        	},
          fxwa:function(){
            var val = '';
            var num = this.GetRandomNum(1,5);
            var walist = [{val:'我和暧昧的男网友见面了，见到我的瞬间他愣了一下，露出羞涩的笑脸，当天晚上他还是一直不好意思开口。\n\n第二天，在酒店门口，阳光照在他的侧脸上，青涩的少年终于开口：\n\n“要来玩游戏赚钱吗？”\n\n每天升级商铺拆红包，马上提现到账，升到30级还能瓜分万元收益。\n\n❤【'+this.url+'】\n👆🏻点击一起升级赚钱吧'},
                          {val:'这是一个压抑了很久的秘密\n\n其实我每天泡在酒吧，喝着黑桃A，穿着香奈儿，背着迪奥\n\n但我不是坏女孩，这是我在【红包星球】玩游戏赚的钱\n\n每天打工升级商铺拆红包\n收到红包疯狂提现\n升到30级抽卡瓜分万元广告收益\n❤【'+this.url+'】\n👆🏻点击链接你也可以赚钱'},
                          {val:'一个男孩叫一个女孩在男生宿舍楼下等他。\n\n此时夜已深，女孩久久就在风中等待，男孩迟迟未出现。\n\n终于男孩来了，犹豫许久，对女孩说：\n\n你愿意跟我一起来红包星球玩游戏赚钱吗？\n\n每天上红包星球升级商铺拆红包\n努力升到30级抽取分红卡\n我们一起瓜分万元广告收益吧\n\n❤【'+this.url+'】\n👆🏻点击链接一起升级赚钱'},
                          {val:'她迫于无奈跟总裁借钱，总裁打了一千万给她。\n\n总裁戏谑地问：“你要怎么报答我？”\n\n她倔强地别过头：“我会努力打工还你的？？”\n\n总裁邪魅地笑，走上前扭住她下巴把她的头拧向自己说：“还？你用什么还？你还得了吗？”\n\n她说我可以去红包星球玩游戏赚钱，拆到红包马上提现，升到30级就可以领收益分红了。\n\n❤【'+this.url+'】\n👆🏻点击链接一起升级赚钱'},
                          {val:'在一个月黑风高的夜晚，女生下班回家，在途径一片无人区时，听到背后不断有脚步声在靠近。\n\n你快他快，你慢他慢，像是被跟踪，顿时，女生的心被提到了嗓子眼。\n\n在经过无人巷子里，背后男子猛然追向女生，把她逼到墙壁，从口袋掏出手机，对女生说：\n\n“要来玩游戏赚钱吗？”\n\n每天升级商铺拆红包，马上提现到账，升到30级还能瓜分万元收益。\n\n❤【'+this.url+'】\n👆🏻点击升级游戏赚钱吧'},
                         ];
            val = walist[num].val;
            return val;
          },
          //随机数
          GetRandomNum:function(Min, Max) {
            var Range = Max - Min;
            var Rand = Math.random();
            return(Min + Math.round(Rand * Range));
          }
        }
	}

</script>

<style>
.hbxq-invite-bg{
	background: url(../../../static/invite/invite-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 100%;
	min-height: 10rem;
	margin-top: 1rem;
	position: relative;
	padding-top: .85rem;
	padding-bottom: .55rem;
	padding-left: .55rem;
	padding-right:.55rem;
}
.hbxq-invite-inviteTitle{
	position: absolute;
	left: 50%;
	top: -.35rem;
	transform: translateX(-50%);
}

.hbxq-invite-inviteTitle-img{
	width: 5.5rem;
	height:1.22rem;
}
.hbxq-invite-ruleBg{
	background: url(../../../static/invite/rule.png) no-repeat;
	background-size: 100% 100%;
	width: .9rem;
	height: .9rem;
	position: absolute;
	left: -.1rem;
	top: -.2rem;
}
/*.hbxq-invite-closeBg{
	background: url(../../../static/invite/close.png) no-repeat;
	background-size: 100% 100%;
	width: .9rem;
	height: .9rem;
	position: absolute;
	right: -.1rem;
	top: -.2rem;
}*/
.hbxq-invite-inviteFriendsBg1{
	background: url(../../../static/invite/invite1.png) no-repeat;
	background-size: 100% 100%;
	width: 4.35rem;
	height: 1.011rem;
	margin: 0 auto;
}
.hbxq-invite-inviteFriendsBg2{
	background: url(../../../static/invite/invite2.png) no-repeat;
	background-size: 100% 100%;
	width: 4.35rem;
	height: 1.011rem;
	margin: 0 auto;
}
.hbxq-invite-inviteBox{

}
.invite-invite-inviteShuoming{
	background: url(../../../static/invite/shuomingBg.png) no-repeat;
	background-size: 100% 100%;
	width: 5.8rem;
	height:1.902rem;
	margin: 0 auto;
	margin-top: .2rem;
	padding: .2rem .2rem;
	color: #A67629;
	font-size: .25rem;
	line-height: .38rem;
}
.hbxq-invite-item{
	display: inline-block;
	width: 32%;
	position: relative;
}
.hbxq-invite-itemBg1{
	background: url(../../../static/invite/hy1.png) no-repeat;
	background-size: 100% 100%;
	width: 1.7rem;
	height: 1.92rem;
	margin-bottom: .2rem;
}
.hbxq-invite-itemBg2{
	background: url(../../../static/invite/hy2.png) no-repeat;
	background-size: 100% 100%;
	width: 1.7rem;
	height: 1.92rem;
	margin-bottom: .2rem;
}
.hbxq-invite-itemBg3{
	background: url(../../../static/invite/hy3.png) no-repeat;
	background-size: 100% 100%;
	width: 1.7rem;
	height: 1.92rem;
	margin-bottom: .2rem;
}
.hbxq-invite-itemBg4{
	background: url(../../../static/invite/hy4.png) no-repeat;
	background-size: 100% 100%;
	width: 1.7rem;
	height: 1.92rem;
	margin-bottom: .2rem;
}
.hbxq-invite-itemZs{
	position: absolute;
	background: url(../../../static/invite/zhushou.png) no-repeat;
	background-size: 100% 100% ;
	width: 1.3rem;
	height: .4rem;
	top:-.1rem;
	left:50%;
	transform: translateX(-50%);
}
.hbxq-invite-inviteBtn1{
	position: absolute;
	background: url(../../../static/invite/invite-btn.png) no-repeat;
	background-size: 100% 100% ;
	width: 1.3rem;
	height: .608rem;
	bottom: .1rem;
	left:50%;
	transform: translateX(-50%);
}
.hbxq-invite-inviteBtn2{
	position: absolute;
	background: url(../../../static/invite/invite-btn2.png) no-repeat;
	background-size: 100% 100% ;
	width: 1.3rem;
	height: .608rem;
	bottom: .1rem;
	left:50%;
	transform: translateX(-50%);
}
.hbxq-invite-inviteBtn3{
	position: absolute;
	background: url(../../../static/invite/invite-btn3.png) no-repeat;
	background-size: 100% 100% ;
	width: 1.3rem;
	height: .608rem;
	bottom: .1rem;
	left:50%;
	transform: translateX(-50%);
}
.hbxq-invite-jiaBtn{
	position: absolute;
	background: url(../../../static/invite/+.png) no-repeat;
	background-size: 100% 100% ;
	width: .65rem;
	height: .65rem;
	top: 25%;
	left:50%;
	transform: translateX(-50%);
}
.hbxq-invite-time{
	position: absolute;
	bottom:.15rem;
	left: .2rem;
}
.hbxq-invite-progress{
	position: absolute;
	bottom:.37rem;
	left:50%;
	transform: translateX(-52%);
}
.hbxq-invite-progress img{
	width: 1.6rem;
	height: .31rem;
}
.hbxq-invite-inviteInfo{
	color: #FFFFFF;
	font-weight: bolder;
	font-size: .35rem;
	display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    margin-top: .2rem;
}
.hbxq-invite-working{
	background: url(../../../static/invite/working.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 1.9rem;
	height: .88rem;
	z-index: 1;
	top: 30%;
	left:50%;
	transform: translateX(-50%);
}
.hbxq-invite-helping{
	background: url(../../../static/invite/helping.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 1.9rem;
	height: .88rem;
	z-index: 1;
	top: 30%;
	left:50%;
	transform: translateX(-50%);
}
.hbxq-invite-inviteBg2{
	background: url(../../../static/invite/invite-bg2.png) no-repeat;
	background-size: 100% 100%;
	width: 7rem;
	height: 10.527rem;
	padding-top: 1.65rem;
}
.hbxq-invite-imgBg{
	background: url(../../../static/invite/imgBg.png) no-repeat;
	background-size: 100% 100%;
	width: 4.5rem;
	height: 7.084rem;
	margin: 0 auto;
	position: relative;
	padding-top: .2rem;

}
.hbxq-invite-imgBg-img1{
	width: 3.6rem;
	height:6.399rem;
	display:block;
	margin: 0 auto;
}

.hbxq-invite-qrcode1{
	position: absolute;
	left: .6rem;
	bottom: 1.55rem;
	padding: .07rem;
	background: #FFFFFF;
}

.hbxq-invite-Btn{
	pointer-events: none;
	width:3rem;
	height:1.214rem;
}
.hbxq-shengcheng-img{
	width: 6rem;
	height:10.666rem;

}
.hbxq-invite-inviteRuleBg{
	background: url(../../../static/invite/rule-tc.png) no-repeat;
	background-size: 100% 100%;
	width: 7rem;
	height:9.263rem;
	color: #B3702E;
	padding: 0 .5rem;
	padding-top: 1.3rem;
	font-size: .25rem;
	line-height: .5rem;
}
.hbxq-invite-inviteRuleClose{
	width: 1rem;
	height: 1rem;
	position: absolute;
	right: 0;
	top: .1rem;
}
</style>
