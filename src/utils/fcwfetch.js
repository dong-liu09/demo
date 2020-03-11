import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant';
Vue.use(Toast);
import store from '../store/store.js'
import router from '../router'
import xt from '../pages/home/xt.vue'


// 创建axios实例
const service = axios.create({
    //baseURL: 'http://api.fengchaowan.com/', //process.env.BASE_API, // api的base_url
    //baseURL: 'http://192.168.3.11:8080/fengchaowan/m/',
    baseURL: 'http://'+xt.aul+'/m/',
    //baseURL: 'http://127.0.0.1:8080/m/',
    // baseURL: 'http://192.168.3.5/',
    //baseURL: 'http://192.168.3.11:8080/m/',
    //baseURL: 'http://192.168.3.7:8080/m/',
    timeout: 15000,                  // 请求超时时间
    withCredentials: true,
    headers: {
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        },
})

// request拦截器
service.interceptors.request.use(config => {
//  config.headers['Authorization'] = store.state.token;// 让每个请求携带自定义token 请根据实际情况自行修改

   return config
}, error => {


  if (error.response) {

  }

  return Promise.reject(error)
})
//全局拦截判断当前的网络超时和token失效或者异常出理最后用vuex处理放在封装好公共的接口
// response拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
   if(response.data.code==-1){
       // top.location.href = 'http://m2.fengchaowan.com/#/Login?url=/Red_envelopes'
   	   var url = router.history.current.fullPath;
   	   router.push({path: '/login',query:{url:url}});
   }else if(response.data.code!=0){
   		Toast(response.data.msg);
   }
    return response
  },
  error => {
  console.log(error)
    return Promise.reject(error)
  },
)

export default service
