<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	      data() {
            return {
            }
        },
       mounted:function(){
       		function getPar(par){
	                var local_url = document.location.href; 
	                var get = local_url.indexOf(par +"=");
	                if(get == -1){
	                    return false;   
	                }   
		            var get_par = local_url.slice(par.length + get + 1);    
		            var nextPar = get_par.indexOf("&");
		            if(nextPar != -1){
		                get_par = get_par.slice(0, nextPar);
		            }
		            return get_par;
	        	}
       	    var refereeId = getPar("refereeId");
	          if(refereeId){	          	
  	           sessionStorage.setItem('refereeId',refereeId);
  	           localStorage.refereeId = refereeId;
  	        }
       },
       methods: {

       	}
}
</script>

<style>
	#app {
    margin: 0;
    padding: 0;
    /* font-family: '微软雅黑'; */
    width: 100%;
    height: 100%;
}
</style>
