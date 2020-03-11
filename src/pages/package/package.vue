<template>
	<div id="hbxq-package" style="padding: 0.2rem;">
		<div class="hbxq-package-bg">
			<!--标题-->
			<div class="hbxq-package-bg-title"></div>

			<div class="hbxq-package-infoBox"  align="center">
				<div style="display: inline;" v-for="item,index in cardInfoList">
					<!--分红卡-->
					<div class="hbxq-package-fenhong1" @click="cardDetaila(index,item.id)" v-if="index==0">
						<!--<div v-if="item.num>0">
							<span class="hbxq-package-cardText" style="right: .6rem;bottom: .8rem;">x{{item.num}}</span>
							<img :src="item.img1" class="hbxq-package-fenhong1"/>
						</div>-->
						<img :src="item.img2" class="hbxq-package-fenhong1" />
					</div>
					<!--财神卡、红包卡-->
					<div class="hbxq-package-caishen1" @click="cardDetaila(index,item.id)" v-else-if="index>0 && index<3">
						<!--<div v-if="item.num>0">
							<span class="hbxq-package-cardText" style="right: .5rem;bottom: .7rem;">x{{item.num}}</span>
							<img :src="item.img1" class="hbxq-package-caishen1"/>
						</div>-->
						<img :src="item.img2" class="hbxq-package-caishen1"/>
					</div>
					<!--其他卡-->
					<div class="hbxq-package-fushen1"  @click="cardDetaila(index,item.id)" v-else="index">
						<div v-if="item.num>0">
							<span class="hbxq-package-cardText">x{{item.num}}</span>
							<img :src="item.img1" class="hbxq-package-fushen1" />
						</div>
						<img :src="item.img2" class="hbxq-package-fushen1" v-else/>
					</div>
				</div>
			</div>
		</div>


		<van-popup v-model="cardDetailShow" style="background: transparent;" >
			<div style="position: relative;" align="center">
				<img :src="titleUrl" class="hbxq-packet-tc-title"  />
				<div class="hbxq-packet-tc-bg">
					<img src="../../../static/invite/close.png" class="hbxq-packet-tc-close" @click="cardDetailShow=false"/>
					<img :src="tc_imgUrl" class="hbxq-packet-tc-img"/>
					<div style="position: relative;">
						<span class="hbxq-packet-tc-introd-text" @click="jump_fh()" v-if="index==0">查看</span>
						<img :src="tc_imgIntroUrl" class="hbxq-packet-tc-introd"/>
					</div>
					<div style="width: 3rem;height:1.2rem; margin: 0 auto;position: relative;cursor:pointer;" @touchstart="start(3)" @touchend="move(3)" v-if="sybtn">
						<img src="../../../static/package/tc/noUseBtn1.png" class="hbxq-packet-tc-noUse" v-show="noUseBtn && index==0 && noUseBtnShow" />
						<img src="../../../static/package/tc/noUseBtn1-1.png" class="hbxq-packet-tc-noUse" v-show="noUseBtn && index==0 && !noUseBtnShow" />
						
						<img src="../../../static/package/tc/noUseBtn2.png" class="hbxq-packet-tc-noUse" style="width:3.64rem;left: -.2rem;" v-show="noUseBtn && index==1 && noUseBtnShow" />
						<img src="../../../static/package/tc/noUseBtn2-1.png" class="hbxq-packet-tc-noUse" style="width:3.64rem;left: -.2rem;" v-show="noUseBtn && index==1 && !noUseBtnShow" />
						
						<img src="../../../static/package/tc/noUseBtn3.png" class="hbxq-packet-tc-noUse" v-show="noUseBtn && index==2 && noUseBtnShow" />
						<img src="../../../static/package/tc/noUseBtn3-1.png" class="hbxq-packet-tc-noUse" v-show="noUseBtn && index==2 && !noUseBtnShow" />
					</div>
						
					<div v-if="zhBtn" style="display: inline-block;margin-right: .2rem;cursor: pointer;" @touchstart="start(1)" @click="move(1)">
						<img src="../../../static/package/tc/zh1.png" class="hbxq-packet-tc-zh" v-show="!zhBtnChange"/>
						<img src="../../../static/package/tc/zh2.png" class="hbxq-packet-tc-zh" v-show="zhBtnChange"/>
					</div>
					<div v-if="hcBtn" style="display: inline-block;cursor: pointer;" @touchstart="start(2)" @touchend="move(2)">
						<img src="../../../static/package/tc/hc1.png" class="hbxq-packet-tc-zh" v-show="!hcBtnChange"/>
						<img src="../../../static/package/tc/hc2.png" class="hbxq-packet-tc-zh" v-show="hcBtnChange"/>
					</div>

					<!--<img src="../../../static/package/tc/noUseBtn.png" class="hbxq-packet-tc-noUse"/>-->
				</div>
			</div>
		</van-popup>
		<van-popup v-model="hechengShow" style="background: transparent;" >
			<div style="position: relative;" align="center">
				<div class="hbxq-package-hechengBg">
					<div><img src="../../../static/package/hecheng/title.png" class="hbxq-package-hechengTitle"/></div>
					<div class="hbxq-package-hechengTitle-text">瓜分每日万元现金</div>
					<div class="hbxq-package-hecheng-bottomBg">
						<img src="../../../static/invite/close.png" class="hbxq-packet-tc-close" @click="hechengShow=false"/>
						<!--环1-->
						<div class="hbxq-package-hecheng-huan1">
							<img src="../../../static/package/hecheng/huan1.png"  />
						</div>
						<!--环2-->
						<div class="hbxq-package-hecheng-huan2">
							<img src="../../../static/package/hecheng/huan2.png" />
						</div>
						<!--分红卡位置-->
						<div class="hbxq-package-hecheng-fenhong">
							<img src="../../../static/package/fenhong1.png" />
						</div>
						<!--疯疯卡1位置-->
						<div class="hbxq-package-hecheng-ff1">
							<img src="../../../static/package/ff_1-1.png" class="hbxq-package-hecheng-ffimg" v-if="package.ff_1>0"/>
							<img src="../../../static/package/ff_1-2.png" class="hbxq-package-hecheng-ffimg" v-else=""/>
						</div>
						<!--疯疯卡2位置-->
						<div class="hbxq-package-hecheng-ff2">
							<img src="../../../static/package/ff_2-1.png" class="hbxq-package-hecheng-ffimg" v-if="package.ff_2>0" />
							<img src="../../../static/package/ff_2-2.png" class="hbxq-package-hecheng-ffimg" v-else=""/>
						</div>
						<!--疯疯卡3位置-->
						<div class="hbxq-package-hecheng-ff3">
							<img src="../../../static/package/ff_3-1.png" class="hbxq-package-hecheng-ffimg" v-if="package.ff_3>0"/>
							<img src="../../../static/package/ff_3-2.png" class="hbxq-package-hecheng-ffimg" v-else=""/>
						</div>
						<!--疯疯卡4位置-->
						<div class="hbxq-package-hecheng-ff4">
							<img src="../../../static/package/ff_4-1.png" class="hbxq-package-hecheng-ffimg" v-if="package.ff_4>0"/>
							<img src="../../../static/package/ff_4-2.png" class="hbxq-package-hecheng-ffimg" v-else=""/>
						</div>
						<!--疯疯卡5位置-->
						<div class="hbxq-package-hecheng-ff5">
							<img src="../../../static/package/ff_5-1.png" class="hbxq-package-hecheng-ffimg" v-if="package.ff_5>0"/>
							<img src="../../../static/package/ff_5-2.png" class="hbxq-package-hecheng-ffimg" v-else=""/>
						</div>
					</div>
					<div style="margin-top: .3rem;width: 3rem;height: 1.048rem;margin: .3rem auto 0 auto;cursor: pointer;" @touchstart="fhkHcStart()" @touchend="fhkHcMove()">
						<img src="../../../static/package/hecheng/hc1.png" class="hbxq-package-hecheng-btn" v-show="hcfhkBtn"/>
						<img src="../../../static/package/hecheng/hc2.png" class="hbxq-package-hecheng-btn" v-show="!hcfhkBtn"/>
					</div>

				</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import {getHomeInfo,compCSCard,compFFCard} from '../../api/hbxq.js';
	export default {
		data() {
	        return {
	        	hcfhkBtn:true,
	        	sybtn:false,
	        	noUseBtnShow:true,
	        	hechengShow:false,//合成蒙版
	        	noUseBtn:false,
	        	zhBtn:true,
	        	zhBtnChange:false,
	        	hcBtn:true,
	        	hcBtnChange:false,
	       		cardDetailShow:false,
	       		cardDetail2:false,
	       		cardDetail3:false,
	       		ff_id:'',//蜂蜂卡ID
	       		index:'',//当前选中卡片序号 0：分红卡，1:财神卡,2:红包卡,3:福芦卡,4:福神卡,5:聚宝卡 6-10:蜂蜂卡，11金元宝
	       		titleUrl:'',
	       		titleList:[
	       			'../../../static/package/tc/1t.png','../../../static/package/tc/2t.png','../../../static/package/tc/3t.png','../../../static/package/tc/4t.png','../../../static/package/tc/5t.png',
	       			'../../../static/package/tc/6t.png','../../../static/package/tc/7t.png','../../../static/package/tc/8t.png','../../../static/package/tc/9t.png','../../../static/package/tc/10t.png',
	       			'../../../static/package/tc/11t.png','../../../static/package/tc/12t.png'
	       		],
	       		imgIntro:[
	       			'../../../static/package/tc/intro1.png','../../../static/package/tc/intro4.png','../../../static/package/tc/intro3.png','../../../static/package/tc/intro2.png','../../../static/package/tc/intro2.png'
	       			,'../../../static/package/tc/intro5.png','../../../static/package/tc/intro6.png','../../../static/package/tc/intro6.png','../../../static/package/tc/intro6.png','../../../static/package/tc/intro6.png'
	       			,'../../../static/package/tc/intro6.png','../../../static/package/tc/intro7.png'],
	       		tc_imgUrl:'',
	       		tc_imgIntroUrl:'',
	       		cardInfoList:[//0,1-2,3-11，蜂蜂卡ID对应1-5
	       			{name:'fenhong',img1:'../../../static/package/fenhong.png',img2:'../../../static/package/fenhong1.png',num:'',id:''},
	       			{name:'caishen',img1:'../../../static/package/caishen.png',img2:'../../../static/package/caishen1.png',num:'',id:''},
	       			{name:'hongbao',img1:'../../../static/package/hongbao.png',img2:'../../../static/package/hongbao1.png',num:'',id:''},
	       			{name:'fushen_1',img1:'../../../static/package/fushen_1-1.png',img2:'../../../static/package/fushen_1-2.png',num:'',id:''},
	       			{name:'fushen_2',img1:'../../../static/package/fushen_2-1.png',img2:'../../../static/package/fushen_2-2.png',num:'',id:''},
	       			{name:'jubaoka',img1:'../../../static/package/jubaoka-1.png',img2:'../../../static/package/jubaoka-2.png',num:'',id:''},
	       			{name:'ff_1',img1:'../../../static/package/ff_1-1.png',img2:'../../../static/package/ff_1-2.png',num:'',id:1},
	       			{name:'ff_2',img1:'../../../static/package/ff_2-1.png',img2:'../../../static/package/ff_2-2.png',num:'',id:2},
	       			{name:'ff_3',img1:'../../../static/package/ff_3-1.png',img2:'../../../static/package/ff_3-2.png',num:'',id:3},
	       			{name:'ff_4',img1:'../../../static/package/ff_4-1.png',img2:'../../../static/package/ff_4-2.png',num:'',id:4},
	       			{name:'ff_5',img1:'../../../static/package/ff_5-1.png',img2:'../../../static/package/ff_5-2.png',num:'',id:5},
	       			{name:'jubaopen',img1:'../../../static/package/jubaopen-1.png',img2:'../../../static/package/jubaopen-2.png',num:'',id:''}
	       		],
	       		package:{"fenhong":'',"caishen": '',"hongbao": '',"ff_1": '',"ff_2": '',"ff_3": '',"ff_4": '',"ff_5": '',"fushen_1": '',"fushen_2": '',"jubaoka": '',"jubaopen": '',"ticket_egg": ''}
	        }
        },
        created(){

        },
        mounted: function(){
        	this.getPackage()
        },
        methods:{
       		cardDetaila(index,id){
       			this.ff_id = id
       			console.log(id)
       			if(index<'3'){
       				this.noUseBtn = true;
       				this.zhBtn = false;
       				this.hcBtn = false;
       				this.sybtn = true;
       			}else if(index<'5' && index>'2'){
       				this.noUseBtn = false;
       				this.zhBtn = false;
       				this.hcBtn = true;
       				this.sybtn = false;
       			}else if(index>'5' && index<'11'){
       				this.noUseBtn = false;
       				this.zhBtn = true;
       				this.hcBtn = true;
       				this.sybtn = false;
       			}else{
       				this.noUseBtn = false;
       				this.zhBtn = false;
       				this.hcBtn = false;
       				this.sybtn = false;
       				
       			}
       			this.index = index;
       			this.titleUrl = this.titleList[index];
       			this.tc_imgUrl = this.cardInfoList[index].img1;
       			this.tc_imgIntroUrl = this.imgIntro[index];
       			this.cardDetailShow = true;
       		},
       		start(type){
       			if(type==1){
       				this.zhBtnChange = !this.zhBtnChange
       			}else if(type==2){
       				this.hcBtnChange = !this.hcBtnChange
       			}else if(type==3){
       				this.noUseBtnShow = !this.noUseBtnShow
       			}
       		},
       		move(type){//type=1 为两张相同位置的蜂蜂卡召唤一次财神降临  type=2 为五张蜂蜂卡合成分红卡,
       			if(type==1){
       				this.zhBtnChange = !this.zhBtnChange;
       				compFFCard(this.ff_id).then((response)=>{
                var res = response.data.data;
			      		var code = response.data.code;
			      		if(code=='0'){
			      			this.getPackage();
			      			this.cardDetailShow=false;
                  //翻卡
                  this.$emit('fkshow', res.reward[0].unit)
			      		}
					}).catch((response)=>{

		    		});

       			}else if(type==2){//index为3、4 =>合成财神卡,6、7、8、9、10为合成分红卡
       				if(this.index>2&&this.index<5){//合成财神卡
       					this.hcBtnChange = !this.hcBtnChange;
       					compCSCard().then((response)=>{
       						var res = response.data.data;
				      		var code = response.data.code;
				      		if(code=='0'){
				      			this.$toast('合成成功');
				      			this.getPackage();
				      			this.cardDetailShow=false;
				      		}
       					}).catch((response)=>{

			    		});
       				}else{
       					this.hcBtnChange = !this.hcBtnChange;
       					this.hechengShow = true;
       				}

       			}else if(type==3){
       				this.noUseBtnShow = !this.noUseBtnShow
       			}
       		},
       		getPackage(){
       			getHomeInfo().then((response)=>{
		      		var res = response.data.data;
		      		var code = response.data.code;
		      		this.data = res;
		      		console.log(res)
		      		if(code=='0'){
		      			this.package = res.package
		      			console.log(this.package)
		      			this.cardInfoList[0].num = this.package.fenhong;
		      			this.cardInfoList[1].num = this.package.caishen;
		      			this.cardInfoList[2].num = this.package.hongbao;
		      			this.cardInfoList[3].num = this.package.fushen_1;
		      			this.cardInfoList[4].num = this.package.fushen_2;
		      			this.cardInfoList[5].num = this.package.jubaoka;
		      			this.cardInfoList[6].num = this.package.ff_1;
		      			this.cardInfoList[7].num = this.package.ff_2;
		      			this.cardInfoList[8].num = this.package.ff_3;
		      			this.cardInfoList[9].num = this.package.ff_4;
		      			this.cardInfoList[10].num = this.package.ff_5;
		      			this.cardInfoList[11].num = this.package.jubaopen;
		      		}
		      	}).catch((response)=>{

			    });
       		},
       		hechengFH(){//合成分红卡

       		},
       		jump_fh(){
       			this.$router.push('/fh')
       		},
       		fhkHcStart(){
       			this.hcfhkBtn = !this.hcfhkBtn
       		},
       		fhkHcMove(){
       			this.hcfhkBtn = !this.hcfhkBtn
       			this.$toast('卡片还没凑齐哦，赶紧去升级获取吧')
       		}
        }
	}

