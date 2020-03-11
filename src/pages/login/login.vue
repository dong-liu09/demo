<template>
  <div id="login" class="login">
    <!-- <img src="../../../static/login/bt.png" class="login-top-title"/> -->
    <img src="../../../static/home/home-bg2.png" class="login-dq"/>
    <img src="../../../static/login/logo.png" class="login-logo"/>
    <div class="login-dlk-bg-bg">
      <div class="login-dlk-bg">
        <div class="login-dlk-title-bg">
          <img src="../../../static/login/sjh.png" />
        </div>
        <div class="login-dlk-val-bg">
          <van-field v-model="phone"  class="login-input" v-iosbugfixed/>
        </div>
      </div>
      <div class="login-dlk-bg">
        <div class="login-dlk-title-bg">
          <img src="../../../static/login/yzm.png" />
        </div>
        <div class="login-dlk-val-bg">
          <div class="login-dlk-val-left-bg">
            <van-field v-model="smscode"  class="login-input"  v-iosbugfixed/>
          </div>
          <div class="login-dlk-input-s"></div>
          <div class="login-dlk-val-right-bg">
            <yd-sendcode slot="right"  storage-key="dashuaibi" v-model="start1" size="small" @click.native="sendCode1" run-str="{%s}s重新获取"  init-str="发送验证码" style="font-size:.25rem;color: rgb(255, 238, 208);background-color: transparent;"></yd-sendcode>
          </div>
        </div>
      </div>
      <div class="login-btn-bg"  @touchstart="loginstart()" @touchend="loginmove()">
      	<img src="../../../static/login/btn1.png" class="login-btn1" v-show="!loginBtn"/>
      	<img src="../../../static/login/btn2.png" class="login-btn2" v-show="loginBtn"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {sendloginPhoneSms,PhoneSmsLogin,getWechat} from '../../api/login.js'
  import xt from '../home/xt.vue'
  import {iosbugfixed} from '../../api/directive.js'

  export default {
  		data() {
  	        return {
              loginBtn:false,
              phone:'',
              smscode:'',
              start1: false,
              refereeId:'',
  	        }
          },
          mounted: function(){
            var rId = this.$route.query.refereeId;
            if(rId){
            	this.refereeId = rId;
            }
            var errmsg = this.$route.query.errmsg;
            if(errmsg){
            	this.$toast(errmsg)
            }
          },
          methods:{
            loginstart(){
            	this.loginBtn = !this.loginBtn
            },
            loginmove(){
            	this.loginBtn = !this.loginBtn
              this.login();
            },
             //发送验证码
             sendCode1:function() {
              	sendloginPhoneSms(this.phone).then((response)=>{
              	        var code = response.data.code;
              	        if(code == 0){
            	            this.yzm();
                        }

                      		   }).catch((response)=>{
                      		    })
              },
             yzm:function(){
            	    this.$dialog.loading.open('发送中...');
            	        setTimeout(() => {
                         this.start1 = true;
                         this.$dialog.loading.close();
                         this.$dialog.toast({
                             mes: '已发送',
                             icon: 'success',
                             timeout: 1500
                         });
                           }, 1000);
             },
             login:function(){             
                PhoneSmsLogin(this.phone,this.smscode,this.refereeId).then((response)=>{
                      var code = response.data.code;
                      var data = response.data.data;
                      if(code == 0){
                          this.$toast('登录成功');
                          var token = data.token;
                        localStorage.token = token;
                        getWechat().then((response)=>{
                        	var code = response.data.code;
                          var data = response.data.data;
                        		if(code == 0){
                        			if(data.bindWechat==0){
                                if(this.refereeId != ''){
                                  var rid = ''
                                  rid = '?refereeId='+ this.refereeId;
                                }
                                top.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+xt.apd+"&redirect_uri=http%3a%2f%2f"+xt.aul+"%2fwechat%2fhbxq"+rid+"&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect";
                              }else{
                                if(this.refereeId != ''){
                                  window.location.href="http://"+xt.aul+"/redpackNew/toRedPackStar?token="+ token+'&refereeId='+this.refereeId;
                                }else{
                                  window.location.href="http://"+xt.aul+"/redpackNew/toRedPackStar?token="+ token;
                                }
                                 // top.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+xt.apd+"&redirect_uri=http%3a%2f%2f"+xt.aul+"%2fwechat%2fhbxq&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect";
                              }
                        		}
                        }).catch((response)=>{
                        })
                      }
                   	}).catch((response)=>{
                  });
             }
          }
  	}
</script>

<style>
  .login-dlk-input-s{
    background-color: rgb(255, 238, 208);
    width: 1px;
    height: .3rem;
    margin-top: .17rem;

  }
  .login-input{
    background-color: transparent;
    padding: .1rem 0;
    color: rgb(255, 238, 208);
    font-size: .35rem;
    padding-left: .3rem;
  }
  #login .van-field__control{
    color: rgb(255, 238, 208);
  }
  .login-dlk-val-right-bg{
    width: 50%;
  }
  .login-dlk-val-left-bg{
    width: 50%;
  }
  .login-btn2{
    width: 3.7rem;
    pointer-events: none;
  }
  .login-btn1{
    width: 3.7rem;
    pointer-events: none;
  }
  .login-btn-bg{
    cursor: pointer;
    width: 66%;
    margin-left: 17%;
    text-align: center;
    margin-top: .2rem;

  }
  .login-dlk-val-bg{
    width: 66%;
    margin-left: 3%;
    color: #FFFFFF;
    display: inline-flex;
    height: .7rem;
    background: url(../../../static/login/srk.png) no-repeat;
    background-size: 100% 100%
  }
  .login-dlk-title-bg img{
    width: 1.45rem;
    margin-top: .15rem;
  }
  .login-dlk-title-bg{
    width: 30%;
  }
  .login-dlk-bg{
    width: 65%;
    margin-top: .2rem;
    display: inline-flex;
  }
  .login-dlk-bg-bg{
    position: relative;
        margin-top: 0.2rem;
    width: 100%;
    padding-top: 2.3rem;
    height: 7rem;
    background: url(../../../static/login/dlk.png) no-repeat;
    background-size: 100% 100%;
  }
  .login-logo{
    z-index: 2;
    position: fixed;
    left: 10%;
    width: 6rem;
    bottom: 5%;
  }
  .login-dq{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
  .login-top-title{
    width: 5.5rem;
    margin-top: 1rem;
    z-index: 2;
  }
  .login{
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(../../../static/home/home-bg1.png) no-repeat;
    background-size: 100% 100%;
    overflow-x: hidden;
  }
</style>
