<template>
  <div>
    <div class="nav warn">
      <img src="https://res.bestcake.com/images/newIndex/localtion.png" alt="">
      <p>上海</p>
      <img src="https://res.bestcake.com/images/newIndex/more.png" alt="" class="im">
    </div>
    <div class="banner warn">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in SwiperBannerList" :key="index">
          <img :src="item.ImgUrl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="bz warn">
      <img src="https://res.bestcake.com/images/newIndex/title.png?v=1">
    </div>
    <a href="" class="a warn">
      <img src="https://res.bestcake.com/images/newindex/tusi.gif" alt="">
    </a>
    <div class="iconList warn">
      <a href="" v-for="(item,index) in TopIconList" :key="index">
        <img :src="item.ImgUrl" alt="">
        <p v-text="item.ActName"></p>
      </a>
    </div>
    <div class="broadcast warn">
      <div class="left">通知</div>
      <div class="right">
        <div v-text="NoticeList"></div>
      </div>
    </div>
    <div class="special warn">
      <div  v-for="(item,index) in CenterContentList" :key="index">
        <img :src="item.ImgUrl" alt="">
      </div>
    </div>
    <div class="box warn">
      <div v-for="(item,index) in SaleListImg" :key="index">
          <img :src="item.TabImgUrl" alt="">
          <swiper_t v-if="SaleList.length!=0">
            <div class="swiper-slide" v-for="(item,index1) in SaleList[index]" :key="index1" style="width:r(156)">
              <img :src="item.ImgUrl" @click="goItem(item)"/>
              <p v-text="item.Name"></p>
              <div>
                <span v-text="'￥'+item.Price" class="spanp"></span>
                <span v-text="'/'+item.Size" class="spans"></span>
              </div> 
            </div>
          </swiper_t>
      </div>
      <div class="warn footer">

      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {

    };
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
