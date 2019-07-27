<template>
 <div class="swiper-container swiper-container-horizontal swiper-container-3d swiper-container-coverflow"
        >
        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
        <slot>
        </slot>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  mounted(){
    this.pageInit();
  },
  methods:{
    pageInit(){
        new Swiper('.swiper-container', {
              pagination: '.swiper-pagination',
              slidesPerView: 'auto',
              paginationClickable: true,
              freeMode:true
        });
    }
  }
}
</script>