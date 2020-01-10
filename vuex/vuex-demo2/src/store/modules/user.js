// 用户模块


import types from '../types.js'
const state={
    count:6,
}

var getters={
    count(state){//一般设置为count，即和上面一样的
        return state.count; 
    },
}

const actions={//包含：commit、dispatch、state
    increment({commit,state}){
        commit(types.INCREMENT);//提交一个名为increment的变化，这个名称可以自定义，可以认为是类型名
    },
    decrement({commit,state}){
        if(state.count>10){
            commit(types.DECREMENT);
        }
    },
    incrementAsync({commit,state}){
        //异步操作
       var p=new Promise((resolve,reject) => {
           setTimeout(() => {
               resolve();
           },3000);
       });
       
       p.then(() => {
           commit('increment');
       }).catach(() => {
           console.log('异步操作');
       }); 
    }    
}

const mutations={
    [types.INCREMENT](state){//名字要和commit里面的一样
        state.count++;
    },
    [types.DECREMENT](state){       
        state.count--;
    }
}


export default {
    state,
    getters,
    actions,
    mutations

}