<template>
	<div id="yz" class="yz">
		<!-- <div id="bar" style="position: relative; z-index: 100;"><van-nav-bar title="蜂巢邮乐场" :fixed="true" @click-left="onClickLeft" left-arrow/></div> -->
		<div id="nr" class="yznr" ref="viewBox">
			<div class="ndjbj">
				<div id="yz-ndj" class="zt">
					<div class="yz-cd"></div>
					<div class="ndj-dz"></div>
					<div class="ball-panel">
						<div id="soy-egg4" class="soy-egg4"></div>
						<div id="soy-egg5" class="soy-egg5"></div>
						<div id="soy-egg6" class="soy-egg6"></div>
						<div id="soy-egg7" class="soy-egg7"></div>
						<div id="soy-egg8" class="soy-egg8"></div>
						<div id="soy-egg9" class="soy-egg9"></div>
						<div id="soy-egg10" class="soy-egg10"></div>
						<div id="egg-zi6" class="egg-zi6"></div>
						<div id="egg-zi7" class="egg-zi7"></div>
						<div id="egg-zi8" class="egg-zi8"></div>
						<div id="egg-zi1" class="egg-zi1"></div>
						<div id="egg-zi2" class="egg-zi2"></div>
						<div id="egg-zi3" class="egg-zi3"></div>
						<div id="egg-zi4" class="egg-zi4"></div>
						<div id="egg-zi5" class="egg-zi5"></div>
						<div id="soy-egg1" class="soy-egg1"></div>
						<div id="soy-egg2" class="soy-egg2"></div>
						<div id="soy-egg3" class="soy-egg3"></div>
					</div>
					<div class="ndj-zt">
            <div class="yz-gg-lb">
              <yd-rollnotice class="reward" autoplay="2000" style="background-color: transparent;font-size: .23rem;float: left;width: 85%;color: #ffd800;position: absolute;">
                  <yd-rollnotice-item v-for="item,index in gg" :key="index">
                      <span>恭喜{{item.name}}获得{{item.money}}</span>
                  </yd-rollnotice-item>
              </yd-rollnotice>
            </div>
          </div>
					<div class="yz-btu-ztk">
						<span>还有{{niudanNum}}次机会</span>
					</div>
					<div class="yz-btu-sz"  v-show="btu==false" @click="cj"></div>
					<div class="yz-btu" v-show="btu==false" @click="cj"></div>
					<div class="yz-btu-nx" v-show="btu == true"></div>
				</div>

				<!-- <div class="gather-panel">
					<div class="gather-panel-gg">
						<img src="../../../static/yz/lb.png"/>
						<div class="yz-tips-bj">
                            <i class="yz-tips-2"></i>
                        </div>
                        <yd-rollnotice class="reward" autoplay="2000" style="background-color: transparent;font-size: .26rem;float: left;width: 85%;color: #ffd800;">
                            <yd-rollnotice-item v-for="item,index in gg" :key="index">
                                <span>恭喜{{item.name}}！集齐金蛋拆红包领取{{item.money}}元大礼！</span>
                            </yd-rollnotice-item>
                        </yd-rollnotice>
					</div>
				</div> -->
			</div>
	    </div>
	    <van-popup v-model="hjshow"style="background-color: transparent;">
	    	<div class="yz-tc-bj">
	    	    <div class="yz-tc-gbj2"></div>
	    	   <!-- <div class="yz-tc-goldrain"></div>-->
	    	    <div class="yz-tc-pf"></div>
	    	    <div class="yz-tc-gx"></div>
	    	    <div class="yz-tc-hbk"></div>
	    	    <div class="yz-tc-je">
	    	    	<span v-if="awardType=='1'">获得<span style="font-size: .9rem;color: #f8e556;" >{{awardNum}}点</span>能量</span>
	    	    	<span v-if="awardType=='2'">获得<span style="font-size: .9rem;color: #f8e556;" >{{awardNum}}元</span>现金</span>
	    	    	<span v-if="awardType=='3'">获得<span style="font-size: .9rem;color: #f8e556;" >{{awardNum/1000}}K</span>钞票</span>    	    	
	    	    </div>
	    	    <div class="yz-tc-gbbtu2" @click="gbtc"></div>
	    	    <div class="yz-tc-btu2" @click="gbtc"></div>
	    	</div>
	    </van-popup>
	    <van-popup v-model="gztc" style="background-color: transparent;">
	    	<div class="yz-tc-bj">
	    		<div class="yz-dlt-gztc" v-show="gz==1"></div>
	    		<div class="yz-sy-gztc" v-show="gz==2"></div>
	    		<div class="yz-yx-gztc" v-show="gz==3"></div>
	    		<div class="yz-hdsm-gztc" v-show="gz==4"></div>
	    		<div class="yz-tc-gbbtu2" @click="gztc=false"></div>
	    	</div>
	    </van-popup>
	    <van-popup v-model="jptc" style="background-color: transparent;">
	    	<div class="yz-tc-bj">
	    		<div class="yz-tc-wdjp-bj" v-show="jplb>0"></div>
	    		<div class="yz-tc-wdjp-lb">
	    			<div class="yz-tc-wdjp-title">
	    				<span>{{wdjp[0].title}}</span>
	    			</div>
	    			<div class="yz-tc-wdjp-date">
	    				<span>{{wdjp[0].time}}</span>
	    			</div>
	    			<div class="yz-tc-wdjp-val">
	    				<span>¥ <span style="font-size: 32px;">{{wdjp[0].money}}</span>元</span>
	    			</div>
	    		</div>
	    		<div class="yz-tc-wdjp-lb2"  v-show="jplb>1">
	    			<div class="yz-tc-wdjp-title">
	    				<span>{{wdjp[1].title}}</span>
	    			</div>
	    			<div class="yz-tc-wdjp-date">
	    				<span>{{wdjp[1].time}}</span>
	    			</div>
	    			<div class="yz-tc-wdjp-val">
	    				<span>¥ <span style="font-size: 32px;">{{wdjp[1].money}}</span>元</span>
	    			</div>
	    		</div>
	    		<div class="yz-tc-wdjp-lb3" v-show="jplb>2">
	    			<div class="yz-tc-wdjp-title">
	    				<span>{{wdjp[2].title}}</span>
	    			</div>
	    			<div class="yz-tc-wdjp-date">
	    				<span>{{wdjp[2].time}}</span>
	    			</div>
	    			<div class="yz-tc-wdjp-val">
	    				<span>¥ <span style="font-size: 32px;">{{wdjp[2].money}}</span>元</span>
	    			</div>
	    		</div>
	    		<van-pagination class="yz-tc-wdjp-page" @change="gbpage" v-model="currentPage" :total-items='total' :show-page-size="3" :page-count="page" force-ellipses/>
	    		<div class="yz-tc-gbbtu3" @click="jptc=false"></div>
	    	</div>
	    </van-popup>
	    <van-popup v-model="fxtc" position="top" style="background-color: transparent;" :close-on-click-overlay="false">
	    	<div class="yz-tc-bj2">
	    		<div class="yz-fxtc-zx"></div>
	    		<div class="yz-fxtc-btu" @click="fxtc=false"></div>
	    	</div>
	    </van-popup>
	</div>
</template>

