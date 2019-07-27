<template>
  <div class="footer">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        { path: "/index", name: "首页" ,classname:'fa fa-home'},
        { path: "/sort", name: "分类" ,classname:'fa fa-th-large'},
        { path: "/cart", name: "购物车",classname:'fa fa-cart-plus' },
        { path: "/my", name: "我的" ,classname:'fa fa-user-o'}
      ]
    };
  },
  created(){
    // this.bool=true;
  },
  methods:{
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
