var feedbackApi = require('../templates/showToast');//引入消息提醒暴露的接口 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["计划表", "工具", "热门", "收藏"],
    currentNavtab: "0",
    imgUrls: [
      'http://e.hiphotos.baidu.com/image/pic/item/2fdda3cc7cd98d107ddbc53b233fb80e7bec90a9.jpg',
      'http://f.hiphotos.baidu.com/image/pic/item/58ee3d6d55fbb2fbce67ca184d4a20a44623dc68.jpg',
      'http://f.hiphotos.baidu.com/image/pic/item/279759ee3d6d55fbdf1e87f969224f4a21a4dd11.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentPage: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'test showToast'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  onLoad: function () {
    console.log('onLoad')
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  testToast: function (e) {
    var test = e.target.dataset.test;
    if (test == 1) {
      feedbackApi.showToast({ title: 'test shoToast title' })//调用  
    }
    if (test == 2) {
      feedbackApi.showToast({
        title: 'test shoToast title',
        icon: '/image/ic_launcher.png'
      })
    }
    if (test == 3) {
      feedbackApi.showToast({
        title: 'test shoToast title',
        duration: 3000
      })
    }
    if (test == 31) {
      feedbackApi.showToast({
        title: 'test shoToast title',
        duration: 10000
      })
      setTimeout(function () {
        feedbackApi.hideToast();
      }, 2000)
    }
    if (test == 4) {
      feedbackApi.showToast({
        title: 'test shoToast title',
        mask: false
      })
    }
    if (test == 5) {
      feedbackApi.showToast({
        title: 'test shoToast title',
        cb: function () {
          console.log('回调进来了，可以制定业务啦')
        }
      })
    }
  },
})