<script>
	import Vue from 'vue';
	import $ from 'jquery'
	import {gashapon} from '../../api/hbxq.js'
	// import {topicGetInfo,roll,needCdk,shareGroup,shareMoment,getCardReward,getReward,getrewardList} from '../../api/topic.js'
	// import wxapi from '../../api/wxapi.js'
	import { Dialog } from 'vant';
    Vue.use(Dialog)

	export default {
        data() {
        return {
        	  gg:[],
        	  page:1,
        	  total:3,
        	  currentPage:1,
        	  jplb:3,
        	  wdjp:[{title:'现金红包',time:'2018/12/05 21:00',money:100},{title:'现金红包',time:'2018/12/05 21:00',money:100},{title:'现金红包',time:'2018/12/05 21:00',money:100}],//我的奖品列表
        	  money:1,//红包金额
        	  fxtc:false,//分享弹窗
        	  task:[{now:0,need:1},{now:0,need:1},{now:0,need:1},{now:0,need:1}],  //下拉任务列表
        	  zsy:'100', //我的收益-总收益
        	  dsh:'100', //我的收益-待审核
        	  dtx:'100', //我的收益-待提现
        	  gxtc:false,//恭喜弹窗
        	  hbkl:false,//红包口令弹窗
        	  cdk:'',//cdk输入内容
        	  login:false,//登录弹窗
        	  cdh:1,//测导航选择
        	  toprw:false,//任务列表状态
        	  lg:false,     //大乐透拉杆
        	  currentPage:1, //我的奖品当前页数
        	  jptc:false, //奖品弹窗状态
        	  gz:'1', //弹出哪个规则弹窗
        	  gztc:false, //规则弹窗状态
        	  zjz:'1', //中奖弹窗里的球状态
        	  zjnum:'1', //中奖弹窗类型
        	  maxpage:'', //任务大厅-总页数
        	  hj:'',
        	  hjshow:false, //抽奖弹窗状态
        	  btu:false, //抽奖按钮状态
        	  zjnumber:6, //中奖的球
        	  jhnum:10, //抽奖次数
        	  sjk:[{num:true},{num:true},{num:true},{num:true},{num:false},{num:false},{num:false},{num:false}], //收集框金蛋状态
        	  jdt:8,  //进度条状态
        	  rwlb:[], //任务大厅任务
        	  plateId:'2',
        	  typeId:'',
        	  val:'',
        	  page:1,
        	  limit:'5',
        	  screenWidth: document.body.clientWidth, //屏幕宽度
              bfscrolltop:document.body.scrollTop,
              Id:'',
              refereeId:'',
              name:'',
              moneys:'',
              awardType:'',//1是获得能量,2是获得现金，3是获得钞票
              awardNum:''
        }
        },
        props: ["niudanNum"],
        mounted:function(){
        	    this.getGg();
        	    this.box = this.$refs.viewBox
                // 监听这个dom的scroll事件
                this.box.addEventListener('scroll', () => {this.handleScroll()}, false)
        	      if(this.screenWidth <= 400){
        	      	if(this.screenWidth <= 320){
            	  	this.limit = '4';
            	   }else{
            	  	this.limit = '5';
            	  	}
            	  }
            	  this.ua();
       },
        methods: {
        	getGg:function(){
        		for(var i=0;i<=20;i++){
           			this.name = this.getName();
           			this.moneys = this.getgift();
           			var reg = /^(.).+(.)$/g;
                	this.name = this.name.replace(reg, "$1**$2")
           			this.gg.push({name:this.name,money:this.moneys});
           		}
        	},
        	handleScroll:function() {
        		var top = this.$refs.viewBox.scrollTop;
        		if(this.screenWidth > 400){
        		    if(1800>=top&&top>=1200){
        			    this.cdh = 2;
        		    }else{
        		  	    if(top<400){
        				    this.cdh = 1;
        			    }
        			    if(top>1800){
        				    this.cdh = 3;
        			    }
        		    }
        		}else if(this.screenWidth <= 400 && this.screenWidth >=340){
        		    if(1600>=top&&top>=1100){
        			    this.cdh = 2;
        		    }else{
        		  	    if(top<500){
        				    this.cdh = 1;
        			    }
        			    if(top>1600){
        				    this.cdh = 3;
        			    }
        		    }
        		}else if(this.screenWidth <= 340){
        			if(1180>=top&&top>=980){
        			    this.cdh = 2;
        		    }else{
        		  	    if(top<400){
        				    this.cdh = 1;
        			    }
        			    if(top>1180){
        				    this.cdh = 3;
        			    }
        		    }
        		}

        	},
        	getinfo:function(){
        	},
        	onClickLeft:function(){
			        this.$router.push({path: '/Home'});
               },
            ua: function(){
//          	if(/Safari/.test(navigator.userAgent)){
//          		if(window.external){
//          			this.$toast('111');
//          		}else{
//          			this.$toast(/Chrome/.test(navigator.userAgent));
//          		}
//          	}
  	  		  if (/MicroMessenger/.test(window.navigator.userAgent)){
                 var bar=document.getElementById("bar");
   	                bar.style.display = "none";
   	                var nr=document.getElementById("nr");
   	                nr.style.marginTop = "0px";
               } else {

                 }
  	       },
  	       //点击抽奖
  	        cj: function(){
              this.btu = true;
              var that =this;
              setTimeout(function(){
                that.btu = false;
              },300);
              
//            awardType
//            awardNum
//            awardName
  	        	gashapon().then((response)=>{
  	        		if(response.data.code == 0){
  	        			var data = response.data.data;
		                //this.money = data.reward[0].value;
		                if(data.reward[0].unit == 'power_total'){
		                	this.awardType = '1';
		                	this.awardNum = data.reward[0].value;
		                }else if(data.reward[0].unit == 'balance'){
		                	this.awardType = '2';
		                	this.awardNum = data.reward[0].value;
		                }else if(data.reward[0].unit == 'money'){
		                	this.awardType = '3';
		                	this.awardNum = data.reward[0].value;
		                }
		                this.yzcj();
  	        		}else if(response.data.code == 10001){
                  this.$toast('扭蛋券不足，请先去签到页获得');
                 }
             }).catch((response)=>{

              })
  	        },
  	        yzcj:function(){
  	        	if(this.zjnumber > 0){

  	        		for(var i=1;i<9;i++){
  	        			$('#egg-zi'+i).removeClass('egg-zi'+i);
  	        		    $('#egg-zi'+i).addClass('egg-zi'+i+'-zhuan');
  	        	    }
  	        		for(var i=1;i<11;i++){
  	        			$('#soy-egg'+i).removeClass('oy-egg'+i);
  	        		    $('#soy-egg'+i).addClass('soy-egg'+i+'-zhuan');
  	        	   }
  	         	 var that = this;
             	 setTimeout(function () {
             	 	  that.czj();
            	  }, 4000);
              }else{
              	    this.toprw = true;
              	    this.$toast('次数已用完啦~完成任务可获得更多次数哦~');
                    window.location.hash = "#yz-toplist";
              }
  	        },
  	        czj:function(){
  	        	var n  = this.zjnumber;
	        	switch(n)
                {
                    case 1:
                        $('#egg-zi1').removeClass('egg-zi1');
                        $('#egg-zi1').addClass('egg-zi1-ing');
                        this.czz(1);
                    break;
                    case 2:
                        $('#egg-zi2').removeClass('egg-zi2');
                        $('#egg-zi2').addClass('egg-zi2-ing');
                        this.czz(2);
                    break;
                    case 3:
                        $('#egg-zi3').removeClass('egg-zi3');
                        $('#egg-zi3').addClass('egg-zi3-ing');
                        this.czz(3);
                    break;
                    case 4:
                        $('#egg-zi4').removeClass('egg-zi4');
                        $('#egg-zi4').addClass('egg-zi4-ing');
                        this.czz(4);
                    break;
                    case 5:
                        $('#egg-zi5').removeClass('egg-zi5');
                        $('#egg-zi5').addClass('egg-zi5-ing');
                        this.czz(5);
                    break;
                    case 6:
                        $('#egg-zi6').removeClass('egg-zi6');
                        $('#egg-zi6').addClass('egg-zi6-ing');
                        this.czz(6);
                    break;
                    case 7:
                        $('#egg-zi7').removeClass('egg-zi7');
                        $('#egg-zi7').addClass('egg-zi7-ing');
                        this.czz(7);
                    break;
                    case 8:
                        $('#egg-zi8').removeClass('egg-zi8');
                        $('#egg-zi8').addClass('egg-zi8-ing');
                        this.czz(8);
                    break;
                    case 9:
                        $('#soy-egg4').removeClass('soy-egg4');
                        $('#soy-egg4').addClass('soy-egg4-ing');
                        this.zjnum = '3';
                        var that = this;
                        setTimeout(function () {
              	            that.hjshow = true;
              	            that.stopcj();
              	            that.getinfo();
                        }, 3000);
                    break;
                    case 10:
                        $('#soy-egg5').removeClass('soy-egg5');
                        $('#soy-egg5').addClass('soy-egg5-ing');
                        this.zjnum = '3';
                        var that = this;
                        setTimeout(function () {
              	            that.hjshow = true;
              	            that.stopcj();
              	            that.getinfo();
                        }, 3000);
                    break;
                    case 11:
                        $('#soy-egg6').removeClass('soy-egg6');
                        $('#soy-egg6').addClass('soy-egg6-ing');
                        this.zjnum = '2';
                        var that = this;
                        setTimeout(function () {
              	            that.hjshow = true;
              	            that.stopcj();
              	            that.getinfo();
                        }, 3000);
                    break;
                    case 12:
                        $('#soy-egg3').removeClass('soy-egg3');
                        $('#soy-egg3').addClass('soy-egg3-ing');
                        this.czz(9);
                    break;
                    case 13:
//                      $('#soy-egg2').removeClass('soy-egg2');
//                      $('#soy-egg2').addClass('soy-egg2-ing');
//                      this.czz(10);
                    break;
                    case 14:
                        $('#soy-egg1').removeClass('soy-egg1');
                        $('#soy-egg1').addClass('soy-egg1-ing');
                        this.czz(10);
                    break;
                    default:
                        this.toprw = true;
                        window.location.hash = "#yz-toplist";
                        this.stopcj();
                }

  	        },
  	        czz:function(index){
  	        	var i = index;
  	        	this.zjz = i;
                this.zjnum = '1';
                var that = this;
                setTimeout(function () {
                  that.$emit('num', true)
              	    that.sjk[i-1].num = true;
              	    that.hjshow = true;
              	    that.stopcj();
              	    that.getinfo();
                 }, 3000);
  	        },
  	        stopcj:function(){
  	        	for(var i=1;i<9;i++){
  	        		$('#egg-zi'+i).removeClass('egg-zi'+i+'-zhuan');
  	        		$('#egg-zi'+i).addClass('egg-zi'+i);
  	        	}
                for(var i=1;i<11;i++){
  	        		$('#soy-egg'+i).removeClass('soy-egg'+i+'-zhuan');
  	        		$('#soy-egg'+i).addClass('soy-egg'+i);
  	        	}
  	        	var n  = this.zjnumber;
	        	switch(n)
                {
                    case 1:
                        $('#egg-zi1').removeClass('egg-zi1-ing');
                        $('#egg-zi1').addClass('egg-zi1');
                    break;
                    case 2:
                        $('#egg-zi2').removeClass('egg-zi2-ing');
                        $('#egg-zi2').addClass('egg-zi2');
                    break;
                    case 3:
                        $('#egg-zi3').removeClass('egg-zi3-ing');
                        $('#egg-zi3').addClass('egg-zi3');
                    break;
                    case 4:
                        $('#egg-zi4').removeClass('egg-zi4-ing');
                        $('#egg-zi4').addClass('egg-zi4');
                    break;
                    case 5:
                        $('#egg-zi5').removeClass('egg-zi5-ing');
                        $('#egg-zi5').addClass('egg-zi5');
                    break;
                    case 6:
                        $('#egg-zi6').removeClass('egg-zi6-ing');
                        $('#egg-zi6').addClass('egg-zi6');
                    break;
                    case 7:
                        $('#egg-zi7').removeClass('egg-zi7-ing');
                        $('#egg-zi7').addClass('egg-zi7');
                    break;
                    case 8:
                        $('#egg-zi8').removeClass('egg-zi8-ing');
                        $('#egg-zi8').addClass('egg-zi8');
                    break;
                    case 9:
                        $('#soy-egg4').removeClass('soy-egg4-ing');
                        $('#soy-egg4').addClass('soy-egg4');
                    break;
                    case 10:
                        $('#soy-egg5').removeClass('soy-egg5-ing');
                        $('#soy-egg5').addClass('soy-egg5');
                    break;
                    case 11:
                        $('#soy-egg6').removeClass('soy-egg6-ing');
                        $('#soy-egg6').addClass('soy-egg6');
                    break;
                     case 12:
                        $('#soy-egg1').removeClass('soy-egg1-ing');
                        $('#soy-egg1').addClass('soy-egg1');
                    break;
                    case 13:
                        $('#soy-egg3').removeClass('soy-egg3-ing');
                        $('#soy-egg3').addClass('soy-egg3');
                    break;
                    case 14:
//                      $('#soy-egg2').removeClass('soy-egg2-ing');
//                      $('#soy-egg2').addClass('soy-egg2');
                    break;
                    default:
                        if(this.jhnum ==0){
                        this.$toast('次数已用完！完成任务可获得更多次数！')
                        }
                }
  	        },
  	        //关闭抽奖弹窗
  	        gbtc:function(){
  	        	this.hjshow = false;
  	        	this.btu = false;
  	        },
  	        //大乐透抽奖
  	        dltcj:function(){
  	        	this.lg = true;
	        	if(!flag){
			        flag=true;
			        reset();
			        letGo();

			        index++;
		      }
	        	var flag=false;

	        	var index=0;
	        	var TextNum2
	        	function letGo(){
	        		TextNum2=parseInt(Math.random()*6)
	        		var num2=[-386,-515,-643,0,-130,-257][TextNum2];
	        		$(".num-con2").animate({"top":-386},700,"linear", function () {
	        			$(this).css("top",0).animate({"top":num2},1500,"linear");
	        		});
        		}
	        	function reset(){
	        		$(".num-con2").css({"top":0});
	        	}

  	        	var that = this;
                        setTimeout(function () {
              	            that.lg = false;
                        }, 3000);
  	        },
            //我的奖品
            jp:function(){
            	getrewardList().then((response)=>{
            			if(response.data.code == 0){
            				this.jplb = response.data.data.length;
            				var list = response.data.data;
            				this.total = response.data.count;
            		        this.page = Math.ceil(response.data.count / 3);
            				if(this.jplb == 1){
            					this.wdjp[0] = list[0];
            					this.jptc = true;
            				}
            				if(this.jplb == 2){
            					this.wdjp[0] = list[0];
            					this.wdjp[1] = list[1];
            					this.jptc = true;
            				}
            				if(this.jplb == 3){
            					this.wdjp[0] = list[0];
            					this.wdjp[1] = list[1];
            					this.wdjp[2] = list[2];
            					this.jptc = true;
            				}
            			}
                        if(response.data.code == 60007){
                        	this.hbkl = false;
               	   	    	this.login = true;
               	   	    }
              		}).catch((response)=>{

              		})
            },
            //我的奖品换页
            gbpage:function(){
            	getrewardList(this.currentPage).then((response)=>{
            			if(response.data.code == 0){
            				this.jplb = response.data.data.length;
            				var list = response.data.data;
            				this.total = response.data.count;
            		        this.page = Math.ceil(response.data.count / 3);
            				if(this.jplb == 1){
            					this.wdjp[0] = list[0];
            					this.jptc = true;
            				}
            				if(this.jplb == 2){
            					this.wdjp[0] = list[0];
            					this.wdjp[1] = list[1];
            					this.jptc = true;
            				}
            				if(this.jplb == 3){
            					this.wdjp[0] = list[0];
            					this.wdjp[1] = list[1];
            					this.wdjp[2] = list[2];
            					this.jptc = true;
            				}
            			}
                        if(response.data.code == 60007){
                        	this.hbkl = false;
               	   	    	this.login = true;
               	   	    }
              		}).catch((response)=>{

              		})
            },
            destroyed(){
            	  this.box = this.$refs.viewBox;
                  this.box.removeEventListener('scroll', this.handleScroll);
             },
            scrollContent:function(){
                this.interval = setInterval(() =>{
                   this.scrollToEnd();
                }, 100)
  	        },
  	         scrollToEnd() {
                 document.body.scrollTop = document.body.scrollHeight-500;
            },
            clearSrcoll() {
               clearInterval(this.interval);
               document.body.scrollTop = this.bfscrolltop;
            },
           //随机数
        	GetRandomNum:function(Min, Max) {
    			var Range = Max - Min;
    			var Rand = Math.random();
    			return(Min + Math.round(Rand * Range));
			},
        	// 生成随机姓名
            getName:function(){
                var familyNames = new Array(
                    '快乐的','冷静的','醉熏的','潇洒的','糊涂的','积极的','冷酷的','深情的','粗暴的','温柔的',
					'可爱的','愉快的','义气的','认真的','威武的','帅气的','传统的','潇洒的','漂亮的','自然的',
					'专一的','听话的','昏睡的','狂野的','等待的','搞怪的','幽默的','魁梧的','活泼的','开心的',
					'故意的','无心的','土豪的','朴实的','兴奋的','幸福的','淡定的','不安的','阔达的','孤独的',
					'独特的','疯狂的','时尚的','落后的','风趣的','忧伤的','大胆的','爱笑的','矮小的','健康的',
					'大意的','甜甜的','酷酷的','健壮的','英俊的','霸气的','阳光的','默默的','大力的','孝顺的',
					'忧虑的','着急的','紧张的','善良的','凶狠的','害怕的','重要的','危机的','欢喜的','欣慰的',
					'满意的','跳跃的','诚心的','称心的','如意的','怡然的','娇气的','无奈的','无语的','激动的',
					'愤怒的','美好的','感动的','激情的','激昂的','震动的','虚拟的','超级的','寒冷的','精明的',
					'明理的','犹豫的','忧郁的','寂寞的','奋斗的','勤奋的','现代的','过时的','稳重的','热情的',
					'含蓄的','开放的','无辜的','多情的','纯真的','拉长的','热心的','从容的','体贴的','风中的',
					'曾经的','追寻的','儒雅的','优雅的','开朗的','外向的','内向的','清爽的','文艺的','长情的',
					'平常的','单身的','伶俐的','高大的','懦弱的','柔弱的','爱笑的','乐观的','耍酷的','酷炫的',
					'神勇的','年轻的','唠叨的','瘦瘦的','无情的','包容的','顺心的','畅快的','舒适的','靓丽的',
					'负责的','背后的','简单的','谦让的','彩色的','缥缈的','欢呼的','生动的','复杂的','慈祥的',
					'仁爱的','魔幻的','虚幻的','淡然的','受伤的','雪白的','高高的','糟糕的','顺利的','闪闪的',
					'羞涩的','缓慢的','迅速的','优秀的','聪明的','含糊的','俏皮的','淡淡的','坚强的','平淡的',
					'欣喜的','能干的','灵巧的','友好的','机智的','机灵的','正直的','谨慎的','俭朴的','殷勤的',
					'虚心的','辛勤的','自觉的','无私的','无限的','踏实的','老实的','现实的','可靠的','务实的',
					'拼搏的','个性的','粗犷的','活力的','成就的','勤劳的','单纯的','落寞的','朴素的','悲凉的',
					'忧心的','洁净的','清秀的','自由的','小巧的','单薄的','贪玩的','刻苦的','干净的','壮观的',
					'和谐的','文静的','调皮的','害羞的','安详的','自信的','端庄的','坚定的','美满的','舒心的',
					'温暖的','专注的','勤恳的','美丽的','腼腆的','优美的','甜美的','甜蜜的','整齐的','动人的',
					'典雅的','尊敬的','舒服的','妩媚的','秀丽的','喜悦的','甜美的','彪壮的','强健的','大方的',
					'俊秀的','聪慧的','迷人的','陶醉的','悦耳的','动听的','明亮的','结实的','魁梧的','标致的',
					'眯眯眼的','花痴的','想人陪的','眼睛大的','高贵的','傲娇的','心灵美的','爱撒娇的','细腻的',
					'高兴的','超帅的','留胡子的','坦率的','直率的','轻松的','痴情的','完美的','精明的','无聊的',
					'有魅力的','丰富的','繁荣的','饱满的','炙热的','暴躁的','碧蓝的','俊逸的','英勇的','健忘的',
					'清脆的','敏感的','光亮的','大气的','老迟到的','知性的','冷傲的','呆萌的','野性的','隐形的',
					'合适的','玩命的','沉默的','斯文的','香蕉','苹果','鲤鱼','鳗鱼','任性的','细心的','粗心的',
					'迷路的','烂漫的','哭泣的','贤惠的','苗条的','温婉的','发嗲的','会撒娇的','贪玩的','执着的',
					'天真的','怕黑的','感性的','飘逸的','怕孤独的','忐忑的','发嗲的','会撒娇的','贪玩的','执着的'
          	        );
            var givenNames =  new Array(
                '嚓茶','凉面','便当','毛豆','花生','可乐','灯泡','哈密瓜','野狼','背包',
				'眼神','缘分','雪碧','人生','牛排','蚂蚁','飞鸟','灰狼','斑马','汉堡','悟空','巨人',
				'绿茶','自行车','保温杯','大碗','墨镜','魔镜','煎饼','月饼','月亮','星星','芝麻','啤酒',
				'玫瑰','大叔','小伙','哈密瓜，数据线','太阳','树叶','芹菜','黄蜂','蜜粉','蜜蜂','信封',
				'西装','外套','裙子','大象','猫咪','母鸡','路灯','蓝天','白云','星月','彩虹','微笑',
				'摩托','板栗','高山','大地','大树','电灯胆','砖头','楼房','水池','鸡翅','蜻蜓','红牛',
				'咖啡','机器猫','枕头','大船','诺言','钢笔','刺猬','天空','飞机','大炮','冬天','洋葱',
				'春天','夏天','秋天','冬日','航空','毛衣','豌豆','黑米','玉米','眼睛','老鼠','白羊',
				'帅哥','美女','季节','鲜花','服饰','裙子','白开水','秀发','大山','火车','汽车','歌曲',
				'舞蹈','老师','导师','方盒','大米','麦片','水杯','水壶','手套','鞋子','自行车','鼠标',
				'手机','电脑','书本','奇迹','身影','香烟','夕阳','台灯','宝贝','未来','皮带','钥匙',
				'心锁','故事','花瓣','滑板','画笔','画板','学姐','店员','电源','饼干','宝马','过客',
				'大白','时光','石头','钻石','河马','犀牛','西牛','绿草','抽屉','柜子','往事','寒风',
				'路人','橘子','耳机','鸵鸟','朋友','苗条','铅笔','钢笔','硬币','热狗','大侠','御姐',
				'萝莉','毛巾','期待','盼望','白昼','黑夜','大门','黑裤','钢铁侠','哑铃','板凳','枫叶',
				'荷花','乌龟','仙人掌','衬衫','大神','草丛','早晨','心情','茉莉','流沙','蜗牛','战斗机',
				'冥王星','猎豹','棒球','篮球','乐曲','电话','网络','世界','中心','鱼','鸡','狗','老虎',
				'鸭子','雨','羽毛','翅膀','外套','火','丝袜','书包','钢笔','冷风','八宝粥','烤鸡','大雁',
				'音响','招牌','胡萝卜','冰棍','帽子','菠萝','蛋挞','香水','泥猴桃','吐司','溪流','黄豆',
				'樱桃','小鸽子','小蝴蝶','爆米花','花卷','小鸭子','小海豚','日记本','小熊猫','小懒猪',
				'小懒虫','荔枝','镜子','曲奇','金针菇','小松鼠','小虾米','酒窝','紫菜','金鱼','柚子',
				'果汁','百褶裙','项链','帆布鞋','火龙果','奇异果','煎蛋','唇彩','小土豆','高跟鞋',
				'戒指','雪糕','睫毛','铃铛','手链','香氛','红酒','月光','酸奶','银耳汤','咖啡豆',
				'小蜜蜂','小蚂蚁','蜡烛','棉花糖','向日葵','水蜜桃','小蝴蝶','小刺猬','小丸子',
				'指甲油','康乃馨','糖豆','薯片','口红','超短裙','乌冬面','冰淇淋','棒棒糖','长颈鹿',
				'豆芽','发箍','发卡','发夹','发带','铃铛','小馒头','小笼包','小甜瓜','冬瓜','香菇',
				'小兔子','含羞草','短靴','睫毛膏','小蘑菇','跳跳糖','小白菜','草莓','柠檬','月饼',
				'百合','纸鹤','小天鹅','云朵','芒果','面包','海燕','小猫咪','龙猫','唇膏','鞋垫',
				'羊','黑猫','白猫','万宝路','金毛','山水','音响'
                 );
            var i = this.GetRandomNum(0, 319);
            var familyName = familyNames[i];
            var j = this.GetRandomNum(0, 295);
            var givenName = givenNames[j];

            var name = familyName + givenName;
            return name;
         },
         getgift:function(){
         	var i = this.GetRandomNum(1,10);
         	var j = this.GetRandomNum(0,99);
         	var money = 1;
         	if(78<=j && j<=88){
         		money = '20元话费';
         	}else{
         		money = i+'00K钞票';
         	}
         	return money;
         }
        }
    }
