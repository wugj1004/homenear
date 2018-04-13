// pages/index/index.js
// 逻辑层页面注册
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "This is page data.",
    inline_text: "This is inline."
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取App中定义数据  
    var appInstance = getApp()
    console.log(`打印字符串${appInstance.globalData}`)
    console.log(`当前页面字符串${this.data.text}`)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 当前是 tab 页时，点击 tab 时触发
   */
  onTabItemTap: function (item) {
    console.log(`当前是 tab 页时，点击 index 时触发${item.index}`)
    console.log(`当前是 tab 页时，点击 pagePath 时触发${item.pagePath}`)
    console.log(`当前是 tab 页时，点击 text 时触发${item.text}`)
  },

  /**
   * 绑定事件
   */
  viewTap() {
    console.log('view tap')
    //更新数据
    this.setData(
      {
        text: 'Set some data for updating view.'

      }, function () {
        // this is setData callback
      }
    )
  }
})