import fetch from '../utils/fcwfetch.js'
import qs from 'qs'

//发送手机号登录短信验证码
export function sendloginPhoneSms(phone){
	return fetch({
		url:"/anon/sharer/sendloginPhoneSms",
		data:qs.stringify({phone}),
		method:"post"
	})
}

//发送手机号登录短信验证码
export function PhoneSmsLogin(phone,smsCode,refereeId){
	return fetch({
		url:"/anon/sharer/phoneSmsLogin",
		data:qs.stringify({phone,smsCode,refereeId}),
		method:"post"
	})
}

//获取用户是否绑定微信
export function getWechat(){
	return fetch({
		url:"/me/getWechat",
		method:"get"
	})
}

//获取短链
export function getShortChain(url){
	return fetch({
		url:"/anon/wxShareProtectDomain/getShortChain",
		params:{url},
		method:"get"
	}
)}