</script>

<style>
  .yz-gg-lb{
        position: relative;
        width: 100%;
        text-align: center;
        z-index: 9;
        top: 1.35rem;
        height: 0.45rem;
        overflow: auto;
        left: 28%;
  }
	.yz-tc-bj2{
		position: relative;
		background-color: transparent;
		background-repeat: no-repeat;
        background-size: 100% 100%;
		width: 7.5rem;
		height: 8rem;
		/*animation: hidePlugin 1s 1,showPlugin .8s 1 .5s;*/
	}
	.yz-fxtc-zx{
		background-image: url(../../../static/yz/fx1.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 6rem;
        height: 4.5rem;
        right: 0;
     }
	.yz-fxtc-btu{
		background-image: url(../../../static/yz/fx2.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 2.5rem;
        height: 1.25rem;
        top: 80%;
        left: 35%;
	}
	.yz-gxtc-btu{
		background-image: url(../../../static/yz/tc/gxtc/2.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: .8rem;
        bottom: .3rem;
        left: 1.65rem;
	}
	.yz-gxtc-bj{
		background-image: url(../../../static/yz/tc/gxtc/1.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 7.2rem;
        height: 7.8rem;
        top: .8rem;
        left: 1rem;
	}
	.yz-klhb-sr{
		font-size: 0.35rem;
  	    padding-left: .8rem;
  	    background-color: transparent;
   	    padding-top: 0.05rem;
        padding-bottom: 1px;
	}
	.yz-hbkl-input{
		background-image: url(../../../static/yz/tc/klhb/3.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 0.75rem;
        bottom: 2.1rem;
        left: 1rem;
	}
	.yz-hbkl-btu{
		background-image: url(../../../static/yz/tc/klhb/2.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 0.75rem;
        bottom: 1.1rem;
        left: 1rem;
	}
	.yz-hbkl-bj{
		background-image: url(../../../static/yz/tc/klhb/1.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 6rem;
        height: 8.86rem;
        top: 1rem;
        left: 1.55rem;
	}
	.yz-dlt-gg-nr{
		/*position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 80%;
        height: 2.8rem;
        margin-left: 10%;
        top: 3rem;
        */
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-left: 12.2%;
        top: 3.85rem;
        position: absolute;
        width: 5.6rem;
        height: 2.3rem;
        border-radius: 20px;
        overflow: hidden;
	}

	.yz-tc-wdjp-page{
		position: absolute;
		top: 9rem;
        left: 1.15rem;
        line-height: 0.7rem;
        width: 6.7rem;
	}
	.yz-tc-wdjp-val{
		position: absolute;
		left: 4.7rem;
        top: .8rem;
        font-size: 22px;
        color: #fa713b;
	}
	.yz-tc-wdjp-date{
		position: absolute;
		left: 2.5rem;
        top: 1.4rem;
        font-size: 12px;
	}
	.yz-tc-wdjp-title{
		position: absolute;
		left: 2.7rem;
        top: .8rem;
        font-size: 22px;
        font-weight: bolder;
	}
	.yz-tc-wdjp-lb{
		background-image: url(../../../static/yz/tc/wdjp/2.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 6.8rem;
        height: 2rem;
        top: 2.7rem;
        left: 1.1rem;
	}
	.yz-tc-wdjp-lb2{
		background-image: url(../../../static/yz/tc/wdjp/2.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 6.8rem;
        height: 2rem;
        top: 4.7rem;
        left: 1.1rem;
	}
	.yz-tc-wdjp-lb3{
		background-image: url(../../../static/yz/tc/wdjp/2.png);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 6.8rem;
        height: 2rem;
        top: 6.7rem;
        left: 1.1rem;
	}
	.yz-tc-wdjp-bj{
		background-image: url(../../../static/yz/tc/wdjp/1.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 7rem;
        height: 8.9rem;
        top: 1rem;
        left: 1rem;
    }
	.yz-tc-mzjk{
		background-image: url(../../../static/yz/tc/mcz/mcz.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 6.5rem;
        height: 8rem;
        top: 1rem;
        left: 1.4rem;
	}
	.yz-tc-btu3{
		background-image: url(../../../static/yz/tc/mcz/1.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 3.5rem;
        height: .8rem;
        top: 7.7rem;
        left: 2.9rem;
        animation: jdbtu .8s infinite;
	}
	.yz-tc-pf{
		background-image: url(../../../static/yz/tc/hb/pf.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 7rem;
        height: 7rem;
        left: 1rem;
        top: .2rem;
        animation: cd 2s ease infinite;
	}
	.yz-tc-je{
		position: absolute;
      	color: #f8f3cd;
  	    font-weight: bolder;
        font-size: .4rem;
        top: 6rem;
        height: 1.5rem;
        width: 4rem;
        left: 2.7rem;
        text-align: center;
	}
	.yz-tc-gx{
		background-image: url(../../../static/yz/tc/hb/gx.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 8.3rem;
        height: 8rem;
        left: .5rem;
        top: .5rem;
	}
	.yz-tc-hbk{
		background-image: url(../../../static/yz/tc/hb/4.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 6.5rem;
        height: 8rem;
        top: 1rem;
        left: 1.4rem;
	}
	.yz-tc-gbbtu2{
		background-image: url(../../../static/yz/tc/hb/2.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1rem;
        height: 1rem;
        left: 4.2rem;
        top: 9.5rem;
	}
	.yz-tc-btu2{
		background-image: url(../../../static/yz/tc/hb/3.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 3.5rem;
        height: .8rem;
        top: 7.7rem;
        left: 2.9rem;
        animation: jdbtu .8s infinite;
	}
	.yz-tc-gbbtu{
		background-image: url(../../../static/yz/tc/hb/2.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1rem;
        height: 1rem;
        top: .5rem;
        right: 1rem;
	}
	.yz-tc-btu{
		background-image: url(../../../static/yz/tc/czj/1.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 1rem;
        top: 9.5rem;
        left: 2.7rem;
        animation: jdbtu .8s infinite;
	}
	.yz-tc-jd{
		background-image: url(../../../static/yz/qiu-you1.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd1{
		background-image: url(../../../static/yz/qiu-zheng.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd2{
		background-image: url(../../../static/yz/qiu-zai.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd3{
		background-image: url(../../../static/yz/qiu-shou.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd4{
		background-image: url(../../../static/yz/qiu-le.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd5{
		background-image: url(../../../static/yz/qiu-xiang.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd6{
		background-image: url(../../../static/yz/qiu-wu.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd7{
		background-image: url(../../../static/yz/qiu-you.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 4rem;
        height: 4.2rem;
        top: 5.1rem;
        left: 2.5rem;
	}
	.yz-tc-jd8{
		background-image: url(../../../static/yz/tc/stjp/21.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 3.5rem;
        height: 3.7rem;
        top: 5.5rem;
        left: 2.9rem;
	}
	.yz-tc-jd9{
		background-image: url(../../../static/yz/tc/stjp/41.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 3.5rem;
        height: 3.7rem;
        top: 5.5rem;
        left: 2.9rem;
	}
	.yz-tc-zjk{
		background-image: url(../../../static/yz/tc/czj/2.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 7.5rem;
        height: 7.5rem;
        top: 1rem;
        left: .8rem;
	}

	.yz-tc-zjk2{
		background-image: url(../../../static/yz/tc/stjp/2.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 7.5rem;
        height: 7.5rem;
        top: 1rem;
        left: .8rem;
	}
	.yz-tc-zjk3{
		background-image: url(../../../static/yz/tc/stjp/4.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 7.5rem;
        height: 7.5rem;
        top: 1rem;
        left: .8rem;
	}
	.yz-tc-bj{
		position: relative;
		background-color: transparent;
		background-repeat: no-repeat;
        background-size: 100% 100%;
		width: 9rem;
		height: 11rem;
		/*animation: hidePlugin 1s 1,showPlugin .8s 1 .5s;*/
	}
	.yz-tc-gbj{
		background-image: url(../../../static/yz/tc/czj/3.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 8rem;
        height: 8rem;
        left: .5rem;
        animation: gbj linear 8s infinite;
	}
	.yz-sjk-z1{
		background-image: url(../../../static/yz/qiu-you1.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: .28rem;
        left: .7rem;
	}
	.yz-sjk-z2{
		background-image: url(../../../static/yz/qiu-zheng.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: .28rem;
        left: 1.83rem;
	}
	.yz-sjk-z3{
		background-image: url(../../../static/yz/qiu-zai.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: .28rem;
        left: 2.89rem;
	}
	.yz-sjk-z4{
		background-image: url(../../../static/yz/qiu-shou.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: .35rem;
        left: 4rem;
	}
	.yz-sjk-z5{
		background-image: url(../../../static/yz/qiu-le.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: 1.35rem;
        left: .733rem;
	}
	.yz-sjk-z6{
		background-image: url(../../../static/yz/qiu-xiang.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: 1.35rem;
        left: 1.82rem;
	}
	.yz-sjk-z7{
		background-image: url(../../../static/yz/qiu-wu.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: 1.41rem;
        left: 2.89rem;
	}
	.yz-sjk-z8{
		background-image: url(../../../static/yz/qiu-you.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.2rem;
        height: 1.2rem;
        top: 1.41rem;
        left: 4.04rem;
	}
	.yz-tips-2 {
		display:block;
		background:#751e1a;
		border-radius:20%;
		width:3px;
		height: 22px;
        margin-top: 1px;
		top:38px;
		right:20px;
	}
	.yz-tips-bj{
		float: left;
		padding: 10px;
		padding-top: 4px;
        padding-bottom: 5px;
	}
	.yz-btu-ztk{
		background-image: url(../../../static/yz/ztk.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        height: .8rem;
        width: 2.5rem;
        right: 1.1rem;
        top: 7.4rem;
        text-align: center;
        padding-top: 9px;
        font-size: 14px;
        z-index: 2;
	}
	.yz-btu-sz{
		background-image: url(../../../static/yz/sz.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        height: .9rem;
        width: 1.5rem;
        right: .2rem;
        top: 8.2rem;
        z-index: 3;
        animation: shou 1s ease infinite;
	}
	.yz-btu{
		background-image: url(../../../static/yz/an.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 4.5rem;
        width: 4.3rem;
        right: .2rem;
        top: 6.9rem;
        z-index: 2;
	}
	.yz-cd{
		background-image: url(../../../static/yz/cd.png);
		position: absolute;
		width: 95%;
		height: 9rem;
		margin-top: 20px;
        margin-left: 9px;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        animation: cd 2s ease infinite;
        z-index: 2;
	}
	.yz-btu-nx{
		background-image: url(../../../static/yz/ax.png);
		position: absolute;
		background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 4.5rem;
        width: 4.3rem;
        right: .2rem;
        top: 6.9rem;
        z-index: 2;
	}
	.yz{
		overflow: auto;
        height: 100%;
	}

	.van-nav-bar .van-icon {
         color:rgb(92, 92, 92);
         font-weight: bolder;
    }
    .yznr{
    	position: relative;
    	width: auto;
    	overflow: auto;
        height: 100%;
    }
    .ndjbj{
    	background-size: 100% 100%;
    	width: 100%;
    	height: 10.5rem;
    }
    .zt{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        top: 0.3rem;
    }
    .gather-panel{
    	width: 100%;
    	height: 6.7rem;
    	position: relative;
        overflow: hidden;
        margin-top: 16px;
        background-image: url(../../../static/yz/yz-h.jpg);
		background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .gather-panel-gg{
    	position: absolute;
    	width: 90%;
    	background-color: #4c0000;
    	margin-left: 5%;
    	margin-top: 16px;
    	border-radius: 20px;
        padding: 2px;
    }
    .gather-panel-gg img{
    	width: 20px;
    	height: 20px;
    	float: left;
        margin-left: 5px;
        margin-top: 5px;
    }
    .ndj-zt{
    	background-image: url(../../../static/yz/jz.png);
    	margin: 0 auto;
    	background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        z-index: 1;
        /*height: 7rem;
        width: 5.5rem;*/
        height: 7.95rem;
        width: 6.75rem;
        left: .1rem;
    }
    .yz-wdjp{
    	background-image: url(../../../static/yz/jp.png);
    	position: absolute;
    	background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 45px;
        width: 45px;
        right: .3rem;
        top: 1.1rem;
        z-index: 3;
    }
    .yz-hdsm{
    	background-image: url(../../../static/yz/sm.png);
    	position: absolute;
    	background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 45px;
        width: 45px;
        right: .3rem;
        top: 2.3rem;
        z-index: 3;
    }
    .ndj-dz{
    	background-image: url(../../../static/yz/diz.png);
    	background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        height: 6.9rem;
        width: 7.5rem;
        top: 3.6rem;
        left: 0rem;
        z-index: 1;
    }
    .ball-panel{
    	border-radius: 50%;
        position: absolute;
        height: 4.8rem;
        width: 5rem;
        left: 1.4rem;
        top: 1.8rem;
    }
    .soy-egg1{
       width: 1.7rem;
       height: 1.7rem;
       left: 2.8rem;
       top: 1.5rem;
       background-image: url(../../../static/yz/q3.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong9 2.5s ease infinite;
    }
    .soy-egg1-zhuan{
       width: 1.7rem;
       height: 1.7rem;
       left: 2.8rem;
       top: 1.5rem;
       background-image: url(../../../static/yz/q3.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan1 1s 1.2s linear infinite;
    }
    .soy-egg1-ing{
       width: 1.7rem;
       height: 1.7rem;
       left: 2.8rem;
       top: 1.5rem;
       background-image: url(../../../static/yz/q3.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing 3s 0s forwards linear;
    }
    .soy-egg2{
       width: 1.7rem;
       height: 1.7rem;
       left: 0.3rem;
       top: 2.3rem;
       background-image: url(../../../static/yz/q2.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong8 2.5s ease infinite;
    }
    .soy-egg2-zhuan{
       width: 1.7rem;
       height: 1.7rem;
       left: 0.3rem;
       top: 2.3rem;
       background-image: url(../../../static/yz/q2.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan2 1s 1.1s linear infinite;
    }
    .soy-egg2-ing{
       width: 1.7rem;
       height: 1.7rem;
       left: 0.3rem;
       top: 2.3rem;
       background-image: url(../../../static/yz/q2.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing 3s 0s forwards linear;
    }
    .soy-egg3{
       width: 1.7rem;
       height: 1.7rem;
       left: 0.5rem;
       top: 0.5rem;
       background-image: url(../../../static/yz/q1.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong7 2.5s ease infinite;
    }
    .soy-egg3-zhuan{
       width: 1.7rem;
       height: 1.7rem;
       left: 0.5rem;
       top: 0.5rem;
       background-image: url(../../../static/yz/q1.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan3 1s 1s linear infinite;
    }
    .soy-egg3-ing{
       width: 1.7rem;
       height: 1.7rem;
       left: 0.5rem;
       top: 0.5rem;
       background-image: url(../../../static/yz/q1.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing 3s 0s forwards linear;
    }
    .soy-egg4{
       width: 1.1rem;
       height: 1.1rem;
       left: 2.5rem;
       top: 3rem;
       background-image: url(../../../static/yz/y1.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
    }
    .soy-egg4-zhuan{
       width: 1.1rem;
       height: 1.1rem;
       left: 2.5rem;
       top: 3rem;
       background-image: url(../../../static/yz/y1.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan4 1s 1.3s linear infinite;
    }
    .soy-egg4-ing{
       width: 1.1rem;
       height: 1.1rem;
       left: 2.5rem;
       top: 3rem;
       background-image: url(../../../static/yz/y1.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing3 3s 0s forwards linear;
    }
    .soy-egg5{
       width: 1.1rem;
       height: 1.1rem;
       left: 3.3rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/y2.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong9 2.5s ease infinite;
    }
    .soy-egg5-zhuan{
       width: 1.1rem;
       height: 1.1rem;
       left: 3.3rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/y2.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan11 1s 1.1s linear infinite;
    }
    .soy-egg5-ing{
       width: 1.1rem;
       height: 1.1rem;
       left: 3.3rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/y2.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing3 3s 0s forwards linear;
    }
    .soy-egg6{
       width: 1.1rem;
       height: 1.1rem;;
       left: 1.6rem;
       top: 3.1rem;
       background-image: url(../../../static/yz/y5.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong6 2.5s ease infinite;
    }
    .soy-egg6-zhuan{
       width: 1.1rem;
       height: 1.1rem;;
       left: 1.6rem;
       top: 3.1rem;
       background-image: url(../../../static/yz/y5.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan5 1s 1s linear infinite;
    }
    .soy-egg6-ing{
       width: 1.1rem;
       height: 1.1rem;;
       left: 1.6rem;
       top: 3.1rem;
       background-image: url(../../../static/yz/y5.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing3 3s 0s forwards linear;
    }
    .soy-egg7{
       width: 1.1rem;
       height: 1.1rem;
       left: 0.5rem;
       top: 3rem;
       background-image: url(../../../static/yz/y4.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
    }
    .soy-egg7-zhuan{
       width: 1.1rem;
       height: 1.1rem;
       left: 0.5rem;
       top: 3rem;
       background-image: url(../../../static/yz/y4.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan12 1s 1s linear infinite;
    }
    .soy-egg7-ing{
       width: 1.1rem;
       height: 1.1rem;
       left: 0.5rem;
       top: 3rem;
       background-image: url(../../../static/yz/y4.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing3 3s 0s forwards linear;
    }
    .soy-egg8{
       width: 1.1rem;
       height: 1.1rem;
       left: 3.1rem;
       top: 3rem;
       background-image: url(../../../static/yz/y3.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong9 2.5s ease infinite;
    }
    .soy-egg8-zhuan{
       width: 1.1rem;
       height: 1.1rem;
       left: 3.1rem;
       top: 3rem;
       background-image: url(../../../static/yz/y3.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan13 1s 1.25s linear infinite;
    }
    .soy-egg8-ing{
       width: 1.1rem;
       height: 1.1rem;
       left: 3.1rem;
       top: 3rem;
       background-image: url(../../../static/yz/y3.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing3 3s 0s forwards linear;
    }
    .soy-egg9{
       width: 1.1rem;
       height: 1.1rem;
       left: 0.8rem;
       top: 3.5rem;
       background-image: url(../../../static/yz/y6.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
    }
    .soy-egg9-zhuan{
       width: 1.1rem;
       height: 1.1rem;
       left: 0.8rem;
       top: 3.5rem;
       background-image: url(../../../static/yz/y6.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan14 1s 1.4s linear infinite;
    }
    .soy-egg9-ing{
       width: 1.1rem;
       height: 1.1rem;
       left: 0.8rem;
       top: 3.5rem;
       background-image: url(../../../static/yz/y6.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing3 3s 0s forwards linear;
    }
    .soy-egg10{
       width: 1.1rem;
       height: 1.1rem;
       left: 0rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/y7.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong7 2.5s ease infinite;
    }
    .soy-egg10-zhuan{
       width: 1.1rem;
       height: 1.1rem;
       left: 0rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/y7.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan6 1s 1.15s linear infinite;
    }
    .soy-egg10-ing{
       width: 1.1rem;
       height: 1.1rem;
       left: 0rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/y7.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing3 3s 0s forwards linear;
    }
    .egg-zi1{
       width: 1rem;
       height: 1rem;
       left: 0rem;
       top: 1.6rem;
       background-image: url(../../../static/yz/q11.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong7 2.5s ease infinite;
    }
    .egg-zi1-zhuan{
       width: 1rem;
       height: 1rem;
       left: 0rem;
       top: 1.6rem;
       background-image: url(../../../static/yz/q11.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan10 1s 1s linear infinite;
    }
    .egg-zi1-ing{
       width: 1rem;
       height: 1rem;
       left: 0rem;
       top: 1.6rem;
       background-image: url(../../../static/yz/q11.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
    }
    .egg-zi2{
       width: 1rem;
       height: 1rem;
       left: 2rem;
       top: 1.6rem;
       background-image: url(../../../static/yz/q10.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong7 2.5s ease infinite;
    }
    .egg-zi2-zhuan{
       width: 1rem;
       height: 1rem;
       left: 2rem;
       top: 1.6rem;
       background-image: url(../../../static/yz/q10.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan9 1s 1.3s linear infinite;
    }
    .egg-zi2-ing{
       width: 1rem;
       height: 1rem;
       left: 2rem;
       top: 1.6rem;
       background-image: url(../../../static/yz/q10.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
    }
    .egg-zi3{
       width: 1rem;
       height: 1rem;
       left: 2.5rem;
       top: 3.1rem;
       background-image: url(../../../static/yz/q9.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong9 2.5s ease infinite;
    }
    .egg-zi3-zhuan{
       width: 1rem;
       height: 1rem;
       left: 2.5rem;
       top: 3.1rem;
       background-image: url(../../../static/yz/q9.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan8 1s 1s linear infinite;
    }
    .egg-zi3-ing{
       width: 1rem;
       height: 1rem;
       left: 2.5rem;
       top: 3.1rem;
       background-image: url(../../../static/yz/q9.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
    }
    .egg-zi4{
       width: 1rem;
       height: 1rem;
       left: 1.8rem;
       top: 3rem;
       background-image: url(../../../static/yz/q8.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong9 2.5s ease infinite;
    }
    .egg-zi4-zhuan{
       width: 1rem;
       height: 1rem;
       left: 1.8rem;
       top: 3rem;
       background-image: url(../../../static/yz/q8.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan7 1s 1.2s linear infinite;
    }
    .egg-zi4-ing{
       width: 1rem;
       height: 1rem;
       left: 1.8rem;
       top: 3rem;
       background-image: url(../../../static/yz/q8.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
    }
    .egg-zi5{
       width: 1rem;
       height: 1rem;
       left: 2.3rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/q7.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong9 2.5s ease infinite;
    }
    .egg-zi5-zhuan{
       width: 1rem;
       height: 1rem;
       left: 2.3rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/q7.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan15 1s 1s linear infinite;
    }
    .egg-zi5-ing{
       width: 1rem;
       height: 1rem;
       left: 2.3rem;
       top: 2.5rem;
       background-image: url(../../../static/yz/q7.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
    }
    .egg-zi6{
       width: 1rem;
       height: 1rem;
       left: 1.3rem;
       top: 2rem;
       background-image: url(../../../static/yz/q6.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong9 2.5s ease infinite;
    }
    .egg-zi6-zhuan{
       width: 1rem;
       height: 1rem;
       left: 1.3rem;
       top: 2rem;
       background-image: url(../../../static/yz/q6.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan17 1s 1s linear infinite;
    }
    .egg-zi6-ing{
       width: 1rem;
       height: 1rem;
       left: 1.3rem;
       top: 2rem;
       background-image: url(../../../static/yz/q6.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
    }
    .egg-zi7{
       width: 1rem;
       height: 1rem;
       left: 3.3rem;
       top: 2.9rem;
       background-image: url(../../../static/yz/q5.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong8 2.5s ease infinite;
    }
    .egg-zi7-zhuan{
       width: 1rem;
       height: 1rem;
       left: 3.3rem;
       top: 2.9rem;
       background-image: url(../../../static/yz/q5.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan18 1s 1.2s linear infinite;
    }
    .egg-zi7-ing{
       width: 1rem;
       height: 1rem;
       left: 3.3rem;
       top: 2.9rem;
       background-image: url(../../../static/yz/q5.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
    }
    .egg-zi8{
       width: 1rem;
       height: 1rem;
       left: 3.6rem;
       top: 1.5rem;
       background-image: url(../../../static/yz/q4.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: dong8 2.5s ease infinite;
    }
    .egg-zi8-zhuan{
       width: 1rem;
       height: 1rem;
       left: 3.6rem;
       top: 1.5rem;
       background-image: url(../../../static/yz/q4.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: zhuan16 1s 1.3s linear infinite;
    }
    .egg-zi8-ing{
       width: 1rem;
       height: 1rem;
       left: 3.6rem;
       top: 1.5rem;
       background-image: url(../../../static/yz/q4.png);
       background-repeat: no-repeat;
       background-size: 100% 100%;
       position: absolute;
       animation: ing2 3s 0s forwards linear;
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
    @keyframes jdbtu{
    	0%, 100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
           -webkit-transform: scale(1.1);
           transform: scale(1.1);
        }
    }
    @keyframes cd{
    	0%, 100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        50% {
           -webkit-transform: scale(1.05);
           transform: scale(1.05);
        }
    }
    @keyframes dong9{
    	0%, 100% {
            -webkit-transform: translate(0) rotate(20deg);
            transform: translate(0) rotate(20deg);
        }
        50% {
            -webkit-transform: translate(-.042667rem,.085333rem) rotate(20deg);
            transform: translate(-.042667rem,.085333rem) rotate(20deg);
        }
    }
    @keyframes dong8{
    	0%, 100% {
            -webkit-transform: translate(0) rotate(50deg);
            transform: translate(0) rotate(50deg);
        }
        50% {
            -webkit-transform: translate(-.128rem,-.021333rem) rotate(40deg);
            transform: translate(-.128rem,-.021333rem) rotate(40deg);
        }
    }
    @keyframes dong7{
    	0%, 100% {
            -webkit-transform: translate(0) rotate(-20deg);
            transform: translate(0) rotate(-20deg);
        }
        50% {
            -webkit-transform: translate(.085333rem,.064rem) rotate(-20deg);
            transform: translate(.085333rem,.064rem) rotate(-20deg);
        }
    }
    @keyframes dong6{
    	0%, 100% {
            -webkit-transform: translate(0) rotate(-20deg);
            transform: translate(0) rotate(-20deg);
        }
        50% {
            -webkit-transform: translate(.085333rem,.064rem) rotate(-20deg);
            transform: translate(.085333rem,.064rem) rotate(-20deg);
        }
    }
    @keyframes hidePlugin{
    	0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
            }
    @keyframes showPlugin{
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes zhuan1{
    	0%{
            left: 2.8rem;
            top: 2.5rem;
        }
        25%{
        	left: 1.5rem;
            top: 3rem;
        }
        50% {
            left: 0.3rem;
            top: 1rem;
        }
        75% {
            left: 1.8rem;
            top: 0.5rem;
        }
        100% {
            left: 2.8rem;
            top: 2.5rem;
        }
    }
    @keyframes zhuan2{
    	0%{
            left: 0.3rem;
            top: 2.3rem;
        }
        25%{
        	left: 0.3rem;
            top: 0.5rem;
        }
        50% {
            left: 1.8rem;
            top: 0.2rem;
        }
        75% {
            left: 2.8rem;
            top: 1.5rem;
        }
        100% {
            left: 0.3rem;
            top: 2.3rem;
        }
    }
    @keyframes zhuan3{
    	0%{
            left: 0.5rem;
            top: 0.5rem;
        }
        25%{
        	left: 0.3rem;
            top: 2.5rem;
        }
        50% {
            left: 1.6rem;
            top: 0.5rem;
        }
        75% {
            left: 2.3rem;
            top: 2.5rem;
        }
        100% {
            left: 0.5rem;
            top: 0.5rem;
        }
    }
    @keyframes zhuan4{
    	0%{
            left: 2.3rem;
            top: 2.5rem;
        }
        25%{
        	left: 0.3rem;
            top: 2.5rem;
        }
        50% {
            left: 0.5rem;
            top: 0.5rem;
        }
        75% {
            left: 2.8rem;
            top: 2rem;
        }
        100% {
            left: 2.3rem;
            top: 2.5rem;
        }
    }
    @keyframes zhuan5{
    	0%{
            left: 1.3rem;
            top: 2rem;
        }
        25%{
        	left: 0.6rem;
            top: 0.5rem;
        }
        50% {
            left: 1.8rem;
            top: 1rem;
        }
        75% {
            left: 2.8rem;
            top: 2rem;
        }
        100% {
            left: 1.3rem;
            top: 2rem;
        }
    }
    @keyframes zhuan6{
    	0%{
            left: 3.3rem;
            top: 2.9rem;
        }
        25%{
        	left: 0.3rem;
            top: 1.8rem;
        }
        50% {
            left: 1.8rem;
            top: 0.5rem;
        }
        75% {
            left: 2.8rem;
            top: 2rem;
        }
        100% {
            left: 3.3rem;
            top: 2.9rem;
        }
    }
    @keyframes zhuan7{
    	0%{
            left: 1.8rem;
            top: 3rem;
        }
        25%{
        	left: 2.3rem;
            top: 2rem;
        }
        50% {
            left: 0.3rem;
            top: 1rem;
        }
        75% {
            left: 1.8rem;
            top: 2.5rem;
        }
        100% {
            left: 1.8rem;
            top: 3rem;
        }
    }
    @keyframes zhuan8{
    	0%{
            left: 2.5rem;
            top: 3.1rem;
        }
        25%{
        	left: 2.3rem;
            top: 0.8rem;
        }
        50% {
            left: 1.3rem;
            top: 1rem;
        }
        75% {
            left: 1.8rem;
            top: 2rem;
        }
        100% {
            left: 2.5rem;
            top: 3.1rem;
        }
    }
    @keyframes zhuan9{
    	0%{
            left: 2rem;
            top: 1.6rem;
        }
        25%{
        	left: 3.3rem;
            top: 1.5rem;
        }
        50% {
            left: 2.3rem;
            top: 0.8rem;
        }
        75% {
            left: 0.8rem;
            top: 2.2rem;
        }
        100% {
            left: 2rem;
            top: 1.6rem;
        }
    }
    @keyframes zhuan10{
    	0%{
            left: 0rem;
            top: 1.6rem;
        }
        25%{
        	left: 2.8rem;
            top: 1.8rem;
        }
        50% {
            left: 3.3rem;
            top: 2.8rem;
        }
        75% {
            left: 1.8rem;
            top: 2rem;
        }
        100% {
            left: 0rem;
            top: 1.6rem;
        }
    }
    @keyframes zhuan11{
    	0%{
            left: 3.3rem;
            top: 2.5rem;
        }
        25%{
        	left: 0.8rem;
            top: 2rem;
        }
        50% {
            left: 1.6rem;
            top: 2.5rem;
        }
        75% {
            left: 2.8rem;
            top: 0.8rem;
        }
        100% {
            left: 3.3rem;
            top: 2.5rem;
        }
    }
    @keyframes zhuan12{
    	0%{
            left: 0.5rem;
            top: 3rem;
        }
        25%{
        	left: 0.8rem;
            top: 0.8rem;
        }
        50% {
            left: 2.8rem;
            top: 1rem;
        }
        75% {
            left: 3.2rem;
            top: 2.8rem;
        }
        100% {
            left: 0.5rem;
            top: 3rem;
        }
    }
    @keyframes zhuan13{
    	0%{
            left: 3.1rem;
            top: 3rem;
        }
        25%{
        	left: 0.6rem;
            top: 2.8rem;
        }
        50% {
            left: 0.6rem;
            top: 1.3rem;
        }
        75% {
            left: 2.6rem;
            top: 1.7rem;
        }
        100% {
            left: 3.1rem;
            top: 3rem;
        }
    }
    @keyframes zhuan15{
    	0%{
            left: 2.3rem;
            top: 2.5rem;
        }
        25%{
        	left: 0rem;
            top: 2.5rem;
        }
        50% {
            left: 2.8rem;
            top: .15rem;
        }
        75% {
            left: 3.8rem;
            top: 1.5rem;
        }
        100% {
            left: 2.3rem;
            top: 2.5rem;
        }
    }
    @keyframes zhuan14{
    	0%{
            left: 0.8rem;
            top: 3.5rem;
        }
        25%{
        	left: 2.3rem;
            top: 0.3rem;
        }
        50% {
            left: 2.8rem;
            top: 0.8rem;
        }
        75% {
            left: 1.8rem;
            top: 3rem;
        }
        100% {
            left: 0.8rem;
            top: 3.5rem;
        }
    }
    @keyframes zhuan16{
    	0%{
            left: 3.6rem;
            top: 1.5rem;
        }
        25%{
        	left: 0.8rem;
            top: 3.5rem;
        }
        50% {
            left: 0.1rem;
            top: 1.2rem;
        }
        75% {
            left: 2.1rem;
            top: 0.1rem;
        }
        100% {
            left: 3.6rem;
            top: 1.5rem;
        }
    }
    @keyframes zhuan17{
    	0%{
            left: 1.3rem;
            top: 2rem;
        }
        25%{
        	left: 1.5rem;
            top: 0rem;
        }
        50% {
            left: 3.5rem;
            top: 0.8rem;
        }
        75% {
            left: 2.5rem;
            top: 3.8rem;
        }
        100% {
            left: 1.3rem;
            top: 2rem;
        }
    }
    @keyframes zhuan18{
    	0%{
            left: 3.3rem;
            top: 2.9rem;
        }
        25%{
        	left: 1.3rem;
            top: 3.5rem;
        }
        50% {
            left: 1.1rem;
            top: 0.1rem;
        }
        75% {
            left: 3.3rem;
            top: 0.5rem;
        }
        100% {
            left: 3.3rem;
            top: 2.9rem;
        }
    }
    @keyframes ing{
    	0%{
    		left: 3rem;
            top: 1.5rem;
            -webkit-transform: translate(-4.05rem,.0rem) scale(.2) rotate(0);
            z-index: 0;
            transform: translate(-4.05rem,.0rem) scale(.2) rotate(0);
            transform-origin: center center;
        }
        10%{
        	left: 3rem;
            top: 1.5rem;
        	-webkit-transform: translate(-4.75rem,.0rem) scale(.35) rotate(-90deg);
            z-index: 0;
            transform: translate(-4.75rem,.0rem) scale(.35) rotate(-90deg);
            transform-origin: center center;
        }
        40% {
        	left: 3rem;
            top: 1.5rem;
            -webkit-transform: translate(-4.75rem,1.4rem) scale(.35) rotate(-180deg);
            z-index: 0;
            transform: translate(-4.75rem,3.6rem) scale(.35) rotate(-180deg);
            transform-origin: center center;
        }
        45% {
        	left: 3rem;
            top: 1.5rem;
            -webkit-transform: translate(-2.95rem,4.9rem) scale(.4) rotate(0deg);
            z-index: 0;
            transform: translate(-2.95rem,4.9rem) scale(.4) rotate(0deg);
            transform-origin: center center;
        }
        60% {
        	left: 3rem;
            top: 1.5rem;
            -webkit-transform: translate(-2.7rem,4.9rem) scale(.4) rotate(30deg);
            z-index: 10;
            transform: translate(-2.7rem,4.9rem) scale(.4) rotate(30deg);
            transform-origin: center center;
        }
        75% {
        	left: 3rem;
            top: 1.5rem;
            -webkit-transform: translate(-3.2rem,4.9rem) scale(.4) rotate(-30deg);
            z-index: 10;
            transform: translate(-3.2rem,4.9rem) scale(.4) rotate(-30deg);
            transform-origin: center center;
        }
        100% {
        	left: 3rem;
            top: 1.5rem;
            -webkit-transform: translate(-2.95rem,4.9rem) scale(.4) rotate(0deg);
            z-index: 10;
            transform: translate(-2.95rem,4.9rem) scale(.4) rotate(0deg);
            transform-origin: center center;
        }
    }
    @keyframes ing2{
    	0%{
    		left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(-1.1rem,.2rem) scale(.3) rotate(0);
            z-index: 0;
            transform: translate(-1.1rem,.2rem) scale(.3) rotate(0);
            transform-origin: center center;
        }
        10%{
        	left: 0.2rem;
            top: 1.6rem;
        	-webkit-transform: translate(-1.6rem,.2rem) scale(.55) rotate(-90deg);
            z-index: 0;
            transform: translate(-1.6rem,.2rem) scale(.55) rotate(-90deg);
            transform-origin: center center;
        }
        40% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(-1.6rem,5.6rem) scale(.55) rotate(-180deg);
            z-index: 0;
            transform: translate(-1.6rem,3.7rem) scale(.55) rotate(-180deg);
            transform-origin: center center;
        }
        45% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(.2rem,5.2rem) scale(.6) rotate(0deg);
            z-index: 0;
            transform: translate(.2rem,5.2rem) scale(.6) rotate(0deg);
            transform-origin: center center;
        }
        60% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(.4rem,5.2rem) scale(.6) rotate(30deg);
            z-index: 10;
            transform: translate(.4rem,5.2rem) scale(.6) rotate(30deg);
            transform-origin: center center;
        }
        75% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(-.1rem,5.2rem) scale(.6) rotate(-30deg);
            z-index: 10;
            transform: translate(-.1rem,5.2rem) scale(.6) rotate(-30deg);
            transform-origin: center center;
        }
        100% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(.2rem,5.2rem) scale(.6) rotate(30deg);
            z-index: 10;
            transform: translate(.2rem,5.2rem) scale(.6) rotate(30deg);
            transform-origin: center center;
        }
    }
    @keyframes ing3{
    	0%{
    		left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(-1.15rem,.2rem) scale(.3) rotate(0);
            z-index: 0;
            transform: translate(-1.15rem,.2rem) scale(.3) rotate(0);
            transform-origin: center center;
        }
        10%{
        	left: 0.2rem;
            top: 1.6rem;
        	-webkit-transform: translate(-1.65rem,.2rem) scale(.5) rotate(-90deg);
            z-index: 0;
            transform: translate(-1.65rem,.2rem) scale(.5) rotate(-90deg);
            transform-origin: center center;
        }
        40% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(-1.65rem,5.6rem) scale(.5) rotate(-180deg);
            z-index: 0;
            transform: translate(-1.65rem,3.7rem) scale(.5) rotate(-180deg);
            transform-origin: center center;
        }
        45% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(.2rem,5.2rem) scale(.5) rotate(0deg);
            z-index: 0;
            transform: translate(.2rem,5.2rem) scale(.5) rotate(0deg);
            transform-origin: center center;
        }
        60% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(.3rem,5.2rem) scale(.5) rotate(30deg);
            z-index: 10;
            transform: translate(.3rem,5.2rem) scale(.5) rotate(30deg);
            transform-origin: center center;
        }
        75% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(0rem,5.2rem) scale(.5) rotate(-30deg);
            z-index: 10;
            transform: translate(-.1rem,5.2rem) scale(.5) rotate(-30deg);
            transform-origin: center center;
        }
        100% {
        	left: 0.2rem;
            top: 1.6rem;
            -webkit-transform: translate(.2rem,5.2rem) scale(.5) rotate(0deg);
            z-index: 10;
            transform: translate(.15rem,5.2rem) scale(.5) rotate(0deg);
            transform-origin: center center;
        }
    }
    @keyframes shou{
    	    0%, 25%, 50%, 100% {
      	        -webkit-transform: translateY(0);
     	         transform: translateY(0);
  	        }
  	        12.5%, 37.5% {
    	          -webkit-transform: translateY(.1rem);
     	         transform: translateY(.1rem);
  	        }
    }
    @media screen and (min-width:400px){
     	.yz-rw-bj {
     		height: 28.5rem;
     	}
     	.yz-rw-btu {
     		top: 17rem;
     	}
     	.yz-rw-bk {
     		height: 13.85rem;
     	}
        .yz-rw-lb {
        	height: 13.6rem;
        }
    }
    @media screen and (min-width:330px) and (max-width:390px){
     	.yz-rw-bj {
     		height: 31.8rem;
     	}
     	.yz-rw-btu {
     		top: 19.2rem;
     	}
     	.yz-rw-bk {
     		height: 15.8rem;
     	}
        .yz-rw-lb {
        	height: 15.5rem;
        }
    }
    @media screen and (max-width:325px){
     	.yz-rw-bj {
     		height: 30.5rem;
     	}
     	.yz-rw-btu {
     		top: 18.3rem;
     	}
     	.yz-rw-bk {
     		height: 14.85rem;
     	}
        .yz-rw-lb {
        	height: 14.45rem;
        }
    }
</style>
<style>
	.yz-rwlb-target{
		font-family: '微软雅黑';
		margin-left: 10px;
		line-height:20px;
		margin-top: 2px;
		padding-bottom: 15px;
	}
	.yz-rwlb-target span{
		color: #666666;
		font-size: 14px;
		line-height:16px;
	}
	.yz-rwlb-cash{
		margin-top: -4px;
		margin-left: 4px;
		float: left;
	}
	.yz-rwlb-cash span{
		line-height: 0px;
	}
	.yz-rwlb-cash-img{
		width: 12px;
		float: left;
	}
	.yz-rwlb-hr{
		color: #000000;
		width: 95%;
		margin-left: 10px;
		opacity: 0.1;
	}
	.yz-rwlb-coin-img{
		float: left;
	}
	.yz-rwlb-coin-img img{
		width: 13px;
		float:left;
	}
	.yz-rwlb-coin{
		float: left;
		margin-top: -5px;
		margin-left: 3px;
	}
	.yz-rwlb-title-bj{
		font-family: '微软雅黑';
		 margin-left: 10px;
	}
	.yz-rwlb-title{
		float: left;
	}
	.yz-rwlb-title span{
		font-weight:bolder;
		font-size: 18px;
	}
	.yz-rwlb-complete{
		color: #9fa0a0;
		float: left;
		margin-top: 2px;
	}
	.yz-rwlb-flag-bj{
		height: 30px;
		margin-left: 6px;
		margin-top: 27px;
	}
	.yz-rwlb-flag-bj-two{
		margin-left: 10px;
		height: 30px;
		margin-top: 5px;
	}
	.yz-rwlb-tj img{
		width: 45px;
	}
	.yz-rwlb-jlbj{
		padding-bottom: 2px;
		width: 65%;
		float: left;
		text-align: right;
		margin-top: -28px;
		color: #3e3a39;
		padding-left: 17%;
		font-weight: bolder;
		opacity: 0.8;
	}
	.yz-rwlb-leftover{
		font-family: '微软雅黑';
		margin-left: 20px;
		line-height: 1;
		padding-bottom: 12px;
		width: 35%;
		color: #3e3a39;
		font-weight: bolder;
		opacity: 0.8;
	}
	.yz-rwlb-number{
		float:left;
		margin-top: 8px;
		height: 15px;
	}
	.yz-rwlbxx{
	 	float: left;
	    margin-left: -10px;
/*	    padding-right: 5px;*/
	    font-size: 14px;
	 }
	.yz-rwlb-tj{
		float: right;
		position: absolute;
		right: 10px;
	}
	.yz-rwlb{
	 	padding: 5px 0px;
	 	left: 0px;
	 	border-radius: 0px;
	 	padding-bottom:0px;
	 }
	.yz-rwtb{
        width:90%;
        height: 100%;
        background-size: cover;
        border-radius:10px;
    }
    .yz-tiele{
    	background-color: #FFFFFF;
    	color: #aba9a9;
    	text-align: center;
    	width: 96%;
    	padding-top: 7px;
    	padding-bottom: 7px;
    	margin-left: 2%;
    	border-top: 1px #dcdddd6b solid;
    	border-bottom: 1px #dcdddd6b solid;
    }
    .yz-more{
    	border-top: 1px #dcddddbf solid;
    	border-bottom: 1px #dcdddd6b solid;
    	background-color: #FFFFFF;
    	padding-top: 5px;
    	width: 96%;
    	margin-left: 2%;
    	color: #aba9a9;
    	text-align: center;
    	padding-bottom: 5px;
    	margin-top: 1px;
    }
    .yz-coin{
    	float: right;
    	margin-top: -3px;
    	margin-left: 3px;
    }
    .yz-coin span{
    	line-height: 0;
    }
    .yz-coinimg{
    	width: 15px;
    	float: left;
    }
    .yz-cash{
    	float: left;
    	margin-top: -3px;
    	margin-left: 3px;
    }
    .yz-cashimg{
    	width: 13px;
    	float: left;
    }
    .yz-flag{
    	height: 30px;
    	margin-left: 5px;
    	margin-top: 2px;
    }
    .yz-noflag{
    	height: 30px;
    	margin-left: 5px;
    	margin-top: 5px;
    }
    .yz-taskval{
    	font-family: '微软雅黑';
    	margin-left: 10px;
    	line-height:20px;
    	margin-top: 5px;
    }
    .yz-taskval span{
    	color: #666666;
    	font-size: 14px;
    	line-height:16px;
    }
    .yz-numbj{
    	font-family: '微软雅黑';
    	 margin-left: 10px;
    	 margin-top: 0px;
    	 line-height: 1;
    }
    .yz-number{
    	color: #aaaaaa;
    	float:right;
    	height: 15px;
    }
    .yz-namebj{
    	font-family: '微软雅黑';
    	 margin-left: 10px;
    }
    .yz-name{
    	font-weight:bolder;
    	font-size: 16px;
    }
    .yz-complete{
    	color:#fe4532;
    	float: right;
    }
    .yz-tips-bj{
		float: left;
		padding: 3px;padding-right: 10px;
	}
	.yz-tips2 {
		display:block;
		background:#999999;
		border-radius:20%;
		width:1px;
		height:15px;
		top:38px;
		right:22px;
        opacity: 0.3;
	}
	.yz-tips {
		display:block;
		background:#a9120c;
		border-radius:20%;
		width:3px;
		height: 18px;
        margin-top: 1px;
		top:38px;
		right:22px;
	}
	.yz-tips2-bj{
		padding-top: 6px;
        padding-left: 5px;
		float: left;
		padding-right: 5px;
	}
	.van-tag::after {
		border-radius: 10px;
	}
	@media screen and (max-width:320px){
		.yz-btu-ztk {
			height: .9rem;
            width: 2.8rem;
		}
		.yz-rwlb-leftover {
            width: 38%;
        }
       .yz-rwlb-complete{
            color: #9fa0a0;
            float: right;
            margin-top: 2px;
        }
      .yz-rwlb-jlbj {
            width: 64%;
            float: right;
            text-align: right;
            margin-top: -24px;
            color: #3e3a39;
            padding-left: 12%;
            font-weight: bolder;
            opacity: 0.8;
        }
        .yz-rwlbxx {
            float: left;
            margin-left: -10px;
         /*   padding-right: 5px;*/
            font-size: 12px;
        }
        .yz-sy-zsy {
            position: absolute;
            font-size: 42px;
            top: 2.8rem;
            color: #ffec00;
            left: 1.8rem;
            font-weight: bolder;
        }
        .yz-sy-dtx {
            position: absolute;
            font-size: 18px;
            top: 4.65rem;
            color: #ffec00;
            left: 4rem;
            font-weight: bolder;
        }
        .yz-sy-dsh {
            position: absolute;
            font-size: 18px;
            top: 4.65rem;
            color: #ffec00;
            left: 1.2rem;
            font-weight: bolder;
        }
    }
    .van-cell:not(:last-child)::after {
       left: 0px;
    }
    @media screen and (min-width:414px){
        .yz-rwlb-hr {
            color: #000000;
            width: 86%;
            padding-bottom: 1px;
            margin-left: 10px;
            opacity: 0.1;
        }
    }
    @media screen and (max-width:380px) and (min-width: 365px){
    	.yz-rwlb-leftover {
    		width: 37%;
    	}
        .yz-rwlb-hr {
            color: #000000;
            width: 86%;
            padding-bottom: 1px;
            margin-left: 10px;
            opacity: 0.1;
        }
        .yz-rwlbxx {
            float: left;
            margin-left: -10px;
/*            padding-right: 5px;*/
            font-size: 14px;
        }
        .yz-rw {
           position: absolute;
           margin-top: 10px;
           margin-left: 7px;
           z-index: 5;
           width: 97.5%;
        }
        .yz-rwlb-jlbj {
            width: 63%;
            float: right;
            text-align: right;
            margin-top: -25px;
            color: #3e3a39;
            padding-left: 12%;
            font-weight: bolder;
            opacity: 0.8;
        }
    }
    @media screen and (max-width:360px){
        .yz-rwlb-hr {
            color: #000000;
            width: 86%;
            padding-bottom: 1px;
            margin-left: 10px;
            opacity: 0.1;
        }
        .yz-rwlbxx {
            float: left;
            margin-left: -10px;
          /*  padding-right: 5px;*/
            font-size: 12px;
        }
        .yz-rw {
           position: absolute;
           margin-top: 10px;
           margin-left: 7px;
           z-index: 5;
           width: 97.5%;
        }
    }
    .van-pagination__item--active{
    	color: #fff !important;
    }
    .van-pagination__item {
    	color: #fa713b;
    	height: .7rem;
    }

</style>
