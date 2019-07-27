
import Vue from 'vue'
import directive from "@/core/directive"
import commonTemp from "@/components/commonTemp"
import global from "@/core/global"
import apis from "@/core/api"

export default (Vue) => {
    // 注册全局指令
    directive(Vue);
    // 注册全局组件
    commonTemp(Vue);
    Vue.prototype.$global=global;
    Vue.prototype.$apis=apis;
    Vue.prototype.$eventHub=new Vue();
}