<template>
  <div>
   
     <router-view v-show="!$store.state.loginbool"/>
     
      <!-- keepAlive true 禁止重复加载  false不禁止-->
  </div>
</template>

<script>
import lay_head from "@/components/layout/head"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
