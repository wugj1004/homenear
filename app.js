// 逻辑层程序注册
App({
  globalData: 'I am global data',


  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  
  onLaunch: function () {
    var receive = {a:"123",b:12,c:"string"}
    var supplies = { d: "dedede", e: 22222, c: "测试" }
    this.extend(receive, supplies,false,true)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  onPageNotFound: function (res){

  },
  /**
     * 合并两个对象。
     * 将参数supplies对象的元素合并到参数receive对象中
     * @static
     * @param {object} receive 源对象
     * @param {object} supplies 用来合并到receive中的对象
     * @param {boolean} overwritten 如果设为true，supplies中的元素将替换receive中的同名元素，默认值为true
     * @param {boolean} recursion 是否递归，默认值为false
     * @return {object} 返回receive对象的引用
     */
  extend: function (r, s, ov, rec) {
    console.log("打开面板")
    if (typeof r === "object" && typeof s === "object") {
      for (var i in s) {
        if (s.hasOwnProperty(i)) {
          if (!(i in r)) {
            r[i] = s[i];
          } else if (!ov) {
            if (rec && typeof r[i] === "object" && typeof s[i] === "object") {
              extend(r[i], s[i], ov, rec);
            } else {
              r[i] = s[i];
            }
          }
        }
      }
    }
    return r;
  },

})