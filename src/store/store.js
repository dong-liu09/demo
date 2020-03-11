import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false
     	
    },
    mutations: {
    	//改变加载等待状态
        updateLoadingStatus(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    actions: {
       
    }
});