
import swiper from "@/components/commonTemp/swiper"
import { Button } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
export default (Vue)=>{
     Vue.component("mint_btn",Button);
     Vue.component(Swipe.name, Swipe);
     Vue.component(SwipeItem.name, SwipeItem);
     Vue.component('swiper_t', swiper);
     Vue.component(Tabbar.name, Tabbar);
     Vue.component(TabItem.name, TabItem);
}