import { Toast } from 'mint-ui';
import Store from 'storejs';
class Global {
    getParam() {
        //将url后面的参数 ?name=msea&sex=1  >{name:"msea",sex:1}
        var search = {};
        try {
            location.search
                .substr(1)
                .split('&')
                .forEach(function (item) {
                    var s = item.split('=');
                    search[s[0]] = s[1];
                });
        } catch (e) {
            // 抛出异常
            throw new Error(JSON.stringify(search));
        }
        return search;
    }
    setUrl(item) {
        let path = "https://res.bestcake.com/m-images/ww";
        if (item.SupplyNo.indexOf("KSK") != -1) {
          return path + `/jd/${item.Name}.png`;
        } else if (item.SupplyNo.indexOf("NS") != -1) {
          return path + `/ns/${item.Name}.jpg`;
        } else if (item.SupplyNo.indexOf("RP") != -1) {
          return path + `/rp/${item.Name}.jpg`;
        } else if (item.SupplyNo.indexOf("JZ") != -1) {
          return path + `/jz/${item.Name}.png`;
        }  
    }
    set(){
      if(Store.get('userData')){
        Toast({
          message: "购买成功",
          duration: 1000
        });
      }else{
        Toast({
          message: "请先登录不然无法购买",
          duration: 1000
        });
      }
    }
}
export default new Global();