</script>

<style>
/*.hbxq-package-bg{
	background: url(../../../static/package/bg.png) no-repeat;
	background-size: 100% 100%;
	width: 7rem;
	height: 12.334rem;
	margin: 0 auto;
	position: relative;
	margin-top: .2rem;
}*/
.hbxq-package-bg{
	background: url(../../../static/package/bg.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	top: .5rem;
	left: .2rem;
	right: .2rem;
	bottom: .5rem;
}
.hbxq-package-bg-title{
	background: url(../../../static/package/bg-title.png) no-repeat;
	background-size: 100% 100%;
	width: 5rem;
	height: 1.1157rem;
	margin: 0 auto;
	position: relative;
	top: -.3rem;
}
/*.hbxq-package-infoBox{
	max-height: 10.3rem;
	overflow-y: auto;
}*/
.hbxq-package-infoBox{
	position: absolute;
	top:1rem;
	bottom: .8rem;
	left: 0;
	right: 0;
	overflow-y: auto;
}
.hbxq-package-fenhong1{
	position: relative;
	width: 3.5rem;
	height: 4.038rem;
	margin: 0 auto;
}
.hbxq-package-fenhong2{
	position: relative;
	width: 3.5rem;
	height: 4.038rem;
	margin: 0 auto;
}
.hbxq-package-caishen1{
	position: relative;
	width: 3rem;
	height: 3.456rem;
	display: inline-block;
}
.hbxq-package-hongbao1{
	position: relative;
	width: 3rem;
	height: 3.456rem;
	display: inline-block;
}
.hbxq-package-fulu1{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-fushen1{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-jubaoka1{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-ff1{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-ff2{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-ff3{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-ff4{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-ff5{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-package-jubaopen{
	position: relative;
	width: 2rem;
	height: 2.304rem;
	display: inline-block;
}
.hbxq-packet-tc-bg{
	background: url(../../../static/package/tc/tc-bg.png) no-repeat;
	background-size: 100% 100%;
	width: 6.5rem;
	max-height: 9.756rem;
	padding-bottom: 1rem;
	position: relative;
	top: -.8rem;
}
.hbxq-packet-tc-title{
	width: 5rem;
	height: 1.115rem;
	display: block;
	position: relative;
	z-index: 1;
}
.hbxq-packet-tc-img{
	margin-top: 1rem;
	width: 3rem;
	height: 3.456rem;
}
.hbxq-packet-tc-introd{
	width: 5.5rem;
	height: auto;
}
.hbxq-packet-tc-noUse{
	pointer-events: none;
	width: 3rem;
	height: 1.16rem;
	margin-top: .2rem;
	position: absolute;
	bottom:-.2rem;
	left:0;
}
.hbxq-packet-tc-zh{
	pointer-events: none;
	width:2.5rem;
	height: 1.1662rem;
	margin-top: .2rem;
}
.hbxq-package-hechengBg{
	background: url(../../../static/package/hecheng/light.png) no-repeat;
	background-size: 100% 100%;
	width: 7rem;
	height:12.444rem;
}
.hbxq-package-hechengTitle{

	width: 5rem;
	height: 1.303rem;
}
.hbxq-package-hecheng-bottomBg{
	margin-top: .2rem;
	background: url(../../../static/package/hecheng/bottom.png) no-repeat;
	background-size: 100% 100%;
	width: 7rem;
	height: 7.626rem;
	position: relative;
}
.hbxq-package-hecheng-fenhong{
	position: absolute;
	top:2.5rem;
	left: 50%;
	transform: translate(-50%,0);
}
.hbxq-package-hecheng-fenhong img{
	width: 2.7rem;
	height:3.1132rem;
}
.hbxq-package-hecheng-huan2{
	position: absolute;
	top:2.4rem;
	left: 1.95rem;
	/*left: 50%;
	transform: translate(-50%,0);*/
	animation: huan1 8s linear infinite;
}
.hbxq-package-hecheng-huan2 img{
	width: 3.1rem;
	height: 3.1rem;
}
.hbxq-package-hecheng-huan1{
	position: absolute;
	top:1.25rem;
	left:.7rem;
	animation: huan1 8s linear infinite;
	animation-direction: reverse;

}
.hbxq-package-hecheng-huan1 img{
	width:5.5rem;
	height: 5.5rem;
	height:auto;
}
@keyframes huan1{

		0%{transform:rotate(0deg);}

		25%{transform:rotate(90deg);}

		50%{transform:rotate(180deg);}

		75%{transform:rotate(270deg);}

		100%{transform:rotate(360deg);}

}
.hbxq-package-hecheng-ff1{
	position: absolute;
	z-index: 1;
	left: 50%;
	transform: translate(-50%,0);
}
.hbxq-package-hecheng-ffimg{
	width:1.75rem;
	height: 2.017rem;
}
.hbxq-package-hecheng-ff2{
	position: absolute;
	z-index: 1;
	left: .05rem;
	top: 2.4rem;
}
.hbxq-package-hecheng-ff3{
	position: absolute;
	z-index: 1;
	right: .05rem;
	top: 2.4rem;
}
.hbxq-package-hecheng-ff4{
	position: absolute;
	z-index: 1;
	bottom:-.25rem;
	left: 1.15rem;
}
.hbxq-package-hecheng-ff5{
	position: absolute;
	z-index: 1;
	bottom:-.25rem;
	right: 1.15rem;
}
.hbxq-package-hechengTitle-text{
	color: #ffdf98;
	font-weight: bolder;
	font-size: .3rem;
}
.hbxq-package-hecheng-btn{
	pointer-events: none;
	width: 3rem;
	height: 1.048rem;
}
.hbxq-package-cardText{
	position: absolute;
	color: #52341a;
	font-size: .35rem;
	font-weight: bolder;
	z-index: 2;
	bottom:.35rem;
	right: .27rem;
}
.hbxq-packet-tc-close{
	position: absolute;
	width: .9rem;
	height: .9rem;
	right: 0;
	top: 0;
}
.hbxq-packet-tc-introd-text{
	color: #82452d;
	background: #f4f0d9;
	position: absolute;
	right: 1.5rem;
	top: .55rem;
	padding: .02rem .15rem;
	font-weight: bolder;
	border-radius: 5px;
}
</style>
