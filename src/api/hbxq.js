import fetch from '../utils/fetch.js'
import qs from 'qs'


//获取红包星球首页信息
export function getHomeInfo(){
	return fetch({
		url:"/api/getUserInfo",
		method:"get"
	}
)}
//升级房子
export function upgradeHouse(){
	return fetch({
		url:"/api/invest",
		method:"get"
	}
)}

//领取待领取钞票
export function receiveBill(){
	return fetch({
		url:"/api/getWorkingReward",
		method:"get"
	}
)}

//领取能量
export function receivePower(){
	return fetch({
		url:"/api/getSupply",
		method:"get"
	}
)}
//开始打工
export function startWork(id){
	return fetch({
		url:"/api/startWork",
		data:qs.stringify({id}),
		method:"post"
	}
)}
//合成财神卡
export function compCSCard(){
	return fetch({
		url:"/api/compCSCard",
		method:"get"
	}
)}
//(财神降临-蜂蜂卡合成)
export function compFFCard(id){
	return fetch({
		url:"/api/compFFCard",
		data:qs.stringify({id}),
		method:"post"
	}
)}
//提现
export function withdraw(id){
	return fetch({
		url:"/api/withdraw",
		data:qs.stringify({id}),
		method:"post"
	}
)}
//签到
export function sign(){
	return fetch({
		url:"/api/sign",
		method:"get"
	}
)}
//获取物品单位信息
export function getUntil(){
	return fetch({
		url:"/api/getUnit",
		method:"get"
	}
)}

//扭蛋
export function gashapon(){
	return fetch({
		url:"/api/gashapon",
		method:"get"
	}
)}

//转财神卡
export function upgradeRound(){
	return fetch({
		url:"/api/upgradeRound",
		method:"get"
	}
)}

//获取二维码链接
export function getInviteUrl(){
	return fetch({
		url:"/api/getInviteUrl",
		method:"get"
	}
)}

//好友助力
export function assist(id){
	return fetch({
		url:"/api/assist",
		data:qs.stringify({id}),
		method:"post"
	}
)}

//机器人助力
export function robotHelp(){
 return fetch({
  url:"/api/robotHelp",
  method:"get"
 }
)}
//完成新手指引   guideFinish
export function guideFinish(){
 return fetch({
  url:"/api/guideFinish",
  method:"get"
 }
)}
